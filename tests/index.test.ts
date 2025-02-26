import { validateMISMO, validateMISMONodeLibxml } from '../src';
import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';

describe('MISMO Validator', () => {
  it('validates MISMO 3.4 sample XML', () => {
    // Read the sample XML file
    const sampleXml = fs.readFileSync(
      path.join(__dirname, 'samples/mismo-3.4-sample.xml'),
      'utf-8'
    );

    // Call validator with XML string
    const result = validateMISMO({
      mismo: sampleXml,
      options: {
        version: '3.4',
      },
    });

    // Expect validation to pass
    expect(result.isValid).toBe(true);
  });

  it('validates MISMO 3.4 sample XML with node-libxml', () => {
    const result = validateMISMONodeLibxml({
      mismoPath: path.join(__dirname, 'samples/mismo-3.4-sample.xml'),
      options: {
        version: '3.4',
      },
    });

    expect(result).toBe(true);
  });
});
