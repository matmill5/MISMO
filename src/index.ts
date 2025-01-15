import { parseXml, type XMLDocument } from 'libxmljs';
import { ValidateMISMO, ValidationResult } from './types';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const validateMISMO = ({ mismo, options }: ValidateMISMO): ValidationResult => {
  const parsedXML: XMLDocument = parseXml(mismo.toString(), options.xmlParserOptions);

  let xsdSchema: XMLDocument;
  let schemaPath: string;

  switch (options.version) {
    case '3.4':
      schemaPath = path.join(__dirname, 'mismo', '3.4', 'MISMO_3.4.0_B324.xsd');
      xsdSchema = parseXml(fs.readFileSync(schemaPath, 'utf-8').toString(), {
        ...options.xsdParserOptions,
        baseUrl: schemaPath,
      });
      break;
    case '3.5':
      schemaPath = path.join(__dirname, 'mismo', '3.5', 'MISMO_3.5.0_B344.xsd');
      xsdSchema = parseXml(fs.readFileSync(schemaPath, 'utf-8').toString(), {
        ...options.xsdParserOptions,
        baseUrl: schemaPath,
      });
      break;
    case '3.6':
      schemaPath = path.join(__dirname, 'mismo', '3.6', 'MISMO_3.6.0_B366.xsd');
      xsdSchema = parseXml(fs.readFileSync(schemaPath, 'utf-8').toString(), {
        ...options.xsdParserOptions,
        baseUrl: schemaPath,
      });
      break;
    default:
      throw new Error('Invalid MISMO version');
  }

  const validation = parsedXML.validate(xsdSchema) as boolean;
  const validationErrors = parsedXML.validationErrors;

  return {
    isValid: validation,
    errors: validationErrors,
  };
};

const result = validateMISMO({
  mismo: fs.readFileSync(path.join(__dirname, '../tests/samples/mismo-3.4-sample.xml'), 'utf-8'),
  options: {
    version: '3.4',
  },
});

console.log(result);
