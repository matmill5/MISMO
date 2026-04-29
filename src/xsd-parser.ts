#!/usr/bin/env tsx
/**
 * XSD Parser Script
 * Parses XSD files and extracts the tree structure of elements and complex types using libxmljs.
 */

import { parseXml, type XMLDocument, type XMLElement } from 'libxmljs';
import fs, { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { XMLNode } from 'libxmljs';
import { createSourceFile, ScriptTarget, SyntaxKind, createPrinter } from 'typescript';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ElementInfo {
  name: string;
  typeName?: string;
  minOccurs?: string;
  maxOccurs?: string;
  nillable?: boolean;
  documentation?: string;
  type?: string;
  use?: string;
  default?: string;
  value?: string;
  base?: string;
  children: ElementInfo[];
}
interface XSDStructure {
  elements: Record<string, ElementInfo>;
  complexTypes: Record<string, ElementInfo>;
  namespaces: Record<string, string>;
}

class XSDParser {
  private xsdDoc: XMLDocument;
  private complexTypes: Record<string, ElementInfo> = {};
  private simpleTypes: Record<string, ElementInfo> = {};
  private elements: Record<string, ElementInfo> = {};
  private namespaces: Record<string, string> = {};

  constructor(xsdFilePath: string) {
    try {
      const xsdContent = fs.readFileSync(xsdFilePath, 'utf-8');
      this.xsdDoc = parseXml(xsdContent, { baseUrl: xsdFilePath });
      this.parseNamespaces();
    } catch (error) {
      throw new Error(`Failed to parse XSD file: ${error}`);
    }
  }

  private parseNamespaces(): void {
    const root = this.xsdDoc.root();
    if (root) {
      const attrs = root.attrs();
      for (const attr of attrs) {
        this.namespaces[attr.name()] = attr.value();
      }
    }
  }

  private getXSDNamespace(): string {
    // Find the XSD namespace
    for (const [key, value] of Object.entries(this.namespaces)) {
      if (value.includes('XMLSchema') || key === 'xsd') {
        return value;
      }
    }
    return 'http://www.w3.org/2001/XMLSchema';
  }

  public parse(): XSDStructure {
    const xsdNamespace = this.getXSDNamespace();

    // Parse complex types first
    this.parseComplexTypes(xsdNamespace);

    // Parse simple types
    this.parseSimpleTypes(xsdNamespace);

    // Parse elements
    this.parseElements(xsdNamespace);

    return {
      elements: this.elements,
      complexTypes: this.complexTypes,
      namespaces: this.namespaces,
    };
  }

  private parseComplexTypes(xsdNamespace: string): void {
    const complexTypes = this.xsdDoc.find(`//*[local-name()='complexType']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const complexType of complexTypes) {
      const typeName = complexType.getAttribute('name')?.value();
      if (!typeName) continue;

      const elementInfo: ElementInfo = {
        name: typeName,
        typeName: 'complexType',
        children: [],
      };

      // Extract documentation
      const docElement = complexType.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        elementInfo.documentation = docElement.text()?.trim();
      }

      // Parse sequence elements
      const sequence = complexType.get(`./*[local-name()='sequence']`, {
        xsd: xsdNamespace,
      }) as XMLElement;
      if (sequence) {
        const sequenceElements = this.parseSequenceElements(sequence, xsdNamespace); // sequence
        const sequenceChoiceElements = this.parseSequenceChoiceElements(sequence, xsdNamespace); // sequence choice elements
        const sequenceAnyElements = this.parseSequenceAnyElements(sequence, xsdNamespace); // sequence any elements
        const attributes = this.parseAttributes(complexType, xsdNamespace); // attributes
        const attributeGroups = this.parseAttributeGroups(complexType, xsdNamespace); // attribute groups
        elementInfo.children = [
          ...sequenceElements,
          ...sequenceChoiceElements,
          ...sequenceAnyElements,
          ...attributes,
          ...attributeGroups,
        ];
      }

      // Parse simple content
      const simpleContent = complexType.get(`./*[local-name()='simpleContent']`, {
        xsd: xsdNamespace,
      }) as XMLElement;
      if (simpleContent) {
        const simpleContentElements = this.parseSimpleContent(complexType, xsdNamespace); // simple content
        elementInfo.children = [...elementInfo.children, ...simpleContentElements];
      }

      this.complexTypes[typeName] = elementInfo;
    }
  }

  private parseSimpleTypes(xsdNamespace: string): void {
    const simpleTypes = this.xsdDoc.find(`//*[local-name()='simpleType']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];
    for (const simpleType of simpleTypes) {
      const typeName = simpleType.getAttribute('name')?.value();
      if (!typeName) continue;

      const elementInfo: ElementInfo = {
        name: typeName,
        children: [],
      };

      // Extract documentation
      const docElement = simpleType.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        elementInfo.documentation = docElement.text()?.trim();
      }

      // Parse attributes
      const attributes = this.parseAttributes(simpleType, xsdNamespace);
      const attributeGroups = this.parseAttributeGroups(simpleType, xsdNamespace);
      const restrictions = this.parseRestrictions(simpleType, xsdNamespace);
      elementInfo.children = [...attributes, ...attributeGroups, ...restrictions];

      this.simpleTypes[typeName] = elementInfo;
    }
  }

  private parseElements(xsdNamespace: string): void {
    const elements = this.xsdDoc.find(`//*[local-name()='element']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const element of elements) {
      const elementName = element.getAttribute('name')?.value();
      if (!elementName) continue;

      const elementInfo: ElementInfo = {
        name: elementName,
        typeName: element.getAttribute('type')?.value(),
        minOccurs: element.getAttribute('minOccurs')?.value(),
        maxOccurs: element.getAttribute('maxOccurs')?.value(),
        nillable: element.getAttribute('nillable')?.value() === 'true',
        children: [],
      };

      // Extract documentation
      const docElement = element.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        elementInfo.documentation = docElement.text()?.trim();
      }

      // If this element has a complex type, get its children
      if (elementInfo.typeName && this.complexTypes[elementInfo.typeName]) {
        const complexType = this.complexTypes[elementInfo.typeName];
        elementInfo.children = [...complexType.children];
      }

      this.elements[elementName] = elementInfo;
    }
  }

  private parseSequenceElements(sequence: XMLElement, xsdNamespace: string): ElementInfo[] {
    const children: ElementInfo[] = [];
    const childElements = sequence.find(`./*[local-name()='element']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const child of childElements) {
      const childName = child.getAttribute('name')?.value();
      if (!childName) continue;

      const childInfo: ElementInfo = {
        name: childName,
        typeName: 'element',
        type: child.getAttribute('type')?.value(),
        minOccurs: child.getAttribute('minOccurs')?.value(),
        maxOccurs: child.getAttribute('maxOccurs')?.value(),
        nillable: child.getAttribute('nillable')?.value() === 'true',
        children: [],
      };

      // Extract documentation
      const docElement = child.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        childInfo.documentation = docElement.text()?.trim();
      }

      // If this child has a complex type, get its children
      if (childInfo.typeName && this.complexTypes[childInfo.typeName]) {
        const complexType = this.complexTypes[childInfo.typeName];
        //childInfo.children = [...complexType.children];
      }

      children.push(childInfo);
    }

    return children;
  }

  private parseSequenceAnyElements(sequence: XMLElement, xsdNamespace: string): ElementInfo[] {
    const children: ElementInfo[] = [];
    const anyElements = sequence.find(`./*[local-name()='any']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];
    for (const anyElement of anyElements) {
      const anyElementInfo: ElementInfo = {
        name: anyElement.getAttribute('namespace')?.value() || '',
        typeName: 'any',
        children: [],
      };
      children.push(anyElementInfo);
    }
    return children;
  }

  private parseSequenceChoiceElements(sequence: XMLElement, xsdNamespace: string): ElementInfo[] {
    const children: ElementInfo[] = [];
    const choiceElements = sequence.find(`./*[local-name()='choice']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];
    for (const choiceElement of choiceElements) {
      const choiceElementInfo: ElementInfo = {
        name: choiceElement.getAttribute('namespace')?.value() || '',
        typeName: 'choice',
        minOccurs: choiceElement.getAttribute('minOccurs')?.value(),
        maxOccurs: choiceElement.getAttribute('maxOccurs')?.value(),
        children: [],
      };
      const choiceElements = this.parseSequenceElements(choiceElement, xsdNamespace);
      const sequenceElements = choiceElement.find(`./*[local-name()='sequence']`, {
        xsd: xsdNamespace,
      }) as XMLElement[];
      for (const sequenceElement of sequenceElements) {
        const sequenceElementInfo = this.parseSequenceElements(sequenceElement, xsdNamespace);
        const nestedChoiceElements = sequenceElement.find(`./*[local-name()='choice']`, {
          xsd: xsdNamespace,
        }) as XMLElement[];
        for (const nestedChoiceElement of nestedChoiceElements) {
          const nestedChoiceElementInfo = this.parseChoiceElements(
            nestedChoiceElement,
            xsdNamespace
          );
          choiceElementInfo.children = [...choiceElementInfo.children, ...nestedChoiceElementInfo];
        }
        choiceElementInfo.children = [...choiceElementInfo.children, ...sequenceElementInfo];
      }

      choiceElementInfo.children = [...choiceElementInfo.children, ...choiceElements];
      children.push(choiceElementInfo);
    }
    return children;
  }

  private parseChoiceElements(choice: XMLElement, xsdNamespace: string): ElementInfo[] {
    const children: ElementInfo[] = [];
    const elements = choice.find(`./*[local-name()='element']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const element of elements) {
      const elementInfo: ElementInfo = {
        name: element.getAttribute('name')?.value() || '',
        type: element.getAttribute('type')?.value(),
        minOccurs: element.getAttribute('minOccurs')?.value(),
        maxOccurs: element.getAttribute('maxOccurs')?.value(),
        typeName: 'element',
        children: [],
      };
      children.push(elementInfo);
    }

    return children;
  }

  private parseAttributes(element: XMLElement, xsdNamespace: string): ElementInfo[] {
    const attributes: ElementInfo[] = [];
    const attrElements = element.find(`./*[local-name()='attribute']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const attr of attrElements) {
      const attrInfo: ElementInfo = {
        name: attr.getAttribute('name')?.value() || '',
        typeName: 'attribute',
        type: attr.getAttribute('type')?.value(),
        use: attr.getAttribute('use')?.value(),
        default: attr.getAttribute('default')?.value(),
        children: [],
      };
      attributes.push(attrInfo);
    }

    return attributes;
  }

  private parseSimpleContent(element: XMLElement, xsdNamespace: string): ElementInfo[] {
    const simpleContents: ElementInfo[] = [];
    const simpleContentElements = element.find(`./*[local-name()='simpleContent']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const simpleContent of simpleContentElements) {
      const extensionElement = simpleContent.get(`./*[local-name()='extension']`, {
        xsd: xsdNamespace,
      }) as XMLElement;
      if (!extensionElement) continue;

      const simpleContentInfo: ElementInfo = {
        name: '',
        typeName: 'simpleContent',
        type: extensionElement.getAttribute('base')?.value(),
        children: this.parseAttributes(extensionElement, xsdNamespace),
      };

      // Get documentation if it exists
      const docElement = simpleContent.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        simpleContentInfo.documentation = docElement.text()?.trim();
      }

      simpleContents.push(simpleContentInfo);
    }

    return simpleContents;
  }

  private parseRestrictions(element: XMLElement, xsdNamespace: string): ElementInfo[] {
    const restrictions: ElementInfo[] = [];
    const restrictionElements = element.find(`./*[local-name()='restriction']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const restriction of restrictionElements) {
      const restrictionInfo: ElementInfo = {
        name: restriction.getAttribute('name')?.value() || '',
        typeName: 'restriction',
        base: restriction.getAttribute('base')?.value(),
        children: this.parseEnumerations(restriction, xsdNamespace),
      };

      restrictions.push(restrictionInfo);
    }

    return restrictions;
  }

  private parseEnumerations(element: XMLElement, xsdNamespace: string): ElementInfo[] {
    const enumerations: ElementInfo[] = [];
    const enumerationElements = element.find(`./*[local-name()='enumeration']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const enumeration of enumerationElements) {
      const enumerationInfo: ElementInfo = {
        name: enumeration.getAttribute('name')?.value() || '',
        typeName: 'enumeration',
        value: enumeration.getAttribute('value')?.value() || '',
        children: [],
      };

      const docElement = enumeration.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        enumerationInfo.documentation = docElement.text()?.trim();
      }

      enumerations.push(enumerationInfo);
    }

    return enumerations;
  }

  private parseAttributeGroups(element: XMLElement, xsdNamespace: string): ElementInfo[] {
    const attributeGroupInfos: ElementInfo[] = [];
    const attrGroupElements = element.find(`./*[local-name()='attributeGroup']`, {
      xsd: xsdNamespace,
    }) as XMLElement[];

    for (const attrGroup of attrGroupElements) {
      const attrGroupInfo: ElementInfo = {
        name: attrGroup.getAttribute('name')?.value() || '',
        children: [],
      };

      // Extract documentation
      const docElement = attrGroup.get(
        `./*[local-name()='annotation']/*[local-name()='documentation']`,
        { xsd: xsdNamespace }
      ) as XMLElement;
      if (docElement) {
        attrGroupInfo.documentation = docElement.text()?.trim();
      }

      attributeGroupInfos.push(attrGroupInfo);
    }

    return attributeGroupInfos;
  }

  public printTreeStructure(maxDepth: number = 5): void {
    console.log('='.repeat(80));
    console.log('XSD ELEMENT TREE STRUCTURE');
    console.log('='.repeat(80));

    console.log('\nROOT ELEMENTS:');
    console.log('-'.repeat(40));

    // Find root elements (those not referenced as children in complex types)
    const referencedElements = new Set<string>();
    for (const complexType of Object.values(this.complexTypes)) {
      for (const child of complexType.children) {
        referencedElements.add(child.name);
      }
    }

    // Print elements
    for (const [name, element] of Object.entries(this.elements).slice(0, 50)) {
      if (!referencedElements.has(name)) {
        this.printElementTree(element, 0, maxDepth);
      }
    }

    if (Object.keys(this.elements).length > 50) {
      console.log(`... and ${Object.keys(this.elements).length - 50} more elements`);
    }

    // Print simple types
    console.log(`\nSIMPLE TYPES (${Object.keys(this.simpleTypes).length} total):`);
    console.log('-'.repeat(40));

    const simpleTypeEntries = Object.entries(this.simpleTypes);
    for (const [name, simpleType] of simpleTypeEntries.slice(0, 20)) {
      this.printElementTree(simpleType, 0, maxDepth);
    }

    if (simpleTypeEntries.length > 20) {
      console.log(`... and ${simpleTypeEntries.length - 20} more simple types`);
    }

    console.log(`\nCOMPLEX TYPES (${Object.keys(this.complexTypes).length} total):`);
    console.log('-'.repeat(40));

    const complexTypeEntries = Object.entries(this.complexTypes);
    for (const [name, complexType] of complexTypeEntries.slice(0, 20)) {
      this.printElementTree(complexType, 0, maxDepth);
    }

    if (complexTypeEntries.length > 20) {
      console.log(`... and ${complexTypeEntries.length - 20} more complex types`);
    }
  }

  public writeSimpleTypesToTypeScript(outputFile: string): void {
    const simpleTypes = Object.values(this.simpleTypes);
    const fileContent = `/* xsd:simpleType */
    ${simpleTypes
      .map(
        (type) => `
    /**
     * ${type.documentation}
     */
    export enum ${type.name} { ${type.children?.[0]?.children
      .filter((child) => child.typeName === 'enumeration')
      .map(
        (child) =>
          `"${/^\d+(\.\d+)?$/.test(child.value || '') ? child.value + '_' : child.value}" = "${child.value}"`
      )
      .join(',')}; };
    `
      )
      .join('\n')}`;
    const sourceFile = createSourceFile(outputFile, fileContent, ScriptTarget.ES2020);
    const printer = createPrinter();
    const printedCode = printer.printFile(sourceFile);
    writeFileSync(outputFile, printedCode);
  }

  public writeComplexTypesToTypeScript(outputFile: string): void {
    const complexTypes = Object.values(this.complexTypes);
    const fileContent = `
    import * as enums from "./mismo-simple-types";
    /* xsd:complexType */
    type RELATIONSHIP = any;
    ${complexTypes
      .map((type) => {
        const hasElements = type.children.some((child) => child.typeName === 'element');
        const hasSimpleContent = type.children.some((child) => child.typeName === 'simpleContent');
        const hasSequenceAny = type.children.some((child) => child.typeName === 'any');
        const hasSequenceChoice = type.children.some((child) => child.typeName === 'choice');
        if (hasSequenceAny && type.children.length === 1) {
          return `
        /**
         * ${type.documentation}
         */
    export type ${type.name} = any; // ${type.name}`;
        } else if (hasElements || hasSequenceChoice) {
          const elements = type.children.filter((child) => child.typeName === 'element');
          const choices = type.children
            .filter((child) => child.typeName === 'choice')
            .flatMap((child) => child.children);
          return `
        /**
         * ${type.documentation}
         */
    export interface ${type.name} { ${[...elements, ...choices]
      .map((child) => {
        const hasLowerCase = /[a-z]/.test(child.name);
        const type = hasLowerCase ? `${child.type}` : `${child.type}[]`;
        return `${child.name}?: ${type}`;
      })
      .join(';')}; };
    `;
        } else if (hasSimpleContent) {
          const simpleContent = type.children.find((child) => child.typeName === 'simpleContent');
          return `
        /**
         * ${type.documentation}
         */
    export type ${type.name} = ${simpleContent?.type ? `enums.${simpleContent.type} | ` : ''}{ ${simpleContent?.children
      .filter((child) => child.type !== undefined)
      .map((child) => `${child.name}: enums.${child.type}`)
      .join(';')} };
    `;
        }
        return '';
      })
      .join('\n')}`;
    const sourceFile = createSourceFile(outputFile, fileContent, ScriptTarget.ES2020);
    const printer = createPrinter();
    const printedCode = printer.printFile(sourceFile);
    writeFileSync(outputFile, printedCode);
  }

  public writeClassesToTypeScript(outputFile: string): void {
    const classes = Object.values(this.complexTypes).filter((type) => {
      const hasElements = type.children.some((child) => child.typeName === 'element');
      const hasSequenceChoice = type.children.some((child) => child.typeName === 'choice');
      return hasElements || hasSequenceChoice;
    });

    const fileContent = `
    import * as c from './mismo-complex-types';

    ${classes
      .map((type) => {
        const elements = type.children.filter((child) => child.typeName === 'element');
        const choices = type.children
          .filter((child) => child.typeName === 'choice')
          .flatMap((child) => child.children);

        return `
    /**
     * ${type.documentation}
     */
    export class ${type.name} implements Partial<c.${type.name}> {
      ${[...elements, ...choices]
        .map((child) => {
          const hasLowerCase = /[a-z]/.test(child.name);
          const type = hasLowerCase ? `c.${child.type}` : `${child.type}[]`;
          return `private _${child.name}?: ${type};`;
        })
        .join('\n      ')}

      constructor({ ${[...elements, ...choices]
        .map((child) => {
          const hasLowerCase = /[a-z]/.test(child.name);
          const type = hasLowerCase ? `c.${child.type}` : `${child.type}[]`;
          return `${child.name}: _${child.name}`;
        })
        .join(', ')} }: { ${[...elements, ...choices]
        .map((child) => {
          const hasLowerCase = /[a-z]/.test(child.name);
          const type = hasLowerCase ? `c.${child.type}` : `${child.type}[]`;
          return `${child.name}?: ${type}`;
        })
        .join('; ')} }) {
        Object.assign(this, { ${[...elements, ...choices].map((child) => `_${child.name}`).join(', ')} });
      }
      

      ${[...elements, ...choices].map((child) => {
        const hasLowerCase = /[a-z]/.test(child.name);
        const type = hasLowerCase ? `c.${child.type}` : `${child.type}[]`;
        return `
      get ${child.name}(): ${type} | undefined {
        return this._${child.name};
      }

      set ${child.name}(value: ${type} | undefined) {
        this._${child.name} = value;
      }`;
      })}
    }`;
      })
      .join('\n')}`;

    const sourceFile = createSourceFile(outputFile, fileContent, ScriptTarget.ES2020);
    const printer = createPrinter();
    const printedCode = printer.printFile(sourceFile);
    writeFileSync(outputFile, printedCode);
  }

  private printElementTree(element: ElementInfo, depth: number, maxDepth: number): void {
    if (depth > maxDepth) return;

    const indent = '  '.repeat(depth);
    const typeInfo = element.typeName ? ` [${element.typeName}]` : '';
    const occursInfo =
      element.minOccurs || element.maxOccurs
        ? ` (${element.minOccurs || '0'}..${element.maxOccurs || '1'})`
        : '';

    console.log(`${indent}• ${element.name}${typeInfo}${occursInfo}`);

    if (element.documentation && depth < 2) {
      const docLines = element.documentation.split('\n');
      for (const line of docLines.slice(0, 2)) {
        if (line.trim()) {
          const truncated =
            line.trim().length > 60 ? line.trim().substring(0, 60) + '...' : line.trim();
          console.log(`${indent}  └─ ${truncated}`);
        }
      }
    }

    for (const child of element.children.slice(0, 10)) {
      this.printElementTree(child, depth + 1, maxDepth);
    }

    if (element.children.length > 10) {
      console.log(`${indent}  ... and ${element.children.length - 10} more children`);
    }
  }

  public getStructure(): XSDStructure {
    return {
      elements: this.elements,
      complexTypes: this.complexTypes,
      namespaces: this.namespaces,
    };
  }
}

// CLI functionality
function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      'Usage: tsx xsd-parser.ts <xsd-file> [--depth <number>] [--output <file>] [--json]'
    );
    console.log('  --depth <number>  Maximum depth to display (default: 3)');
    console.log('  --output <file>   Output file for JSON structure');
    console.log('  --json           Output as JSON instead of tree format');
    process.exit(1);
  }

  const xsdFile = args[0];
  const depthIndex = args.indexOf('--depth');
  const outputIndex = args.indexOf('--output');
  const jsonFlag = args.includes('--json');

  const maxDepth =
    depthIndex !== -1 && args[depthIndex + 1] ? parseInt(args[depthIndex + 1], 10) : 3;

  const outputFile = outputIndex !== -1 && args[outputIndex + 1] ? args[outputIndex + 1] : null;

  try {
    const parser = new XSDParser(xsdFile);
    parser.parse();

    if (jsonFlag) {
      const structure = parser.getStructure();
      const output = JSON.stringify(structure, null, 2);

      if (outputFile) {
        fs.writeFileSync(outputFile, output, 'utf-8');
        console.log(`JSON structure written to ${outputFile}`);
      } else {
        console.log(output);
      }
    } else {
      parser.printTreeStructure(maxDepth);
      parser.writeSimpleTypesToTypeScript('./mismo-simple-types.ts');
      parser.writeComplexTypesToTypeScript('./mismo-complex-types.ts');
      parser.writeClassesToTypeScript('./mismo-classes-auto.ts');
      if (outputFile) {
        const structure = parser.getStructure();
        fs.writeFileSync(outputFile, JSON.stringify(structure, null, 2), 'utf-8');
        console.log(`\nFull structure also saved to ${outputFile}`);
      }
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { XSDParser, type ElementInfo, type XSDStructure };
