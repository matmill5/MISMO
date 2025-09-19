# MISMO

Utilities for working with Mortgage Industry Standards Maintenance Organization (MISMO) XML files.

## Installation

pnpm add @morfi-technologies/mismo

## Usage - Creating a MISMO Loan

`import { MISMO } from “@morfi-technologies/mismo”;

const mortgage = new MISMO()

mortgage.addBorrower({ firstName: "Matthew", lastName: "Miller" });
mortgage.addAsset({ financialInstitution: "JP Morgan", amount: "1000", … })

const liabilities = mortgage.getLiabilities()

const mismoFile = mortgage.export({ version: "3.4" })
…

`

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