import { validateMISMO } from '../src';
import fs from 'fs';
import path from 'path';

describe('MISMO Validator', () => {
  test('validates MISMO 3.4 sample XML', () => {
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
});
