# Your Package Name

Description of your package

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