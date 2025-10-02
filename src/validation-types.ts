import { type XMLParseOptions } from 'libxmljs';

export interface ValidationError extends Error {
  domain: number | null;
  code: number | null;
  level: number | null;

  line: number | null;
  column: number;
}

export interface MISMOOptions {
  version: '3.4' | '3.5' | '3.6';
  xmlParserOptions?: XMLParseOptions;
  xsdParserOptions?: XMLParseOptions;
}

export interface ValidateMISMO {
  mismo: string | Buffer;
  options: MISMOOptions;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}
