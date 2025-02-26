# MISMO

Utilities for working with Mortgage Industry Standards Maintenance Organization (MISMO) XML files.

## Installation

pnpm add @morfi-technologies/mismo

## Usage - MISMO Validation

```ts
import { validateMISMO } from '@morfi-technologies/mismo';

const result = validateMISMO({
    mismo: fs.readFileSync("your-mismo-file.xml"), // File Buffer or String
    options: {
        version: '3.4' // MISMO Version
    }
});
```
## Usage - NextJS

To use with NextJS, you'll need to configure the next.config.js file as follows

```
const nextConfig = {
  serverExternalPackages: ['libxmljs', 'path', 'fs', 'url'], // external dependencies,
  ...config
}

```