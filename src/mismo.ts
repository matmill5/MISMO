import { DEAL, DEAL_SET, DEAL_SETS, DEALS, INDIVIDUAL, LOAN, LOANS, MESSAGE, PARTIES, PARTY, COLLATERAL, COLLATERALS, RELATIONSHIPS, LIABILITY, LIABILITIES, ASSET, ASSETS } from "./mismo-classes-auto";
import { MISMODatetime, MISMOIdentifier } from "./mismo-complex-types";

class MISMO {
  private message: MESSAGE;

  constructor() {
    this.message = new MESSAGE({});
  }

  // Ensures a single deal exists and returns a mutable reference to it
  private getDeal(): DEAL {
    // Create the nested structure if it doesn't exist yet
    const m: MESSAGE = this.message;
    if (!m.DEAL_SETS) m.DEAL_SETS = [new DEAL_SETS()];
    if (!m.DEAL_SETS[0].DEAL_SET) m.DEAL_SETS[0].DEAL_SET = [new DEAL_SET()];
    if (!m.DEAL_SETS[0].DEAL_SET[0].DEALS) m.DEAL_SETS[0].DEAL_SET[0].DEALS = [new DEALS()];
    if (!m.DEAL_SETS[0].DEAL_SET[0].DEALS[0].DEAL) m.DEAL_SETS[0].DEAL_SET[0].DEALS[0].DEAL = [new DEAL()];
    return m.DEAL_SETS[0].DEAL_SET[0].DEALS[0].DEAL[0];
  }

  // Return the list of parties for the deal
  private getParties(): PARTIES[] {
    const deal = this.getDeal();
    if (!deal.PARTIES) deal.PARTIES = [new PARTIES({})];
    return deal.PARTIES;
  }

  // Add a borrower to the deal
  addBorrower(borrower: INDIVIDUAL): this {
    const deal = this.getDeal();
    if (!deal.PARTIES) deal.PARTIES = [new PARTIES({})];
    
    const newParty = new PARTY({}); // new party
    newParty.INDIVIDUAL = [borrower]; // new part is the individual
    
    deal.PARTIES[0].PARTY?.push(newParty); // add the party to the deal
    return this;
  }

  // Add a party to the deal
  addParty(party: PARTY): this {
    const deal = this.getDeal();
    if (!deal.PARTIES) deal.PARTIES = [new PARTIES({})];
    deal.PARTIES[0].PARTY?.push(party);
    return this;
  }

  // Adds a loan to the deal
  addLoan(loan: LOAN): this {
    const deal = this.getDeal();
    if (!deal.LOANS) deal.LOANS = [new LOANS({})];
    if (!deal.LOANS[0].LOAN) deal.LOANS[0].LOAN = [];

    deal.LOANS[0].LOAN.push(loan);
    return this;
  }

  // Adds a collateral with a subject property and address
  addCollateral(collateral: COLLATERAL): this {
    const deal = this.getDeal();
    if (!deal.COLLATERALS) deal.COLLATERALS = [new COLLATERALS({})];
    if (!deal.COLLATERALS[0].COLLATERAL) deal.COLLATERALS[0].COLLATERAL = [];

    deal.COLLATERALS[0].COLLATERAL.push(collateral);
    return this;
  }

  // Adds a liability to the deal
  addLiability(liability: LIABILITY): this {
    const deal = this.getDeal();
    if (!deal.LIABILITIES) deal.LIABILITIES = [new LIABILITIES({})];
    if (!deal.LIABILITIES[0].LIABILITY) deal.LIABILITIES[0].LIABILITY = [];

    deal.LIABILITIES[0].LIABILITY.push(liability);
    return this;
  }

  // Adds an asset to the deal
  addAsset(asset: ASSET): this {
    const deal = this.getDeal();
    if (!deal.ASSETS) deal.ASSETS = [new ASSETS({})];
    if (!deal.ASSETS[0].ASSET) deal.ASSETS[0].ASSET = [];

    deal.ASSETS[0].ASSET.push(asset);
    return this;
  }

  // Adds a relationship to the deal
  addRelationship(relationship: any): this { // TODO: AUTO GENERATE RELATIONSHIP TYPE
    const deal = this.getDeal();
    if (!deal.RELATIONSHIPS) deal.RELATIONSHIPS = [new RELATIONSHIPS({})];
    if (!deal.RELATIONSHIPS[0].RELATIONSHIP) deal.RELATIONSHIPS[0].RELATIONSHIP = [];

    deal.RELATIONSHIPS[0].RELATIONSHIP.push(relationship);
    return this;
  }

  // Prints the MISMO message to the console
  print() {
    const deal = this.getDeal();

    console.log('\n=== MISMO Loan Application ===\n');

    if (deal.ASSETS?.length) {
      console.log('Assets:');
      deal.ASSETS.forEach((assets, i) => {
        const asset = assets.ASSET?.[0];
        if (!asset) return;
        console.log(`  ${i + 1}. ${asset.ASSET_DETAIL?.[0]?.AssetType}`);
        console.log(`     Account: ${asset.ASSET_DETAIL?.[0]?.AssetAccountIdentifier}`);
        console.log(
          `     Value: $${asset.ASSET_DETAIL?.[0]?.AssetCashOrMarketValueAmount?.toLocaleString()}`
        );
        console.log(`     Holder: ${asset.ASSET_HOLDER?.[0]?.NAME?.[0]?.FullName}`);
      });
      console.log();
    }

    if (deal.COLLATERALS?.length) {
      console.log('Properties:');
      deal.COLLATERALS.forEach((collaterals, i) => {
        const collateral = collaterals.COLLATERAL?.[0];
        if (!collateral) return;
        const property = collateral.SUBJECT_PROPERTY?.[0];
        if (!property) return;
        console.log(`  ${i + 1}. ${property.ADDRESS?.[0]?.AddressLineText}`);
        console.log(
          `     ${property.ADDRESS?.[0]?.CityName}, ${property.ADDRESS?.[0]?.StateCode} ${property.ADDRESS?.[0]?.PostalCode}`
        );
        console.log(`     Type: ${property.PROPERTY_DETAIL?.[0]?.PropertyUsageType}`);
        console.log(`     Year Built: ${property?.PROJECT?.[0]
          ?.PHASES?.[0]
          ?.PHASE?.[0]
          ?.PHASE_STRUCTURES?.[0]
          ?.PHASE_STRUCTURE?.[0]
          ?.PHASE_STRUCTURE_DETAIL?.[0]
          ?.PropertyStructureBuiltYear}`);
      });
      console.log();
    }

    if (deal.LOANS?.length) {
      console.log('Loans:');
      deal.LOANS.forEach((loans, i) => {
        const loan = loans.LOAN?.[0];
        if (!loan) return;
        console.log(`  ${i + 1}. ${loan.}`);
        console.log(`     Amount: $${loan.TERMS_OF_LOAN?.[0]?.BaseLoanAmount?.toLocaleString()}`);
        console.log(`     Rate: ${loan.TERMS_OF_LOAN?.[0]?.NoteRatePercent}%`);
        console.log(`     Purpose: ${loan.TERMS_OF_LOAN?.[0]?.LoanPurposeType}`);
      });
      console.log();
    }

    if (deal.PARTIES?.length) {
      console.log('Parties:');
      deal.PARTIES.forEach((parties, i) => {
        const party = parties.PARTY?.[0];
        if (!party) return;
        console.log(`  ${i + 1}. ${party.ROLES?.[0]?.ROLE?.[0]?.PARTY_ROLE_IDENTIFIERS?.[0]?.PARTY_ROLE_IDENTIFIER?.[0]?.PartyRoleIdentifier}`);
        if (party.INDIVIDUAL?.[0]) {
          const name = [
            party.INDIVIDUAL[0].NAME?.[0]?.FirstName,
            party.INDIVIDUAL[0].NAME?.[0]?.MiddleName,
            party.INDIVIDUAL[0].NAME?.[0]?.LastName,
          ]
            .filter(Boolean)
            .join(' ');
          console.log(`     Name: ${name}`);
        }
        if (party.LEGAL_ENTITY?.[0]) {
          console.log(`     Entity: ${party.LEGAL_ENTITY[0].ALIASES?.[0]?.ALIAS?.[0]?.NAME?.[0]?.FullName}`);
        }
      });
    }

    return this;
  }

  // Exports the MISMO message to a string
  export({ version }: { version: "3.4" | "3.5" | "3.6" }): string {
    this!.message!.ABOUT_VERSIONS![0]!.ABOUT_VERSION![0]!.CreatedDatetime = new Date().toISOString() as unknown as MISMODatetime;
    switch (version) {
      case "3.4":
        this!.message!.ABOUT_VERSIONS![0]!.ABOUT_VERSION![0]!.AboutVersionIdentifier = "3.4" as unknown as MISMOIdentifier;
        break
      case "3.5":
        this!.message!.ABOUT_VERSIONS![0]!.ABOUT_VERSION![0]!.AboutVersionIdentifier = "3.5" as unknown as MISMOIdentifier;
        break
      case "3.6":
        this!.message!.ABOUT_VERSIONS![0]!.ABOUT_VERSION![0]!.AboutVersionIdentifier = "3.6" as unknown as MISMOIdentifier;
        break
    }
    return this!.message!.toString();
  }
}

export default MISMO;
