# MISMO

Utilities for working with Mortgage Industry Standards Maintenance Organization (MISMO) XML files.

## Resources

https://github.com/Mermade/jgeXml
https://xsd-viewer.fly.dev/
https://quicktype.io/

xsd2json: pnpm --package=jgexml dlx xsd2json ./MISMO_3.6.0_B366.xsd > ./generated/out.json

## Installation

pnpm add @morfi-technologies/mismo

## Usage - Creating a MISMO Loan

```ts
import { MISMO } from “@morfi-technologies/mismo”;

const mortgage = new MISMO()

mortgage.addBorrower({ firstName: "Matthew", lastName: "Miller" });

mortgage.addAsset({ financialInstitution: "JP Morgan", amount: "1000", … })

const liabilities = mortgage.getLiabilities()

const mismoFile = mortgage.export({ version: "3.4" })

…

```

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