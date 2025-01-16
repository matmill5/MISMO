# MISMO

Utilities for wokring with Mortgage Industry Standards Maintenance Organization (MISMO) XML files.

## Installation

pnpm add @morfi-technologies/mismo

## Usage - MISMO Validation

```ts
import { validateMISMO } from '@morfi-technologies/mismo';

const result = validateMISMO({
    mismo: fs.readFileSync("your-mismo-file.xml"), // Fill Buffer or String
    options: {
        version: '3.4' // MISMO Version
    }
});
```