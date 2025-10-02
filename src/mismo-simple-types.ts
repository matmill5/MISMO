/* xsd:simpleType */
/**
 * Term: Ability To Repay Type Definition: A value from a MISMO defined list that identifies how a loan is designated under TILA/Regulation Z.
 */
export enum AbilityToRepayBase {
    "ATRRisk" = "ATRRisk",
    "ExemptFromATR" = "ExemptFromATR",
    "HigherPricedQM" = "HigherPricedQM",
    "HigherPricedQMRateSpread" = "HigherPricedQMRateSpread",
    "HUDRebuttablePresumptionQM" = "HUDRebuttablePresumptionQM",
    "HUDSafeHarborQM" = "HUDSafeHarborQM",
    "None" = "None",
    "NonQM" = "NonQM",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "SafeHarborQM" = "SafeHarborQM",
    "SafeHarborQMRateSpread" = "SafeHarborQMRateSpread",
    "SmallCreditorPortfolioOriginationsHigherPricedQM" = "SmallCreditorPortfolioOriginationsHigherPricedQM",
    "SmallCreditorPortfolioOriginationsSafeHarborQM" = "SmallCreditorPortfolioOriginationsSafeHarborQM",
    "SmallRuralCreditorHigherPricedQM" = "SmallRuralCreditorHigherPricedQM",
    "SmallRuralCreditorSafeHarborQM" = "SmallRuralCreditorSafeHarborQM",
    "TemporaryHighPricedQM" = "TemporaryHighPricedQM",
    "TemporarySafeHarborQM" = "TemporarySafeHarborQM",
    "Unknown" = "Unknown",
    "USDAHigherPricedQM" = "USDAHigherPricedQM",
    "USDASafeHarborQM" = "USDASafeHarborQM",
    "VARebuttablePresumptionQM" = "VARebuttablePresumptionQM",
    "VASafeHarborQM" = "VASafeHarborQM"
}
;
/**
 * Term: Ability To Repay Exemption Creditor Organization Type Definition: Specifies the creditor organization type exempts the transaction from Regulation Z Ability-to-Repay requirements.
 */
export enum AbilityToRepayExemptionCreditorOrganizationBase {
    "CommunityDevelopmentFinancialInstitution" = "CommunityDevelopmentFinancialInstitution",
    "CommunityHousingDevelopmentOrganization" = "CommunityHousingDevelopmentOrganization",
    "DownpaymentAssistanceProvider" = "DownpaymentAssistanceProvider",
    "NonProfitOrganization" = "NonProfitOrganization",
    "Other" = "Other"
}
;
/**
 * Term: Ability To Repay Exemption Loan Program Type Definition: Specifies the Loan Program that exempts the transaction from Regulation Z Ability-to-Repay requirements.
 */
export enum AbilityToRepayExemptionLoanProgramBase {
    "EmergencyEconomicStabilizationAct" = "EmergencyEconomicStabilizationAct",
    "HELOC" = "HELOC",
    "HousingFinanceAgency" = "HousingFinanceAgency",
    "NonStandardToStandardRefinance" = "NonStandardToStandardRefinance",
    "Other" = "Other",
    "ReverseMortgage" = "ReverseMortgage",
    "TemporaryLoan" = "TemporaryLoan",
    "TimeSharePlan" = "TimeSharePlan"
}
;
/**
 * Term: Ability To Repay Exemption Reason Type Definition: Specifies the reason that transaction is exempt from Regulation Z Ability-To-Repay requirements.
 */
export enum AbilityToRepayExemptionReasonBase {
    "CreditorOrganization" = "CreditorOrganization",
    "LoanProgram" = "LoanProgram",
    "NumberOfFinancedUnits" = "NumberOfFinancedUnits",
    "Other" = "Other",
    "PropertyUsage" = "PropertyUsage"
}
;
/**
 * Term: Ability To Repay Method Type Definition: Specifies the method by which the creditor satisfied Regulation Z Ability-to-Repay requirements.
 */
export enum AbilityToRepayMethodBase {
    "Exempt" = "Exempt",
    "General" = "General",
    "QualifiedMortgage" = "QualifiedMortgage"
}
;
/**
 * Term: Acceptable Signing Method Type Definition: An instruction as to the signing methods that are acceptable for this document. It does not reflect a document instance state.
 */
export enum AcceptableSigningMethodBase {
    "Any" = "Any",
    "Electronic" = "Electronic",
    "None" = "None",
    "Wet" = "Wet"
}
;
/**
 * Term: Access Type Definition: A value from a MISMO prescribed list that represents the entrances and exits to an area.
 */
export enum AccessBase {
    "ExteriorAccessOnly" = "ExteriorAccessOnly",
    "InteriorAccessOnly" = "InteriorAccessOnly",
    "InteriorAndExteriorAccess" = "InteriorAndExteriorAccess"
}
;
/**
 * Term: Accessibility Feature Type Definition: A value from a MISMO prescribed list that represents a feature that has been designed to provide accessibility and usability for a person with disabilities.
 */
export enum AccessibilityFeatureBase {
    "Appliances" = "Appliances",
    "Auditory" = "Auditory",
    "Bathtub" = "Bathtub",
    "Cabinets" = "Cabinets",
    "Counters" = "Counters",
    "Doorways" = "Doorways",
    "ElectricalSwitches" = "ElectricalSwitches",
    "GrabBars" = "GrabBars",
    "Handrails" = "Handrails",
    "Hardware" = "Hardware",
    "Lighting" = "Lighting",
    "None" = "None",
    "Other" = "Other",
    "Ramps" = "Ramps",
    "Shower" = "Shower",
    "Sink" = "Sink",
    "Toilet" = "Toilet"
}
;
/**
 * Term: ACH Account Type Definition: The account type from which the payment is drafted.
 */
export enum ACHAccountBase {
    "Checking" = "Checking",
    "Savings" = "Savings"
}
;
/**
 * Term: ACH Bank Account Purpose Type Definition: Identifies the purpose of the account where the payment or refund is drafted.
 */
export enum ACHBankAccountPurposeBase {
    "Other" = "Other",
    "PrincipalAndInterest" = "PrincipalAndInterest",
    "Settlement" = "Settlement",
    "TaxesAndInsurance" = "TaxesAndInsurance"
}
;
/**
 * Term: ACH Type Definition: Indicates if the ACH information is current or pending.
 */
export enum ACHBase {
    "Current" = "Current",
    "Pending" = "Pending"
}
;
/**
 * Term: ACH Draft Frequency Type Definition: A value from a MISMO defined list that indicates how frequently the servicer drafts the scheduled mortgage payment from the account of the borrower.
 */
export enum ACHDraftFrequencyBase {
    "Annually" = "Annually",
    "Biweekly" = "Biweekly",
    "Daily" = "Daily",
    "Monthly" = "Monthly",
    "OneTime" = "OneTime",
    "Other" = "Other",
    "Quarterly" = "Quarterly",
    "Semiannually" = "Semiannually",
    "Semimonthly" = "Semimonthly",
    "Weekly" = "Weekly"
}
;
/**
 * Term: Active Workout Document Status Type Definition: Specifies the status of the documentation for an active workout.
 */
export enum ActiveWorkoutDocumentStatusBase {
    "Complete" = "Complete",
    "Incomplete" = "Incomplete",
    "InReview" = "InReview",
    "NoResponse" = "NoResponse",
    "Other" = "Other",
    "Resubmission" = "Resubmission"
}
;
/**
 * Term: Additional Charge Type Definition: A description of a charge, an adjustment, a loss, a recovery, or an advance associated with a loan.
 */
export enum AdditionalChargeBase {
    "LatePayment" = "LatePayment",
    "Other" = "Other",
    "PrepaymentPenalty" = "PrepaymentPenalty",
    "RealizedLossDueToForeclosedREOPropertyLiquidation" = "RealizedLossDueToForeclosedREOPropertyLiquidation",
    "RealizedLossDueToLoanModification" = "RealizedLossDueToLoanModification",
    "SkipPayment" = "SkipPayment"
}
;
/**
 * Term: Additional Project Considerations Type Definition: Describes the specific ownership or use of the project.
 */
export enum AdditionalProjectConsiderationsBase {
    "CondoHotel" = "CondoHotel",
    "Other" = "Other",
    "Timeshare" = "Timeshare"
}
;
/**
 * Term: Additional Rental Income Type Definition: A value from a MISMO prescribed list that represents supplemental rental income for a rental property.
 */
export enum AdditionalRentalIncomeBase {
    "LaundryFacilities" = "LaundryFacilities",
    "None" = "None",
    "Other" = "Other",
    "Parking" = "Parking",
    "ShortTermRentalIncome" = "ShortTermRentalIncome",
    "Storage" = "Storage"
}
;
/**
 * Term: Additional Valuation Identifier Type Definition: A value from a MISMO prescribed list that represents the individual or organization which assigned the valuation identifier.
 */
export enum AdditionalValuationIdentifierBase {
    "Client" = "Client",
    "GovernmentAgency" = "GovernmentAgency",
    "ManagementCompany" = "ManagementCompany",
    "Other" = "Other",
    "ValuationSoftwareVendor" = "ValuationSoftwareVendor"
}
;
/**
 * Term: Address Type Definition: A value from a MISMO prescribed list that specifies the type of address.
 */
export enum AddressBase {
    "AsShownOnTaxReturn" = "AsShownOnTaxReturn",
    "CorporateHeadquarters" = "CorporateHeadquarters",
    "Current" = "Current",
    "LegalEntityFormation" = "LegalEntityFormation",
    "Mailing" = "Mailing",
    "Other" = "Other",
    "Primary" = "Primary",
    "Prior" = "Prior"
}
;
/**
 * Term: Address Format Type Definition: A collection of values that specify an address format as defined by the USPS Publication 28 Appendix A2 Address Types.
 */
export enum AddressFormatBase {
    "HighwayContract" = "HighwayContract",
    "Individual" = "Individual",
    "International" = "International",
    "Military" = "Military",
    "Other" = "Other",
    "PostOfficeBox" = "PostOfficeBox",
    "RuralRoute" = "RuralRoute"
}
;
/**
 * Term: Address Unit Designator Type Definition: A value from a MISMO prescribed list that specifies a further level of detail for a street address, for example, Suite or Unit. This list is based on the USPS Publication 28 on Postal Addressing Standards.
 */
export enum AddressUnitDesignatorBase {
    "Apartment" = "Apartment",
    "Basement" = "Basement",
    "Building" = "Building",
    "Department" = "Department",
    "Floor" = "Floor",
    "Front" = "Front",
    "Hangar" = "Hangar",
    "Key" = "Key",
    "Lobby" = "Lobby",
    "Lot" = "Lot",
    "Lower" = "Lower",
    "Office" = "Office",
    "Other" = "Other",
    "Penthouse" = "Penthouse",
    "Pier" = "Pier",
    "Rear" = "Rear",
    "Room" = "Room",
    "Side" = "Side",
    "Slip" = "Slip",
    "Space" = "Space",
    "Stop" = "Stop",
    "Suite" = "Suite",
    "Trailer" = "Trailer",
    "Unit" = "Unit",
    "Upper" = "Upper"
}
;
/**
 * Term: Adjustment Change Occurrence Type Definition: Indicates the reason for the Interest Rate, principal and interest Payment or Service Fee change on an existing mortgage loan.
 */
export enum AdjustmentChangeOccurrenceBase {
    "ARM" = "ARM",
    "Conversion" = "Conversion",
    "GEM" = "GEM",
    "GPM" = "GPM",
    "LoanToValue" = "LoanToValue",
    "NonScheduled" = "NonScheduled",
    "Other" = "Other",
    "Step" = "Step",
    "TimelyPaymentReward" = "TimelyPaymentReward"
}
;
/**
 * Term: Adjustment Rule Type Definition: Specifies whether the occurrence of the adjustment is the first change or a subsequent change.
 */
export enum AdjustmentRuleBase {
    "First" = "First",
    "Subsequent" = "Subsequent"
}
;
/**
 * Term: Advance Type Definition: Specifies the type of advance made on the loan by the servicer.
 */
export enum AdvanceBase {
    "Appraisal" = "Appraisal",
    "Escrow" = "Escrow",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "Interest" = "Interest",
    "LegalFees" = "LegalFees",
    "MI" = "MI",
    "Other" = "Other",
    "Principal" = "Principal",
    "PropertyInspection" = "PropertyInspection",
    "PropertyInsurance" = "PropertyInsurance",
    "PropertyPreservation" = "PropertyPreservation",
    "PropertyTaxes" = "PropertyTaxes",
    "ReliefOverpaymentReimbursement" = "ReliefOverpaymentReimbursement",
    "ReverseMortgagePaymentPlanChange" = "ReverseMortgagePaymentPlanChange"
}
;
/**
 * Term: Advance Recovery Source Type Definition: A value from a MISMO prescribed list that represents the expected entity that should repay the advance.
 */
export enum AdvanceRecoverySourceBase {
    "Borrower" = "Borrower",
    "Investor" = "Investor",
    "Other" = "Other",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Adverse Action Decision Source Type Definition: A value from a MISMO prescribed list that specifies the source of information that prompted the adverse action determination.
 */
export enum AdverseActionDecisionSourceBase {
    "Affiliate" = "Affiliate",
    "CreditRepository" = "CreditRepository",
    "Other" = "Other",
    "OutsideSource" = "OutsideSource"
}
;
/**
 * Term: Adverse Action Type Definition: A value from a MISMO prescribed list that specifies the type of adverse action that was taken.
 */
export enum AdverseActionBase {
    "CounterOffer" = "CounterOffer",
    "Denied" = "Denied",
    "Other" = "Other",
    "Withdrawn" = "Withdrawn"
}
;
/**
 * Term: Agency Appraiser Identifier Type Definition: A value from a MISMO prescribed list which represents the governmental agency for which the appraiser has been approved to conduct the appraisal.
 */
export enum AgencyAppraiserIdentifierBase {
    "FHA" = "FHA",
    "Other" = "Other",
    "VA" = "VA"
}
;
/**
 * Term: Alias Type Definition: A description of the type of ALIAS.
 */
export enum AliasBase {
    "AlsoKnownAs" = "AlsoKnownAs",
    "FormerlyKnownAs" = "FormerlyKnownAs",
    "NowKnownAs" = "NowKnownAs",
    "Other" = "Other"
}
;
/**
 * Term: Amenities Comparison Type Definition: A value from a MISMO prescribed list which represents the overall rating of the differences between the comparable and the subject for all types of amenities included in the rental agreement.
 */
export enum AmenitiesComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Amenity Type Definition: A value from a MISMO prescribed list that represents a particular service, feature or facility available to residents and/or guests of a project or property.
 */
export enum AmenityBase {
    "Airstrip" = "Airstrip",
    "Balcony" = "Balcony",
    "Beach" = "Beach",
    "BoatRamp" = "BoatRamp",
    "BoatSlip" = "BoatSlip",
    "BuildingMaintenance" = "BuildingMaintenance",
    "BuiltInPool" = "BuiltInPool",
    "BusinessCenter" = "BusinessCenter",
    "CaregiverServices" = "CaregiverServices",
    "Clubhouse" = "Clubhouse",
    "ClubMembership" = "ClubMembership",
    "CommunityPier" = "CommunityPier",
    "ConciergeServiceCoordination" = "ConciergeServiceCoordination",
    "Cooling" = "Cooling",
    "Deck" = "Deck",
    "DogPark" = "DogPark",
    "DoorAttendant" = "DoorAttendant",
    "ElectricVehicleChargingStation" = "ElectricVehicleChargingStation",
    "Elevator" = "Elevator",
    "Fence" = "Fence",
    "FireSuppressionSystem" = "FireSuppressionSystem",
    "FitnessArea" = "FitnessArea",
    "Fountain" = "Fountain",
    "GatedCommunity" = "GatedCommunity",
    "Gazebo" = "Gazebo",
    "GolfCourse" = "GolfCourse",
    "GroundsMaintenance" = "GroundsMaintenance",
    "Heating" = "Heating",
    "HomeTheater" = "HomeTheater",
    "IndoorFireplace" = "IndoorFireplace",
    "IngroundPool" = "IngroundPool",
    "IngroundSpa" = "IngroundSpa",
    "Intercom" = "Intercom",
    "IrrigationSystem" = "IrrigationSystem",
    "JettedTub" = "JettedTub",
    "LaundryFacilities" = "LaundryFacilities",
    "Lobby" = "Lobby",
    "MultipleZoneHeatingVentilationAndAirConditioning" = "MultipleZoneHeatingVentilationAndAirConditioning",
    "None" = "None",
    "OngoingCleaningServices" = "OngoingCleaningServices",
    "OpenAirKennel" = "OpenAirKennel",
    "Other" = "Other",
    "OutdoorFireplace" = "OutdoorFireplace",
    "OutdoorKitchen" = "OutdoorKitchen",
    "OutdoorRidingRing" = "OutdoorRidingRing",
    "OutdoorShower" = "OutdoorShower",
    "Patio" = "Patio",
    "Playground" = "Playground",
    "Porch" = "Porch",
    "Portico" = "Portico",
    "RecreationArea" = "RecreationArea",
    "RegistrationServices" = "RegistrationServices",
    "Sauna" = "Sauna",
    "SecuritySystem" = "SecuritySystem",
    "SharedLaundryFacilities" = "SharedLaundryFacilities",
    "ShortTermRentalServices" = "ShortTermRentalServices",
    "SmartHomeSystem" = "SmartHomeSystem",
    "SnowRemoval" = "SnowRemoval",
    "Spa" = "Spa",
    "SportsCourt" = "SportsCourt",
    "TelevisionOrInternetServices" = "TelevisionOrInternetServices",
    "TrashRemoval" = "TrashRemoval",
    "UnitStorage" = "UnitStorage",
    "WaterAccess" = "WaterAccess",
    "Waterfall" = "Waterfall",
    "WaterFrontage" = "WaterFrontage",
    "WholeHouseVentilation" = "WholeHouseVentilation",
    "WoodStove" = "WoodStove"
}
;
/**
 * Term: Amenity Category Type Definition: A value from a MISMO prescribed list that represents a high-level category in which the identified amenity is grouped.
 */
export enum AmenityCategoryBase {
    "Miscellaneous" = "Miscellaneous",
    "Other" = "Other",
    "OutdoorAccessories" = "OutdoorAccessories",
    "OutdoorLiving" = "OutdoorLiving",
    "WaterFeatures" = "WaterFeatures",
    "WholeHome" = "WholeHome"
}
;
/**
 * Term: Amenity Material Type Definition: A value from a MISMO prescribed list that represents the type of material used in construction.
 */
export enum AmenityMaterialBase {
    "Asphalt" = "Asphalt",
    "Brick" = "Brick",
    "Composite" = "Composite",
    "Concrete" = "Concrete",
    "Fiberglass" = "Fiberglass",
    "Metal" = "Metal",
    "NaturalStone" = "NaturalStone",
    "Other" = "Other",
    "Pavers" = "Pavers",
    "Vinyl" = "Vinyl",
    "Wood" = "Wood"
}
;
/**
 * Term: Amenity Ownership Type Definition: A value from a MISMO prescribed list that represents the unit's ownership of the amenity (e.g. is the amenity assigned to the unit or is it unassigned and is first-come first-served).
 */
export enum AmenityOwnershipBase {
    "Assigned" = "Assigned",
    "Other" = "Other",
    "Owned" = "Owned",
    "Unassigned" = "Unassigned"
}
;
/**
 * Term: Amortization Type Definition: A classification or description of a loan or a group of loans generally based on the changeability of the rate or payment over time.
 */
export enum AmortizationBase {
    "AdjustableRate" = "AdjustableRate",
    "Fixed" = "Fixed",
    "GEM" = "GEM",
    "GPM" = "GPM",
    "GraduatedPaymentARM" = "GraduatedPaymentARM",
    "Other" = "Other",
    "RateImprovementMortgage" = "RateImprovementMortgage",
    "Step" = "Step"
}
;
/**
 * Term: Analysis Component Type Definition: A collection of values that specify the component, room or structural element being analyzed.
 */
export enum AnalysisComponentBase {
    "Feature" = "Feature",
    "Other" = "Other",
    "Room" = "Room",
    "StructuralElement" = "StructuralElement"
}
;
/**
 * Term: Anti Steering Comparison Type Definition: Specifies how the loan conditions have been changed for this comparison instance for the purposes of anti steering (safe harbor) regulatory requirements.
Term: Borrower Selected Anti Steering Comparison Type Definition: Specifies the loan characteristic(s) used as the basis for the comparison loan chosen by the Borrower.
 */
export enum AntiSteeringComparisonBase {
    "LowestInterestRate" = "LowestInterestRate",
    "LowestInterestRateWithoutCertainFeatures" = "LowestInterestRateWithoutCertainFeatures",
    "LowestTotalAmountForOriginationPointsOrFeesAndDiscountPoints" = "LowestTotalAmountForOriginationPointsOrFeesAndDiscountPoints",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other"
}
;
/**
 * Term: Application Taken Method Type Definition: A value from a MISMO prescribed list  that specifies the method used to take the application.
 */
export enum ApplicationTakenMethodBase {
    "Email" = "Email",
    "FaceToFace" = "FaceToFace",
    "Fax" = "Fax",
    "Internet" = "Internet",
    "Mail" = "Mail",
    "Telephone" = "Telephone"
}
;
/**
 * Term: Appraisal Analysis Risk Score Type Definition: A value from a MISMO prescribed list that represents the assessed risk score of a property appraisal.
 */
export enum AppraisalAnalysisRiskScoreBase {
    "FannieMaeCollateralUnderwriterRiskScore" = "FannieMaeCollateralUnderwriterRiskScore",
    "FreddieMacLoanCollateralAdvisorAppraisalQualityRiskScore" = "FreddieMacLoanCollateralAdvisorAppraisalQualityRiskScore",
    "FreddieMacLoanCollateralAdvisorValuationRiskScore" = "FreddieMacLoanCollateralAdvisorValuationRiskScore",
    "Other" = "Other"
}
;
/**
 * Term: Appraisal Review Category Accuracy Type Definition: Specifies the accuracy of a category of the appraisal review report (e.g. Accurate, NotAccurate, NotApplicable or NotDeveloped).
 */
export enum AppraisalReviewCategoryAccuracyBase {
    "Accurate" = "Accurate",
    "NotAccurate" = "NotAccurate",
    "NotApplicable" = "NotApplicable",
    "NotDeveloped" = "NotDeveloped"
}
;
/**
 * Term: Appraisal Review Category Type Definition: Specifies a category within an appraisal review report.
 */
export enum AppraisalReviewCategoryBase {
    "ComparableRentals" = "ComparableRentals",
    "ComparablesSimilar" = "ComparablesSimilar",
    "Contract" = "Contract",
    "CostAndIncome" = "CostAndIncome",
    "DataAnalysis" = "DataAnalysis",
    "Improvements" = "Improvements",
    "MarketRent" = "MarketRent",
    "Neighborhood" = "Neighborhood",
    "Other" = "Other",
    "RentSchedule" = "RentSchedule",
    "Site" = "Site",
    "Subject" = "Subject",
    "TransferHistory" = "TransferHistory",
    "ValueIndicators" = "ValueIndicators"
}
;
/**
 * Term: Appraiser Designation Association Name Type Definition: The designating association for the type of designation held by the appraiser awarded by a recognized appraisal trade organization.
 */
export enum AppraiserDesignationAssociationNameBase {
    "AmericanSocietyOfAppraisers" = "AmericanSocietyOfAppraisers",
    "AmericanSocietyOfFarmManagersAndRuralAppraisers" = "AmericanSocietyOfFarmManagersAndRuralAppraisers",
    "AppraisalInstitute" = "AppraisalInstitute",
    "NationalAssociationIndependentFeeAppraisers" = "NationalAssociationIndependentFeeAppraisers",
    "NationalAssociationOfRealtors" = "NationalAssociationOfRealtors",
    "RoyalInstituteOfCharteredSurveyors" = "RoyalInstituteOfCharteredSurveyors"
}
;
/**
 * Term: Appraiser Designation Type Definition: The designation type held by the appraiser awarded by a recognized appraisal trade organization.
 */
export enum AppraiserDesignationBase {
    "AccreditedAgriculturalConsultant" = "AccreditedAgriculturalConsultant",
    "AccreditedFarmManager" = "AccreditedFarmManager",
    "AccreditedMember" = "AccreditedMember",
    "AccreditedRuralAppraiser" = "AccreditedRuralAppraiser",
    "AccreditedSeniorAppraiser" = "AccreditedSeniorAppraiser",
    "AssociateOfTheRoyalInstitutionOfCharteredSurveyors" = "AssociateOfTheRoyalInstitutionOfCharteredSurveyors",
    "DesignatedMember" = "DesignatedMember",
    "DesignatedMemberAgricultural" = "DesignatedMemberAgricultural",
    "DesignatedMemberCounselor" = "DesignatedMemberCounselor",
    "DesignatedMemberSenior" = "DesignatedMemberSenior",
    "FellowOfTheRoyalInstitutionOfCharteredSurveyors" = "FellowOfTheRoyalInstitutionOfCharteredSurveyors",
    "GeneralAccreditedAppraiser" = "GeneralAccreditedAppraiser",
    "MemberAppraisalInstitute" = "MemberAppraisalInstitute",
    "MemberOfTheRoyalInstitutionOfCharteredSurveyors" = "MemberOfTheRoyalInstitutionOfCharteredSurveyors",
    "Other" = "Other",
    "RealPropertyReviewAppraiser" = "RealPropertyReviewAppraiser",
    "ResidentialAccreditedAppraiser" = "ResidentialAccreditedAppraiser",
    "SeniorRealPropertyAppraiser" = "SeniorRealPropertyAppraiser",
    "SeniorResidentialAppraiser" = "SeniorResidentialAppraiser"
}
;
/**
 * Term: Appraiser Employment Type Definition: A value from a MISMO prescribed list that represents the employment category for the appraiser.
 */
export enum AppraiserEmploymentBase {
    "IndependentFeeAppraiser" = "IndependentFeeAppraiser",
    "StaffAppraiser" = "StaffAppraiser"
}
;
/**
 * Term: Appraiser License Type Definition: Used to specify the different types of appraisal licenses that can be held by an appraiser.
 */
export enum AppraiserLicenseBase {
    "CertifiedGeneral" = "CertifiedGeneral",
    "CertifiedResidential" = "CertifiedResidential",
    "LicensedResidentialAppraiser" = "LicensedResidentialAppraiser",
    "None" = "None",
    "Other" = "Other",
    "RegisteredTraineeApprentice" = "RegisteredTraineeApprentice",
    "TraineeAppraiser" = "TraineeAppraiser"
}
;
/**
 * Term: Approximate Ceiling Height Type Definition: A value from a MISMO prescribed list that represents the approximate ceiling height.
 */
export enum ApproximateCeilingHeightBase {
    "EightFeet" = "EightFeet",
    "LessThanSevenFeet" = "LessThanSevenFeet",
    "NineFeet" = "NineFeet",
    "SevenFeet" = "SevenFeet",
    "TenFeetAndAbove" = "TenFeetAndAbove",
    "TwoOrMoreStories" = "TwoOrMoreStories"
}
;
/**
 * Term: Appurtenance Type Definition:  A feature that is included as part of a parcel of property (usually in a condominium) but may not be located in physical proximity to the parcel and is not constructed as an improvement on the parcel.
 */
export enum AppurtenanceBase {
    "BoatSlip" = "BoatSlip",
    "GarageSpace" = "GarageSpace",
    "Other" = "Other",
    "ParkingSpace" = "ParkingSpace",
    "StorageUnit" = "StorageUnit"
}
;
/**
 * Term: Architectural Design Category Type Definition: A value from a MISMO prescribed list that represents the type of architectural design for detached dwellings, as defined by local markets.
 */
export enum ArchitecturalDesignCategoryBase {
    "AFrame" = "AFrame",
    "Barn" = "Barn",
    "BiLevel" = "BiLevel",
    "Bungalow" = "Bungalow",
    "CapeCod" = "CapeCod",
    "Chalet" = "Chalet",
    "Colonial" = "Colonial",
    "Contemporary" = "Contemporary",
    "Cottage" = "Cottage",
    "Craftsman" = "Craftsman",
    "EarthBerm" = "EarthBerm",
    "English" = "English",
    "Farmhouse" = "Farmhouse",
    "French" = "French",
    "GeodesicDome" = "GeodesicDome",
    "Georgian" = "Georgian",
    "Log" = "Log",
    "LowCountry" = "LowCountry",
    "Mediterranean" = "Mediterranean",
    "Modern" = "Modern",
    "NeoEclectic" = "NeoEclectic",
    "Other" = "Other",
    "Plantation" = "Plantation",
    "RaisedRanch" = "RaisedRanch",
    "Rambler" = "Rambler",
    "Ranch" = "Ranch",
    "Shotgun" = "Shotgun",
    "Southwest" = "Southwest",
    "Spanish" = "Spanish",
    "SplitFoyerOrEntry" = "SplitFoyerOrEntry",
    "SplitLevel" = "SplitLevel",
    "Stilt" = "Stilt",
    "Traditional" = "Traditional",
    "Tudor" = "Tudor",
    "Victorian" = "Victorian"
}
;
/**
 * Term: Architectural Design Configuration Type Definition: Specifies the configuration of the dwellings within the structure.
 */
export enum ArchitecturalDesignConfigurationBase {
    "Duplex" = "Duplex",
    "Fourplex" = "Fourplex",
    "Other" = "Other",
    "RowHouse" = "RowHouse",
    "Single" = "Single",
    "Triplex" = "Triplex"
}
;
/**
 *
 */
export enum AreaUnitOfMeasureBase {
    "Acres" = "Acres",
    "Hectares" = "Hectares",
    "SquareFeet" = "SquareFeet",
    "SquareMeters" = "SquareMeters",
    "SquareYards" = "SquareYards"
}
;
/**
 * Term: Arrearage Component Type Definition: The component delinquent payment amounts that make up the total arrearage amount.
 */
export enum ArrearageComponentBase {
    "HomeownerAssociationFees" = "HomeownerAssociationFees",
    "HomeownersInsurance" = "HomeownersInsurance",
    "LateFees" = "LateFees",
    "Other" = "Other",
    "PrincipalAndInterest" = "PrincipalAndInterest",
    "Taxes" = "Taxes"
}
;
/**
 * Term: Assertion Of Error Type Definition: A value from a MISMO prescribed list that describes the error alleged by an event participant when the Issue Type is Assertion Of Error.
 */
export enum AssertionOfErrorBase {
    "DisputedFee" = "DisputedFee",
    "FailureToAcceptPayment" = "FailureToAcceptPayment",
    "FailureToApplyPayment" = "FailureToApplyPayment",
    "FailureToCreditPayment" = "FailureToCreditPayment",
    "FailureToIdentifyOwnerAssignee" = "FailureToIdentifyOwnerAssignee",
    "FailureToPayAgreedEscrows" = "FailureToPayAgreedEscrows",
    "FailureToProperlyHandleBorrowerEstate" = "FailureToProperlyHandleBorrowerEstate",
    "FailureToProvideAccurateLossMitigationOptions" = "FailureToProvideAccurateLossMitigationOptions",
    "FailureToProvideAccuratePayoffStatement" = "FailureToProvideAccuratePayoffStatement",
    "FailureToProvideAccurateServicingRecord" = "FailureToProvideAccurateServicingRecord",
    "FilingErrorOfFirstForeclosureNotice" = "FilingErrorOfFirstForeclosureNotice",
    "ForeclosureSaleInViolation" = "ForeclosureSaleInViolation",
    "None" = "None",
    "Other" = "Other"
}
;
/**
 * Term: Asset Account Type Definition: Specifies the type of account in which the assets are held. Usually used when pledging assets as collateral.
 */
export enum AssetAccountBase {
    "BorrowerManagedAccount" = "BorrowerManagedAccount",
    "Other" = "Other",
    "RelatedPartyManagedAccount" = "RelatedPartyManagedAccount"
}
;
/**
 * Term: Asset Type Definition: A value from a MISMO prescribed list that specifies financial assets in a mortgage loan transaction. Assets may be either liquid or fixed and are associated with a corresponding asset amount.
 */
export enum AssetBase {
    "Annuity" = "Annuity",
    "Automobile" = "Automobile",
    "Boat" = "Boat",
    "Bond" = "Bond",
    "BorrowerEstimatedTotalAssets" = "BorrowerEstimatedTotalAssets",
    "BorrowerPrimaryHome" = "BorrowerPrimaryHome",
    "BridgeLoanNotDeposited" = "BridgeLoanNotDeposited",
    "CashOnHand" = "CashOnHand",
    "CertificateOfDepositTimeDeposit" = "CertificateOfDepositTimeDeposit",
    "CheckingAccount" = "CheckingAccount",
    "EarnestMoneyCashDepositTowardPurchase" = "EarnestMoneyCashDepositTowardPurchase",
    "EmployerAssistance" = "EmployerAssistance",
    "GiftOfCash" = "GiftOfCash",
    "GiftOfPropertyEquity" = "GiftOfPropertyEquity",
    "GiftsTotal" = "GiftsTotal",
    "Grant" = "Grant",
    "IndividualDevelopmentAccount" = "IndividualDevelopmentAccount",
    "LifeInsurance" = "LifeInsurance",
    "MoneyMarketFund" = "MoneyMarketFund",
    "MutualFund" = "MutualFund",
    "NetWorthOfBusinessOwned" = "NetWorthOfBusinessOwned",
    "Other" = "Other",
    "PendingNetSaleProceedsFromRealEstateAssets" = "PendingNetSaleProceedsFromRealEstateAssets",
    "ProceedsFromSaleOfNonRealEstateAsset" = "ProceedsFromSaleOfNonRealEstateAsset",
    "ProceedsFromSecuredLoan" = "ProceedsFromSecuredLoan",
    "ProceedsFromUnsecuredLoan" = "ProceedsFromUnsecuredLoan",
    "RealEstateOwned" = "RealEstateOwned",
    "RecreationalVehicle" = "RecreationalVehicle",
    "RelocationMoney" = "RelocationMoney",
    "RetirementFund" = "RetirementFund",
    "SaleOtherAssets" = "SaleOtherAssets",
    "SavingsAccount" = "SavingsAccount",
    "SavingsBond" = "SavingsBond",
    "SeverancePackage" = "SeverancePackage",
    "Stock" = "Stock",
    "StockOptions" = "StockOptions",
    "TrustAccount" = "TrustAccount"
}
;
/**
 * Term: Asset Document Type Definition: The type of documentation used as a means of identifying or verifying assets used in the transaction.
 */
export enum AssetDocumentBase {
    "BankStatement" = "BankStatement",
    "FinancialStatement" = "FinancialStatement",
    "InvestmentAccountStatement" = "InvestmentAccountStatement",
    "Other" = "Other",
    "Receipt" = "Receipt",
    "RelocationBuyoutAgreement" = "RelocationBuyoutAgreement",
    "RetirementAccountStatement" = "RetirementAccountStatement",
    "SettlementStatement" = "SettlementStatement",
    "VerbalStatement" = "VerbalStatement",
    "VerificationOfDeposit" = "VerificationOfDeposit"
}
;
/**
 * Term: Asset Transaction Type Definition: A value from a MISMO prescribed list that classifies an asset transaction.
 */
export enum AssetTransactionBase {
    "AccountTransfer" = "AccountTransfer",
    "Deposit" = "Deposit",
    "DividendPayout" = "DividendPayout",
    "InterestEarned" = "InterestEarned",
    "InvestmentDistribution" = "InvestmentDistribution",
    "Other" = "Other",
    "Purchase" = "Purchase",
    "Sale" = "Sale",
    "Withdrawal" = "Withdrawal"
}
;
/**
 * Term: Assignment Condition Type Definition: Indicates the type of conditions applied at the assignment level affecting the vendor selection process.
 */
export enum AssignmentConditionBase {
    "CertifiedAppraiser" = "CertifiedAppraiser",
    "CertifiedGeneral" = "CertifiedGeneral",
    "FHARoster" = "FHARoster",
    "NoTrainee" = "NoTrainee",
    "Other" = "Other",
    "PreApprovedByClient" = "PreApprovedByClient",
    "ProfessionalDesignation" = "ProfessionalDesignation",
    "VAPanel" = "VAPanel"
}
;
/**
 * Term: Assignment Parameter Type Definition: The specific assignment parameter to be applied by the valuation professional in the execution of the assignment order.
 */
export enum AssignmentParameterBase {
    "AVM" = "AVM",
    "BirdsEyeAerialMap" = "BirdsEyeAerialMap",
    "CurrentLicense" = "CurrentLicense",
    "DetailedConditionComments" = "DetailedConditionComments",
    "ErrorsAndOmissionsDeclaration" = "ErrorsAndOmissionsDeclaration",
    "ExteriorOnlyInspection" = "ExteriorOnlyInspection",
    "ExteriorPhotoFront" = "ExteriorPhotoFront",
    "ExteriorPhotoRear" = "ExteriorPhotoRear",
    "InteriorExteriorInspection" = "InteriorExteriorInspection",
    "InteriorInspection" = "InteriorInspection",
    "InteriorPhotoBath" = "InteriorPhotoBath",
    "InteriorPhotoBedroom" = "InteriorPhotoBedroom",
    "InteriorPhotoKitchen" = "InteriorPhotoKitchen",
    "InteriorPhotoLivingArea" = "InteriorPhotoLivingArea",
    "LocationMap" = "LocationMap",
    "MarketAnalysis" = "MarketAnalysis",
    "NoInvoice" = "NoInvoice",
    "Other" = "Other",
    "PhotoAdverseCondition" = "PhotoAdverseCondition",
    "PhotoCarbonMonoxideDetector" = "PhotoCarbonMonoxideDetector",
    "PhotoFunctionalObsolescence" = "PhotoFunctionalObsolescence",
    "PhotoHeatingVentalationAirConditioning" = "PhotoHeatingVentalationAirConditioning",
    "PlatMap" = "PlatMap",
    "ProofOfElectricity" = "ProofOfElectricity",
    "ProofOfRunningWater" = "ProofOfRunningWater",
    "PropertyDataReport" = "PropertyDataReport",
    "RenovationRestorationPhoto" = "RenovationRestorationPhoto",
    "SafteyLatchWindowPhoto" = "SafteyLatchWindowPhoto",
    "Sketch" = "Sketch",
    "TaxAssementRecord" = "TaxAssementRecord"
}
;
/**
 * Term: Assignment Parameter Priority Type Definition: Describes the rule authority to be applied when using the assignment parameter.
 */
export enum AssignmentParameterPriorityBase {
    "ClientSpecificOnly" = "ClientSpecificOnly",
    "Combined" = "Combined",
    "MutuallyExclusive" = "MutuallyExclusive",
    "Override" = "Override",
    "SequentiallyApplied" = "SequentiallyApplied"
}
;
/**
 * Term: Assignment Parameter Source Type Definition: Describes the type of source for the assignment instruction being applied.
 */
export enum AssignmentParameterSourceBase {
    "AssignmentSpecific" = "AssignmentSpecific",
    "ClientSpecific" = "ClientSpecific",
    "MasterAgreement" = "MasterAgreement",
    "Other" = "Other"
}
;
/**
 * Term: Assistance Type Definition: The type of assistance offered for a completed workout.
 */
export enum AssistanceBase {
    "Other" = "Other",
    "PayForPerformance" = "PayForPerformance",
    "Relocation" = "Relocation"
}
;
/**
 * Term: Assistance Recipient Type Definition: The type of party that is the recipient of the assistance with a workout.
 */
export enum AssistanceRecipientBase {
    "Borrower" = "Borrower",
    "Other" = "Other",
    "PrivateInvestor" = "PrivateInvestor",
    "Servicer" = "Servicer"
}
;
/**
 * Term: Assistance Source Type Definition: The type of party that is providing the assistance with a workout.
 */
export enum AssistanceSourceBase {
    "Investor" = "Investor",
    "Other" = "Other"
}
;
/**
 * Term: Association Charge Type Definition: A value from a MISMO prescribed list that represents an amount charged when the property is part of an association (e.g. Homeowners Association, Condominium Association).
 */
export enum AssociationChargeBase {
    "AssociationDues" = "AssociationDues",
    "AssociationSpecialAssessment" = "AssociationSpecialAssessment",
    "Other" = "Other",
    "OwnershipTransferFee" = "OwnershipTransferFee"
}
;
/**
 * Term: Association Charge Includes Utility Type Definition: A value from a MISMO prescribed list that represents a utility or service included as part of the association charges.
 */
export enum AssociationChargeIncludesUtilityBase {
    "Cooling" = "Cooling",
    "Electricity" = "Electricity",
    "Gas" = "Gas",
    "Heating" = "Heating",
    "None" = "None",
    "Other" = "Other",
    "SanitarySewer" = "SanitarySewer",
    "Water" = "Water"
}
;
/**
 * Term: Association Charge Period Type Definition: A value from a MISMO prescribed list that represents the period for which the association charges are assessed.
 */
export enum AssociationChargePeriodBase {
    "Monthly" = "Monthly",
    "OneTime" = "OneTime",
    "Other" = "Other",
    "Quarterly" = "Quarterly"
}
;
/**
 * Term: Association Special Assessment Status Type Definition: A value from a MISMO prescribed list that represents the existence of, proposal of, or absence of special assessments for the project.
 */
export enum AssociationSpecialAssessmentStatusBase {
    "Existing" = "Existing",
    "None" = "None",
    "Proposed" = "Proposed"
}
;
/**
 * Term: Assumability Type Definition: Specifies when the loan assumption is permitted.
 */
export enum AssumabilityBase {
    "AssumableAfterFirstRateChangeDate" = "AssumableAfterFirstRateChangeDate",
    "AssumableForLifeOfLoan" = "AssumableForLifeOfLoan",
    "Other" = "Other"
}
;
/**
 * Term: Attachment Type Definition: A value from a MISMO prescribed list that specifies the type of physical attachment, if any, between the dwelling and adjacent dwellings.
 */
export enum AttachmentBase {
    "Attached" = "Attached",
    "Detached" = "Detached",
    "SemiDetached" = "SemiDetached"
}
;
/**
 * Term: Attic Feature Type Definition: Specifies the aspect or feature that is present in the attic of the structure.
 */
export enum AtticFeatureBase {
    "DropStair" = "DropStair",
    "Finished" = "Finished",
    "Floor" = "Floor",
    "Heated" = "Heated",
    "Other" = "Other",
    "Scuttle" = "Scuttle",
    "Stairs" = "Stairs"
}
;
/**
 * Term: Attorney Function Type Definition: The type of function the attorney is performing in this instance.
 */
export enum AttorneyFunctionBase {
    "Bankruptcy" = "Bankruptcy",
    "Foreclosure" = "Foreclosure",
    "Other" = "Other"
}
;
/**
 * Term: Automated Underwriting System Type Definition: A value from a MISMO prescribed list that represents the automated underwriting system used to evaluate a loan.
 */
export enum AutomatedUnderwritingSystemBase {
    "Assetwise" = "Assetwise",
    "Capstone" = "Capstone",
    "Clues" = "Clues",
    "DecisionEngine" = "DecisionEngine",
    "DesktopUnderwriter" = "DesktopUnderwriter",
    "ECS" = "ECS",
    "FHAScorecard" = "FHAScorecard",
    "FirstMortgageCreditScore" = "FirstMortgageCreditScore",
    "GuaranteedUnderwritingSystem" = "GuaranteedUnderwritingSystem",
    "LoanProductAdvisor" = "LoanProductAdvisor",
    "LoanProspector" = "LoanProspector",
    "Other" = "Other",
    "Strategyware" = "Strategyware",
    "Zippy" = "Zippy"
}
;
/**
 * Term: AVM Index Type Definition: The name of the published index used in the AVM.
 */
export enum AVMIndexBase {
    "CoreLogic" = "CoreLogic",
    "FederalHousingFinanceAdministration" = "FederalHousingFinanceAdministration",
    "LenderProcessingServices" = "LenderProcessingServices",
    "NationalAssociationRealtorsPendingHomeSale" = "NationalAssociationRealtorsPendingHomeSale",
    "Other" = "Other",
    "StandardsPoorCaseShiller" = "StandardsPoorCaseShiller"
}
;
/**
 * Term: AVM Index Source Type Definition: A value from a MISMO list that represents the name of the publisher of the repeat sales index data used in an automated valuation process.
 */
export enum AVMIndexSourceBase {
    "CaseShiller" = "CaseShiller",
    "FHFA" = "FHFA",
    "NationalAssociationOfHomeBuilders" = "NationalAssociationOfHomeBuilders",
    "NationalAssociationOfRealtors" = "NationalAssociationOfRealtors",
    "Other" = "Other"
}
;
/**
 * Term: AVM Method Type Definition: Specifies the method used by the Automated Valuation system.
 */
export enum AVMMethodBase {
    "Assisted" = "Assisted",
    "HedonicModel" = "HedonicModel",
    "Hybrid" = "Hybrid",
    "Interactive" = "Interactive",
    "Other" = "Other",
    "RepeatSalesModel" = "RepeatSalesModel",
    "Unknown" = "Unknown"
}
;
/**
 * Term: AVM Model Name Type Definition: A value from a MISMO prescribed list that represents the name of the AVM model used to calculate the valuation of the subject property.
 */
export enum AVMModelNameBase {
    "AutomatedPropertyService" = "AutomatedPropertyService",
    "AVMax" = "AVMax",
    "Casa" = "Casa",
    "CAValue" = "CAValue",
    "CollateralMarketValue" = "CollateralMarketValue",
    "CollateralValuationModel" = "CollateralValuationModel",
    "GEOCompVal" = "GEOCompVal",
    "HomePriceAnalyzer" = "HomePriceAnalyzer",
    "HomeValueExplorer" = "HomeValueExplorer",
    "IntellirealAVM" = "IntellirealAVM",
    "IVal" = "IVal",
    "Other" = "Other",
    "Pass" = "Pass",
    "PowerBase6" = "PowerBase6",
    "RealAssessment" = "RealAssessment",
    "RealtorValuationModel" = "RealtorValuationModel",
    "Relar" = "Relar",
    "SiteXValue" = "SiteXValue",
    "ValueFinder" = "ValueFinder",
    "ValuePoint" = "ValuePoint",
    "ValuePoint4" = "ValuePoint4",
    "ValuePointPlus" = "ValuePointPlus",
    "ValueSmart" = "ValueSmart",
    "ValueSure" = "ValueSure",
    "VeroIndexPlus" = "VeroIndexPlus",
    "VeroValue" = "VeroValue",
    "VeroValueAdvantage" = "VeroValueAdvantage",
    "VeroValuePreferred" = "VeroValuePreferred"
}
;
/**
 * Term: AVM Outcome Type Definition: The type of value computed by the AVM for presentation.
 */
export enum AVMOutcomeBase {
    "IndicatedValue" = "IndicatedValue",
    "NetValue" = "NetValue",
    "Other" = "Other"
}
;
/**
 * Term: Bankruptcy Action Type Definition: Specifies an action or step taken in the bankruptcy process.
 */
export enum BankruptcyActionBase {
    "AmendedPetitionFiled" = "AmendedPetitionFiled",
    "ComplaintToDetermineExtentAndValidityOfLien" = "ComplaintToDetermineExtentAndValidityOfLien",
    "ConsentOrderFiled" = "ConsentOrderFiled",
    "DebtDischargeGranted" = "DebtDischargeGranted",
    "DeclarationOfIntentToSurrenderOtherAssets" = "DeclarationOfIntentToSurrenderOtherAssets",
    "DeclarationOfIntentToSurrenderSubjectProperty" = "DeclarationOfIntentToSurrenderSubjectProperty",
    "MortgageDebtReaffirmed" = "MortgageDebtReaffirmed",
    "MotionForDischargeFiled" = "MotionForDischargeFiled",
    "MotionForDischargeHearingHeld" = "MotionForDischargeHearingHeld",
    "MotionForDismissalFiled" = "MotionForDismissalFiled",
    "MotionForReliefFiled" = "MotionForReliefFiled",
    "MotionForReliefGranted" = "MotionForReliefGranted",
    "MotionForReliefHearingHeld" = "MotionForReliefHearingHeld",
    "MotionToAvoidLien" = "MotionToAvoidLien",
    "MotionToConvertChapter" = "MotionToConvertChapter",
    "MotionToDetermineLienPriority" = "MotionToDetermineLienPriority",
    "MotionToSell" = "MotionToSell",
    "MotionToValueCollateral" = "MotionToValueCollateral",
    "NoticeOfMortgagePaymentChange" = "NoticeOfMortgagePaymentChange",
    "ObjectionToConfirmation" = "ObjectionToConfirmation",
    "ObjectionToDischarge" = "ObjectionToDischarge",
    "Other" = "Other",
    "PetitionFiled" = "PetitionFiled",
    "PlanObjection" = "PlanObjection",
    "PostPetitionPlanFiled" = "PostPetitionPlanFiled",
    "ProofOfClaimFiled" = "ProofOfClaimFiled",
    "ProofOfClaimReferred" = "ProofOfClaimReferred",
    "ServicerReferredNoticeToAttorney" = "ServicerReferredNoticeToAttorney"
}
;
/**
 * Term: Bankruptcy Attorney Service Referral Type Definition: Indicates the type of instructions from the servicer to the bankruptcy attorney on the portion of the bankruptcy proceedings the attorney is to complete on the servicer's behalf.
 */
export enum BankruptcyAttorneyServiceReferralBase {
    "CompleteProcessReferral" = "CompleteProcessReferral",
    "DebtBifurcation" = "DebtBifurcation",
    "MotionForRelief" = "MotionForRelief",
    "MotionToValue" = "MotionToValue",
    "Other" = "Other",
    "PlanObjection" = "PlanObjection",
    "PlanReview" = "PlanReview",
    "ProofOfClaim" = "ProofOfClaim"
}
;
/**
 * Term: Bankruptcy Type Definition: Indicates whether the borrower or guarantor has filed a bankruptcy related to their personal assets or whether the bankruptcy is related to a business in which the borrower is a principal.
 */
export enum BankruptcyBase {
    "Business" = "Business",
    "Personal" = "Personal"
}
;
/**
 * Term: Bankruptcy Chapter Type Definition: Chapter under which bankruptcy has been filed.
 */
export enum BankruptcyChapterBase {
    "ChapterEleven" = "ChapterEleven",
    "ChapterFifteen" = "ChapterFifteen",
    "ChapterSeven" = "ChapterSeven",
    "ChapterThirteen" = "ChapterThirteen",
    "ChapterTwelve" = "ChapterTwelve",
    "Other" = "Other",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Bankruptcy Delay Category Type Definition: A value from a MISMO prescribed list that represents a general grouping for activities that may create a delay in the actual bankruptcy process.
 */
export enum BankruptcyDelayCategoryBase {
    "ContestedOrLitigatedAction" = "ContestedOrLitigatedAction",
    "ImpactedPartyProcess" = "ImpactedPartyProcess",
    "LegalProcess" = "LegalProcess",
    "LegislativeChange" = "LegislativeChange",
    "Mediation" = "Mediation",
    "MilitaryIndulgence" = "MilitaryIndulgence",
    "MissingDocument" = "MissingDocument",
    "Other" = "Other",
    "Probate" = "Probate",
    "TitleIssue" = "TitleIssue"
}
;
/**
 * Term: Bankruptcy Disposition Type Definition: The administrative standing of the bankruptcy case based upon a court ruling at a procedural milestone.
 */
export enum BankruptcyDispositionBase {
    "Confirmed" = "Confirmed",
    "Discharged" = "Discharged",
    "Dismissed" = "Dismissed",
    "Other" = "Other",
    "Pending" = "Pending"
}
;
/**
 * Term: Bankruptcy Payment Change Notice Reason Type Definition: Indicates the reason that a Payment Change Notice was filed reflecting a change in the amount due to the servicer.
 */
export enum BankruptcyPaymentChangeNoticeReasonBase {
    "ARMAdjustment" = "ARMAdjustment",
    "CommunityDevelopmentDistrictFeeChange" = "CommunityDevelopmentDistrictFeeChange",
    "HomeownersAssociationFeeChange" = "HomeownersAssociationFeeChange",
    "InsuranceChange" = "InsuranceChange",
    "Other" = "Other",
    "PropertyTaxChange" = "PropertyTaxChange"
}
;
/**
 * Term: Bankruptcy Plan Amended Type Definition: Indicates the type of amendment being made to a bankruptcy plan.
 */
export enum BankruptcyPlanAmendedBase {
    "ChapterFifteen" = "ChapterFifteen",
    "PlanDateExtended" = "PlanDateExtended",
    "PlanDisbursementAmountIncreased" = "PlanDisbursementAmountIncreased",
    "PlanDisbursementAmountReduced" = "PlanDisbursementAmountReduced",
    "PlanLengthReduced" = "PlanLengthReduced"
}
;
/**
 * Term: Bankruptcy Status Type Definition: The documented status of the bankruptcy.
 */
export enum BankruptcyStatusBase {
    "Active" = "Active",
    "Closed" = "Closed",
    "Other" = "Other"
}
;
/**
 * Term: Basement Feature Type Definition: Specifies the basement feature that is present in the basement.
 */
export enum BasementFeatureBase {
    "FloorDrain" = "FloorDrain",
    "Other" = "Other",
    "OutsideEntry" = "OutsideEntry"
}
;
/**
 * Term: Bath Equipment Type Definition: A collection of values that specify the bath equipment normally found in a living unit or residence.
 */
export enum BathEquipmentBase {
    "AutomaticVentSystem" = "AutomaticVentSystem",
    "DualSinks" = "DualSinks",
    "GardenTub" = "GardenTub",
    "HeatedFloors" = "HeatedFloors",
    "HeatLamps" = "HeatLamps",
    "LowFlowShowerheads" = "LowFlowShowerheads",
    "LowFlushToliet" = "LowFlushToliet",
    "Other" = "Other",
    "RomanShower" = "RomanShower",
    "SingleSink" = "SingleSink",
    "SolidSurfaceManmadeCountertop" = "SolidSurfaceManmadeCountertop",
    "SolidSurfaceNaturalCountertop" = "SolidSurfaceNaturalCountertop",
    "StallShower" = "StallShower",
    "SteamShower" = "SteamShower",
    "TubShower" = "TubShower",
    "Vanity" = "Vanity",
    "WaterEffecientFaucet" = "WaterEffecientFaucet"
}
;
/**
 * Term: Below Grade Exterior Access Type Definition: A value from a MISMO prescribed list that represents the primary type of exterior access for any below grade area.
 */
export enum BelowGradeExteriorAccessBase {
    "CellarDoor" = "CellarDoor",
    "Other" = "Other",
    "WalkOut" = "WalkOut",
    "WalkUp" = "WalkUp"
}
;
/**
 * Term: Body Of Water Type Definition: A value from a MISMO prescribed list that represents the type of water body located on or near the property.
 */
export enum BodyOfWaterBase {
    "Bay" = "Bay",
    "Canal" = "Canal",
    "Cove" = "Cove",
    "Creek" = "Creek",
    "Gulf" = "Gulf",
    "Lake" = "Lake",
    "Marsh" = "Marsh",
    "Ocean" = "Ocean",
    "Other" = "Other",
    "Pond" = "Pond",
    "Reservoir" = "Reservoir",
    "River" = "River",
    "Sound" = "Sound"
}
;
/**
 * Term: Body Of Water Proximity Type Definition: A value from a MISMO prescribed list that represents proximity of the body of water to the property.
 */
export enum BodyOfWaterProximityBase {
    "Bordering" = "Bordering",
    "Offsite" = "Offsite",
    "Onsite" = "Onsite"
}
;
/**
 * Term: Borrower Characteristic Type Definition: Specifies the classification applied to a borrower for the purposes of processing or reporting.
 */
export enum BorrowerCharacteristicBase {
    "LivingTrust" = "LivingTrust",
    "Other" = "Other",
    "SeasonedWorker" = "SeasonedWorker",
    "SellerEmployee" = "SellerEmployee",
    "TrailingBorrower" = "TrailingBorrower"
}
;
/**
 * Term: Borrower Classification Type Definition: Indicates whether the borrower is the primary or a secondary borrower.
 */
export enum BorrowerClassificationBase {
    "Primary" = "Primary",
    "Secondary" = "Secondary"
}
;
/**
 * Term: Borrower Relationship Title Type Definition: The description of the relationship of a borrower to (an) other borrower(s), if any, for Title purposes.
 */
export enum BorrowerRelationshipTitleBase {
    "AHusbandAndWife" = "AHusbandAndWife",
    "AMarriedCouple" = "AMarriedCouple",
    "AMarriedMan" = "AMarriedMan",
    "AMarriedPerson" = "AMarriedPerson",
    "AMarriedWoman" = "AMarriedWoman",
    "AnUnmarriedMan" = "AnUnmarriedMan",
    "AnUnmarriedPerson" = "AnUnmarriedPerson",
    "AnUnmarriedWoman" = "AnUnmarriedWoman",
    "ASameSexMarriedCouple" = "ASameSexMarriedCouple",
    "AsDomesticPartners" = "AsDomesticPartners",
    "ASingleMan" = "ASingleMan",
    "ASinglePerson" = "ASinglePerson",
    "ASingleWoman" = "ASingleWoman",
    "AWidow" = "AWidow",
    "AWidower" = "AWidower",
    "AWifeAndHusband" = "AWifeAndHusband",
    "HerHusband" = "HerHusband",
    "HisWife" = "HisWife",
    "JoinedInACivilUnion" = "JoinedInACivilUnion",
    "JoinedInACommonLawMarriage" = "JoinedInACommonLawMarriage",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other"
}
;
/**
 * Term: Borrower Residency Type Definition: This attribute, accompanying borrower residence data, qualifies it as either the current or prior borrower's residence.
 */
export enum BorrowerResidencyBase {
    "Current" = "Current",
    "Prior" = "Prior"
}
;
/**
 * Term: Borrower Residency Basis Type Definition: A value from a MISMO prescribed list that specifies the basis on which the borrower lives/lived at the indicated address.
 */
export enum BorrowerResidencyBasisBase {
    "LivingRentFree" = "LivingRentFree",
    "Own" = "Own",
    "Rent" = "Rent",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Borrower Vacancy Reason Type Definition: Specifies the reason that the borrower does not occupy the delinquent property.
 */
export enum BorrowerVacancyReasonBase {
    "Abandoned" = "Abandoned",
    "CashForKeys" = "CashForKeys",
    "DeedInLieu" = "DeedInLieu",
    "Eviction" = "Eviction",
    "Other" = "Other",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Boundary Type Definition: The boundary type indicated for a specific boundary along with a boundary direction.
 */
export enum BoundaryBase {
    "Alley" = "Alley",
    "Other" = "Other",
    "Street" = "Street",
    "Waterway" = "Waterway"
}
;
/**
 * Term: Boundary Direction Type Definition: The boundary direction type indicated for a specific boundary along with a boundary type.
 */
export enum BoundaryDirectionBase {
    "East" = "East",
    "North" = "North",
    "NorthEast" = "NorthEast",
    "NorthWest" = "NorthWest",
    "Other" = "Other",
    "South" = "South",
    "SouthEast" = "SouthEast",
    "SouthWest" = "SouthWest",
    "West" = "West"
}
;
/**
 * Term: Building Permit Level Type Definition: Indicates the level or classification of the instance of the Building Permit Work Type.
 */
export enum BuildingPermitLevelBase {
    "Final" = "Final",
    "Maintenance" = "Maintenance",
    "Other" = "Other",
    "Recurring" = "Recurring",
    "SubWork" = "SubWork",
    "Temporary" = "Temporary",
    "Transitional" = "Transitional"
}
;
/**
 * Term: Building Permit Status Type Definition: The current status for this permit.
 */
export enum BuildingPermitStatusBase {
    "Applied" = "Applied",
    "Cancelled" = "Cancelled",
    "Completed" = "Completed",
    "Expired" = "Expired",
    "Issued" = "Issued",
    "OnHold" = "OnHold",
    "Other" = "Other",
    "Unknown" = "Unknown",
    "Voided" = "Voided"
}
;
/**
 * Term: Building Permit Usage Standard Type Definition: The usage standard designation assigned by the permitting authority for this permit.
 */
export enum BuildingPermitUsageStandardBase {
    "Commercial" = "Commercial",
    "Hazardous" = "Hazardous",
    "Industrial" = "Industrial",
    "MultiFamily" = "MultiFamily",
    "Other" = "Other",
    "SingleFamily" = "SingleFamily"
}
;
/**
 * Term: Building Permit Work Type Definition: The primary type of trade work permissions on this permit and is directly related to the type of inspection for the component of the structure that would be required by the respective jurisdictional building code and conducted by the local permitting authority.
 */
export enum BuildingPermitWorkBase {
    "Building" = "Building",
    "Demolition" = "Demolition",
    "Electrical" = "Electrical",
    "Mechanical" = "Mechanical",
    "Other" = "Other",
    "Plumbing" = "Plumbing"
}
;
/**
 * Term: Building Permit Work Purpose Type Definition: The class of work related to the current structure(s) (if any) on the property for this permit.
 */
export enum BuildingPermitWorkPurposeBase {
    "Addition" = "Addition",
    "Demolition" = "Demolition",
    "NewConstruction" = "NewConstruction",
    "Other" = "Other",
    "Remodel" = "Remodel",
    "Repair" = "Repair",
    "Replace" = "Replace",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Buydown Base Date Type Definition: The date from which the duration of the buydown is counted.
 */
export enum BuydownBaseDateBase {
    "FirstPaymentDate" = "FirstPaymentDate",
    "LastPaymentDate" = "LastPaymentDate",
    "NoteDate" = "NoteDate",
    "Other" = "Other"
}
;
/**
 * Term: Buydown Calculation Type Definition: The value to be used to base buydown calculations. Original loan amount or declining loan amount.
 */
export enum BuydownCalculationBase {
    "DecliningLoanBalance" = "DecliningLoanBalance",
    "OriginalLoanAmount" = "OriginalLoanAmount"
}
;
/**
 * Term: Buydown Funding Type Definition: The method used for providing the buydown funds.
 */
export enum BuydownFundingBase {
    "Financed" = "Financed",
    "IncreaseInInterestRate" = "IncreaseInInterestRate",
    "LumpSumCash" = "LumpSumCash",
    "Other" = "Other"
}
;
/**
 * Term: Buydown Payoff Disbursement Type Definition: Describes how the remaining buydown funds are disbursed at time of payoff.
 */
export enum BuydownPayoffDisbursementBase {
    "ApplyToPrincipal" = "ApplyToPrincipal",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Calculation Type Definition: A value from a MISMO prescribed list that specifies the type of calculation requested or performed.
 */
export enum CalculationBase {
    "AggregateAdjustment" = "AggregateAdjustment",
    "MonthlyMortgageInsurance" = "MonthlyMortgageInsurance",
    "MonthlyPrincipalAndInterest" = "MonthlyPrincipalAndInterest",
    "Other" = "Other"
}
;
/**
 * Term: Capitalization Charge Type Definition: Specifies the type of fee or charge that is capitalized into the principal balance.
 */
export enum CapitalizationChargeBase {
    "AttorneyFees" = "AttorneyFees",
    "DelinquentHomeownersFees" = "DelinquentHomeownersFees",
    "DelinquentInterest" = "DelinquentInterest",
    "EscrowShortages" = "EscrowShortages",
    "LateCharge" = "LateCharge",
    "Other" = "Other",
    "UnreportedInterest" = "UnreportedInterest"
}
;
/**
 * Term: Car Storage Attachment Type Definition: A value from a MISMO prescribed list that specifies how the vehicle storage is connected to a dwelling.
 */
export enum CarStorageAttachmentBase {
    "Attached" = "Attached",
    "BuiltIn" = "BuiltIn",
    "Detached" = "Detached"
}
;
/**
 * Term: Car Storage Type Definition: A value from a MISMO prescribed list that specifies the type of vehicle storage.
 */
export enum CarStorageBase {
    "Carport" = "Carport",
    "CommonCarport" = "CommonCarport",
    "Covered" = "Covered",
    "Driveway" = "Driveway",
    "Garage" = "Garage",
    "None" = "None",
    "OffStreet" = "OffStreet",
    "Open" = "Open",
    "OpenLot" = "OpenLot",
    "Other" = "Other",
    "ParkingGarage" = "ParkingGarage",
    "SharedDriveway" = "SharedDriveway"
}
;
/**
 * Term: Car Storages Comparison Type Definition: A value from a MISMO prescribed list which represents the overall rating of the differences between the comparable and the subject for all types of vehicle storage included in the rental agreement.
 */
export enum CarStoragesComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Ceiling Style Type Definition: A value from a MISMO prescribed list that represents the style of the ceiling.
 */
export enum CeilingStyleBase {
    "Barrel" = "Barrel",
    "Beams" = "Beams",
    "Cathedral" = "Cathedral",
    "Coffered" = "Coffered",
    "Drop" = "Drop",
    "Flat" = "Flat",
    "Other" = "Other",
    "Tray" = "Tray",
    "Vaulted" = "Vaulted"
}
;
/**
 * Term: Certificate Authority Type Definition: The type of authority which issued the permission for the property.
 */
export enum CertificateAuthorityBase {
    "Other" = "Other",
    "Private" = "Private",
    "PublicFederal" = "PublicFederal",
    "PublicLocalCounty" = "PublicLocalCounty",
    "PublicLocalMunicipal" = "PublicLocalMunicipal",
    "PublicState" = "PublicState"
}
;
/**
 * Term: Certificate Type Definition: The type of certificate issued by a local authority for the property.
 */
export enum CertificateBase {
    "OccupancyCertification" = "OccupancyCertification",
    "Other" = "Other",
    "UsageCertification" = "UsageCertification"
}
;
/**
 * Term: Certificate Status Type Definition: The status for the certificate.
 */
export enum CertificateStatusBase {
    "Approved" = "Approved",
    "Cancelled" = "Cancelled",
    "Denied" = "Denied",
    "Expired" = "Expired",
    "InApplication" = "InApplication",
    "Other" = "Other"
}
;
/**
 * Term: Character Encoding Set Type Definition: Specifies the character encoding set used by the resource content.
 */
export enum CharacterEncodingSetBase {
    "ISO88591" = "ISO88591",
    "Other" = "Other",
    "USASCII" = "USASCII",
    "UTF16" = "UTF16",
    "UTF8" = "UTF8"
}
;
/**
 * Term: Charge Off Item Type Definition: Specifies the type of loss that is to be charged off.
 */
export enum ChargeOffItemBase {
    "AdditionalLien" = "AdditionalLien",
    "Bankruptcy" = "Bankruptcy",
    "Fraud" = "Fraud",
    "Other" = "Other",
    "UncollectedInterest" = "UncollectedInterest",
    "UncollectedPrincipal" = "UncollectedPrincipal",
    "UnrecoverableSpecialHazard" = "UnrecoverableSpecialHazard"
}
;
/**
 * Term: Citizenship Residency Type Definition: A value from a MISMO prescribed list that specifies the U.S. citizenship or alien status of the individual.
 */
export enum CitizenshipResidencyBase {
    "NonPermanentResidentAlien" = "NonPermanentResidentAlien",
    "NonResidentAlien" = "NonResidentAlien",
    "PermanentResidentAlien" = "PermanentResidentAlien",
    "Unknown" = "Unknown",
    "USCitizen" = "USCitizen"
}
;
/**
 * Term: Closing Adjustment Item Type Definition: The type of adjustment made during the origination process.
 */
export enum ClosingAdjustmentItemBase {
    "FuelCosts" = "FuelCosts",
    "Gift" = "Gift",
    "Grant" = "Grant",
    "LenderCredit" = "LenderCredit",
    "Other" = "Other",
    "PrincipalReduction" = "PrincipalReduction",
    "ProceedsOfSubordinateLiens" = "ProceedsOfSubordinateLiens",
    "RebateCredit" = "RebateCredit",
    "RelocationFunds" = "RelocationFunds",
    "RentFromSubjectProperty" = "RentFromSubjectProperty",
    "RepairCompletionEscrowHoldback" = "RepairCompletionEscrowHoldback",
    "Repairs" = "Repairs",
    "SatisfactionOfSubordinateLien" = "SatisfactionOfSubordinateLien",
    "SellerCredit" = "SellerCredit",
    "SellersEscrowAssumption" = "SellersEscrowAssumption",
    "SellersMortgageInsuranceAssumption" = "SellersMortgageInsuranceAssumption",
    "SellersReserveAccountAssumption" = "SellersReserveAccountAssumption",
    "Services" = "Services",
    "SimultaneousTitleDiscountCredit" = "SimultaneousTitleDiscountCredit",
    "SubordinateFinancingProceeds" = "SubordinateFinancingProceeds",
    "SweatEquity" = "SweatEquity",
    "TenantSecurityDeposit" = "TenantSecurityDeposit",
    "TitlePremiumAdjustment" = "TitlePremiumAdjustment",
    "TradeEquity" = "TradeEquity",
    "UnpaidUtilityEscrowHoldback" = "UnpaidUtilityEscrowHoldback"
}
;
/**
 * Term: Closing Adjustment Item Paid By Type Definition: The role of the party making the payment for the closing adjustment item.
 */
export enum ClosingAdjustmentItemPaidByBase {
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Correspondent" = "Correspondent",
    "Lender" = "Lender",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Closing Agent Type Definition: This designates the type of the closing agent.
 */
export enum ClosingAgentBase {
    "Attorney" = "Attorney",
    "EscrowCompany" = "EscrowCompany",
    "Other" = "Other",
    "TitleCompany" = "TitleCompany"
}
;
/**
 * Term: Closing Event Location Type Definition: A value from a MISMO prescribed list that categorizes the location at which a closing event will take place.
 */
export enum ClosingEventLocationBase {
    "ClosingAgentBranch" = "ClosingAgentBranch",
    "LenderBranch" = "LenderBranch",
    "Other" = "Other",
    "SignerBusiness" = "SignerBusiness",
    "SignerCurrentResidence" = "SignerCurrentResidence",
    "SubjectProperty" = "SubjectProperty"
}
;
/**
 * Term: Closing Information Revision Reason Type Definition: A value from a MISMO prescribed list that categorizes the reasons a revision is being made to the closing event, instructions or documents.
 */
export enum ClosingInformationRevisionReasonBase {
    "ChangedBorrowerInformation" = "ChangedBorrowerInformation",
    "ChangedFeeAmount" = "ChangedFeeAmount",
    "ChangedItemPlacement" = "ChangedItemPlacement",
    "Other" = "Other"
}
;
/**
 * Term: Collateral Value Source Type Definition: A value from a MISMO defined list that identifies the source used to obtain the value of the underlying collateral for the loan if the value does not come from an appraisal.
 */
export enum CollateralValueSourceBase {
    "Other" = "Other",
    "PriorSalesContract" = "PriorSalesContract",
    "SalesContract" = "SalesContract",
    "StatedValue" = "StatedValue",
    "ValuationReconciliation" = "ValuationReconciliation"
}
;
/**
 * Term: Collected Other Fund Purpose Type Definition:  Identifies the type of other funds not included in down payment or closing costs.
 */
export enum CollectedOtherFundPurposeBase {
    "AdvancePITIPayment" = "AdvancePITIPayment",
    "EscrowFunds" = "EscrowFunds",
    "Other" = "Other",
    "PrincipalCurtailment" = "PrincipalCurtailment"
}
;
/**
 * Term: Collection Contact Method Type Definition: A value from a MISMO prescribed list that specifies the method used to make contact with the party in a collection effort.
 */
export enum CollectionContactMethodBase {
    "Chat" = "Chat",
    "Email" = "Email",
    "FormLetter" = "FormLetter",
    "Other" = "Other",
    "PhoneCall" = "PhoneCall",
    "Text" = "Text"
}
;
/**
 * Term: Community Lending Product Type Definition: A value from a MISMO prescribed list that classifies the community lending product or affordable lending product associated with the loan.
 */
export enum CommunityLendingProductBase {
    "HFAPreferred" = "HFAPreferred",
    "HFAPreferredRiskSharing" = "HFAPreferredRiskSharing",
    "HomePossible" = "HomePossible",
    "HomePossibleAdvantage" = "HomePossibleAdvantage",
    "HomeReady" = "HomeReady",
    "MyCommunityMortgage" = "MyCommunityMortgage",
    "Other" = "Other"
}
;
/**
 * Term: Community Seconds Repayment Type Definition: A value from a MISMO prescribed list that classifies the payment structure of the community second lending product associated with the loan.
 */
export enum CommunitySecondsRepaymentBase {
    "DeferredFullyForgiven" = "DeferredFullyForgiven",
    "DeferredNotFullyForgiven" = "DeferredNotFullyForgiven",
    "NonDeferred" = "NonDeferred",
    "Other" = "Other"
}
;
/**
 * Term: Comparable Adjustment Type Definition: A value from a MISMO prescribed list that represents an element of comparison between the subject property and comparable property.
 */
export enum ComparableAdjustmentBase {
    "AccessoryDwellingUnitLocation" = "AccessoryDwellingUnitLocation",
    "Additions" = "Additions",
    "AdjustedMonthlyRent" = "AdjustedMonthlyRent",
    "Age" = "Age",
    "ApparentEnvironmentalCondition" = "ApparentEnvironmentalCondition",
    "AttachedOrDetached" = "AttachedOrDetached",
    "BasementArea" = "BasementArea",
    "BasementFinish" = "BasementFinish",
    "CarStorage" = "CarStorage",
    "ClosingDate" = "ClosingDate",
    "CommonElements" = "CommonElements",
    "Condition" = "Condition",
    "ConstructionMethod" = "ConstructionMethod",
    "ContractDate" = "ContractDate",
    "CoolingSystem" = "CoolingSystem",
    "CornerUnit" = "CornerUnit",
    "DesignAppeal" = "DesignAppeal",
    "DesignStyle" = "DesignStyle",
    "DisasterMitigationFeatures" = "DisasterMitigationFeatures",
    "DwellingStyle" = "DwellingStyle",
    "Easement" = "Easement",
    "EffectiveAge" = "EffectiveAge",
    "EnergyEfficientAndGreenFeatures" = "EnergyEfficientAndGreenFeatures",
    "FencePool" = "FencePool",
    "FinancingConcessions" = "FinancingConcessions",
    "FinancingMethod" = "FinancingMethod",
    "Fireplaces" = "Fireplaces",
    "FloorLocation" = "FloorLocation",
    "Forecasting" = "Forecasting",
    "FunctionalIssues" = "FunctionalIssues",
    "Furnishings" = "Furnishings",
    "GarageCarport" = "GarageCarport",
    "GrossBuildingArea" = "GrossBuildingArea",
    "GrossBuildingFinishedArea" = "GrossBuildingFinishedArea",
    "GrossLivingArea" = "GrossLivingArea",
    "GrossRentMultiplierAdditionalNonAdjustableComparisonItem" = "GrossRentMultiplierAdditionalNonAdjustableComparisonItem",
    "HazardZone" = "HazardZone",
    "HeatingSystem" = "HeatingSystem",
    "InteriorAppeal" = "InteriorAppeal",
    "LandOwnedInCommon" = "LandOwnedInCommon",
    "LivingUnitBathroomCount" = "LivingUnitBathroomCount",
    "LivingUnitBedroomCount" = "LivingUnitBedroomCount",
    "LivingUnitFeaturesForIndividualsWithDisabilities" = "LivingUnitFeaturesForIndividualsWithDisabilities",
    "LivingUnitFloorNumber" = "LivingUnitFloorNumber",
    "LivingUnitLevelCount" = "LivingUnitLevelCount",
    "LivingUnitNonStandardFinishedAreaAboveGrade" = "LivingUnitNonStandardFinishedAreaAboveGrade",
    "LivingUnitNonStandardFinishedAreaBelowGrade" = "LivingUnitNonStandardFinishedAreaBelowGrade",
    "LivingUnitStandardFinishedAreaAboveGrade" = "LivingUnitStandardFinishedAreaAboveGrade",
    "LivingUnitStandardFinishedAreaBelowGrade" = "LivingUnitStandardFinishedAreaBelowGrade",
    "LivingUnitUnfinishedAreaAboveGrade" = "LivingUnitUnfinishedAreaAboveGrade",
    "LivingUnitUnfinishedAreaBelowGrade" = "LivingUnitUnfinishedAreaBelowGrade",
    "Location" = "Location",
    "MaintenanceFees" = "MaintenanceFees",
    "Make" = "Make",
    "ManufacturedHomeSectionCount" = "ManufacturedHomeSectionCount",
    "ManufacturedHomeWidth" = "ManufacturedHomeWidth",
    "MarketChange" = "MarketChange",
    "MiscellaneousAmenity" = "MiscellaneousAmenity",
    "MonthlyFacilityFee" = "MonthlyFacilityFee",
    "NativeAmericanLands" = "NativeAmericanLands",
    "NeighborhoodAppeal" = "NeighborhoodAppeal",
    "NeighborhoodName" = "NeighborhoodName",
    "NonContinuousFinishedArea" = "NonContinuousFinishedArea",
    "Other" = "Other",
    "Outbuilding" = "Outbuilding",
    "OutdoorAccessoryAmenity" = "OutdoorAccessoryAmenity",
    "OutdoorLivingAmenity" = "OutdoorLivingAmenity",
    "OverallConditionRating" = "OverallConditionRating",
    "OverallQualityRating" = "OverallQualityRating",
    "OwnershipRightsConveyed" = "OwnershipRightsConveyed",
    "Parking" = "Parking",
    "PorchDeck" = "PorchDeck",
    "ProjectAmenities" = "ProjectAmenities",
    "ProjectInformation" = "ProjectInformation",
    "ProjectSecurity" = "ProjectSecurity",
    "ProjectSize" = "ProjectSize",
    "PropertyOwnershipTransferTerms" = "PropertyOwnershipTransferTerms",
    "PropertyPrimaryAccess" = "PropertyPrimaryAccess",
    "PropertyRestriction" = "PropertyRestriction",
    "PropertyRights" = "PropertyRights",
    "PropertyRightsAppraised" = "PropertyRightsAppraised",
    "PropertyStreetAccessAndSurface" = "PropertyStreetAccessAndSurface",
    "Quality" = "Quality",
    "RecreationFacilities" = "RecreationFacilities",
    "RemodelBath" = "RemodelBath",
    "RemodelKitchen" = "RemodelKitchen",
    "RentConcessions" = "RentConcessions",
    "RoomsBelowGrade" = "RoomsBelowGrade",
    "RowhouseTownhouseBackToBack" = "RowhouseTownhouseBackToBack",
    "RowhouseTownhouseEndUnit" = "RowhouseTownhouseEndUnit",
    "RowhouseTownhouseLocation" = "RowhouseTownhouseLocation",
    "SaleDate" = "SaleDate",
    "SalesComparableAdditionalAdjustableComparisonItem" = "SalesComparableAdditionalAdjustableComparisonItem",
    "SalesComparableAdditionalNonAdjustableComparisonItem" = "SalesComparableAdditionalNonAdjustableComparisonItem",
    "SalesConcessions" = "SalesConcessions",
    "SaleToListPriceRatio" = "SaleToListPriceRatio",
    "SecurityFeatures" = "SecurityFeatures",
    "SignificantFeatures" = "SignificantFeatures",
    "SiteAppeal" = "SiteAppeal",
    "SiteCharacteristic" = "SiteCharacteristic",
    "SiteDrainage" = "SiteDrainage",
    "SiteInfluence" = "SiteInfluence",
    "SiteSize" = "SiteSize",
    "SiteValue" = "SiteValue",
    "StructureDesign" = "StructureDesign",
    "TipOut" = "TipOut",
    "Topography" = "Topography",
    "TotalBathroomCountAboveGrade" = "TotalBathroomCountAboveGrade",
    "TotalBedroomCountAboveGrade" = "TotalBedroomCountAboveGrade",
    "TotalDwellingVolume" = "TotalDwellingVolume",
    "Utilities" = "Utilities",
    "VehicleStorage" = "VehicleStorage",
    "View" = "View",
    "WaterFeaturesAmenity" = "WaterFeaturesAmenity",
    "WaterFrontage" = "WaterFrontage",
    "WholeHomeAmenity" = "WholeHomeAmenity",
    "WindowSurfaceArea" = "WindowSurfaceArea",
    "YearBuilt" = "YearBuilt",
    "ZoningCompliance" = "ZoningCompliance"
}
;
/**
 * Term: Comparable Type Definition: Indicates the status of the property as either a competitive offering, comparable offering, comparable active listing, comparable expired listing  or closed sale.
 */
export enum ComparableBase {
    "ActiveListing" = "ActiveListing",
    "ClosedSale" = "ClosedSale",
    "CompetitiveOffering" = "CompetitiveOffering",
    "ExpiredListing" = "ExpiredListing",
    "Other" = "Other"
}
;
/**
 * Term: Comparable To Subject Direction Type Definition: A value from a MISMO prescribed list which represents the compass direction the comparable property is located when compared to the subject property location.
 */
export enum ComparableToSubjectDirectionBase {
    "East" = "East",
    "North" = "North",
    "NorthEast" = "NorthEast",
    "NorthWest" = "NorthWest",
    "South" = "South",
    "SouthEast" = "SouthEast",
    "SouthWest" = "SouthWest",
    "West" = "West"
}
;
/**
 * Term: Comparable Weight Type Definition: A value from a MISMO prescribed list that represents the emphasis given to the comparable.
 */
export enum ComparableWeightBase {
    "Less" = "Less",
    "Most" = "Most",
    "NoWeight" = "NoWeight"
}
;
/**
 * Term: Compensation Type Definition: Identifies the type(s) of compensation being paid in the loan transaction.
 */
export enum CompensationBase {
    "Other" = "Other",
    "Rebate" = "Rebate",
    "ServiceReleasePremium" = "ServiceReleasePremium",
    "YieldSpreadDifferential" = "YieldSpreadDifferential"
}
;
/**
 * Term: Compensation Paid By Type Definition: Identifies the party responsible for paying the compensation amount due.
 */
export enum CompensationPaidByBase {
    "Borrower" = "Borrower",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller"
}
;
/**
 * Term: Compensation Paid To Type Definition: Identifies the party to which payment of the compensation amount will be made.
 */
export enum CompensationPaidToBase {
    "Borrower" = "Borrower",
    "Broker" = "Broker",
    "Lender" = "Lender",
    "LoanOriginator" = "LoanOriginator",
    "Other" = "Other"
}
;
/**
 * Term: Component Classification Type Definition: Specifies whether the component is considered real or personal property.
 */
export enum ComponentClassificationBase {
    "PersonalProperty" = "PersonalProperty",
    "RealProperty" = "RealProperty"
}
;
/**
 * Term: Component Status Type Definition: An opinion on the level of update or improvement completed on the structure subsequent to its original construction.
 */
export enum ComponentStatusBase {
    "NotUpdated" = "NotUpdated",
    "Other" = "Other",
    "Remodeled" = "Remodeled",
    "Renovated" = "Renovated",
    "Replaced" = "Replaced",
    "Updated" = "Updated"
}
;
/**
 * Term: Component Status Timeframe Type Definition: The estimated time period associated with the updating or remodeling of the property described by the Component Status Type.
 */
export enum ComponentStatusTimeframeBase {
    "ElevenToFifteenYears" = "ElevenToFifteenYears",
    "LessThanOneYear" = "LessThanOneYear",
    "OneToFiveYears" = "OneToFiveYears",
    "Other" = "Other",
    "SixToTenYears" = "SixToTenYears",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Condition Category Type Definition: A value from a MISMO prescribed list that classifies a condition to a part of closing preparation or underwriting.
 */
export enum ConditionCategoryBase {
    "ApprovedOtherCredits" = "ApprovedOtherCredits",
    "BorrowerDisclosureCondition" = "BorrowerDisclosureCondition",
    "CashBackAllowed" = "CashBackAllowed",
    "Endorsements" = "Endorsements",
    "GeneralCondition" = "GeneralCondition",
    "HazardInsuranceVerification" = "HazardInsuranceVerification",
    "HoldBackInstruction" = "HoldBackInstruction",
    "HomeownersAssociation" = "HomeownersAssociation",
    "LenderAuthorizations" = "LenderAuthorizations",
    "LenderCredits" = "LenderCredits",
    "LenderNotification" = "LenderNotification",
    "Liens" = "Liens",
    "MobileSigningCondition" = "MobileSigningCondition",
    "PayoffOfUnsecuredDebts" = "PayoffOfUnsecuredDebts",
    "PropertyChargesConditions" = "PropertyChargesConditions",
    "SellerCredits" = "SellerCredits",
    "SellerDisclosureCondition" = "SellerDisclosureCondition",
    "SettlementStatement" = "SettlementStatement",
    "SignerVerification" = "SignerVerification",
    "Subordination" = "Subordination",
    "SurveyCondition" = "SurveyCondition",
    "TitleInsuranceExceptions" = "TitleInsuranceExceptions"
}
;
/**
 * Term: Condition Rating Type Definition: A rating of the condition of the identified component.
 */
export enum ConditionRatingBase {
    "Average" = "Average",
    "Excellent" = "Excellent",
    "Fair" = "Fair",
    "Good" = "Good",
    "Poor" = "Poor"
}
;
/**
 * Term: Condition Satisfaction Responsible Party Type Definition: The party responsible for obtaining the necessary information to satisfy the condition.
 */
export enum ConditionSatisfactionResponsiblePartyBase {
    "Attorney" = "Attorney",
    "Broker" = "Broker",
    "Closer" = "Closer",
    "ClosingAgent" = "ClosingAgent",
    "EscrowCompany" = "EscrowCompany",
    "LoanOfficer" = "LoanOfficer",
    "Originator" = "Originator",
    "Other" = "Other",
    "Processor" = "Processor",
    "SettlementAgent" = "SettlementAgent",
    "TitleCompany" = "TitleCompany"
}
;
/**
 * Term: Condition Satisfaction Timeframe Type Definition: The point in the Loan Process where this condition must be satisfied before proceeding to the next stage.
 */
export enum ConditionSatisfactionTimeframeBase {
    "Other" = "Other",
    "PriorToApproval" = "PriorToApproval",
    "PriorToDocuments" = "PriorToDocuments",
    "PriorToFunding" = "PriorToFunding",
    "PriorToSigning" = "PriorToSigning",
    "UnderwriterToReview" = "UnderwriterToReview"
}
;
/**
 * Term: Condominium Project Status Type Definition: Specifies the current state of the condominium project.
 */
export enum CondominiumProjectStatusBase {
    "Established" = "Established",
    "New" = "New"
}
;
/**
 * Term: Consideration Type Definition: Description of the consideration or money amount of the document (not necessarily the mortgage amount).
 */
export enum ConsiderationBase {
    "AttorneysFee" = "AttorneysFee",
    "Judgment" = "Judgment",
    "Lien" = "Lien",
    "OriginalLoanAmount" = "OriginalLoanAmount",
    "Other" = "Other",
    "SalePrice" = "SalePrice"
}
;
/**
 * Term: Construction Loan Type Definition: Specifies the specific type of construction loan.
 */
export enum ConstructionLoanBase {
    "ConstructionOnly" = "ConstructionOnly",
    "ConstructionToPermanent" = "ConstructionToPermanent"
}
;
/**
 * Term: Construction Loan Estimated Interest Calculation Method Type Definition: The basis for calculating the amount of estimated interest on the construction loan.
 */
export enum ConstructionLoanEstimatedInterestCalculationMethodBase {
    "FullLoanCommitment" = "FullLoanCommitment",
    "HalfLoanCommitment" = "HalfLoanCommitment"
}
;
/**
 * Term: Construction Method Type Definition: A value from a MISMO prescribed list that represents the manner in which the structure was constructed.
 */
export enum ConstructionMethodBase {
    "Container" = "Container",
    "Manufactured" = "Manufactured",
    "MobileHome" = "MobileHome",
    "Modular" = "Modular",
    "OnFrameModular" = "OnFrameModular",
    "Other" = "Other",
    "SiteBuilt" = "SiteBuilt",
    "ThreeDimensionalPrintingTechnology" = "ThreeDimensionalPrintingTechnology"
}
;
/**
 * Term: Construction Phase Interest Payment Type Definition: Represents whether interest is payable periodically or at the end of construction.
 */
export enum ConstructionPhaseInterestPaymentBase {
    "InterestPaidAtEndOfConstruction" = "InterestPaidAtEndOfConstruction",
    "InterestPaidPeriodically" = "InterestPaidPeriodically",
    "Other" = "Other"
}
;
/**
 * Term: Construction Phase Interest Payment Frequency Type Definition: How frequently interest payments are due during the construction phase.
 */
export enum ConstructionPhaseInterestPaymentFrequencyBase {
    "Biweekly" = "Biweekly",
    "Monthly" = "Monthly",
    "Other" = "Other"
}
;
/**
 * Term: Construction Phase Interest Payment Method Type Definition: How are the construction phase interest payments paid.
 */
export enum ConstructionPhaseInterestPaymentMethodBase {
    "AddToPermanentLoanAmount" = "AddToPermanentLoanAmount",
    "BilledToBorrower" = "BilledToBorrower",
    "Other" = "Other"
}
;
/**
 * Term: Construction Status Type Definition: A value from a MISMO prescribed list that represents stage of construction at the time of the inspection.
 */
export enum ConstructionStatusBase {
    "Complete" = "Complete",
    "Existing" = "Existing",
    "Incomplete" = "Incomplete",
    "Other" = "Other",
    "Planned" = "Planned",
    "Proposed" = "Proposed",
    "SubjectToAlteration" = "SubjectToAlteration",
    "SubjectToAlterationImprovementRepairAndRehabilitation" = "SubjectToAlterationImprovementRepairAndRehabilitation",
    "SubstantiallyRehabilitated" = "SubstantiallyRehabilitated",
    "UnderConstruction" = "UnderConstruction"
}
;
/**
 * Term: Construction To Permanent Closing Type Definition: A value from a MISMO prescribed list that specifies the type of closing process for the construction-to-permanent loan.
 */
export enum ConstructionToPermanentClosingBase {
    "OneClosing" = "OneClosing",
    "Other" = "Other",
    "TwoClosing" = "TwoClosing"
}
;
/**
 * Term: Construction To Permanent Closing Feature Type Definition: Specifies the type of feature associated with closing for the Construction To Permanent loan.
 */
export enum ConstructionToPermanentClosingFeatureBase {
    "AutomaticConversion" = "AutomaticConversion",
    "ConvertibleARM" = "ConvertibleARM",
    "ModificationAgreement" = "ModificationAgreement",
    "NewNote" = "NewNote",
    "Other" = "Other"
}
;
/**
 * Term: Contact Point Day Preference Type Definition: A value from a MISMO prescribed list that specifies the day of the week associated with the time restrictions or permissions.
 */
export enum ContactPointDayPreferenceBase {
    "All" = "All",
    "Friday" = "Friday",
    "Monday" = "Monday",
    "Other" = "Other",
    "Saturday" = "Saturday",
    "Sunday" = "Sunday",
    "Thursday" = "Thursday",
    "Tuesday" = "Tuesday",
    "Wednesday" = "Wednesday",
    "Weekdays" = "Weekdays",
    "Weekends" = "Weekends"
}
;
/**
 * Term: Contact Point Role Type Definition: A value from a MISMO prescribed list that specifies the location associated with the Contact Point Type (for example, Phone).
 */
export enum ContactPointRoleBase {
    "Home" = "Home",
    "Mobile" = "Mobile",
    "Other" = "Other",
    "Work" = "Work"
}
;
/**
 * Term: Contact Point Time Preference Source Type Definition: A value from a MISMO prescribed list that specifies the source of information regarding contact point time restrictions or permissions.
 */
export enum ContactPointTimePreferenceSourceBase {
    "AuthorizedRepresentative" = "AuthorizedRepresentative",
    "BankOrBranch" = "BankOrBranch",
    "Borrower" = "Borrower",
    "Origination" = "Origination",
    "Other" = "Other",
    "ServicingTransfer" = "ServicingTransfer",
    "SkipTrace" = "SkipTrace",
    "WrittenRequest" = "WrittenRequest"
}
;
/**
 * Term: Contact Point Time Zone Type Definition: A value from a MISMO prescribed list that specifies the time zone of a reference location.
 */
export enum ContactPointTimeZoneBase {
    "Alaska" = "Alaska",
    "AmericanSamoa" = "AmericanSamoa",
    "Arizona" = "Arizona",
    "Atlantic" = "Atlantic",
    "Central" = "Central",
    "Eastern" = "Eastern",
    "Guam" = "Guam",
    "HawaiiAndAleutianIslands" = "HawaiiAndAleutianIslands",
    "MarshallIslands" = "MarshallIslands",
    "Mountain" = "Mountain",
    "Other" = "Other",
    "Pacific" = "Pacific"
}
;
/**
 * Term: Contract Variance Code Issuer Type Definition: Identifying the party who issued the variance code.
 */
export enum ContractVarianceCodeIssuerBase {
    "FHA" = "FHA",
    "Investor" = "Investor",
    "MI" = "MI",
    "Other" = "Other",
    "Seller" = "Seller",
    "VA" = "VA"
}
;
/**
 * Term: Contribution Type Definition: The type of contribution associated with a workout.
 */
export enum ContributionBase {
    "HazardClaim" = "HazardClaim",
    "Other" = "Other",
    "Repair" = "Repair"
}
;
/**
 * Term: Contribution Source Type Definition: The type of party that is providing the contribution associated with a workout.
 */
export enum ContributionSourceBase {
    "Borrower" = "Borrower",
    "Investor" = "Investor",
    "Other" = "Other"
}
;
/**
 * Term: Conversion Type Definition: Specifies the type of conversion permissible for a loan as stated on the mortgage documents.
 */
export enum ConversionBase {
    "Other" = "Other",
    "ToBiweeklyPaymentFrequency" = "ToBiweeklyPaymentFrequency",
    "ToFixedRate" = "ToFixedRate",
    "ToFullyAmortizingTerm" = "ToFullyAmortizingTerm",
    "ToLevelPayment" = "ToLevelPayment",
    "ToLowerInterestRate" = "ToLowerInterestRate",
    "ToMonthlyPaymentFrequency" = "ToMonthlyPaymentFrequency"
}
;
/**
 * Term: Conversion Option Period Type Definition: Indicates the type of conversion option associated with the loan.
 */
export enum ConversionOptionPeriodBase {
    "OnDemand" = "OnDemand",
    "OnDemandAtInterestRateChangeDates" = "OnDemandAtInterestRateChangeDates",
    "OnDemandMonthly" = "OnDemandMonthly",
    "Scheduled" = "Scheduled"
}
;
/**
 * Term: Conversion Option Period Fee Balance Calculation Type Definition: Indicates whether the conversion fee is calculated as a percentage of the original principal balance or the principal balance at the time of conversion.
 */
export enum ConversionOptionPeriodFeeBalanceCalculationBase {
    "CurrentBalanceAtConversion" = "CurrentBalanceAtConversion",
    "OriginalBalance" = "OriginalBalance"
}
;
/**
 * Term: Conversion Option Period Rounding Type Definition: Indicates how the Conversion Option Margin Rate Percent is rounded when calculating a new interest rate for the option to convert an ARM loan to a fixed-rate loan. The interest rate can be rounded Up, Down or to the Nearest Rounding Factor. This field is used in conjunction with Conversion Option Period Rounding Percent which indicates the percentage to which the rounding occurs.
 */
export enum ConversionOptionPeriodRoundingBase {
    "Down" = "Down",
    "Nearest" = "Nearest",
    "NoRounding" = "NoRounding",
    "Up" = "Up"
}
;
/**
 * Term: Conversion Schedule Type Definition: Describes when the loan is eligible to convert.
 */
export enum ConversionScheduleBase {
    "Anytime" = "Anytime",
    "OnFirstAndSecondRateAdjustment" = "OnFirstAndSecondRateAdjustment",
    "OnFirstThroughFifthRateAdjustment" = "OnFirstThroughFifthRateAdjustment",
    "OnFirstThroughThirdRateAdjustment" = "OnFirstThroughThirdRateAdjustment",
    "OnSecondThroughTenthRateAdjustment" = "OnSecondThroughTenthRateAdjustment",
    "OnThirdThroughFifthRateAdjustment" = "OnThirdThroughFifthRateAdjustment",
    "Other" = "Other"
}
;
/**
 * Term: Converted Area Finish Comparison Type Definition: A value from a MISMO prescribed list that represents the converted area's quality of finish compared to the rest of the living area.
 */
export enum ConvertedAreaFinishComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Converted Area Original Use Type Definition: A value from a MISMO prescribed list that identifies the original purpose of an area, which has been improved from its original use to livable standards.
 */
export enum ConvertedAreaOriginalUseBase {
    "Garage" = "Garage",
    "Other" = "Other",
    "Patio" = "Patio",
    "Porch" = "Porch"
}
;
/**
 * Term: Convertible Status Type Definition: Indicates whether the mortgagor has exercised the option to convert the ARM loan to a fixed rate loan.
 */
export enum ConvertibleStatusBase {
    "Active" = "Active",
    "Exercised" = "Exercised",
    "Expired" = "Expired"
}
;
/**
 * Term: Cooling System Type Definition: Specifies the type of cooling system.
 */
export enum CoolingSystemBase {
    "Centralized" = "Centralized",
    "Individual" = "Individual",
    "Other" = "Other"
}
;
/**
 * Term: Correspondent Acquisition Type Definition: A value from a MISMO prescribed list that specifies the method under which a loan was obtained from a correspondent lender by a security issuer.
 */
export enum CorrespondentAcquisitionBase {
    "Bulk" = "Bulk",
    "Flow" = "Flow",
    "Other" = "Other"
}
;
/**
 * Term: Cost Analysis Type Definition: A value from a MISMO prescribed list that represents the manner in which the building would be reconstructed.
 */
export enum CostAnalysisBase {
    "Other" = "Other",
    "Replacement" = "Replacement",
    "Reproduction" = "Reproduction"
}
;
/**
 * Term: Cost Method Type Definition: A value from a MISMO prescribed list that represents the methodology used to arrive at a replacement or reproduction building cost.
 */
export enum CostMethodBase {
    "ComparativeUnit" = "ComparativeUnit",
    "Other" = "Other",
    "QuantitySurvey" = "QuantitySurvey",
    "UnitInPlace" = "UnitInPlace"
}
;
/**
 * Term: Cost Of Analysis Component Status Type Definition: A collection of values that specify the level of completeness of the specified Analysis Component Type for which a cost is being provided.
 */
export enum CostOfAnalysisComponentStatusBase {
    "Completed" = "Completed",
    "Proposed" = "Proposed"
}
;
/**
 * Term: Cost To Repair Type Definition: A value from a MISMO prescribed list that represents how the cost to repair amount will be provided for the defects, damages or deficiencies that have been identified for the property.
 */
export enum CostToRepairBase {
    "Itemized" = "Itemized",
    "None" = "None",
    "TotalCost" = "TotalCost"
}
;
/**
 * Term: Counseling Type Definition: A value from a MISMO prescribed list that categorizes the counseling/education service being delivered.
 */
export enum CounselingBase {
    "Counseling" = "Counseling",
    "Education" = "Education"
}
;
/**
 * Term: Counseling Format Type Definition: A value from a MISMO prescribed list that specifies the format in which the counseling/education service is delivered.
 */
export enum CounselingFormatBase {
    "FaceToFace" = "FaceToFace",
    "Hybrid" = "Hybrid",
    "Internet" = "Internet",
    "Other" = "Other",
    "Telephone" = "Telephone"
}
;
/**
 * Term: Counseling Provider Type Definition: A value from a MISMO prescribed list that categorizes the provider of the counseling services.
 */
export enum CounselingProviderBase {
    "AmericanHomeownerEducationAndCounselingInstituteApproved" = "AmericanHomeownerEducationAndCounselingInstituteApproved",
    "HUDApprovedCounselingAgency" = "HUDApprovedCounselingAgency",
    "LenderTrained" = "LenderTrained",
    "LocalHousingCounselingAgency" = "LocalHousingCounselingAgency",
    "MultiStateOrganization" = "MultiStateOrganization",
    "NationalIntermediary" = "NationalIntermediary",
    "Other" = "Other",
    "RegionalIntermediary" = "RegionalIntermediary",
    "StateHousingFinanceAgency" = "StateHousingFinanceAgency",
    "SubGrantee" = "SubGrantee",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Counseling Setting Type Definition: A value from a MISMO prescribed list that specifies the setting in which the counseling/education is delivered.
 */
export enum CounselingSettingBase {
    "Classroom" = "Classroom",
    "Homestudy" = "Homestudy",
    "Other" = "Other"
}
;
/**
 * Term: Counseling Topic Type Definition: A value from a MISMO prescribed list that specifies the counseling, education and outreach topics covered in a Counseling Event.
 */
export enum CounselingTopicBase {
    "FairHousingWorkshop" = "FairHousingWorkshop",
    "FinancialBudgetingAndCreditRepairWorkshops" = "FinancialBudgetingAndCreditRepairWorkshops",
    "FinancialLiteracyWorkshop" = "FinancialLiteracyWorkshop",
    "FinancialManagementBudgetCounseling" = "FinancialManagementBudgetCounseling",
    "HomeImprovementAndRehabilitationCounseling" = "HomeImprovementAndRehabilitationCounseling",
    "HomelessnessPreventionWorkshop" = "HomelessnessPreventionWorkshop",
    "HomeMaintainenceAndFinancialManagementForHomeownersCounseling" = "HomeMaintainenceAndFinancialManagementForHomeownersCounseling",
    "LossMitigation" = "LossMitigation",
    "MarketingAndOutreachInitiatives" = "MarketingAndOutreachInitiatives",
    "MobilityAndRelocationCounseling" = "MobilityAndRelocationCounseling",
    "MortgageDelinquencyAndDefaultResolutionCounseling" = "MortgageDelinquencyAndDefaultResolutionCounseling",
    "NonDelinquencyAndPostPurchaseWorkshops" = "NonDelinquencyAndPostPurchaseWorkshops",
    "Other" = "Other",
    "PredatoryLendingEducationWorkshops" = "PredatoryLendingEducationWorkshops",
    "PrePurchaseCounseling" = "PrePurchaseCounseling",
    "PrePurchaseHomebuyerEducationWorkshops" = "PrePurchaseHomebuyerEducationWorkshops",
    "RentalHousingCounseling" = "RentalHousingCounseling",
    "RentalHousingWorkshops" = "RentalHousingWorkshops",
    "ResolvingPreventingMortgageDelinquencyWorkshop" = "ResolvingPreventingMortgageDelinquencyWorkshop",
    "ReverseMortgageCounseling" = "ReverseMortgageCounseling",
    "ServicesForHomelessCounseling" = "ServicesForHomelessCounseling"
}
;
/**
 * Term: Covenant Type Definition: A covenant potentially provides benefits or burdens to the ownership bundle of property rights usually associated with the community in which the property is located.
 */
export enum CovenantBase {
    "Architectural" = "Architectural",
    "CommunityUse" = "CommunityUse",
    "Land" = "Land",
    "Other" = "Other",
    "Utility" = "Utility"
}
;
/**
 * Term: Credit Business Type Definition: The credit repository bureaus can identify the type of business of the liability holder or the entity requesting a credit report as listed in a credit inquiry record. This information is needed for an automated scoring application. This data is available for liability and inquiry records from Equifax, Experian and Trans Union.
 */
export enum CreditBusinessBase {
    "Advertising" = "Advertising",
    "Automotive" = "Automotive",
    "Banking" = "Banking",
    "Clothing" = "Clothing",
    "CollectionServices" = "CollectionServices",
    "Contractors" = "Contractors",
    "DepartmentAndMailOrder" = "DepartmentAndMailOrder",
    "Employment" = "Employment",
    "FarmAndGardenSupplies" = "FarmAndGardenSupplies",
    "Finance" = "Finance",
    "Government" = "Government",
    "Grocery" = "Grocery",
    "HomeFurnishing" = "HomeFurnishing",
    "Insurance" = "Insurance",
    "JewelryAndCamera" = "JewelryAndCamera",
    "LumberAndHardware" = "LumberAndHardware",
    "MedicalAndHealth" = "MedicalAndHealth",
    "Miscellaneous" = "Miscellaneous",
    "OilAndNationalCreditCards" = "OilAndNationalCreditCards",
    "PersonalServicesNotMedical" = "PersonalServicesNotMedical",
    "RealEstateAndPublicAccommodation" = "RealEstateAndPublicAccommodation",
    "SportingGoods" = "SportingGoods",
    "UtilitiesAndFuel" = "UtilitiesAndFuel",
    "Wholesale" = "Wholesale"
}
;
/**
 * Term: Credit Comment Type Definition: Allows the credit bureau to identify the type of credit comment (e.g. Consumer Statement).
 */
export enum CreditCommentBase {
    "BureauRemarks" = "BureauRemarks",
    "ConsumerStatement" = "ConsumerStatement",
    "Instruction" = "Instruction",
    "Other" = "Other",
    "PublicRecordText" = "PublicRecordText",
    "StatusCode" = "StatusCode",
    "Warning" = "Warning"
}
;
/**
 * Term: Credit Comment Code Source Type Definition: This data element provides an enumerated list of sources for the Credit Comment Code data.
 */
export enum CreditCommentCodeSourceBase {
    "EquifaxBankruptcy" = "EquifaxBankruptcy",
    "EquifaxCollectionStatus" = "EquifaxCollectionStatus",
    "EquifaxLegalStatus" = "EquifaxLegalStatus",
    "EquifaxNarrative" = "EquifaxNarrative",
    "ExperianAccountPurpose" = "ExperianAccountPurpose",
    "ExperianAccountStatus" = "ExperianAccountStatus",
    "ExperianLegalStatus" = "ExperianLegalStatus",
    "ExperianSpecialComment" = "ExperianSpecialComment",
    "Other" = "Other",
    "TransUnionLoanType" = "TransUnionLoanType",
    "TransUnionPublicRecordType" = "TransUnionPublicRecordType",
    "TransUnionRemarks" = "TransUnionRemarks"
}
;
/**
 * Term: Credit Comment Source Type Definition: This data element provides an enumerated list of sources for the Credit Comment data.
 */
export enum CreditCommentSourceBase {
    "Borrower" = "Borrower",
    "CreditBureau" = "CreditBureau",
    "Equifax" = "Equifax",
    "Experian" = "Experian",
    "Lender" = "Lender",
    "RepositoryBureau" = "RepositoryBureau",
    "TransUnion" = "TransUnion"
}
;
/**
 * Term: Credit Denial Reason Type Definition: A value from a MISMO prescribed list that specifies a reason a request for credit was denied.
 */
export enum CreditDenialReasonBase {
    "AttachmentOrGarnishment" = "AttachmentOrGarnishment",
    "Bankruptcy" = "Bankruptcy",
    "CollectionActionOrSuit" = "CollectionActionOrSuit",
    "DelinquentCreditObligationsWithOthers" = "DelinquentCreditObligationsWithOthers",
    "DeniedByFNM" = "DeniedByFNM",
    "DeniedByFRE" = "DeniedByFRE",
    "DeniedByHUD" = "DeniedByHUD",
    "DeniedByVA" = "DeniedByVA",
    "ExcessiveObligationsInRelationToIncome" = "ExcessiveObligationsInRelationToIncome",
    "ForeclosureOrRepossession" = "ForeclosureOrRepossession",
    "IncompleteCreditApplication" = "IncompleteCreditApplication",
    "InsufficientCashReserves" = "InsufficientCashReserves",
    "InsufficientCollateralValue" = "InsufficientCollateralValue",
    "InsufficientCreditFile" = "InsufficientCreditFile",
    "InsufficientFunds" = "InsufficientFunds",
    "InsufficientIncomeForAmountOfCreditRequested" = "InsufficientIncomeForAmountOfCreditRequested",
    "InsufficientIncomeForTotalObligations" = "InsufficientIncomeForTotalObligations",
    "InsufficientNumberOfCreditReferencesProvided" = "InsufficientNumberOfCreditReferencesProvided",
    "InsufficientPropertyData" = "InsufficientPropertyData",
    "LengthOfEmployment" = "LengthOfEmployment",
    "LengthOfResidence" = "LengthOfResidence",
    "LimitedCreditExperience" = "LimitedCreditExperience",
    "NoCreditFile" = "NoCreditFile",
    "NumberOfRecentInquiriesOnCreditBureauReport" = "NumberOfRecentInquiriesOnCreditBureauReport",
    "Other" = "Other",
    "PoorCreditPerformanceWithCreditIssuer" = "PoorCreditPerformanceWithCreditIssuer",
    "TemporaryOrIrregularEmployment" = "TemporaryOrIrregularEmployment",
    "TemporaryResidence" = "TemporaryResidence",
    "UnableToVerifyCreditReferences" = "UnableToVerifyCreditReferences",
    "UnableToVerifyEmployment" = "UnableToVerifyEmployment",
    "UnableToVerifyIncome" = "UnableToVerifyIncome",
    "UnableToVerifyResidence" = "UnableToVerifyResidence",
    "UnacceptableCreditTermsRequested" = "UnacceptableCreditTermsRequested",
    "UnacceptableLeaseholdEstate" = "UnacceptableLeaseholdEstate",
    "UnacceptablePaymentRecordOnPreviousMortgage" = "UnacceptablePaymentRecordOnPreviousMortgage",
    "UnacceptableProperty" = "UnacceptableProperty",
    "UnacceptablePropertyAppraisal" = "UnacceptablePropertyAppraisal",
    "UnacceptableTypeOfCreditReferencesProvided" = "UnacceptableTypeOfCreditReferencesProvided"
}
;
/**
 * Term: Credit Enhancement Type Definition: Specifies the type of risk offset on the loan.
 */
export enum CreditEnhancementBase {
    "CashAsset" = "CashAsset",
    "CollateralTaxAssessmentValue" = "CollateralTaxAssessmentValue",
    "CommercialCollateral" = "CommercialCollateral",
    "Excluded" = "Excluded",
    "Indemnification" = "Indemnification",
    "LetterOfCredit" = "LetterOfCredit",
    "LimitedRecourse" = "LimitedRecourse",
    "LossParticipation" = "LossParticipation",
    "Other" = "Other",
    "PoolInsurance" = "PoolInsurance",
    "Recourse" = "Recourse",
    "SecondTierMI" = "SecondTierMI",
    "SubordinationAgreement" = "SubordinationAgreement"
}
;
/**
 * Term: Credit Enhancement Effective Period Type Definition: Specifies the period of time for which the selected credit enhancement option is in effect.
 */
export enum CreditEnhancementEffectivePeriodBase {
    "FixedPeriod" = "FixedPeriod",
    "LifeOfLoan" = "LifeOfLoan"
}
;
/**
 * Term: Credit Enhancement Party Role Type Definition: Indicates the party that bears the default loss associated with the credit enhancement type.
 */
export enum CreditEnhancementPartyRoleBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "LoanSeller" = "LoanSeller",
    "MICompany" = "MICompany",
    "Other" = "Other",
    "Servicer" = "Servicer",
    "Shared" = "Shared",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Credit Error Message Source Type Definition: Specifies the source of an error message. Messages can come either from the credit data repository, lender or the credit bureau.
 */
export enum CreditErrorMessageSourceBase {
    "CreditBureau" = "CreditBureau",
    "Equifax" = "Equifax",
    "Experian" = "Experian",
    "RepositoryBureau" = "RepositoryBureau",
    "TransUnion" = "TransUnion"
}
;
/**
 * Term: Credit File Result Status Type Definition: Describes the resulting status of the request for a credit file from a credit repository bureau. The full reason for a Credit File not being returned will be reported in the Credit Error Message data element.
 */
export enum CreditFileResultStatusBase {
    "FileReturned" = "FileReturned",
    "NoFileReturnedBadAccessCode" = "NoFileReturnedBadAccessCode",
    "NoFileReturnedBorrowerIsAMinor" = "NoFileReturnedBorrowerIsAMinor",
    "NoFileReturnedCreditFreeze" = "NoFileReturnedCreditFreeze",
    "NoFileReturnedError" = "NoFileReturnedError",
    "NoFileReturnedFraudulentRequestData" = "NoFileReturnedFraudulentRequestData",
    "NoFileReturnedInadequateRequestData" = "NoFileReturnedInadequateRequestData",
    "NoFileReturnedNoHit" = "NoFileReturnedNoHit",
    "NoFileReturnedThinFile" = "NoFileReturnedThinFile",
    "Other" = "Other"
}
;
/**
 * Term: Credit File Variation Type Definition: This element indicates that there was a variation from the original borrower demographics data in the request and the borrower data in the credit file. It MAY or MAY NOT belong to the borrower specified in the credit request.
 */
export enum CreditFileVariationBase {
    "DifferentAddress" = "DifferentAddress",
    "DifferentBirthDate" = "DifferentBirthDate",
    "DifferentGeneration" = "DifferentGeneration",
    "DifferentLastName" = "DifferentLastName",
    "DifferentName" = "DifferentName",
    "DifferentSSN" = "DifferentSSN"
}
;
/**
 * Term: Credit Inquiry Result Type Definition: The result from a credit inquiry - did the lender offer credit, refuse credit, etc.
 */
export enum CreditInquiryResultBase {
    "AccountClosed" = "AccountClosed",
    "ApplicationPending" = "ApplicationPending",
    "Declined" = "Declined",
    "DidNotInquire" = "DidNotInquire",
    "NoOpenAccount" = "NoOpenAccount",
    "NotALender" = "NotALender",
    "OpenAccountNumberNotIssued" = "OpenAccountNumberNotIssued",
    "OpenDiscovered" = "OpenDiscovered",
    "OpenPrimaryAccount" = "OpenPrimaryAccount",
    "ReportingAgencyInquiry" = "ReportingAgencyInquiry",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Credit Liability Account Type Definition: This describes the type of account established with the Liability Account Holder - credit line, installment, mortgage, open, revolving).
 */
export enum CreditLiabilityAccountBase {
    "CreditLine" = "CreditLine",
    "Installment" = "Installment",
    "Mortgage" = "Mortgage",
    "Open" = "Open",
    "Revolving" = "Revolving",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Credit Liability Account Ownership Type Definition: A value from a MISMO prescribed list that specifies the ownership relation of the borrower(s) to the liability account (i.e. are they solely responsible, jointly responsible, a co-signer on the account, etc.).
 */
export enum CreditLiabilityAccountOwnershipBase {
    "AuthorizedUser" = "AuthorizedUser",
    "Comaker" = "Comaker",
    "Deceased" = "Deceased",
    "Individual" = "Individual",
    "JointContractualLiability" = "JointContractualLiability",
    "JointParticipating" = "JointParticipating",
    "Maker" = "Maker",
    "OnBehalfOf" = "OnBehalfOf",
    "Terminated" = "Terminated",
    "Undesignated" = "Undesignated"
}
;
/**
 * Term: Credit Liability Account Status Type Definition: This data element is an enumerated status list for an account as of the Account Status Date.
 */
export enum CreditLiabilityAccountStatusBase {
    "Closed" = "Closed",
    "Frozen" = "Frozen",
    "Open" = "Open",
    "Paid" = "Paid",
    "Refinanced" = "Refinanced",
    "Transferred" = "Transferred"
}
;
/**
 * Term: Credit Liability Current Rating Type Definition: The liability accounts current rating (as of Date Reported) for how timely the borrower has been making payments on this account.
 */
export enum CreditLiabilityCurrentRatingBase {
    "AsAgreed" = "AsAgreed",
    "BankruptcyOrWageEarnerPlan" = "BankruptcyOrWageEarnerPlan",
    "ChargeOff" = "ChargeOff",
    "Collection" = "Collection",
    "CollectionOrChargeOff" = "CollectionOrChargeOff",
    "Foreclosure" = "Foreclosure",
    "ForeclosureOrRepossession" = "ForeclosureOrRepossession",
    "Late30Days" = "Late30Days",
    "Late60Days" = "Late60Days",
    "Late90Days" = "Late90Days",
    "LateOver120Days" = "LateOver120Days",
    "NoDataAvailable" = "NoDataAvailable",
    "Repossession" = "Repossession",
    "TooNew" = "TooNew",
    "WageEarnerPlan" = "WageEarnerPlan"
}
;
/**
 * Term: Credit Liability Highest Adverse Rating Type Definition: The liability accounts highest (or worst) rating type for how timely the borrower has been making payments on this account.
 */
export enum CreditLiabilityHighestAdverseRatingBase {
    "AsAgreed" = "AsAgreed",
    "BankruptcyOrWageEarnerPlan" = "BankruptcyOrWageEarnerPlan",
    "ChargeOff" = "ChargeOff",
    "Collection" = "Collection",
    "CollectionOrChargeOff" = "CollectionOrChargeOff",
    "Foreclosure" = "Foreclosure",
    "ForeclosureOrRepossession" = "ForeclosureOrRepossession",
    "Late30Days" = "Late30Days",
    "Late60Days" = "Late60Days",
    "Late90Days" = "Late90Days",
    "LateOver120Days" = "LateOver120Days",
    "NoDataAvailable" = "NoDataAvailable",
    "Repossession" = "Repossession",
    "TooNew" = "TooNew",
    "WageEarnerPlan" = "WageEarnerPlan"
}
;
/**
 * Term: Credit Liability Most Recent Adverse Rating Type Definition: The liability accounts most recent delinquency rating type for how timely the borrower has been making payments on this account.
 */
export enum CreditLiabilityMostRecentAdverseRatingBase {
    "AsAgreed" = "AsAgreed",
    "BankruptcyOrWageEarnerPlan" = "BankruptcyOrWageEarnerPlan",
    "ChargeOff" = "ChargeOff",
    "Collection" = "Collection",
    "CollectionOrChargeOff" = "CollectionOrChargeOff",
    "Foreclosure" = "Foreclosure",
    "ForeclosureOrRepossession" = "ForeclosureOrRepossession",
    "Late30Days" = "Late30Days",
    "Late60Days" = "Late60Days",
    "Late90Days" = "Late90Days",
    "LateOver120Days" = "LateOver120Days",
    "NoDataAvailable" = "NoDataAvailable",
    "Repossession" = "Repossession",
    "TooNew" = "TooNew",
    "WageEarnerPlan" = "WageEarnerPlan"
}
;
/**
 * Term: Credit Liability Prior Adverse Rating Type Definition: This is the accounts manner Of payment rating type for the associated Prior Adverse Rating Date.
 */
export enum CreditLiabilityPriorAdverseRatingBase {
    "AsAgreed" = "AsAgreed",
    "BankruptcyOrWageEarnerPlan" = "BankruptcyOrWageEarnerPlan",
    "ChargeOff" = "ChargeOff",
    "Collection" = "Collection",
    "CollectionOrChargeOff" = "CollectionOrChargeOff",
    "Foreclosure" = "Foreclosure",
    "ForeclosureOrRepossession" = "ForeclosureOrRepossession",
    "Late30Days" = "Late30Days",
    "Late60Days" = "Late60Days",
    "Late90Days" = "Late90Days",
    "LateOver120Days" = "LateOver120Days",
    "NoDataAvailable" = "NoDataAvailable",
    "Repossession" = "Repossession",
    "TooNew" = "TooNew",
    "WageEarnerPlan" = "WageEarnerPlan"
}
;
/**
 * Term: Credit Liability Terms Source Type Definition: This enumerated element indicates whether the monthly payment terms amount was provided by the repository bureau, or calculated by the credit bureau.
 */
export enum CreditLiabilityTermsSourceBase {
    "Calculated" = "Calculated",
    "Provided" = "Provided"
}
;
/**
 * Term: Credit Loan Type Definition: This element contains an enumerated list of common loan types. If the loan type is Other, then the description is entered into the Credit Loan Type Other Description element.
 */
export enum CreditLoanBase {
    "Agriculture" = "Agriculture",
    "Airplane" = "Airplane",
    "ApplianceOrFurniture" = "ApplianceOrFurniture",
    "AttorneyFees" = "AttorneyFees",
    "AutoLease" = "AutoLease",
    "AutoLoanEquityTransfer" = "AutoLoanEquityTransfer",
    "Automobile" = "Automobile",
    "AutoRefinance" = "AutoRefinance",
    "BiMonthlyMortgageTermsInYears" = "BiMonthlyMortgageTermsInYears",
    "Boat" = "Boat",
    "Business" = "Business",
    "BusinessCreditCard" = "BusinessCreditCard",
    "Camper" = "Camper",
    "ChargeAccount" = "ChargeAccount",
    "CheckCreditOrLineOfCredit" = "CheckCreditOrLineOfCredit",
    "ChildSupport" = "ChildSupport",
    "Collection" = "Collection",
    "CollectionAttorney" = "CollectionAttorney",
    "Comaker" = "Comaker",
    "CombinedCreditPlan" = "CombinedCreditPlan",
    "CommercialCreditObligation" = "CommercialCreditObligation",
    "CommercialLineOfCredit" = "CommercialLineOfCredit",
    "CommercialMortgage" = "CommercialMortgage",
    "ConditionalSalesContract" = "ConditionalSalesContract",
    "ConditionalSalesContractRefinance" = "ConditionalSalesContractRefinance",
    "Consolidation" = "Consolidation",
    "ConstructionLoan" = "ConstructionLoan",
    "ConventionalRealEstateMortgage" = "ConventionalRealEstateMortgage",
    "CreditCard" = "CreditCard",
    "CreditLineSecured" = "CreditLineSecured",
    "DebitCard" = "DebitCard",
    "DebtCounselingService" = "DebtCounselingService",
    "DeferredStudentLoan" = "DeferredStudentLoan",
    "DepositRelated" = "DepositRelated",
    "Educational" = "Educational",
    "Employment" = "Employment",
    "FactoringCompanyAccount" = "FactoringCompanyAccount",
    "FamilySupport" = "FamilySupport",
    "FarmersHomeAdministrationFHMA" = "FarmersHomeAdministrationFHMA",
    "FederalConsolidatedLoan" = "FederalConsolidatedLoan",
    "FHAComakerNotBorrower" = "FHAComakerNotBorrower",
    "FHAHomeImprovement" = "FHAHomeImprovement",
    "FHARealEstateMortgage" = "FHARealEstateMortgage",
    "FinanceStatement" = "FinanceStatement",
    "GovernmentBenefit" = "GovernmentBenefit",
    "GovernmentEmployeeAdvance" = "GovernmentEmployeeAdvance",
    "GovernmentFeeForService" = "GovernmentFeeForService",
    "GovernmentFine" = "GovernmentFine",
    "GovernmentGrant" = "GovernmentGrant",
    "GovernmentMiscellaneousDebt" = "GovernmentMiscellaneousDebt",
    "GovernmentOverpayment" = "GovernmentOverpayment",
    "GovernmentSecuredDirectLoan" = "GovernmentSecuredDirectLoan",
    "GovernmentSecuredGuaranteeLoan" = "GovernmentSecuredGuaranteeLoan",
    "GovernmentUnsecuredDirectLoan" = "GovernmentUnsecuredDirectLoan",
    "GovernmentUnsecuredGuaranteeLoan" = "GovernmentUnsecuredGuaranteeLoan",
    "HomeEquity" = "HomeEquity",
    "HomeEquityLineOfCredit" = "HomeEquityLineOfCredit",
    "HomeImprovement" = "HomeImprovement",
    "HouseholdGoods" = "HouseholdGoods",
    "HouseholdGoodsAndOtherCollateralAuto" = "HouseholdGoodsAndOtherCollateralAuto",
    "HouseholdGoodsSecured" = "HouseholdGoodsSecured",
    "InstallmentLoan" = "InstallmentLoan",
    "InstallmentSalesContract" = "InstallmentSalesContract",
    "InsuranceClaims" = "InsuranceClaims",
    "Lease" = "Lease",
    "LenderPlacedInsurance" = "LenderPlacedInsurance",
    "ManualMortgage" = "ManualMortgage",
    "ManufacturedHome" = "ManufacturedHome",
    "MedicalDebt" = "MedicalDebt",
    "MobileHome" = "MobileHome",
    "MobilePhone" = "MobilePhone",
    "Mortgage" = "Mortgage",
    "NoteLoan" = "NoteLoan",
    "NoteLoanWithComaker" = "NoteLoanWithComaker",
    "Other" = "Other",
    "PartiallySecured" = "PartiallySecured",
    "PersonalLoan" = "PersonalLoan",
    "RealEstateJuniorLiens" = "RealEstateJuniorLiens",
    "RealEstateLoanEquityTransfer" = "RealEstateLoanEquityTransfer",
    "RealEstateMortgageWithoutOtherCollateral" = "RealEstateMortgageWithoutOtherCollateral",
    "RealEstateSpecificTypeUnknown" = "RealEstateSpecificTypeUnknown",
    "Recreational" = "Recreational",
    "RecreationalVehicle" = "RecreationalVehicle",
    "Refinance" = "Refinance",
    "RefundAnticipationLoan" = "RefundAnticipationLoan",
    "RentalAgreement" = "RentalAgreement",
    "ResidentialLoan" = "ResidentialLoan",
    "ReturnedCheck" = "ReturnedCheck",
    "RevolvingBusinessLines" = "RevolvingBusinessLines",
    "SecondMortgage" = "SecondMortgage",
    "Secured" = "Secured",
    "SecuredByCosigner" = "SecuredByCosigner",
    "SecuredCreditCard" = "SecuredCreditCard",
    "SecuredHomeImprovement" = "SecuredHomeImprovement",
    "SemiMonthlyMortgagePayment" = "SemiMonthlyMortgagePayment",
    "SinglePaymentLoan" = "SinglePaymentLoan",
    "SpouseSupport" = "SpouseSupport",
    "SummaryOfAccountsWithSameStatus" = "SummaryOfAccountsWithSameStatus",
    "TimeSharedLoan" = "TimeSharedLoan",
    "Title1Loan" = "Title1Loan",
    "UnknownLoanType" = "UnknownLoanType",
    "Unsecured" = "Unsecured",
    "UtilityCompany" = "UtilityCompany",
    "VeteransAdministrationLoan" = "VeteransAdministrationLoan",
    "VeteransAdministrationRealEstateMortgage" = "VeteransAdministrationRealEstateMortgage"
}
;
/**
 * Term: Creditor Servicing Of Loan Statement Type Definition: Specifies the certainty of the originating lender's or creditor's intention to service the mortgage loan.
 */
export enum CreditorServicingOfLoanStatementBase {
    "CreditorIntendsToServiceLoan" = "CreditorIntendsToServiceLoan",
    "CreditorIntendsToTransferServicingOfLoan" = "CreditorIntendsToTransferServicingOfLoan",
    "CreditorMayAssignSellOrTransferServicingOfLoan" = "CreditorMayAssignSellOrTransferServicingOfLoan",
    "Other" = "Other"
}
;
/**
 * Term: Credit Public Record Account Ownership Type Definition: Describes the ownership relation of the borrower(s) to the public record (i.e. are they individually responsible, jointly responsible, terminated).
 */
export enum CreditPublicRecordAccountOwnershipBase {
    "Individual" = "Individual",
    "Joint" = "Joint",
    "Terminated" = "Terminated"
}
;
/**
 * Term: Credit Public Record Type Definition: This is the enumerated type of public record reported by the credit bureau. If the type does not fit one of the enumerated categories, enter the type in the Credit Public Record Type Other Description element.
 */
export enum CreditPublicRecordBase {
    "Annulment" = "Annulment",
    "Attachment" = "Attachment",
    "BankruptcyChapter11" = "BankruptcyChapter11",
    "BankruptcyChapter12" = "BankruptcyChapter12",
    "BankruptcyChapter13" = "BankruptcyChapter13",
    "BankruptcyChapter7" = "BankruptcyChapter7",
    "BankruptcyChapter7Involuntary" = "BankruptcyChapter7Involuntary",
    "BankruptcyChapter7Voluntary" = "BankruptcyChapter7Voluntary",
    "BankruptcyTypeUnknown" = "BankruptcyTypeUnknown",
    "ChildSupport" = "ChildSupport",
    "Collection" = "Collection",
    "CustodyAgreement" = "CustodyAgreement",
    "DivorceDecree" = "DivorceDecree",
    "FamilySupport" = "FamilySupport",
    "FictitiousName" = "FictitiousName",
    "FinancialCounseling" = "FinancialCounseling",
    "FinancingStatement" = "FinancingStatement",
    "ForcibleDetainer" = "ForcibleDetainer",
    "Foreclosure" = "Foreclosure",
    "Garnishment" = "Garnishment",
    "Judgment" = "Judgment",
    "LawSuit" = "LawSuit",
    "Lien" = "Lien",
    "MechanicsLien" = "MechanicsLien",
    "MedicalLien" = "MedicalLien",
    "NonResponsibility" = "NonResponsibility",
    "NoticeOfDefault" = "NoticeOfDefault",
    "Other" = "Other",
    "PublicSale" = "PublicSale",
    "RealEstateRecording" = "RealEstateRecording",
    "Repossession" = "Repossession",
    "SpouseSupport" = "SpouseSupport",
    "SupportDebt" = "SupportDebt",
    "TaxLienCity" = "TaxLienCity",
    "TaxLienCounty" = "TaxLienCounty",
    "TaxLienFederal" = "TaxLienFederal",
    "TaxLienOther" = "TaxLienOther",
    "TaxLienState" = "TaxLienState",
    "Trusteeship" = "Trusteeship",
    "Unknown" = "Unknown",
    "UnlawfulDetainer" = "UnlawfulDetainer"
}
;
/**
 * Term: Credit Public Record Disposition Type Definition: This is the enumerated disposition or the public record as of the Disposition Date. If the disposition does not fit one of the enumerated categories, select Other, and enter it in the Credit Public Record Disposition Type Other Description element.
 */
export enum CreditPublicRecordDispositionBase {
    "Adjudicated" = "Adjudicated",
    "Appealed" = "Appealed",
    "Canceled" = "Canceled",
    "Completed" = "Completed",
    "Converted" = "Converted",
    "Discharged" = "Discharged",
    "Dismissed" = "Dismissed",
    "Distributed" = "Distributed",
    "Filed" = "Filed",
    "Granted" = "Granted",
    "InvoluntarilyDischarged" = "InvoluntarilyDischarged",
    "NonAdjudicated" = "NonAdjudicated",
    "Other" = "Other",
    "Paid" = "Paid",
    "PaidNotSatisfied" = "PaidNotSatisfied",
    "Pending" = "Pending",
    "RealEstateSold" = "RealEstateSold",
    "Released" = "Released",
    "Rescinded" = "Rescinded",
    "Satisfied" = "Satisfied",
    "Settled" = "Settled",
    "Unknown" = "Unknown",
    "Unreleased" = "Unreleased",
    "Unsatisfied" = "Unsatisfied",
    "Vacated" = "Vacated",
    "VoluntarilyDischarged" = "VoluntarilyDischarged",
    "Withdrawn" = "Withdrawn"
}
;
/**
 * Term: Credit Public Record Payment Frequency Type Definition: This element indicates the frequency of payments allowed for the Legal Obligation Amount.
 */
export enum CreditPublicRecordPaymentFrequencyBase {
    "Biweekly" = "Biweekly",
    "LumpSum" = "LumpSum",
    "Monthly" = "Monthly",
    "Other" = "Other",
    "Unknown" = "Unknown",
    "Weekly" = "Weekly",
    "Yearly" = "Yearly"
}
;
/**
 * Term: Credit Rating Code Type Definition: Identifies which system of Manner Of Payment (MOP) rating codes is in the credit report. If Other is selected, then the name of the coding system will appear in the Credit Rating Code Type Other Description.
 */
export enum CreditRatingCodeBase {
    "Equifax" = "Equifax",
    "Experian" = "Experian",
    "Other" = "Other"
}
;
/**
 * Term: Credit Reference Type Definition: Specifies the type of credit history or type of payments used as credit history to establish acceptable credit reputation.
 */
export enum CreditReferenceBase {
    "MortgageCreditOnly" = "MortgageCreditOnly",
    "NonCreditPayment" = "NonCreditPayment",
    "NonTraditional" = "NonTraditional",
    "Other" = "Other"
}
;
/**
 * Term: Credit Report Type Definition: The type of credit report that was requested or produced. Most common types are Merged report (data from credit data repositories is merged), and RMCR (Residential Mortgage Credit Report - contains verified liabilities, employment, etc.).
 */
export enum CreditReportBase {
    "Error" = "Error",
    "LoanQuality" = "LoanQuality",
    "LoanQualityCompare" = "LoanQualityCompare",
    "Merge" = "Merge",
    "MergePlus" = "MergePlus",
    "MortgageOnly" = "MortgageOnly",
    "NonTraditional" = "NonTraditional",
    "Other" = "Other",
    "RiskScoresOnly" = "RiskScoresOnly",
    "RMCR" = "RMCR",
    "RMCRForeign" = "RMCRForeign",
    "Status" = "Status"
}
;
/**
 * Term: Credit Report Merge Type Definition: This element indicates how duplicate data from multiple sources is handled on a credit report.
 */
export enum CreditReportMergeBase {
    "Blend" = "Blend",
    "ListAndStack" = "ListAndStack",
    "PickAndChoose" = "PickAndChoose"
}
;
/**
 * Term: Credit Report Price Type Definition: This describes the type of the Credit Report Price (Net, Tax, Total or Other). If Other is selected enter the description into the Credit Report Price Type Other Description element.
 */
export enum CreditReportPriceBase {
    "Net" = "Net",
    "Other" = "Other",
    "Tax" = "Tax",
    "Total" = "Total"
}
;
/**
 * Term: Credit Report Request Action Type Definition: Select the type of service action being requested. If the service action refers to an existing report, specify which one in the Credit Report Identifier.
 */
export enum CreditReportRequestActionBase {
    "ForceNew" = "ForceNew",
    "Other" = "Other",
    "Reissue" = "Reissue",
    "Retrieve" = "Retrieve",
    "SecondaryUseNotification" = "SecondaryUseNotification",
    "StatusQuery" = "StatusQuery",
    "Submit" = "Submit",
    "Update" = "Update",
    "Upgrade" = "Upgrade"
}
;
/**
 * Term: Credit Repository Source Type Definition: This element describes the source of the credit file, Equifax, Experian, Trans Union or Unspecified if the specific sources are not specified.
 */
export enum CreditRepositorySourceBase {
    "Equifax" = "Equifax",
    "Experian" = "Experian",
    "Innovis" = "Innovis",
    "LexisNexis" = "LexisNexis",
    "Other" = "Other",
    "TransUnion" = "TransUnion",
    "Unspecified" = "Unspecified"
}
;
/**
 * Term: Credit Request Type Definition: The Credit Request Type specifies either an Individual Report on one person, or a Joint Report on two married persons.
 */
export enum CreditRequestBase {
    "Individual" = "Individual",
    "Joint" = "Joint"
}
;
/**
 * Term: Credit Response Alert Message Type Definition: Lists the name of the repository bureau or other product that generated the alert message.
 */
export enum CreditResponseAlertMessageBase {
    "EquifaxIdentityScan" = "EquifaxIdentityScan",
    "EquifaxSAFESCAN" = "EquifaxSAFESCAN",
    "EquifaxSSNVerified" = "EquifaxSSNVerified",
    "ExperianFACSPlus" = "ExperianFACSPlus",
    "ExperianFraudShield" = "ExperianFraudShield",
    "Other" = "Other",
    "TransUnionHAWKAlert" = "TransUnionHAWKAlert",
    "TransUnionHighRiskFraudAlert" = "TransUnionHighRiskFraudAlert",
    "TransUnionIdentifierMismatchAlert" = "TransUnionIdentifierMismatchAlert",
    "TransUnionIDVision" = "TransUnionIDVision",
    "TransUnionTransAlert" = "TransUnionTransAlert"
}
;
/**
 * Term: Credit Response Alert Message Category Type Definition: Describes the general category of the alert message. This allows for automated processing by systems reading the credit alert messages.
 */
export enum CreditResponseAlertMessageCategoryBase {
    "CreditFileSuppressed" = "CreditFileSuppressed",
    "DeathClaim" = "DeathClaim",
    "DemographicsVerification" = "DemographicsVerification",
    "FACTAActiveDuty" = "FACTAActiveDuty",
    "FACTAAddressDiscrepancy" = "FACTAAddressDiscrepancy",
    "FACTAFraudVictimExtended" = "FACTAFraudVictimExtended",
    "FACTAFraudVictimInitial" = "FACTAFraudVictimInitial",
    "FACTARiskScoreValue" = "FACTARiskScoreValue",
    "FraudVictim" = "FraudVictim",
    "FraudWarning" = "FraudWarning",
    "Other" = "Other",
    "RecentlyAddedAuthorizedUserAlert" = "RecentlyAddedAuthorizedUserAlert",
    "SSNVerification" = "SSNVerification"
}
;
/**
 * Term: Credit Response Alert Message Code Source Type Definition: This element identifies the name of the source for the code values used in the Credit Response Alert Message Code. The enumeration definition identifies the source document and name of the table that contains the code values.
 */
export enum CreditResponseAlertMessageCodeSourceBase {
    "EquifaxFraudVictimAlert" = "EquifaxFraudVictimAlert",
    "EquifaxHitNoHitDesignator" = "EquifaxHitNoHitDesignator",
    "EquifaxOFAC" = "EquifaxOFAC",
    "EquifaxSafescan" = "EquifaxSafescan",
    "ExperianFraudServicesIndicator" = "ExperianFraudServicesIndicator",
    "ExperianMessage" = "ExperianMessage",
    "ExperianStatementType" = "ExperianStatementType",
    "Other" = "Other",
    "TransUnionAuthorizedUser" = "TransUnionAuthorizedUser",
    "TransUnionFileHit" = "TransUnionFileHit",
    "TransUnionFraudVictimAlert" = "TransUnionFraudVictimAlert",
    "TransUnionHighRiskFraudAlert" = "TransUnionHighRiskFraudAlert",
    "TransUnionIdentifierMismatchAlert" = "TransUnionIdentifierMismatchAlert",
    "TransUnionOFAC" = "TransUnionOFAC",
    "TransUnionSuppressionIndicator" = "TransUnionSuppressionIndicator"
}
;
/**
 * Term: Credit Score Category Type Definition: An enumerated list that describes the general type or purpose of a credit score model. This allows LOS systems to extract scores by a more general category, without having to know the specific score model names.
 */
export enum CreditScoreCategoryBase {
    "Bankruptcy" = "Bankruptcy",
    "CreditRepository" = "CreditRepository",
    "FICO" = "FICO",
    "FICONextGen" = "FICONextGen",
    "Other" = "Other",
    "ThinFile" = "ThinFile",
    "Vantage" = "Vantage"
}
;
/**
 * Term: Credit Score Category Version Type Definition: A value from a MISMO prescribed list that represents a specific version, release of a Credit Score Category Type.
 */
export enum CreditScoreCategoryVersionBase {
    "FICO10" = "FICO10",
    "FICO10T" = "FICO10T",
    "FICO4" = "FICO4",
    "FICO8" = "FICO8",
    "FICO9" = "FICO9",
    "FICO98" = "FICO98",
    "Other" = "Other",
    "Vantage2" = "Vantage2",
    "Vantage3" = "Vantage3",
    "Vantage4" = "Vantage4"
}
;
/**
 * Term: Credit Score Exclusion Reason Type Definition: A value from a MISMO defined list that identifies the reason why a credit score could not be generated.
 */
export enum CreditScoreExclusionReasonBase {
    "InvalidScoreRequest" = "InvalidScoreRequest",
    "NotScoredCreditDataNotAvailable" = "NotScoredCreditDataNotAvailable",
    "NotScoredFileCannotBeScored" = "NotScoredFileCannotBeScored",
    "NotScoredFileIsUnderReview" = "NotScoredFileIsUnderReview",
    "NotScoredFileTooLong" = "NotScoredFileTooLong",
    "NotScoredInsufficientCredit" = "NotScoredInsufficientCredit",
    "NotScoredNoQualifyingAccount" = "NotScoredNoQualifyingAccount",
    "NotScoredNoRecentAccountInformation" = "NotScoredNoRecentAccountInformation",
    "NotScoredRequirementsNotMet" = "NotScoredRequirementsNotMet",
    "NotScoredSubjectDeceased" = "NotScoredSubjectDeceased",
    "ScoringNotAvailable" = "ScoringNotAvailable",
    "UnauthorizedScoreRequest" = "UnauthorizedScoreRequest"
}
;
/**
 * Term: Credit Score Impairment Type Definition: Identifies a characteristic of the Credit Score that impairs its effectiveness as an indicator of credit risk.
 */
export enum CreditScoreImpairmentBase {
    "ImmaterialDisputedAccount" = "ImmaterialDisputedAccount",
    "InsufficientCreditHistory" = "InsufficientCreditHistory",
    "NonPredictiveScore" = "NonPredictiveScore",
    "Other" = "Other",
    "SignificantErrorsScore" = "SignificantErrorsScore",
    "Unscorable" = "Unscorable"
}
;
/**
 * Term: Credit Score Model Name Type Definition: A value from a MISMO prescribed list that specifies the score algorithm model name used to produce the referenced credit risk score.
 */
export enum CreditScoreModelNameBase {
    "Beacon09MortgageIndustryOption" = "Beacon09MortgageIndustryOption",
    "EquifaxBankruptcyNavigator4.0Index05146" = "EquifaxBankruptcyNavigator4.0Index05146",
    "EquifaxBankruptcyNavigator4.0Index05147" = "EquifaxBankruptcyNavigator4.0Index05147",
    "EquifaxBankruptcyNavigator4.0Index05276" = "EquifaxBankruptcyNavigator4.0Index05276",
    "EquifaxBankruptcyNavigator4.0Index05277" = "EquifaxBankruptcyNavigator4.0Index05277",
    "EquifaxBankruptcyNavigator4.0Index05373" = "EquifaxBankruptcyNavigator4.0Index05373",
    "EquifaxBankruptcyNavigator4.0Index05374" = "EquifaxBankruptcyNavigator4.0Index05374",
    "EquifaxBankruptcyNavigator4.0Index05375" = "EquifaxBankruptcyNavigator4.0Index05375",
    "EquifaxBankruptcyNavigator4.0Index05376" = "EquifaxBankruptcyNavigator4.0Index05376",
    "EquifaxBankruptcyNavigatorIndex02781" = "EquifaxBankruptcyNavigatorIndex02781",
    "EquifaxBankruptcyNavigatorIndex02782" = "EquifaxBankruptcyNavigatorIndex02782",
    "EquifaxBankruptcyNavigatorIndex02783" = "EquifaxBankruptcyNavigatorIndex02783",
    "EquifaxBankruptcyNavigatorIndex02784" = "EquifaxBankruptcyNavigatorIndex02784",
    "EquifaxBeacon" = "EquifaxBeacon",
    "EquifaxBeacon5.0" = "EquifaxBeacon5.0",
    "EquifaxBeacon5.0Auto" = "EquifaxBeacon5.0Auto",
    "EquifaxBeacon5.0BankCard" = "EquifaxBeacon5.0BankCard",
    "EquifaxBeacon5.0Installment" = "EquifaxBeacon5.0Installment",
    "EquifaxBeacon5.0PersonalFinance" = "EquifaxBeacon5.0PersonalFinance",
    "EquifaxBeaconAuto" = "EquifaxBeaconAuto",
    "EquifaxBeaconBankcard" = "EquifaxBeaconBankcard",
    "EquifaxBeaconInstallment" = "EquifaxBeaconInstallment",
    "EquifaxBeaconPersonalFinance" = "EquifaxBeaconPersonalFinance",
    "EquifaxDAS" = "EquifaxDAS",
    "EquifaxEnhancedBeacon" = "EquifaxEnhancedBeacon",
    "EquifaxEnhancedDAS" = "EquifaxEnhancedDAS",
    "EquifaxFICOAutoScore8" = "EquifaxFICOAutoScore8",
    "EquifaxFICOAutoScore9" = "EquifaxFICOAutoScore9",
    "EquifaxFICOBankcardScore8" = "EquifaxFICOBankcardScore8",
    "EquifaxFICOBankcardScore9" = "EquifaxFICOBankcardScore9",
    "EquifaxFICOMortgageScore8" = "EquifaxFICOMortgageScore8",
    "EquifaxFICOScore8" = "EquifaxFICOScore8",
    "EquifaxFICOScore9" = "EquifaxFICOScore9",
    "EquifaxMarketMax" = "EquifaxMarketMax",
    "EquifaxMortgageScore" = "EquifaxMortgageScore",
    "EquifaxPinnacle" = "EquifaxPinnacle",
    "EquifaxPinnacle2.0" = "EquifaxPinnacle2.0",
    "EquifaxVantageScore" = "EquifaxVantageScore",
    "EquifaxVantageScore2.0" = "EquifaxVantageScore2.0",
    "EquifaxVantageScore3.0" = "EquifaxVantageScore3.0",
    "EquifaxVantageScore4.0" = "EquifaxVantageScore4.0",
    "ExperianFairIsaac" = "ExperianFairIsaac",
    "ExperianFairIsaacAdvanced" = "ExperianFairIsaacAdvanced",
    "ExperianFairIsaacAdvanced2.0" = "ExperianFairIsaacAdvanced2.0",
    "ExperianFairIsaacAuto" = "ExperianFairIsaacAuto",
    "ExperianFairIsaacBankcard" = "ExperianFairIsaacBankcard",
    "ExperianFairIsaacInstallment" = "ExperianFairIsaacInstallment",
    "ExperianFairIsaacPersonalFinance" = "ExperianFairIsaacPersonalFinance",
    "ExperianFICOAutoScore3" = "ExperianFICOAutoScore3",
    "ExperianFICOAutoScore8" = "ExperianFICOAutoScore8",
    "ExperianFICOAutoScore9" = "ExperianFICOAutoScore9",
    "ExperianFICOBankcardScore3" = "ExperianFICOBankcardScore3",
    "ExperianFICOBankcardScore8" = "ExperianFICOBankcardScore8",
    "ExperianFICOBankcardScore9" = "ExperianFICOBankcardScore9",
    "ExperianFICOClassicV3" = "ExperianFICOClassicV3",
    "ExperianFICOInstallmentScore3" = "ExperianFICOInstallmentScore3",
    "ExperianFICOMortgageScore8" = "ExperianFICOMortgageScore8",
    "ExperianFICOPersonalFinanceScore3" = "ExperianFICOPersonalFinanceScore3",
    "ExperianFICOScore8" = "ExperianFICOScore8",
    "ExperianFICOScore8.0.1" = "ExperianFICOScore8.0.1",
    "ExperianFICOScore9" = "ExperianFICOScore9",
    "ExperianMDSBankruptcyII" = "ExperianMDSBankruptcyII",
    "ExperianNewNationalEquivalency" = "ExperianNewNationalEquivalency",
    "ExperianNewNationalRisk" = "ExperianNewNationalRisk",
    "ExperianOldNationalRisk" = "ExperianOldNationalRisk",
    "ExperianScorexPLUS" = "ExperianScorexPLUS",
    "ExperianVantageScore" = "ExperianVantageScore",
    "ExperianVantageScore2.0" = "ExperianVantageScore2.0",
    "ExperianVantageScore3.0" = "ExperianVantageScore3.0",
    "ExperianVantageScore4.0" = "ExperianVantageScore4.0",
    "FICOExpansionScore" = "FICOExpansionScore",
    "FICORiskScoreClassic04" = "FICORiskScoreClassic04",
    "FICORiskScoreClassic98" = "FICORiskScoreClassic98",
    "FICORiskScoreClassicAuto98" = "FICORiskScoreClassicAuto98",
    "FICORiskScoreClassicBankcard98" = "FICORiskScoreClassicBankcard98",
    "FICORiskScoreClassicInstallmentLoan98" = "FICORiskScoreClassicInstallmentLoan98",
    "FICORiskScoreClassicPersonalFinance98" = "FICORiskScoreClassicPersonalFinance98",
    "FICORiskScoreNextGen00" = "FICORiskScoreNextGen00",
    "FICORiskScoreNextGen03" = "FICORiskScoreNextGen03",
    "Other" = "Other",
    "TransUnionDelphi" = "TransUnionDelphi",
    "TransUnionEmpirica" = "TransUnionEmpirica",
    "TransUnionEmpiricaAuto" = "TransUnionEmpiricaAuto",
    "TransUnionEmpiricaBankcard" = "TransUnionEmpiricaBankcard",
    "TransUnionEmpiricaInstallment" = "TransUnionEmpiricaInstallment",
    "TransUnionEmpiricaPersonalFinance" = "TransUnionEmpiricaPersonalFinance",
    "TransUnionFICOAutoScore4" = "TransUnionFICOAutoScore4",
    "TransUnionFICOAutoScore8" = "TransUnionFICOAutoScore8",
    "TransUnionFICOAutoScore9" = "TransUnionFICOAutoScore9",
    "TransUnionFICOBankcardScore4" = "TransUnionFICOBankcardScore4",
    "TransUnionFICOBankcardScore8" = "TransUnionFICOBankcardScore8",
    "TransUnionFICOBankcardScore9" = "TransUnionFICOBankcardScore9",
    "TransUnionFICOBankruptcyScore2" = "TransUnionFICOBankruptcyScore2",
    "TransUnionFICOInstallmentScore4" = "TransUnionFICOInstallmentScore4",
    "TransUnionFICOMortgageScore8" = "TransUnionFICOMortgageScore8",
    "TransUnionFICOPersonalFinanceScore4" = "TransUnionFICOPersonalFinanceScore4",
    "TransUnionFICORevenueScore" = "TransUnionFICORevenueScore",
    "TransUnionFICOScore8" = "TransUnionFICOScore8",
    "TransUnionFICOScore9" = "TransUnionFICOScore9",
    "TransUnionNewDelphi" = "TransUnionNewDelphi",
    "TransUnionPrecision" = "TransUnionPrecision",
    "TransUnionPrecision03" = "TransUnionPrecision03",
    "TransUnionVantageScore" = "TransUnionVantageScore",
    "TransUnionVantageScore2.0" = "TransUnionVantageScore2.0",
    "TransUnionVantageScore3.0" = "TransUnionVantageScore3.0",
    "TransUnionVantageScore4.0" = "TransUnionVantageScore4.0"
}
;
/**
 * Term: Current First Mortgage Holder Type Definition: Specifies the investor holding the first mortgage that is being refinanced.
 */
export enum CurrentFirstMortgageHolderBase {
    "FNM" = "FNM",
    "FRE" = "FRE",
    "Other" = "Other",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Curtailment Application Sequence Type Definition: Specifies the order in which unscheduled principal payments are applied relative to the scheduled payment.
 */
export enum CurtailmentApplicationSequenceBase {
    "CurtailmentFirst" = "CurtailmentFirst",
    "CurtailmentLast" = "CurtailmentLast"
}
;
/**
 * Term: Data Format Conversion Type Definition: A value from a MISMO-prescribed list that specifies the conversion method used to describe the data with respect to the view.
 */
export enum DataFormatConversionBase {
    "FillMask" = "FillMask",
    "Other" = "Other"
}
;
/**
 * Term: Data Item Change Type Definition: Describes the type of change for the data item.
 */
export enum DataItemChangeBase {
    "Add" = "Add",
    "Delete" = "Delete",
    "Update" = "Update"
}
;
/**
 *
 */
export enum DataNotSuppliedReasonBase {
    "NotCollected" = "NotCollected",
    "NotReceived" = "NotReceived",
    "NotRelevant" = "NotRelevant",
    "Omitted" = "Omitted",
    "Other" = "Other"
}
;
/**
 * Term: Data Source Type Definition: A value from a MISMO prescribed list that identifies the sources of data.
 */
export enum DataSourceBase {
    "AppraisalManagementCompany" = "AppraisalManagementCompany",
    "AssessorRecord" = "AssessorRecord",
    "BuilderOrDeveloper" = "BuilderOrDeveloper",
    "CondominiumCertification" = "CondominiumCertification",
    "CondominiumQuestionnaire" = "CondominiumQuestionnaire",
    "CooperativeBoard" = "CooperativeBoard",
    "CooperativeQuestionnaire" = "CooperativeQuestionnaire",
    "CostService" = "CostService",
    "CostSurvey" = "CostSurvey",
    "DataAggregator" = "DataAggregator",
    "Deed" = "Deed",
    "Developer" = "Developer",
    "EngagementLetter" = "EngagementLetter",
    "ExteriorInspection" = "ExteriorInspection",
    "HomeownersAssociation" = "HomeownersAssociation",
    "IndependentRentalDataSource" = "IndependentRentalDataSource",
    "InteriorExteriorInspection" = "InteriorExteriorInspection",
    "InteriorInspection" = "InteriorInspection",
    "InvestorGuidance" = "InvestorGuidance",
    "LandSurvey" = "LandSurvey",
    "Lender" = "Lender",
    "LoanFile" = "LoanFile",
    "ManagementAgency" = "ManagementAgency",
    "MLS" = "MLS",
    "NonMultipleListingServiceWebsite" = "NonMultipleListingServiceWebsite",
    "Other" = "Other",
    "PhysicalMeasurement" = "PhysicalMeasurement",
    "PlansAndSpecifications" = "PlansAndSpecifications",
    "PlatMap" = "PlatMap",
    "PreviousAppraisalFile" = "PreviousAppraisalFile",
    "PriorInspection" = "PriorInspection",
    "PropertyDataReport" = "PropertyDataReport",
    "PropertyManagementCompany" = "PropertyManagementCompany",
    "PropertyOwner" = "PropertyOwner",
    "PropertyTenant" = "PropertyTenant",
    "PurchaseAgreement" = "PurchaseAgreement",
    "RealEstateAgent" = "RealEstateAgent",
    "ThirdPartyAppraisalReport" = "ThirdPartyAppraisalReport",
    "ThreeDimensionalScan" = "ThreeDimensionalScan",
    "Zoning" = "Zoning"
}
;
/**
 * Term: Day Lighting Energy Efficiency Item Type Definition: A value from a MISMO prescribed list that specifies the type of day lighting present in the home.
 */
export enum DayLightingEnergyEfficiencyItemBase {
    "Other" = "Other",
    "Skylights" = "Skylights",
    "SolarTubes" = "SolarTubes"
}
;
/**
 * Term: Deal Set Expense Type Definition: Specifies the type of expense for  reimbursed tasks or services performed.
 */
export enum DealSetExpenseBase {
    "Other" = "Other",
    "Shipping" = "Shipping",
    "Special" = "Special",
    "Travel" = "Travel"
}
;
/**
 * Term: Deal Set Income Type Definition: Specifies the type of income or fee that may be received for services rendered.
 */
export enum DealSetIncomeBase {
    "Other" = "Other",
    "TransferFee" = "TransferFee"
}
;
/**
 * Term: Debt Collection Restriction Request Type Definition: A value from a MISMO prescribed list that qualifies a request by a consumer to the servicer or debt collector to restrict or limit debt collections per the Fair Debt Collection Practice Act (FDCPA).
 */
export enum DebtCollectionRestrictionRequestBase {
    "DebtCollectorContactThroughLawyer" = "DebtCollectorContactThroughLawyer",
    "DebtCollectorStopContacting" = "DebtCollectorStopContacting",
    "DoNotOweThisDebt" = "DoNotOweThisDebt",
    "NeedMoreInformtionAboutThisDebt" = "NeedMoreInformtionAboutThisDebt",
    "Other" = "Other",
    "SpecifyDebtCollectionCommunicationPreference" = "SpecifyDebtCollectionCommunicationPreference"
}
;
/**
 * Term: Debt Collector Restriction Response Type Definition: A value from a MISMO prescribed list that specifies the servicer's response to the borrower's debt collection restriction request.
 */
export enum DebtCollectorRestrictionResponseBase {
    "AcknowledgmentOfCommunicationPreference" = "AcknowledgmentOfCommunicationPreference",
    "DebtIsAffirmed" = "DebtIsAffirmed",
    "DebtNoLongerValidOrEnforceable" = "DebtNoLongerValidOrEnforceable",
    "InformationProvided" = "InformationProvided",
    "LitigationPending" = "LitigationPending",
    "Other" = "Other"
}
;
/**
 * Term: Declaration Explanation Type Definition: Identifies the particular question asked in the declarations section of the loan application. Used in conjunction with the text field to capture additional information.
 */
export enum DeclarationExplanationBase {
    "AlimonyChildSupport" = "AlimonyChildSupport",
    "BorrowedDownPayment" = "BorrowedDownPayment",
    "CoMakerEndorserOnNote" = "CoMakerEndorserOnNote",
    "DeclaredBankruptcyPastSevenYears" = "DeclaredBankruptcyPastSevenYears",
    "DelinquencyOrDefault" = "DelinquencyOrDefault",
    "DirectIndirectForeclosedPropertyPastSevenYears" = "DirectIndirectForeclosedPropertyPastSevenYears",
    "ObligatedOnLoanForeclosedOrDeedInLieuOfJudgment" = "ObligatedOnLoanForeclosedOrDeedInLieuOfJudgment",
    "Other" = "Other",
    "OutstandingJudgments" = "OutstandingJudgments",
    "PartyToLawsuit" = "PartyToLawsuit"
}
;
/**
 * Term: Deed In Lieu Transition Duration Type Definition: The measure of time during which the borrower will remain in the property after a Deed In Lieu is completed. Duration is determined based on trading party policy guidelines.
 */
export enum DeedInLieuTransitionDurationBase {
    "LongTerm" = "LongTerm",
    "None" = "None",
    "ShortTerm" = "ShortTerm"
}
;
/**
 * Term: Deed Restriction Type Definition: A legally enforceable restriction recorded in the public record on land that supersedes ownership rights.
 */
export enum DeedRestrictionBase {
    "ModeratelyPricedDwellingUnit" = "ModeratelyPricedDwellingUnit",
    "Other" = "Other"
}
;
/**
 * Term: Default Status Type Definition: Indicates the default status of a particular loan.
 */
export enum DefaultStatusBase {
    "Bankruptcy" = "Bankruptcy",
    "DefaultImminent" = "DefaultImminent",
    "Forbearance" = "Forbearance",
    "Foreclosure" = "Foreclosure",
    "InDefault" = "InDefault",
    "Other" = "Other"
}
;
/**
 * Term: Defect Component Label Type Definition: A value from a MISMO prescribed list that identifies a specific component on the property where the defect, damage or deficiency has been observed.
 */
export enum DefectComponentLabelBase {
    "ExteriorWallsAndTrim" = "ExteriorWallsAndTrim",
    "Flooring" = "Flooring",
    "Foundation" = "Foundation",
    "MechanicalSystem" = "MechanicalSystem",
    "Other" = "Other",
    "Roof" = "Roof",
    "WallsAndCeiling" = "WallsAndCeiling",
    "Windows" = "Windows"
}
;
/**
 * Term: Defect Item Location Type Definition: A value from a MISMO prescribed list that identifies the explicit location of the defect, damage or deficiency.
 */
export enum DefectItemLocationBase {
    "FullBathroom" = "FullBathroom",
    "HalfBathroom" = "HalfBathroom",
    "Kitchen" = "Kitchen",
    "Other" = "Other"
}
;
/**
 * Term: Defect Item Recommended Action Type Definition: A value from a MISMO prescribed list that represents the recommended action for the identified defect, damage or deficiency.
 */
export enum DefectItemRecommendedActionBase {
    "Completion" = "Completion",
    "Inspection" = "Inspection",
    "None" = "None",
    "Other" = "Other",
    "Repair" = "Repair"
}
;
/**
 * Term: Definition Of Value Type Definition: A value from a MISMO prescribed list that represents the type of value used for this collateral valuation product.
 */
export enum DefinitionOfValueBase {
    "AsIsValue" = "AsIsValue",
    "AsRepaired" = "AsRepaired",
    "ForecastValue" = "ForecastValue",
    "MarketValue" = "MarketValue",
    "Other" = "Other",
    "QuickSaleValue" = "QuickSaleValue",
    "RetrospectiveValue" = "RetrospectiveValue"
}
;
/**
 * Term: Delinquency Calculation Method Type Definition: A value from a MISMO prescribed list that specifies how delinquency is calculated on a loan.
 */
export enum DelinquencyCalculationMethodBase {
    "MBA" = "MBA",
    "Other" = "Other",
    "OTS" = "OTS"
}
;
/**
 * Term: Delinquency Reporting Property Overall Condition Type Definition: Used to report the overall condition of the property associated with this loan as identified through a property inspection or through direct contact with Borrower, Neighbors, Real Estate Agent, etc.
 */
export enum DelinquencyReportingPropertyOverallConditionBase {
    "Condemned" = "Condemned",
    "Excellent" = "Excellent",
    "Fair" = "Fair",
    "Good" = "Good",
    "NoPropertyInspection" = "NoPropertyInspection",
    "Other" = "Other",
    "Poor" = "Poor",
    "PropertyInaccessible" = "PropertyInaccessible",
    "RemovedOrDestroyed" = "RemovedOrDestroyed",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Delivery Method Type Definition: A value from a MISMO prescribed list that represents the means of delivery of the supporting record set.
 */
export enum DeliveryMethodBase {
    "CommercialCarrier" = "CommercialCarrier",
    "ElectronicDelivery" = "ElectronicDelivery",
    "Email" = "Email",
    "Facsimile" = "Facsimile",
    "InPerson" = "InPerson",
    "Other" = "Other",
    "Telephone" = "Telephone",
    "TTY" = "TTY",
    "USPS" = "USPS"
}
;
/**
 * Term: Delivery Received Status Type Definition: A value from a MISMO prescribed list that represents the initial disposition of the delivery of the supporting record set.
 */
export enum DeliveryReceivedStatusBase {
    "Accepted" = "Accepted",
    "Other" = "Other",
    "PresumedReceived" = "PresumedReceived",
    "Rejected" = "Rejected"
}
;
/**
 * Term: Depreciation Method Type Definition: A value from a MISMO prescribed list that represents the method used to derive depreciated building value.
 */
export enum DepreciationMethodBase {
    "Breakdown" = "Breakdown",
    "EconomicAgeLife" = "EconomicAgeLife",
    "ModifiedEconomicAgeLife" = "ModifiedEconomicAgeLife",
    "Other" = "Other"
}
;
/**
 * Term: Desktop Underwriter Recommendation Type Definition: To convey the DU recommendation.
 */
export enum DesktopUnderwriterRecommendationBase {
    "ApproveEligible" = "ApproveEligible",
    "ApproveIneligible" = "ApproveIneligible",
    "Error" = "Error",
    "ExpandedApproval1Eligible" = "ExpandedApproval1Eligible",
    "ExpandedApproval1Ineligible" = "ExpandedApproval1Ineligible",
    "ExpandedApproval2Eligible" = "ExpandedApproval2Eligible",
    "ExpandedApproval2Ineligible" = "ExpandedApproval2Ineligible",
    "ExpandedApproval3Eligible" = "ExpandedApproval3Eligible",
    "ExpandedApproval3Ineligible" = "ExpandedApproval3Ineligible",
    "OutOfScope" = "OutOfScope",
    "ReferEligible" = "ReferEligible",
    "ReferIneligible" = "ReferIneligible",
    "ReferWithCaution4" = "ReferWithCaution4",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Detail Credit Business Type Definition: Provides a more detailed description of the Credit Business Type.
 */
export enum DetailCreditBusinessBase {
    "AdvertisingAgencies" = "AdvertisingAgencies",
    "AdvertisingMiscellaneous" = "AdvertisingMiscellaneous",
    "AdvertisingNewsMedia" = "AdvertisingNewsMedia",
    "AutomotiveAuctionsWholesale" = "AutomotiveAuctionsWholesale",
    "AutomotiveDealersNew" = "AutomotiveDealersNew",
    "AutomotiveDealersUsed" = "AutomotiveDealersUsed",
    "AutomotiveFarmImplementDealers" = "AutomotiveFarmImplementDealers",
    "AutomotiveLeasing" = "AutomotiveLeasing",
    "AutomotiveMiscellaneous" = "AutomotiveMiscellaneous",
    "AutomotiveParts" = "AutomotiveParts",
    "AutomotiveRental" = "AutomotiveRental",
    "AutomotiveRepairBodyShops" = "AutomotiveRepairBodyShops",
    "AutomotiveServiceStations" = "AutomotiveServiceStations",
    "AutomotiveTBAStoresTireDealers" = "AutomotiveTBAStoresTireDealers",
    "AutomotiveTruckDealers" = "AutomotiveTruckDealers",
    "BankingAllBanks" = "BankingAllBanks",
    "BankingBankcard" = "BankingBankcard",
    "BankingCommercialIndustrial" = "BankingCommercialIndustrial",
    "BankingInstallmentLoansCreditLine" = "BankingInstallmentLoansCreditLine",
    "BankingMiscellaneous" = "BankingMiscellaneous",
    "BankingMortgageDepartment" = "BankingMortgageDepartment",
    "BankingSavingsBanks" = "BankingSavingsBanks",
    "ClothingGeneral" = "ClothingGeneral",
    "ClothingMiscellaneous" = "ClothingMiscellaneous",
    "ClothingSpecialtyShoeHatEtc" = "ClothingSpecialtyShoeHatEtc",
    "CollectionServicesACBOfA" = "CollectionServicesACBOfA",
    "CollectionServicesOther" = "CollectionServicesOther",
    "ContractorsGeneral" = "ContractorsGeneral",
    "ContractorsHomeImprovement" = "ContractorsHomeImprovement",
    "ContractorsMiscellaneous" = "ContractorsMiscellaneous",
    "ContractorsSubcontractors" = "ContractorsSubcontractors",
    "DepartmentAndMailOrderCompleteDepartmentStores" = "DepartmentAndMailOrderCompleteDepartmentStores",
    "DepartmentAndMailOrderMailOrderFirms" = "DepartmentAndMailOrderMailOrderFirms",
    "DepartmentAndMailOrderMiscellaneous" = "DepartmentAndMailOrderMiscellaneous",
    "DepartmentAndMailOrderVarietyStores" = "DepartmentAndMailOrderVarietyStores",
    "EmploymentServices" = "EmploymentServices",
    "FarmAndGardenSuppliesChemicalAndFertilizer" = "FarmAndGardenSuppliesChemicalAndFertilizer",
    "FarmAndGardenSuppliesFeedAndSeed" = "FarmAndGardenSuppliesFeedAndSeed",
    "FarmAndGardenSuppliesMiscellaneous" = "FarmAndGardenSuppliesMiscellaneous",
    "FarmAndGardenSuppliesNurseryAndLandscaping" = "FarmAndGardenSuppliesNurseryAndLandscaping",
    "FinanceAutomobile" = "FinanceAutomobile",
    "FinanceBailBonds" = "FinanceBailBonds",
    "FinanceBrokerageAndInvestmentFirms" = "FinanceBrokerageAndInvestmentFirms",
    "FinanceBulkPurchase" = "FinanceBulkPurchase",
    "FinanceCreditUnions" = "FinanceCreditUnions",
    "FinanceEducation" = "FinanceEducation",
    "FinanceFactoringCompanies" = "FinanceFactoringCompanies",
    "FinanceMiscellaneous" = "FinanceMiscellaneous",
    "FinanceMortgageBrokers" = "FinanceMortgageBrokers",
    "FinanceMortgageCompanies" = "FinanceMortgageCompanies",
    "FinanceMortgageReporters" = "FinanceMortgageReporters",
    "FinancePersonalLoanCompanies" = "FinancePersonalLoanCompanies",
    "FinanceSales" = "FinanceSales",
    "FinanceSavingsAndLoanAssociations" = "FinanceSavingsAndLoanAssociations",
    "GovernmentCityAndCounty" = "GovernmentCityAndCounty",
    "GovernmentFederal" = "GovernmentFederal",
    "GovernmentMiscellaneous" = "GovernmentMiscellaneous",
    "GovernmentState" = "GovernmentState",
    "GroceryDairies" = "GroceryDairies",
    "GroceryMiscellaneous" = "GroceryMiscellaneous",
    "GroceryNeighborhood" = "GroceryNeighborhood",
    "GrocerySupermarkets" = "GrocerySupermarkets",
    "HomeFurnishingApplianceSalesAndService" = "HomeFurnishingApplianceSalesAndService",
    "HomeFurnishingCarpetAndFloorCoverings" = "HomeFurnishingCarpetAndFloorCoverings",
    "HomeFurnishingElectronicsTelevisionAndRadio" = "HomeFurnishingElectronicsTelevisionAndRadio",
    "HomeFurnishingFurniture" = "HomeFurnishingFurniture",
    "HomeFurnishingFurnitureRental" = "HomeFurnishingFurnitureRental",
    "HomeFurnishingInteriorDecoratorsDesign" = "HomeFurnishingInteriorDecoratorsDesign",
    "HomeFurnishingMiscellaneous" = "HomeFurnishingMiscellaneous",
    "HomeFurnishingMusicAndRecords" = "HomeFurnishingMusicAndRecords",
    "InsuranceGeneral" = "InsuranceGeneral",
    "InsuranceLife" = "InsuranceLife",
    "InsuranceMiscellaneous" = "InsuranceMiscellaneous",
    "JewelryAndCameraCameras" = "JewelryAndCameraCameras",
    "JewelryAndCameraComputerSalesAndServices" = "JewelryAndCameraComputerSalesAndServices",
    "JewelryAndCameraJewelry" = "JewelryAndCameraJewelry",
    "JewelryAndCameraMiscellaneous" = "JewelryAndCameraMiscellaneous",
    "JewelryAndCameraVideoTapeRentalAndSales" = "JewelryAndCameraVideoTapeRentalAndSales",
    "LumberAndHardwareAirConditioningPlumbingElectrical" = "LumberAndHardwareAirConditioningPlumbingElectrical",
    "LumberAndHardwareFixtureAndCabinet" = "LumberAndHardwareFixtureAndCabinet",
    "LumberAndHardwareLumberYards" = "LumberAndHardwareLumberYards",
    "LumberAndHardwareMiscellaneous" = "LumberAndHardwareMiscellaneous",
    "LumberAndHardwarePaintGlassAndPaper" = "LumberAndHardwarePaintGlassAndPaper",
    "LumberAndHardwareStores" = "LumberAndHardwareStores",
    "MedicalAndHealthAnimalHospitals" = "MedicalAndHealthAnimalHospitals",
    "MedicalAndHealthChiropractors" = "MedicalAndHealthChiropractors",
    "MedicalAndHealthDentists" = "MedicalAndHealthDentists",
    "MedicalAndHealthDoctorsAndClinics" = "MedicalAndHealthDoctorsAndClinics",
    "MedicalAndHealthFuneralHomesAndCemeteries" = "MedicalAndHealthFuneralHomesAndCemeteries",
    "MedicalAndHealthHospitals" = "MedicalAndHealthHospitals",
    "MedicalAndHealthMedicalEquipment" = "MedicalAndHealthMedicalEquipment",
    "MedicalAndHealthMiscellaneous" = "MedicalAndHealthMiscellaneous",
    "MedicalAndHealthOptometristsAndOpticalStores" = "MedicalAndHealthOptometristsAndOpticalStores",
    "MedicalAndHealthOsteopaths" = "MedicalAndHealthOsteopaths",
    "MedicalAndHealthPharmaciesAndDrugs" = "MedicalAndHealthPharmaciesAndDrugs",
    "MedicalAndHealthVeterinarians" = "MedicalAndHealthVeterinarians",
    "MiscellaneousAuthenticationProducts" = "MiscellaneousAuthenticationProducts",
    "MiscellaneousCreditBureaus" = "MiscellaneousCreditBureaus",
    "MiscellaneousCreditReportBrokers" = "MiscellaneousCreditReportBrokers",
    "MiscellaneousOther" = "MiscellaneousOther",
    "MiscellaneousRetail" = "MiscellaneousRetail",
    "MiscellaneousServices" = "MiscellaneousServices",
    "MiscellaneousWholesale" = "MiscellaneousWholesale",
    "OilAndNationalCreditCardsAirlineTravelCards" = "OilAndNationalCreditCardsAirlineTravelCards",
    "OilAndNationalCreditCardsCreditCardCompanies" = "OilAndNationalCreditCardsCreditCardCompanies",
    "OilAndNationalCreditCardsMiscellaneous" = "OilAndNationalCreditCardsMiscellaneous",
    "OilAndNationalCreditCardsOilCompanies" = "OilAndNationalCreditCardsOilCompanies",
    "PersonalServicesNotMedicalAccountants" = "PersonalServicesNotMedicalAccountants",
    "PersonalServicesNotMedicalBarbersBeautyShops" = "PersonalServicesNotMedicalBarbersBeautyShops",
    "PersonalServicesNotMedicalCountryClubsRestaurants" = "PersonalServicesNotMedicalCountryClubsRestaurants",
    "PersonalServicesNotMedicalDetectiveInvestigativeServices" = "PersonalServicesNotMedicalDetectiveInvestigativeServices",
    "PersonalServicesNotMedicalDryCleaningLaundry" = "PersonalServicesNotMedicalDryCleaningLaundry",
    "PersonalServicesNotMedicalEngineering" = "PersonalServicesNotMedicalEngineering",
    "PersonalServicesNotMedicalEquipmentLeasing" = "PersonalServicesNotMedicalEquipmentLeasing",
    "PersonalServicesNotMedicalFlorists" = "PersonalServicesNotMedicalFlorists",
    "PersonalServicesNotMedicalHealthAndFitnessClubs" = "PersonalServicesNotMedicalHealthAndFitnessClubs",
    "PersonalServicesNotMedicalLegal" = "PersonalServicesNotMedicalLegal",
    "PersonalServicesNotMedicalMiscellaneous" = "PersonalServicesNotMedicalMiscellaneous",
    "PersonalServicesNotMedicalPestControl" = "PersonalServicesNotMedicalPestControl",
    "PersonalServicesNotMedicalPhotographers" = "PersonalServicesNotMedicalPhotographers",
    "RealEstateAndPublicAccommodationApartments" = "RealEstateAndPublicAccommodationApartments",
    "RealEstateAndPublicAccommodationHotels" = "RealEstateAndPublicAccommodationHotels",
    "RealEstateAndPublicAccommodationMiscellaneous" = "RealEstateAndPublicAccommodationMiscellaneous",
    "RealEstateAndPublicAccommodationMobileHomes" = "RealEstateAndPublicAccommodationMobileHomes",
    "RealEstateAndPublicAccommodationMotels" = "RealEstateAndPublicAccommodationMotels",
    "RealEstateAndPublicAccommodationOfficeLeasing" = "RealEstateAndPublicAccommodationOfficeLeasing",
    "RealEstateAndPublicAccommodationPropertyManagement" = "RealEstateAndPublicAccommodationPropertyManagement",
    "RealEstateAndPublicAccommodationRealEstateSales" = "RealEstateAndPublicAccommodationRealEstateSales",
    "SportingGoodsAircraftSalesAndService" = "SportingGoodsAircraftSalesAndService",
    "SportingGoodsBoatAndMarinas" = "SportingGoodsBoatAndMarinas",
    "SportingGoodsMiscellaneous" = "SportingGoodsMiscellaneous",
    "SportingGoodsMotorcycleAndBicycle" = "SportingGoodsMotorcycleAndBicycle",
    "SportingGoodsStores" = "SportingGoodsStores",
    "UtilitiesAndFuelCableSatelliteCompanies" = "UtilitiesAndFuelCableSatelliteCompanies",
    "UtilitiesAndFuelCoalAndWoodDealers" = "UtilitiesAndFuelCoalAndWoodDealers",
    "UtilitiesAndFuelElectricalLightAndPower" = "UtilitiesAndFuelElectricalLightAndPower",
    "UtilitiesAndFuelFuelOilDealers" = "UtilitiesAndFuelFuelOilDealers",
    "UtilitiesAndFuelGarbageAndRubbishDisposals" = "UtilitiesAndFuelGarbageAndRubbishDisposals",
    "UtilitiesAndFuelGasNaturalAndBottled" = "UtilitiesAndFuelGasNaturalAndBottled",
    "UtilitiesAndFuelMiscellaneous" = "UtilitiesAndFuelMiscellaneous",
    "UtilitiesAndFuelTelephoneCompanies" = "UtilitiesAndFuelTelephoneCompanies",
    "UtilitiesAndFuelWaterCompanies" = "UtilitiesAndFuelWaterCompanies",
    "WholesaleAutomotiveSupplies" = "WholesaleAutomotiveSupplies",
    "WholesaleBuildingAndHardwareSupply" = "WholesaleBuildingAndHardwareSupply",
    "WholesaleClothingAndDryGoods" = "WholesaleClothingAndDryGoods",
    "WholesaleCreditCardProcessing" = "WholesaleCreditCardProcessing",
    "WholesaleDrugsAndChemicals" = "WholesaleDrugsAndChemicals",
    "WholesaleGroceries" = "WholesaleGroceries",
    "WholesaleHomeFurnishings" = "WholesaleHomeFurnishings",
    "WholesaleMachineryAndEquipment" = "WholesaleMachineryAndEquipment",
    "WholesaleMiscellaneous" = "WholesaleMiscellaneous"
}
;
/**
 * Term: Disaster Type Definition: A value from a MISMO defined list that specifies the type of disaster that has affected the area.
 */
export enum DisasterBase {
    "Chemical" = "Chemical",
    "DamFailure" = "DamFailure",
    "Earthquake" = "Earthquake",
    "Fire" = "Fire",
    "Flood" = "Flood",
    "HazardousMaterial" = "HazardousMaterial",
    "Heat" = "Heat",
    "Hurricane" = "Hurricane",
    "Landslide" = "Landslide",
    "Nuclear" = "Nuclear",
    "Other" = "Other",
    "Pandemic" = "Pandemic",
    "Terrorism" = "Terrorism",
    "Thunderstorm" = "Thunderstorm",
    "Tornado" = "Tornado",
    "Tsunami" = "Tsunami",
    "Volcano" = "Volcano",
    "Wildfire" = "Wildfire",
    "WinterStorm" = "WinterStorm"
}
;
/**
 * Term: Disaster Mitigation Feature Type Definition: A value from a MISMO prescribed list that represents a feature added to or a modification made to the property which is designed to prevent or reduce the impacts and risks of hazards caused by natural disasters.
 */
export enum DisasterMitigationFeatureBase {
    "EnclosedSoffits" = "EnclosedSoffits",
    "FireResistantDecking" = "FireResistantDecking",
    "FireResistantExteriorWalls" = "FireResistantExteriorWalls",
    "FloodVents" = "FloodVents",
    "FortifiedRoof" = "FortifiedRoof",
    "FramingAnchorageOrBracing" = "FramingAnchorageOrBracing",
    "ImpactResistantGlass" = "ImpactResistantGlass",
    "ImpactResistantShingles" = "ImpactResistantShingles",
    "NoncombustiblePerimeter" = "NoncombustiblePerimeter",
    "None" = "None",
    "Other" = "Other",
    "StormShelter" = "StormShelter",
    "StormShutters" = "StormShutters",
    "WaterHeaterStrapping" = "WaterHeaterStrapping"
}
;
/**
 * Term: Disclosure Delivery Method Type Definition: A value from a MISMO prescribed list that specifies the method or service used to deliver the disclosure documents to the borrower.
 */
export enum DisclosureDeliveryMethodBase {
    "CourierDeliveryService" = "CourierDeliveryService",
    "ElectronicDelivery" = "ElectronicDelivery",
    "InPerson" = "InPerson",
    "Other" = "Other",
    "USPSFirstClassMail" = "USPSFirstClassMail"
}
;
/**
 * Term: Disclosure Issuance Type Definition: A value from a MISMO prescribed list that specifies the version or timing status of the issued disclosure.
 */
export enum DisclosureIssuanceBase {
    "Initial" = "Initial",
    "Other" = "Other",
    "Revised" = "Revised"
}
;
/**
 * Term: Disclosure Issuance Timing Type Definition: A value from a prescribed list that defines the point in time of the mortgage transaction when the disclosure was issued.
 */
export enum DisclosureIssuanceTimingBase {
    "AtClosing" = "AtClosing",
    "PostClosing" = "PostClosing",
    "PreClosing" = "PreClosing"
}
;
/**
 * Term: Disclosure Reason Type Definition: A value from a MISMO prescribed list that categorizes the reason for disclosure or redisclosure.
 */
export enum DisclosureReasonBase {
    "24HourAdvancedPreview" = "24HourAdvancedPreview",
    "AdditionOfPrepaymentPenalty" = "AdditionOfPrepaymentPenalty",
    "APR" = "APR",
    "ClericalErrorCorrection" = "ClericalErrorCorrection",
    "DelayedSettlementDate" = "DelayedSettlementDate",
    "Eligibility" = "Eligibility",
    "Expiration" = "Expiration",
    "InterestRateDependentCharges" = "InterestRateDependentCharges",
    "LoanProduct" = "LoanProduct",
    "Other" = "Other",
    "RevisionsRequestedByBorrower" = "RevisionsRequestedByBorrower",
    "SettlementCharges" = "SettlementCharges",
    "ToleranceCure" = "ToleranceCure"
}
;
/**
 * Term: Dismissal Type Definition: A value from a MISMO prescribed list that represents the type of dismissal the court has made to end the litigated matter.
 */
export enum DismissalBase {
    "WithoutPrejudice" = "WithoutPrejudice",
    "WithPrejudice" = "WithPrejudice"
}
;
/**
 * Term: Documentation State Type Definition: Identifies the state of the documentation associated with the loan.
 */
export enum DocumentationStateBase {
    "AsCollected" = "AsCollected",
    "AsRequested" = "AsRequested",
    "AsRequired" = "AsRequired",
    "Other" = "Other"
}
;
/**
 * Term: Document Type Definition: A value from a MISMO prescribed list that represents either a category of document or a category and sublevel of a document combined into a single enumeration.
 */
export enum DocumentBase {
    "203KBorrowerAcknowledgment" = "203KBorrowerAcknowledgment",
    "203KBorrowerIdentityOfInterestCertification" = "203KBorrowerIdentityOfInterestCertification",
    "203KConsultantIdentityOfInterestStatement" = "203KConsultantIdentityOfInterestStatement",
    "203KConsultantReport" = "203KConsultantReport",
    "203KCostEstimates" = "203KCostEstimates",
    "203KDrawRequest" = "203KDrawRequest",
    "203KHomeownerAcknowledgment" = "203KHomeownerAcknowledgment",
    "203KInitialDrawRequest" = "203KInitialDrawRequest",
    "203KMaximumMortgageWorksheet" = "203KMaximumMortgageWorksheet",
    "203KRehabilitationAgreement" = "203KRehabilitationAgreement",
    "AbstractNoticeAgreement" = "AbstractNoticeAgreement",
    "AbstractOfJudgment" = "AbstractOfJudgment",
    "ACHDebitAuthorization" = "ACHDebitAuthorization",
    "AcknowledgmentOfNoticeOfRightToCancel" = "AcknowledgmentOfNoticeOfRightToCancel",
    "AffidavitOfDeath" = "AffidavitOfDeath",
    "AffidavitOfLostNote" = "AffidavitOfLostNote",
    "AffiliatedBusinessArrangementDisclosure" = "AffiliatedBusinessArrangementDisclosure",
    "AirportNoisePollutionAgreement" = "AirportNoisePollutionAgreement",
    "AlternativeRequestForAgreementOfShortSale" = "AlternativeRequestForAgreementOfShortSale",
    "AmendatoryClause" = "AmendatoryClause",
    "AmortizationSchedule" = "AmortizationSchedule",
    "ApplicationDisclosure" = "ApplicationDisclosure",
    "ApplicationDisclosure:AdditionalCreditAndDebt" = "ApplicationDisclosure:AdditionalCreditAndDebt",
    "AppraisalRecertification" = "AppraisalRecertification",
    "AppraisalReport" = "AppraisalReport",
    "AppraisalReport:Desktop" = "AppraisalReport:Desktop",
    "AppraisalReport:ExteriorOnly" = "AppraisalReport:ExteriorOnly",
    "AppraisalReport:InteriorExterior" = "AppraisalReport:InteriorExterior",
    "AppraisalReview" = "AppraisalReview",
    "AppraisalReview:ExteriorOnlyInspectionWithValueOpinion" = "AppraisalReview:ExteriorOnlyInspectionWithValueOpinion",
    "AppraisalReview:ExteriorOnlyWithoutValueOpinion" = "AppraisalReview:ExteriorOnlyWithoutValueOpinion",
    "AppraisalReview:InteriorExteriorInspectionWithValueOpinion" = "AppraisalReview:InteriorExteriorInspectionWithValueOpinion",
    "AppraisalReview:InteriorExteriorWithoutValueOpinion" = "AppraisalReview:InteriorExteriorWithoutValueOpinion",
    "AppraisalReview:NoInspectionWithValueOpinion" = "AppraisalReview:NoInspectionWithValueOpinion",
    "AppraisalReview:WithoutValueOpinion" = "AppraisalReview:WithoutValueOpinion",
    "AppraisalReviewRequest" = "AppraisalReviewRequest",
    "ApprovalLetter" = "ApprovalLetter",
    "ArticlesOfIncorporation" = "ArticlesOfIncorporation",
    "Assignment" = "Assignment",
    "Assignment:AssignmentOfDeedOfTrust" = "Assignment:AssignmentOfDeedOfTrust",
    "Assignment:AssignmentOfMortgage" = "Assignment:AssignmentOfMortgage",
    "Assignment:AssignmentOfRents" = "Assignment:AssignmentOfRents",
    "Assignment:AssignmentOfTrade" = "Assignment:AssignmentOfTrade",
    "Assignment:BlanketAssignment" = "Assignment:BlanketAssignment",
    "Assignment:CooperativeAssignmentOfProprietaryLease" = "Assignment:CooperativeAssignmentOfProprietaryLease",
    "AssumptionAgreement" = "AssumptionAgreement",
    "AssuranceOfCompletion" = "AssuranceOfCompletion",
    "AttestationOfDamageToProperty" = "AttestationOfDamageToProperty",
    "AttorneyInFactAffidavit" = "AttorneyInFactAffidavit",
    "AttorneysOpinionLetter" = "AttorneysOpinionLetter",
    "AutomatedUnderwritingFeedback" = "AutomatedUnderwritingFeedback",
    "AutomatedValuationReport" = "AutomatedValuationReport",
    "AutomatedValuationReport:WithInspection" = "AutomatedValuationReport:WithInspection",
    "AVMFeedback" = "AVMFeedback",
    "BaileeLetter" = "BaileeLetter",
    "BalanceTransferAuthorizationNotice" = "BalanceTransferAuthorizationNotice",
    "BalloonRefinanceDisclosure" = "BalloonRefinanceDisclosure",
    "BankDepositSlip" = "BankDepositSlip",
    "BankruptcyDischargeNotice" = "BankruptcyDischargeNotice",
    "BankStatement" = "BankStatement",
    "BankStatement:401K" = "BankStatement:401K",
    "BankStatement:CheckingAccount" = "BankStatement:CheckingAccount",
    "BankStatement:MutualFundAccount" = "BankStatement:MutualFundAccount",
    "BankStatement:SavingAccount" = "BankStatement:SavingAccount",
    "BankStatement:StockAccount" = "BankStatement:StockAccount",
    "BenefitPlanDistributionStatement" = "BenefitPlanDistributionStatement",
    "BenefitPlanDistributionStatement:401K" = "BenefitPlanDistributionStatement:401K",
    "BenefitPlanDistributionStatement:Annuity" = "BenefitPlanDistributionStatement:Annuity",
    "BenefitPlanDistributionStatement:Pension" = "BenefitPlanDistributionStatement:Pension",
    "BenefitPlanDistributionStatement:Trust" = "BenefitPlanDistributionStatement:Trust",
    "Bid" = "Bid",
    "BirthCertificate" = "BirthCertificate",
    "BondCertificate" = "BondCertificate",
    "BorrowerAcknowledgmentOfPropertyCondition" = "BorrowerAcknowledgmentOfPropertyCondition",
    "BorrowerCorrespondence" = "BorrowerCorrespondence",
    "BorrowerCorrespondence:GapInEmployment" = "BorrowerCorrespondence:GapInEmployment",
    "BorrowerCorrespondence:LetterOfExplanation" = "BorrowerCorrespondence:LetterOfExplanation",
    "BorrowerCorrespondence:LetterOfIntent" = "BorrowerCorrespondence:LetterOfIntent",
    "BorrowerCorrespondence:QualifiedWrittenRequest" = "BorrowerCorrespondence:QualifiedWrittenRequest",
    "BorrowerCorrespondence:TrailingSpouse" = "BorrowerCorrespondence:TrailingSpouse",
    "BorrowerLienAffidavit" = "BorrowerLienAffidavit",
    "BorrowersCertification" = "BorrowersCertification",
    "BorrowersContractWithRespectToHotelAndTransientUseOfProperty" = "BorrowersContractWithRespectToHotelAndTransientUseOfProperty",
    "BreachNotice" = "BreachNotice",
    "BrokerDisclosureStatement" = "BrokerDisclosureStatement",
    "BrokerPriceOpinion" = "BrokerPriceOpinion",
    "BrokerPriceOpinion:Desktop" = "BrokerPriceOpinion:Desktop",
    "BrokerPriceOpinion:ExteriorInspection" = "BrokerPriceOpinion:ExteriorInspection",
    "BuildersCertification" = "BuildersCertification",
    "BuildersCertification:BuilderCertificationOfPlansAndSpecifications" = "BuildersCertification:BuilderCertificationOfPlansAndSpecifications",
    "BuildersCertification:BuildersCertificate" = "BuildersCertification:BuildersCertificate",
    "BuildersCertification:PropertyInspection" = "BuildersCertification:PropertyInspection",
    "BuildersCertification:TermiteTreatment" = "BuildersCertification:TermiteTreatment",
    "BuildingPermit" = "BuildingPermit",
    "BusinessLicense" = "BusinessLicense",
    "BuydownAgreement" = "BuydownAgreement",
    "BuyingYourHomeSettlementCostsAndHelpfulInformation" = "BuyingYourHomeSettlementCostsAndHelpfulInformation",
    "CAIVRSAuthorization" = "CAIVRSAuthorization",
    "CancellationOfListing" = "CancellationOfListing",
    "Check" = "Check",
    "Checklist" = "Checklist",
    "ChildSupportVerification" = "ChildSupportVerification",
    "CloseLineOfCreditRequest" = "CloseLineOfCreditRequest",
    "ClosingDisclosure" = "ClosingDisclosure",
    "ClosingDisclosure:AlternateForm" = "ClosingDisclosure:AlternateForm",
    "ClosingDisclosure:BorrowerOnly" = "ClosingDisclosure:BorrowerOnly",
    "ClosingDisclosure:ModelForm" = "ClosingDisclosure:ModelForm",
    "ClosingDisclosure:SellerOnly" = "ClosingDisclosure:SellerOnly",
    "ClosingInstructions" = "ClosingInstructions",
    "CollectionRegister" = "CollectionRegister",
    "ComparativeIncomeAnalysis" = "ComparativeIncomeAnalysis",
    "ComplianceAgreement" = "ComplianceAgreement",
    "ComplianceInspectionReport" = "ComplianceInspectionReport",
    "ConditionalCommitment" = "ConditionalCommitment",
    "CondominiumOccupancyCertificate" = "CondominiumOccupancyCertificate",
    "ConservatorAndGuardianshipAgreement" = "ConservatorAndGuardianshipAgreement",
    "ConstructionCostBreakdown" = "ConstructionCostBreakdown",
    "ConsumerHandbookOnARM" = "ConsumerHandbookOnARM",
    "ConversionOptionNotice" = "ConversionOptionNotice",
    "ConveyanceDeed" = "ConveyanceDeed",
    "ConveyanceDeed:BargainAndSaleDeed" = "ConveyanceDeed:BargainAndSaleDeed",
    "ConveyanceDeed:QuitClaimDeed" = "ConveyanceDeed:QuitClaimDeed",
    "ConveyanceDeed:WarrantyDeed" = "ConveyanceDeed:WarrantyDeed",
    "ConveyanceTaxForm" = "ConveyanceTaxForm",
    "CooperativeBylaws" = "CooperativeBylaws",
    "CooperativeOperatingBudget" = "CooperativeOperatingBudget",
    "CooperativeProprietaryLease" = "CooperativeProprietaryLease",
    "CooperativeRecognitionAgreement" = "CooperativeRecognitionAgreement",
    "CooperativeStockCertificate" = "CooperativeStockCertificate",
    "CooperativeStockPower" = "CooperativeStockPower",
    "CosignerNotice" = "CosignerNotice",
    "CouncilOfAmericanBuildingOfficialsCertification" = "CouncilOfAmericanBuildingOfficialsCertification",
    "CounselingCertification" = "CounselingCertification",
    "CounselingCertification:Homeownership" = "CounselingCertification:Homeownership",
    "CounselingCertification:HomeRetention" = "CounselingCertification:HomeRetention",
    "CounselingChecklistForMilitaryHomebuyers" = "CounselingChecklistForMilitaryHomebuyers",
    "CreditCardAuthorization" = "CreditCardAuthorization",
    "CreditInsuranceAgreement" = "CreditInsuranceAgreement",
    "CreditReport" = "CreditReport",
    "CreditReportingAdjustment" = "CreditReportingAdjustment",
    "CustomerIdentificationVerification" = "CustomerIdentificationVerification",
    "DeathCertificate" = "DeathCertificate",
    "DebtorsStatementOfRights" = "DebtorsStatementOfRights",
    "DivorceDecree" = "DivorceDecree",
    "DocumentDeliveryCertification" = "DocumentDeliveryCertification",
    "DocumentDeliveryCertification:AppraisalReport" = "DocumentDeliveryCertification:AppraisalReport",
    "DocumentSequence" = "DocumentSequence",
    "DriversLicense" = "DriversLicense",
    "EarlyStartLetter" = "EarlyStartLetter",
    "ElectronicFundsTransfer" = "ElectronicFundsTransfer",
    "ElevationCertificate" = "ElevationCertificate",
    "EmployeeIdentification" = "EmployeeIdentification",
    "EnergyEfficientMortgageWorksheet" = "EnergyEfficientMortgageWorksheet",
    "EqualCreditOpportunityActDisclosure" = "EqualCreditOpportunityActDisclosure",
    "EscrowAgreement" = "EscrowAgreement",
    "EscrowAnalysisAnnualDisclosureStatement" = "EscrowAnalysisAnnualDisclosureStatement",
    "EscrowForCompletionAgreement" = "EscrowForCompletionAgreement",
    "EscrowForCompletionLetter" = "EscrowForCompletionLetter",
    "EscrowWaiver" = "EscrowWaiver",
    "EstimateOfClosingCostsPaidToThirdParty" = "EstimateOfClosingCostsPaidToThirdParty",
    "EstoppelAgreement" = "EstoppelAgreement",
    "EvaluationReport" = "EvaluationReport",
    "EvaluationReport:Desktop" = "EvaluationReport:Desktop",
    "EvaluationReport:ExteriorInspection" = "EvaluationReport:ExteriorInspection",
    "FACTACreditScoreDisclosure" = "FACTACreditScoreDisclosure",
    "FairLendingNotice" = "FairLendingNotice",
    "FederalApplicationInsuranceDisclosure" = "FederalApplicationInsuranceDisclosure",
    "FederalSaleOfInsuranceDisclosure" = "FederalSaleOfInsuranceDisclosure",
    "FHA_MIPremiumNettingAuthorization" = "FHA_MIPremiumNettingAuthorization",
    "FHAFiveDayWaiver" = "FHAFiveDayWaiver",
    "FHALimitedDenialOfParticipationGeneralServicesAdministrationChecklist" = "FHALimitedDenialOfParticipationGeneralServicesAdministrationChecklist",
    "FHAMortgageCreditAnalysisWorksheet" = "FHAMortgageCreditAnalysisWorksheet",
    "FHAReferralChecklist" = "FHAReferralChecklist",
    "FHARefinanceMaximumMortgageWorksheet" = "FHARefinanceMaximumMortgageWorksheet",
    "FHARefinanceOfBorrowersInNegativeEquityPositionsBorrowerCertification" = "FHARefinanceOfBorrowersInNegativeEquityPositionsBorrowerCertification",
    "FinancialStatement" = "FinancialStatement",
    "FinancialStatement:BalanceSheet" = "FinancialStatement:BalanceSheet",
    "FinancialStatement:CashFlow" = "FinancialStatement:CashFlow",
    "FinancialStatement:FinancialPosition" = "FinancialStatement:FinancialPosition",
    "FinancialStatement:Income" = "FinancialStatement:Income",
    "FloodHazardNotice" = "FloodHazardNotice",
    "FloodInsuranceAgreement" = "FloodInsuranceAgreement",
    "ForbearancePlanAgreement" = "ForbearancePlanAgreement",
    "ForcePlacedInsuranceNotice" = "ForcePlacedInsuranceNotice",
    "ForcePlacedInsuranceNotice:Cancellation" = "ForcePlacedInsuranceNotice:Cancellation",
    "ForcePlacedInsuranceNotice:Initial" = "ForcePlacedInsuranceNotice:Initial",
    "ForcePlacedInsuranceNotice:InsufficientDocumentation" = "ForcePlacedInsuranceNotice:InsufficientDocumentation",
    "ForcePlacedInsuranceNotice:Placement" = "ForcePlacedInsuranceNotice:Placement",
    "ForcePlacedInsuranceNotice:Renewal" = "ForcePlacedInsuranceNotice:Renewal",
    "ForcePlacedInsuranceNotice:SecondAndFinal" = "ForcePlacedInsuranceNotice:SecondAndFinal",
    "ForYourProtectionHomeInspection" = "ForYourProtectionHomeInspection",
    "FREOwnedStreamlineRefinanceChecklist" = "FREOwnedStreamlineRefinanceChecklist",
    "FundingTransmittal" = "FundingTransmittal",
    "GeneralLoanAcknowledgment" = "GeneralLoanAcknowledgment",
    "GFE" = "GFE",
    "GiftLetter" = "GiftLetter",
    "GroupSavingsAgreement" = "GroupSavingsAgreement",
    "HECMAntiChurningDisclosure" = "HECMAntiChurningDisclosure",
    "HECMCalculationEvidence" = "HECMCalculationEvidence",
    "HECMChoiceOfInsuranceOptionsNotice" = "HECMChoiceOfInsuranceOptionsNotice",
    "HECMClosingCostsAndLiensSchedule" = "HECMClosingCostsAndLiensSchedule",
    "HECMCounselingWaiverQualification" = "HECMCounselingWaiverQualification",
    "HECMExtension" = "HECMExtension",
    "HECMFaceToFaceCertification" = "HECMFaceToFaceCertification",
    "HECMFinancialAssessmentWorksheet" = "HECMFinancialAssessmentWorksheet",
    "HECMLoanSubmissionSchedule" = "HECMLoanSubmissionSchedule",
    "HECMNoticeToBorrower" = "HECMNoticeToBorrower",
    "HECMPaymentPlan" = "HECMPaymentPlan",
    "HERSHomeEnergyReport" = "HERSHomeEnergyReport",
    "HighCostWorksheet" = "HighCostWorksheet",
    "HoldHarmlessAgreement" = "HoldHarmlessAgreement",
    "HomeBuyerEducationCertification" = "HomeBuyerEducationCertification",
    "HomeEquityLineFreezeLetter" = "HomeEquityLineFreezeLetter",
    "HomeownersAssociationCertification" = "HomeownersAssociationCertification",
    "HousingCounselingAgenciesList" = "HousingCounselingAgenciesList",
    "IdentityAffidavit" = "IdentityAffidavit",
    "IdentityAffidavit:IdentityTheft" = "IdentityAffidavit:IdentityTheft",
    "IdentityAffidavit:Name" = "IdentityAffidavit:Name",
    "IdentityAffidavit:Signature" = "IdentityAffidavit:Signature",
    "IdentityTheftDisclosure" = "IdentityTheftDisclosure",
    "IncompleteApplicationNotice" = "IncompleteApplicationNotice",
    "IndividualDevelopmentAccountStatement" = "IndividualDevelopmentAccountStatement",
    "InitialAdjustableRateMortgageDisclosure" = "InitialAdjustableRateMortgageDisclosure",
    "InitialEscrowAccountDisclosure" = "InitialEscrowAccountDisclosure",
    "IntegratedDisclosure" = "IntegratedDisclosure",
    "InterestRateAndDiscountDisclosureStatement" = "InterestRateAndDiscountDisclosureStatement",
    "Invoice" = "Invoice",
    "Invoice:UtilityBill" = "Invoice:UtilityBill",
    "IRS1040" = "IRS1040",
    "IRS1041" = "IRS1041",
    "IRS1065" = "IRS1065",
    "IRS1098" = "IRS1098",
    "IRS1099" = "IRS1099",
    "IRS1099A" = "IRS1099A",
    "IRS1099B" = "IRS1099B",
    "IRS1099C" = "IRS1099C",
    "IRS1099CAP" = "IRS1099CAP",
    "IRS1099DIV" = "IRS1099DIV",
    "IRS1099G" = "IRS1099G",
    "IRS1099H" = "IRS1099H",
    "IRS1099INT" = "IRS1099INT",
    "IRS1099LTC" = "IRS1099LTC",
    "IRS1099MISC" = "IRS1099MISC",
    "IRS1099OID" = "IRS1099OID",
    "IRS1099PATR" = "IRS1099PATR",
    "IRS1099Q" = "IRS1099Q",
    "IRS1099R" = "IRS1099R",
    "IRS1099S" = "IRS1099S",
    "IRS1099SA" = "IRS1099SA",
    "IRS1120" = "IRS1120",
    "IRS1120S" = "IRS1120S",
    "IRSTaxTranscript" = "IRSTaxTranscript",
    "IRSW2" = "IRSW2",
    "IRSW8" = "IRSW8",
    "IRSW9" = "IRSW9",
    "ItemizationOfAmountFinanced" = "ItemizationOfAmountFinanced",
    "Judgment" = "Judgment",
    "LandLeaseholdAgreement" = "LandLeaseholdAgreement",
    "LastWillAndTestament" = "LastWillAndTestament",
    "LeadHazardInformation" = "LeadHazardInformation",
    "LegalDescription" = "LegalDescription",
    "LenderCorrespondence" = "LenderCorrespondence",
    "LenderLateEndorsementRequestCertificationLetter" = "LenderLateEndorsementRequestCertificationLetter",
    "LifeInsurancePolicy" = "LifeInsurancePolicy",
    "LineItemBudget" = "LineItemBudget",
    "LoanApplication" = "LoanApplication",
    "LoanApplication:FNM1009" = "LoanApplication:FNM1009",
    "LoanApplication:URLA" = "LoanApplication:URLA",
    "LoanClosingNotice" = "LoanClosingNotice",
    "LoanEstimate" = "LoanEstimate",
    "LoanModificationAffidavit" = "LoanModificationAffidavit",
    "LoanModificationAgreement" = "LoanModificationAgreement",
    "LoanModificationDenialNotice" = "LoanModificationDenialNotice",
    "LoanModificationRequest" = "LoanModificationRequest",
    "LoanModificationTrialPaymentPeriodAgreement" = "LoanModificationTrialPaymentPeriodAgreement",
    "LoanPayoffRequest" = "LoanPayoffRequest",
    "LoanStatement" = "LoanStatement",
    "LoanSubmissionSummary" = "LoanSubmissionSummary",
    "ManufacturedHousingCertificateOfTitle" = "ManufacturedHousingCertificateOfTitle",
    "MaritalStatusAffidavit" = "MaritalStatusAffidavit",
    "MarriageCertificate" = "MarriageCertificate",
    "MIApplication" = "MIApplication",
    "MICertificate" = "MICertificate",
    "MIConditionalCommitment" = "MIConditionalCommitment",
    "MIDeclination" = "MIDeclination",
    "MIDisclosure" = "MIDisclosure",
    "MilitaryDischargePapers" = "MilitaryDischargePapers",
    "MilitaryIdentification" = "MilitaryIdentification",
    "MIModification" = "MIModification",
    "MIRateQuote" = "MIRateQuote",
    "MISuspension" = "MISuspension",
    "MonthlySummaryOfAssistancePayments" = "MonthlySummaryOfAssistancePayments",
    "MortgageesCertificationAndApplicationForAssistanceOrInterestReductionPayments" = "MortgageesCertificationAndApplicationForAssistanceOrInterestReductionPayments",
    "NameAffidavit" = "NameAffidavit",
    "NationalIdentification" = "NationalIdentification",
    "NationalIdentification:CedulaDeIdentidad" = "NationalIdentification:CedulaDeIdentidad",
    "NationalIdentification:SocialSecurityCard" = "NationalIdentification:SocialSecurityCard",
    "NearestLivingRelativeInformation" = "NearestLivingRelativeInformation",
    "NearestLivingRelativeInformation:AlternativeContact" = "NearestLivingRelativeInformation:AlternativeContact",
    "NearestLivingRelativeInformation:VAQuestionnaire" = "NearestLivingRelativeInformation:VAQuestionnaire",
    "NonBorrowingSpouseCertificationLetter" = "NonBorrowingSpouseCertificationLetter",
    "NonBorrowingSpouseCertificationLetter:Eligible" = "NonBorrowingSpouseCertificationLetter:Eligible",
    "NonBorrowingSpouseCertificationLetter:Ineligible" = "NonBorrowingSpouseCertificationLetter:Ineligible",
    "NonDiplomatVerification" = "NonDiplomatVerification",
    "NonRefundabilityNotice" = "NonRefundabilityNotice",
    "Note" = "Note",
    "Note:Consolidated" = "Note:Consolidated",
    "Note:HECMLoanAgreement" = "Note:HECMLoanAgreement",
    "Note:NewMoney" = "Note:NewMoney",
    "NoteAddendum" = "NoteAddendum",
    "NoteAddendum:AffordableMeritRate" = "NoteAddendum:AffordableMeritRate",
    "NoteAddendum:Arbitration" = "NoteAddendum:Arbitration",
    "NoteAddendum:ARM" = "NoteAddendum:ARM",
    "NoteAddendum:Balloon" = "NoteAddendum:Balloon",
    "NoteAddendum:Construction" = "NoteAddendum:Construction",
    "NoteAddendum:FixedRateOption" = "NoteAddendum:FixedRateOption",
    "NoteAddendum:GEM" = "NoteAddendum:GEM",
    "NoteAddendum:GPM" = "NoteAddendum:GPM",
    "NoteAddendum:InterestOnly" = "NoteAddendum:InterestOnly",
    "NoteAddendum:InterVivosRevocableTrust" = "NoteAddendum:InterVivosRevocableTrust",
    "NoteAddendum:OccupancyDeclaration" = "NoteAddendum:OccupancyDeclaration",
    "NoteAddendum:Prepayment" = "NoteAddendum:Prepayment",
    "NoteAddendum:RateImprovement" = "NoteAddendum:RateImprovement",
    "NoteAllonge" = "NoteAllonge",
    "NoteAndSecurityInstrumentModification" = "NoteAndSecurityInstrumentModification",
    "NoteModification" = "NoteModification",
    "NoteRider" = "NoteRider",
    "NoteRider:ARM" = "NoteRider:ARM",
    "NoteRider:Balloon" = "NoteRider:Balloon",
    "NoteRider:Buydown" = "NoteRider:Buydown",
    "NoteRider:HECMRepair" = "NoteRider:HECMRepair",
    "NoteRider:Occupancy" = "NoteRider:Occupancy",
    "NoteRider:Prepayment" = "NoteRider:Prepayment",
    "NoteRider:StepRate" = "NoteRider:StepRate",
    "NoticeOfActionTaken" = "NoticeOfActionTaken",
    "NoticeOfCompletion" = "NoticeOfCompletion",
    "NoticeOfDefault" = "NoticeOfDefault",
    "NoticeOfRightToCancel" = "NoticeOfRightToCancel",
    "NoticeOfRightToCancel:AddSecurityInterest" = "NoticeOfRightToCancel:AddSecurityInterest",
    "NoticeOfRightToCancel:CreditIncrease" = "NoticeOfRightToCancel:CreditIncrease",
    "NoticeOfRightToCancel:IncreaseSecurity" = "NoticeOfRightToCancel:IncreaseSecurity",
    "NoticeOfRightToCancel:OpenAccount" = "NoticeOfRightToCancel:OpenAccount",
    "NoticeOfRightToCopyOfAppraisalReport" = "NoticeOfRightToCopyOfAppraisalReport",
    "NoticeToHomebuyer" = "NoticeToHomebuyer",
    "NoticeToLender" = "NoticeToLender",
    "OccupancyAgreement" = "OccupancyAgreement",
    "OccupancyCertification" = "OccupancyCertification",
    "Other" = "Other",
    "PartialReleaseOfSecurityInstrument" = "PartialReleaseOfSecurityInstrument",
    "PartnershipAgreement" = "PartnershipAgreement",
    "Passport" = "Passport",
    "PaymentHistory" = "PaymentHistory",
    "PaymentLetter" = "PaymentLetter",
    "PayoffStatement" = "PayoffStatement",
    "PayStub" = "PayStub",
    "PermanentResidentIdentification" = "PermanentResidentIdentification",
    "PersonalPropertyAppraisalReport" = "PersonalPropertyAppraisalReport",
    "PowerOfAttorney" = "PowerOfAttorney",
    "PowerOfAttorney:Durable" = "PowerOfAttorney:Durable",
    "PowerOfAttorney:Limited" = "PowerOfAttorney:Limited",
    "PowerOfAttorney:ManufacturedHousing" = "PowerOfAttorney:ManufacturedHousing",
    "PrepaymentChargeOptionNotice" = "PrepaymentChargeOptionNotice",
    "PrequalificationLetter" = "PrequalificationLetter",
    "PrimaryMIAnnualDisclosure" = "PrimaryMIAnnualDisclosure",
    "PrivacyDisclosure" = "PrivacyDisclosure",
    "PrivateIdentification" = "PrivateIdentification",
    "ProductComparisonDisclosure" = "ProductComparisonDisclosure",
    "ProofOfHUDWaiverCAIVRSClearance" = "ProofOfHUDWaiverCAIVRSClearance",
    "ProofOfMonetaryInvestment" = "ProofOfMonetaryInvestment",
    "ProofOfResidenceInDeclaredMajorDisasterArea" = "ProofOfResidenceInDeclaredMajorDisasterArea",
    "ProofOfTaxDeferralOrExemption" = "ProofOfTaxDeferralOrExemption",
    "PropertyDataReport" = "PropertyDataReport",
    "PropertyInspectionReport" = "PropertyInspectionReport",
    "PropertyInspectionReport:Carpet" = "PropertyInspectionReport:Carpet",
    "PropertyInspectionReport:Environmental" = "PropertyInspectionReport:Environmental",
    "PropertyInspectionReport:Footings" = "PropertyInspectionReport:Footings",
    "PropertyInspectionReport:Framing" = "PropertyInspectionReport:Framing",
    "PropertyInspectionReport:Heating" = "PropertyInspectionReport:Heating",
    "PropertyInspectionReport:Insulation" = "PropertyInspectionReport:Insulation",
    "PropertyInspectionReport:Pest" = "PropertyInspectionReport:Pest",
    "PropertyInspectionReport:Plumbing" = "PropertyInspectionReport:Plumbing",
    "PropertyInspectionReport:Roof" = "PropertyInspectionReport:Roof",
    "PropertyInspectionReport:Septic" = "PropertyInspectionReport:Septic",
    "PropertyInspectionReport:Soil" = "PropertyInspectionReport:Soil",
    "PropertyInspectionReport:SoilTreatment" = "PropertyInspectionReport:SoilTreatment",
    "PropertyInspectionReport:StructuralEngineering" = "PropertyInspectionReport:StructuralEngineering",
    "PropertyInspectionReport:SubterraneanTermite" = "PropertyInspectionReport:SubterraneanTermite",
    "PropertyInspectionReport:Termite" = "PropertyInspectionReport:Termite",
    "PropertyInspectionReport:WaterHealth" = "PropertyInspectionReport:WaterHealth",
    "PropertyInspectionReport:Well" = "PropertyInspectionReport:Well",
    "PropertyInsuranceBinder" = "PropertyInsuranceBinder",
    "PropertyInsuranceBinder:Earthquake" = "PropertyInsuranceBinder:Earthquake",
    "PropertyInsuranceBinder:FireAndExtendedCoverage" = "PropertyInsuranceBinder:FireAndExtendedCoverage",
    "PropertyInsuranceBinder:Flood" = "PropertyInsuranceBinder:Flood",
    "PropertyInsuranceBinder:Hazard" = "PropertyInsuranceBinder:Hazard",
    "PropertyInsuranceBinder:Homeowners" = "PropertyInsuranceBinder:Homeowners",
    "PropertyInsuranceBinder:Hurricane" = "PropertyInsuranceBinder:Hurricane",
    "PropertyInsuranceBinder:InsectInfestation" = "PropertyInsuranceBinder:InsectInfestation",
    "PropertyInsuranceBinder:Leasehold" = "PropertyInsuranceBinder:Leasehold",
    "PropertyInsuranceBinder:MineSubsidence" = "PropertyInsuranceBinder:MineSubsidence",
    "PropertyInsuranceBinder:PersonalProperty" = "PropertyInsuranceBinder:PersonalProperty",
    "PropertyInsuranceBinder:Storm" = "PropertyInsuranceBinder:Storm",
    "PropertyInsuranceBinder:Tornado" = "PropertyInsuranceBinder:Tornado",
    "PropertyInsuranceBinder:Volcano" = "PropertyInsuranceBinder:Volcano",
    "PropertyInsuranceBinder:Wind" = "PropertyInsuranceBinder:Wind",
    "PropertyInsuranceDeclarations" = "PropertyInsuranceDeclarations",
    "PropertyInsuranceDeclarations:Earthquake" = "PropertyInsuranceDeclarations:Earthquake",
    "PropertyInsuranceDeclarations:FireAndExtendedCoverage" = "PropertyInsuranceDeclarations:FireAndExtendedCoverage",
    "PropertyInsuranceDeclarations:Flood" = "PropertyInsuranceDeclarations:Flood",
    "PropertyInsuranceDeclarations:Hazard" = "PropertyInsuranceDeclarations:Hazard",
    "PropertyInsuranceDeclarations:Homeowners" = "PropertyInsuranceDeclarations:Homeowners",
    "PropertyInsuranceDeclarations:Hurricane" = "PropertyInsuranceDeclarations:Hurricane",
    "PropertyInsuranceDeclarations:InsectInfestation" = "PropertyInsuranceDeclarations:InsectInfestation",
    "PropertyInsuranceDeclarations:Leasehold" = "PropertyInsuranceDeclarations:Leasehold",
    "PropertyInsuranceDeclarations:MineSubsidence" = "PropertyInsuranceDeclarations:MineSubsidence",
    "PropertyInsuranceDeclarations:PersonalProperty" = "PropertyInsuranceDeclarations:PersonalProperty",
    "PropertyInsuranceDeclarations:Storm" = "PropertyInsuranceDeclarations:Storm",
    "PropertyInsuranceDeclarations:Tornado" = "PropertyInsuranceDeclarations:Tornado",
    "PropertyInsuranceDeclarations:Volcano" = "PropertyInsuranceDeclarations:Volcano",
    "PropertyInsuranceDeclarations:Wind" = "PropertyInsuranceDeclarations:Wind",
    "PropertyInsurancePolicy" = "PropertyInsurancePolicy",
    "PropertyInsurancePolicy:Earthquake" = "PropertyInsurancePolicy:Earthquake",
    "PropertyInsurancePolicy:FireAndExtendedCoverage" = "PropertyInsurancePolicy:FireAndExtendedCoverage",
    "PropertyInsurancePolicy:Flood" = "PropertyInsurancePolicy:Flood",
    "PropertyInsurancePolicy:Hazard" = "PropertyInsurancePolicy:Hazard",
    "PropertyInsurancePolicy:Homeowners" = "PropertyInsurancePolicy:Homeowners",
    "PropertyInsurancePolicy:Hurricane" = "PropertyInsurancePolicy:Hurricane",
    "PropertyInsurancePolicy:InsectInfestation" = "PropertyInsurancePolicy:InsectInfestation",
    "PropertyInsurancePolicy:Leasehold" = "PropertyInsurancePolicy:Leasehold",
    "PropertyInsurancePolicy:MineSubsidence" = "PropertyInsurancePolicy:MineSubsidence",
    "PropertyInsurancePolicy:PersonalProperty" = "PropertyInsurancePolicy:PersonalProperty",
    "PropertyInsurancePolicy:Storm" = "PropertyInsurancePolicy:Storm",
    "PropertyInsurancePolicy:Tornado" = "PropertyInsurancePolicy:Tornado",
    "PropertyInsurancePolicy:Volcano" = "PropertyInsurancePolicy:Volcano",
    "PropertyInsurancePolicy:Wind" = "PropertyInsurancePolicy:Wind",
    "PropertyInsuranceRequirementDisclosure" = "PropertyInsuranceRequirementDisclosure",
    "PurchaseAgreement" = "PurchaseAgreement",
    "RateChangeNotice" = "RateChangeNotice",
    "RateLockAgreement" = "RateLockAgreement",
    "RateLockAgreement:BusinessToBusiness" = "RateLockAgreement:BusinessToBusiness",
    "RateLockAgreement:BusinessToConsumer" = "RateLockAgreement:BusinessToConsumer",
    "ReaffirmationAgreement" = "ReaffirmationAgreement",
    "Receipt" = "Receipt",
    "RecertificationOfFamilyIncomeAndComposition" = "RecertificationOfFamilyIncomeAndComposition",
    "RecertificationOfFamilyIncomeStatisticalReport" = "RecertificationOfFamilyIncomeStatisticalReport",
    "Reconveyance" = "Reconveyance",
    "RefinanceCostEstimateWorksheet" = "RefinanceCostEstimateWorksheet",
    "RefinanceCostEstimateWorksheet:HECM" = "RefinanceCostEstimateWorksheet:HECM",
    "RelocationBenefitsPackage" = "RelocationBenefitsPackage",
    "RelocationBuyoutAgreement" = "RelocationBuyoutAgreement",
    "RemittanceDeliveryReceipt" = "RemittanceDeliveryReceipt",
    "RentalAgreement" = "RentalAgreement",
    "RentalIncomeAnalysisStatement" = "RentalIncomeAnalysisStatement",
    "RepaymentPlanAgreement" = "RepaymentPlanAgreement",
    "RequestForAgreementOfShortSale" = "RequestForAgreementOfShortSale",
    "RequestForCopyOfTaxReturn" = "RequestForCopyOfTaxReturn",
    "RequestForCopyOfTaxReturn:IRS4506" = "RequestForCopyOfTaxReturn:IRS4506",
    "RequestForCopyOfTaxReturn:IRS4506T" = "RequestForCopyOfTaxReturn:IRS4506T",
    "RequestForCopyOfTaxReturn:IRS4506TEZ" = "RequestForCopyOfTaxReturn:IRS4506TEZ",
    "RequestForNoticeOfDefault" = "RequestForNoticeOfDefault",
    "ResidualIncomeAnalysisWorksheet" = "ResidualIncomeAnalysisWorksheet",
    "ResolutionOfConsumerComplaint" = "ResolutionOfConsumerComplaint",
    "RetirementAccountStatement" = "RetirementAccountStatement",
    "RiskBasedPricingNotice" = "RiskBasedPricingNotice",
    "RiskBasedPricingNotice:AccountReviewNotice" = "RiskBasedPricingNotice:AccountReviewNotice",
    "RiskBasedPricingNotice:CreditScoreDisclosureException" = "RiskBasedPricingNotice:CreditScoreDisclosureException",
    "RiskBasedPricingNotice:CreditScoreDisclosureNoResidentialSecured" = "RiskBasedPricingNotice:CreditScoreDisclosureNoResidentialSecured",
    "RiskBasedPricingNotice:CreditScoreDisclosureNoScore" = "RiskBasedPricingNotice:CreditScoreDisclosureNoScore",
    "RiskBasedPricingNotice:GeneralNotice" = "RiskBasedPricingNotice:GeneralNotice",
    "RoadMaintenanceAgreement" = "RoadMaintenanceAgreement",
    "SatisfactionOfJudgment" = "SatisfactionOfJudgment",
    "SatisfactionOfSecurityInstrument" = "SatisfactionOfSecurityInstrument",
    "SatisfactionOfSecurityInstrument:LienRelease" = "SatisfactionOfSecurityInstrument:LienRelease",
    "SatisfactionOfSecurityInstrument:SatisfactionOfDeedOfTrust" = "SatisfactionOfSecurityInstrument:SatisfactionOfDeedOfTrust",
    "SatisfactionOfSecurityInstrument:SatisfactionOfMortgage" = "SatisfactionOfSecurityInstrument:SatisfactionOfMortgage",
    "SCRANoticeDisclosure" = "SCRANoticeDisclosure",
    "Section32DisclosureNotice" = "Section32DisclosureNotice",
    "SecurityInstrument" = "SecurityInstrument",
    "SecurityInstrument:DeedOfTrust" = "SecurityInstrument:DeedOfTrust",
    "SecurityInstrument:Mortgage" = "SecurityInstrument:Mortgage",
    "SecurityInstrumentAddendum" = "SecurityInstrumentAddendum",
    "SecurityInstrumentAddendum:FixedRateOption" = "SecurityInstrumentAddendum:FixedRateOption",
    "SecurityInstrumentModification" = "SecurityInstrumentModification",
    "SecurityInstrumentModification:ConsolidationAgreement" = "SecurityInstrumentModification:ConsolidationAgreement",
    "SecurityInstrumentModification:ConsolidationExtensionModificationAgreement" = "SecurityInstrumentModification:ConsolidationExtensionModificationAgreement",
    "SecurityInstrumentModification:ModificationAgreement" = "SecurityInstrumentModification:ModificationAgreement",
    "SecurityInstrumentRider" = "SecurityInstrumentRider",
    "SecurityInstrumentRider:AffordableMeritRate" = "SecurityInstrumentRider:AffordableMeritRate",
    "SecurityInstrumentRider:ARM" = "SecurityInstrumentRider:ARM",
    "SecurityInstrumentRider:Balloon" = "SecurityInstrumentRider:Balloon",
    "SecurityInstrumentRider:Beneficiary" = "SecurityInstrumentRider:Beneficiary",
    "SecurityInstrumentRider:Biweekly" = "SecurityInstrumentRider:Biweekly",
    "SecurityInstrumentRider:Condominium" = "SecurityInstrumentRider:Condominium",
    "SecurityInstrumentRider:Construction" = "SecurityInstrumentRider:Construction",
    "SecurityInstrumentRider:GEM" = "SecurityInstrumentRider:GEM",
    "SecurityInstrumentRider:GPM" = "SecurityInstrumentRider:GPM",
    "SecurityInstrumentRider:HomesteadExemption" = "SecurityInstrumentRider:HomesteadExemption",
    "SecurityInstrumentRider:InterestOnly" = "SecurityInstrumentRider:InterestOnly",
    "SecurityInstrumentRider:InterVivosRevocableTrust" = "SecurityInstrumentRider:InterVivosRevocableTrust",
    "SecurityInstrumentRider:Investor" = "SecurityInstrumentRider:Investor",
    "SecurityInstrumentRider:LandTrust" = "SecurityInstrumentRider:LandTrust",
    "SecurityInstrumentRider:Leasehold" = "SecurityInstrumentRider:Leasehold",
    "SecurityInstrumentRider:ManufacturedHousing" = "SecurityInstrumentRider:ManufacturedHousing",
    "SecurityInstrumentRider:MERSRegistry" = "SecurityInstrumentRider:MERSRegistry",
    "SecurityInstrumentRider:NonOwner" = "SecurityInstrumentRider:NonOwner",
    "SecurityInstrumentRider:OneToFourFamily" = "SecurityInstrumentRider:OneToFourFamily",
    "SecurityInstrumentRider:OwnerOccupancy" = "SecurityInstrumentRider:OwnerOccupancy",
    "SecurityInstrumentRider:Prepayment" = "SecurityInstrumentRider:Prepayment",
    "SecurityInstrumentRider:PUD" = "SecurityInstrumentRider:PUD",
    "SecurityInstrumentRider:RateImprovement" = "SecurityInstrumentRider:RateImprovement",
    "SecurityInstrumentRider:Rehabilitation" = "SecurityInstrumentRider:Rehabilitation",
    "SecurityInstrumentRider:RenewalAndExtension" = "SecurityInstrumentRider:RenewalAndExtension",
    "SecurityInstrumentRider:SecondHome" = "SecurityInstrumentRider:SecondHome",
    "SecurityInstrumentRider:SecondLien" = "SecurityInstrumentRider:SecondLien",
    "SecurityInstrumentRider:TaxExemptFinancing" = "SecurityInstrumentRider:TaxExemptFinancing",
    "SecurityInstrumentRider:VA" = "SecurityInstrumentRider:VA",
    "SecurityInstrumentRider:VeteransLandBoard" = "SecurityInstrumentRider:VeteransLandBoard",
    "SecurityInstrumentRider:WaiverOfBorrowersRights" = "SecurityInstrumentRider:WaiverOfBorrowersRights",
    "SecurityInstrumentRider:WaiverOfDowerRights" = "SecurityInstrumentRider:WaiverOfDowerRights",
    "SellerLeadHazardDisclosureAndAcknowledgment" = "SellerLeadHazardDisclosureAndAcknowledgment",
    "ServicingDisclosureStatement" = "ServicingDisclosureStatement",
    "ServicingTransferStatement" = "ServicingTransferStatement",
    "SettlementStatement" = "SettlementStatement",
    "SettlementStatement:HUD1" = "SettlementStatement:HUD1",
    "SettlementStatement:HUD1A" = "SettlementStatement:HUD1A",
    "ShortSaleAgreement" = "ShortSaleAgreement",
    "ShortSaleProcessChecklist" = "ShortSaleProcessChecklist",
    "SocialSecurityAwardLetter" = "SocialSecurityAwardLetter",
    "SolicitationLetter" = "SolicitationLetter",
    "StandardFloodHazardDetermination" = "StandardFloodHazardDetermination",
    "StateIdentification" = "StateIdentification",
    "StatementOfBorrowerBenefit" = "StatementOfBorrowerBenefit",
    "StockCertificate" = "StockCertificate",
    "SubordinationAgreement" = "SubordinationAgreement",
    "SubsidyAgreement" = "SubsidyAgreement",
    "SubstitutionOfTrustee" = "SubstitutionOfTrustee",
    "SupplementalConsumerInformationForm" = "SupplementalConsumerInformationForm",
    "Survey" = "Survey",
    "SurveyAffidavit" = "SurveyAffidavit",
    "TaxAssessmentValueIndication" = "TaxAssessmentValueIndication",
    "TaxAuthorization" = "TaxAuthorization",
    "TaxCertificate" = "TaxCertificate",
    "TaxLien" = "TaxLien",
    "TaxLien:Federal" = "TaxLien:Federal",
    "TaxLien:Local" = "TaxLien:Local",
    "TaxLien:State" = "TaxLien:State",
    "TaxLienRelease" = "TaxLienRelease",
    "TaxLienRelease:Federal" = "TaxLienRelease:Federal",
    "TaxLienRelease:Local" = "TaxLienRelease:Local",
    "TaxLienRelease:State" = "TaxLienRelease:State",
    "TaxpayerIdentification" = "TaxpayerIdentification",
    "TaxpayerIdentification:NumeroDeIdentificacionTributaria" = "TaxpayerIdentification:NumeroDeIdentificacionTributaria",
    "TaxReturn" = "TaxReturn",
    "TenYearWarranty" = "TenYearWarranty",
    "ThirdPartyEmploymentStatement" = "ThirdPartyEmploymentStatement",
    "TILDisclosure" = "TILDisclosure",
    "TitleAbstract" = "TitleAbstract",
    "TitleCommitment" = "TitleCommitment",
    "TitleInsuranceEndorsement" = "TitleInsuranceEndorsement",
    "TitleInsurancePolicy" = "TitleInsurancePolicy",
    "TrialLoanModificationAgreement" = "TrialLoanModificationAgreement",
    "TrialPeriodPlanNotice" = "TrialPeriodPlanNotice",
    "TrustAgreement" = "TrustAgreement",
    "UCC1Statement" = "UCC1Statement",
    "UCC3Statement" = "UCC3Statement",
    "UnderwritingConditions" = "UnderwritingConditions",
    "UnderwritingConditions:MIApplication" = "UnderwritingConditions:MIApplication",
    "UnderwritingTransmittal" = "UnderwritingTransmittal",
    "UnusedEscrowFundsDistributionAuthorization" = "UnusedEscrowFundsDistributionAuthorization",
    "UtilityBill" = "UtilityBill",
    "VAAcknowledgmentOfNoInspection" = "VAAcknowledgmentOfNoInspection",
    "VACertificateOfEligibility" = "VACertificateOfEligibility",
    "VACertificateOfReasonableValue" = "VACertificateOfReasonableValue",
    "VACollectionPolicyNotice" = "VACollectionPolicyNotice",
    "VAForeclosureBidLetter" = "VAForeclosureBidLetter",
    "VAFundingFeeNotice" = "VAFundingFeeNotice",
    "VAInterestRateReductionRefinancingLoanWorksheet" = "VAInterestRateReductionRefinancingLoanWorksheet",
    "VALoanAnalysis" = "VALoanAnalysis",
    "VALoanSummarySheet" = "VALoanSummarySheet",
    "ValuationCompletion" = "ValuationCompletion",
    "ValuationUpdate" = "ValuationUpdate",
    "VARateReductionRefinanceInformationAndAgreement" = "VARateReductionRefinanceInformationAndAgreement",
    "VAReportAndCertificationOfLoanDisbursement" = "VAReportAndCertificationOfLoanDisbursement",
    "VARequestForCertificationOfEligibilityForHomeLoanBenefit" = "VARequestForCertificationOfEligibilityForHomeLoanBenefit",
    "VAVerificationOfBenefitRelatedIndebtedness" = "VAVerificationOfBenefitRelatedIndebtedness",
    "VerificationOfAddress" = "VerificationOfAddress",
    "VerificationOfCredit" = "VerificationOfCredit",
    "VerificationOfDebt" = "VerificationOfDebt",
    "VerificationOfDependentCare" = "VerificationOfDependentCare",
    "VerificationOfDeposit" = "VerificationOfDeposit",
    "VerificationOfEmployment" = "VerificationOfEmployment",
    "VerificationOfMERSRegistry" = "VerificationOfMERSRegistry",
    "VerificationOfMortgageOrRent" = "VerificationOfMortgageOrRent",
    "VerificationOfSecurities" = "VerificationOfSecurities",
    "VerificationOfSSN" = "VerificationOfSSN",
    "Visa" = "Visa",
    "VolunteerEscrowPrepaymentDesignation" = "VolunteerEscrowPrepaymentDesignation",
    "VoterRegistration" = "VoterRegistration",
    "WarrantyOfCompletionOfConstruction" = "WarrantyOfCompletionOfConstruction",
    "WireInstructions" = "WireInstructions",
    "WireTransferAuthorization" = "WireTransferAuthorization",
    "WireTransferConfirmation" = "WireTransferConfirmation",
    "Worksheet" = "Worksheet"
}
;
/**
 * Term: Document Form Issuing Entity Name Type Definition: Identifies the organization that defined the document form/template.
 */
export enum DocumentFormIssuingEntityNameBase {
    "CFPB" = "CFPB",
    "FEMA" = "FEMA",
    "FHA" = "FHA",
    "FNM" = "FNM",
    "FNM_FRE" = "FNM_FRE",
    "FRE" = "FRE",
    "HUD" = "HUD",
    "IRS" = "IRS",
    "Other" = "Other",
    "VA" = "VA"
}
;
/**
 * Term: Document Order Classification Type Definition: Defines the type of the document set that is being requested. Identifies if the documents requested are to be an opening or closing document package.
 */
export enum DocumentOrderClassificationBase {
    "Final" = "Final",
    "Preliminary" = "Preliminary"
}
;
/**
 * Term: Document Package Type Definition: A value from a MISMO prescribed list that specifies the type of document package. This defines what documents are included.
 */
export enum DocumentPackageBase {
    "AdverseAction" = "AdverseAction",
    "Appraisal" = "Appraisal",
    "Closing" = "Closing",
    "ClosingDisclosure" = "ClosingDisclosure",
    "FloodCertification" = "FloodCertification",
    "InitialDisclosure" = "InitialDisclosure",
    "LoanApplication" = "LoanApplication",
    "LoanApproval" = "LoanApproval",
    "LoanEstimate" = "LoanEstimate",
    "LoanModification" = "LoanModification",
    "Other" = "Other",
    "PointOfSale" = "PointOfSale",
    "PostClosing" = "PostClosing",
    "Preclosing" = "Preclosing",
    "Prequalification" = "Prequalification",
    "Processing" = "Processing",
    "Redisclosure" = "Redisclosure",
    "ServicingTransfer" = "ServicingTransfer",
    "Shipping" = "Shipping",
    "Underwriting" = "Underwriting"
}
;
/**
 * Term: Document Packaging Type Definition: A value from a MISMO prescribed list that specifies the manner in which the documents will be packaged for delivery, grouped as a single VIEW or as individual VIEWs.
 */
export enum DocumentPackagingBase {
    "Group" = "Group",
    "Individual" = "Individual",
    "Other" = "Other"
}
;
/**
 * Term: Document Preparation Requested Action Type Definition: A value from a MISMO prescribed list that specifies the type of action that should be performed for associated document preparation request data.
 */
export enum DocumentPreparationRequestedActionBase {
    "Audit" = "Audit",
    "Other" = "Other",
    "Process" = "Process",
    "Save" = "Save"
}
;
/**
 * Term: Document Recordation Processing Type Definition: Describes whether the document must be delivered to the recorder and recorded by the recorder.
 */
export enum DocumentRecordationProcessingBase {
    "DeliveryRequired" = "DeliveryRequired",
    "NoProcessingRequired" = "NoProcessingRequired",
    "RecordationRequired" = "RecordationRequired"
}
;
/**
 * Term: Domestic Relationship Type Definition: A value from a MISMO prescribed list that specifies a borrower’s relationship with an individual who is not a legal spouse but who has real property rights similar to those of a legal spouse.
 */
export enum DomesticRelationshipBase {
    "CivilUnion" = "CivilUnion",
    "DomesticPartnership" = "DomesticPartnership",
    "Other" = "Other",
    "RegisteredReciprocalBeneficiaryRelationship" = "RegisteredReciprocalBeneficiaryRelationship"
}
;
/**
 * Term: Down Payment Option Type Definition: Specifies the type of option used to facilitate the borrower's down payment.
 */
export enum DownPaymentOptionBase {
    "FivePercentOption" = "FivePercentOption",
    "FNM97Option" = "FNM97Option",
    "Other" = "Other",
    "ThreeTwoOption" = "ThreeTwoOption"
}
;
/**
 * Term: Easement Type Definition: A value from a MISMO prescribed list that represents a nonpossessory right to cross or otherwise use a portion of another property for a specified purpose (e.g. utility, driveway).
 */
export enum EasementBase {
    "Conservation" = "Conservation",
    "Drainage" = "Drainage",
    "IngressOrEgress" = "IngressOrEgress",
    "Other" = "Other",
    "Utility" = "Utility"
}
;
/**
 * Term: Electricity Source Type Definition: A value from a MISMO prescribed list that represents the delivery method of electricity to the property. Also used in conjunction with a type of utility ownership.
 */
export enum ElectricitySourceBase {
    "BatteryStorage" = "BatteryStorage",
    "Other" = "Other",
    "PermanentGenerator" = "PermanentGenerator",
    "Solar" = "Solar",
    "Wind" = "Wind"
}
;
/**
 * Term: Employment Classification Type Definition: Indicates whether the employment for the borrower is primary or secondary.
 */
export enum EmploymentClassificationBase {
    "Primary" = "Primary",
    "Secondary" = "Secondary"
}
;
/**
 * Term: Employment Document Type Definition:  The type of documentation used as a means of identifying or verifying the borrower's employment used in the transaction.
 */
export enum EmploymentDocumentBase {
    "Other" = "Other",
    "ThirdPartyEmploymentStatement" = "ThirdPartyEmploymentStatement",
    "VerbalStatement" = "VerbalStatement",
    "VerificationOfEmployment" = "VerificationOfEmployment"
}
;
/**
 * Term: Employment State Type Definition: The current employment status of the borrower.
 */
export enum EmploymentStateBase {
    "Employed" = "Employed",
    "Other" = "Other",
    "Retired" = "Retired",
    "Unemployed" = "Unemployed"
}
;
/**
 * Term: Employment Status Type Definition: A value from a MISMO prescribed list that specifies the relative time frame of the employment (current or previous).
 */
export enum EmploymentStatusBase {
    "Current" = "Current",
    "Previous" = "Previous"
}
;
/**
 * Term: Encroachment Type Definition: A value from a MISMO prescribed list that represents the type of intrusion existing on a property when a stationary object crosses a neighboring property line (e.g. fence, shed, garage, tree).
 */
export enum EncroachmentBase {
    "Building" = "Building",
    "Driveway" = "Driveway",
    "Fence" = "Fence",
    "Other" = "Other",
    "Overhang" = "Overhang"
}
;
/**
 * Term: Encroachment Direction Type Definition: A value from a MISMO prescribed list that represents the relation of the encroachment to an adjoining property.
 */
export enum EncroachmentDirectionBase {
    "BorderingPropertyEncroachingOnSubjectProperty" = "BorderingPropertyEncroachingOnSubjectProperty",
    "SubjectPropertyEncroachingOnBorderingProperty" = "SubjectPropertyEncroachingOnBorderingProperty"
}
;
/**
 * Term: Encumbrance Type Definition: Identifies a right to or interest in the property that may affect value. Certain restrictions require the appraiser to indicate with additional addendum text such as Deed Restrictions on Community Land Trust properties.
 */
export enum EncumbranceBase {
    "ConditionsCovenantsRestrictions" = "ConditionsCovenantsRestrictions",
    "DeedRestriction" = "DeedRestriction",
    "Easement" = "Easement",
    "Encroachment" = "Encroachment",
    "FirstMortgageLien" = "FirstMortgageLien",
    "GroundLease" = "GroundLease",
    "MechanicsLien" = "MechanicsLien",
    "None" = "None",
    "OccupancyRestriction" = "OccupancyRestriction",
    "Other" = "Other",
    "ResaleRestriction" = "ResaleRestriction",
    "SecondMortgageLien" = "SecondMortgageLien",
    "TaxLien" = "TaxLien",
    "TransferFee" = "TransferFee"
}
;
/**
 * Term: End User Billing Instruction Type Definition: This is an enumerated list of values that identify how the charges will be billed for services related to Additional End-User processing.
 */
export enum EndUserBillingInstructionBase {
    "BillAdditionalEndUser" = "BillAdditionalEndUser",
    "BillReissueRecordingFeesToAdditionalEndUser" = "BillReissueRecordingFeesToAdditionalEndUser",
    "BillReissueRecordingFeesToOriginalRequestingParty" = "BillReissueRecordingFeesToOriginalRequestingParty",
    "BillRequestingParty" = "BillRequestingParty",
    "Other" = "Other"
}
;
/**
 * Term: Energy Efficiency Authority Level Type Definition: A value from a MISMO prescribed list detailing the level of a governmental authority providing the financial incentive for an energy efficiency improvement or component.
 */
export enum EnergyEfficiencyAuthorityLevelBase {
    "County" = "County",
    "Federal" = "Federal",
    "Municipality" = "Municipality",
    "Private" = "Private",
    "State" = "State"
}
;
/**
 * Term: Environmental Condition Type Definition: A type of environmental condition identified during the analysis of a lot or structure.
 */
export enum EnvironmentalConditionBase {
    "Asbestos" = "Asbestos",
    "FormerDrugLab" = "FormerDrugLab",
    "HazardousAboveGroundStorageTank" = "HazardousAboveGroundStorageTank",
    "HazardousSubstances" = "HazardousSubstances",
    "Landfill" = "Landfill",
    "LeadBasedPaint" = "LeadBasedPaint",
    "LeakingUndergroundPetroleumStorageTank" = "LeakingUndergroundPetroleumStorageTank",
    "None" = "None",
    "Other" = "Other",
    "Radon" = "Radon",
    "SlushPit" = "SlushPit",
    "SoilContamination" = "SoilContamination",
    "SuperfundSite" = "SuperfundSite",
    "UndergroundStorageTank" = "UndergroundStorageTank",
    "VaporIntrusion" = "VaporIntrusion",
    "WaterContamination" = "WaterContamination"
}
;
/**
 * Term: Environmental Condition Proximity Type Definition: A value from a MISMO prescribed list that represents proximity of the environmental condition to the property.
 */
export enum EnvironmentalConditionProximityBase {
    "Bordering" = "Bordering",
    "Offsite" = "Offsite",
    "Onsite" = "Onsite"
}
;
/**
 * Term: Escrow Absence Reason Type Definition: Specifies the reason the loan does not have an escrow account.
 */
export enum EscrowAbsenceReasonBase {
    "BorrowerDeclined" = "BorrowerDeclined",
    "LenderDoesNotOffer" = "LenderDoesNotOffer",
    "LenderDoesNotRequire" = "LenderDoesNotRequire",
    "Other" = "Other"
}
;
/**
 * Term: Escrow Account Activity Payment Description Type Definition: A description of the escrow disbursement type included in a payment for the activity period.
 */
export enum EscrowAccountActivityPaymentDescriptionBase {
    "Assessment" = "Assessment",
    "CityPropertyTax" = "CityPropertyTax",
    "CountyPropertyTax" = "CountyPropertyTax",
    "EarthquakeInsurance" = "EarthquakeInsurance",
    "FloodInsurance" = "FloodInsurance",
    "HazardInsurance" = "HazardInsurance",
    "MortgageInsurance" = "MortgageInsurance",
    "Other" = "Other",
    "SchoolPropertyTax" = "SchoolPropertyTax",
    "TownPropertyTax" = "TownPropertyTax",
    "USDAAnnualFee" = "USDAAnnualFee",
    "VillagePropertyTax" = "VillagePropertyTax",
    "WindstormInsurance" = "WindstormInsurance"
}
;
/**
 * Term: Escrow Account Lender Requirement Type Definition: Identifies the escrow account status in terms of the requirements of the lender in the mortgage loan transaction.
 */
export enum EscrowAccountLenderRequirementBase {
    "EscrowsRequiredByLender" = "EscrowsRequiredByLender",
    "EscrowsWaivedByLender" = "EscrowsWaivedByLender"
}
;
/**
 * Term: Escrow Holdback Type Definition: An enumerated list of values that describe the purpose of the escrow funds being held back.
 */
export enum EscrowHoldbackBase {
    "ConstructionMortgage" = "ConstructionMortgage",
    "EnergyEfficientMortgage" = "EnergyEfficientMortgage",
    "Other" = "Other",
    "RehabilitationMortgage" = "RehabilitationMortgage"
}
;
/**
 * Term: Escrow Item Type Definition: A value from a MISMO prescribed list that represents an item that may be held and managed in an escrow account.
 */
export enum EscrowItemBase {
    "AssessmentTax" = "AssessmentTax",
    "BoroughPropertyTax" = "BoroughPropertyTax",
    "CityBondTax" = "CityBondTax",
    "CityPropertyTax" = "CityPropertyTax",
    "CondominiumAssociationDues" = "CondominiumAssociationDues",
    "CondominiumAssociationSpecialAssessment" = "CondominiumAssociationSpecialAssessment",
    "ConstructionCompletionFunds" = "ConstructionCompletionFunds",
    "CooperativeAssociationDues" = "CooperativeAssociationDues",
    "CooperativeAssociationSpecialAssessment" = "CooperativeAssociationSpecialAssessment",
    "CountyBondTax" = "CountyBondTax",
    "CountyPropertyTax" = "CountyPropertyTax",
    "DistrictPropertyTax" = "DistrictPropertyTax",
    "EarthquakeInsurance" = "EarthquakeInsurance",
    "EnergyEfficientImprovementFunds" = "EnergyEfficientImprovementFunds",
    "FloodInsurance" = "FloodInsurance",
    "HailInsurance" = "HailInsurance",
    "HazardInsurance" = "HazardInsurance",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "HomeownersAssociationSpecialAssessment" = "HomeownersAssociationSpecialAssessment",
    "HomeownersInsurance" = "HomeownersInsurance",
    "MortgageInsurance" = "MortgageInsurance",
    "Other" = "Other",
    "ParishTax" = "ParishTax",
    "PestInsurance" = "PestInsurance",
    "PropertyTax" = "PropertyTax",
    "RehabilitationFunds" = "RehabilitationFunds",
    "SchoolPropertyTax" = "SchoolPropertyTax",
    "StatePropertyTax" = "StatePropertyTax",
    "TownPropertyTax" = "TownPropertyTax",
    "TownshipPropertyTax" = "TownshipPropertyTax",
    "VillagePropertyTax" = "VillagePropertyTax",
    "VolcanoInsurance" = "VolcanoInsurance",
    "WindstormInsurance" = "WindstormInsurance"
}
;
/**
 * Term: Escrow Item Category Type Definition: Identifies the category of the escrow item type.
 */
export enum EscrowItemCategoryBase {
    "AssociationDues" = "AssociationDues",
    "Holdback" = "Holdback",
    "HomeownersInsurance" = "HomeownersInsurance",
    "MI" = "MI",
    "Other" = "Other",
    "PropertyTaxes" = "PropertyTaxes"
}
;
/**
 * Term: Escrow Item Payment Paid By Type Definition: The role of the party making the escrow item payment.
 */
export enum EscrowItemPaymentPaidByBase {
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Correspondent" = "Correspondent",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Escrow Item Payment Timing Type Definition: Defines the point in time during the origination process when the escrow item payment was paid.
 */
export enum EscrowItemPaymentTimingBase {
    "AtClosing" = "AtClosing",
    "BeforeClosing" = "BeforeClosing",
    "Other" = "Other"
}
;
/**
 * Term: Escrow Monthly Payment Rounding Type Definition: Defines the rounding method applied to the escrow payment.
 */
export enum EscrowMonthlyPaymentRoundingBase {
    "Down" = "Down",
    "None" = "None",
    "Up" = "Up"
}
;
/**
 * Term: Escrow Paid By Type Definition: The type of Party responsible for payment of the escrow item.
 */
export enum EscrowPaidByBase {
    "Buyer" = "Buyer",
    "LenderPremium" = "LenderPremium",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Escrow Payment Frequency Type Definition: Payment period covered by escrow item. If item were paid once a year the payment frequency type would be annual.
 */
export enum EscrowPaymentFrequencyBase {
    "Annual" = "Annual",
    "Monthly" = "Monthly",
    "Other" = "Other",
    "Quarterly" = "Quarterly",
    "SemiAnnual" = "SemiAnnual",
    "Unequal" = "Unequal"
}
;
/**
 * Term: Escrow Premium Paid By Type Definition: The type of party responsible for the payment of the escrow premium amount.
 */
export enum EscrowPremiumPaidByBase {
    "Buyer" = "Buyer",
    "Lender" = "Lender",
    "Seller" = "Seller"
}
;
/**
 * Term: Escrow Premium Payment Type Definition: The payment method of the premium for the escrow item. Paid Outside of Closing (POC), Waived or Collect at Closing.
 */
export enum EscrowPremiumPaymentBase {
    "CollectAtClosing" = "CollectAtClosing",
    "PaidOutsideOfClosing" = "PaidOutsideOfClosing",
    "Waived" = "Waived"
}
;
/**
 * Term: Escrow Premium Rate Percent Basis Type Definition: Defines the amount upon which the Escrow Premium Percent is calculated.
 */
export enum EscrowPremiumRatePercentBasisBase {
    "BorrowerRequestedLoanAmount" = "BorrowerRequestedLoanAmount",
    "NoteAmount" = "NoteAmount",
    "Other" = "Other",
    "PropertyValuationAmount" = "PropertyValuationAmount",
    "PurchasePriceAmount" = "PurchasePriceAmount",
    "TotalLoanAmount" = "TotalLoanAmount"
}
;
/**
 * Term: Estate Significance Type Definition: Indicates the significance of the restriction is considered to have for the purpose in which it is being reported.
 */
export enum EstateSignificanceBase {
    "Affirmative" = "Affirmative",
    "Negative" = "Negative",
    "Neutral" = "Neutral"
}
;
/**
 * Term: Estimated Prepaid Days Paid By Type Definition: Party responsible for payment of estimated odd days interest.
 */
export enum EstimatedPrepaidDaysPaidByBase {
    "Buyer" = "Buyer",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller"
}
;
/**
 * Term: Event Type Definition: For a step in a process, contains the type of action or state.
 */
export enum EventBase {
    "AddedTaxCollectionStamps" = "AddedTaxCollectionStamps",
    "AppliedFinalTamperEvidentSignature" = "AppliedFinalTamperEvidentSignature",
    "AppliedTamperEvidentSignature" = "AppliedTamperEvidentSignature",
    "CorrectedData" = "CorrectedData",
    "CreatedBlankDocument" = "CreatedBlankDocument",
    "DocumentReceived" = "DocumentReceived",
    "DraftedData" = "DraftedData",
    "EnteredData" = "EnteredData",
    "ExportedDocument" = "ExportedDocument",
    "NotarizedDocument" = "NotarizedDocument",
    "Other" = "Other",
    "PaperedOutDocument" = "PaperedOutDocument",
    "PartiallyPopulatedDocument" = "PartiallyPopulatedDocument",
    "PopulatedDocument" = "PopulatedDocument",
    "RecordedDocument" = "RecordedDocument",
    "RerecordedDocument" = "RerecordedDocument",
    "SignedDocument" = "SignedDocument",
    "ValidatedDocument" = "ValidatedDocument",
    "VerifiedSignatures" = "VerifiedSignatures",
    "VoidedDocument" = "VoidedDocument"
}
;
/**
 * Term: Event Participant Type Definition: A value from a MISMO prescribed list that represents the function that the participant plays in an event.  A participant may have multiple functions in an event.
 */
export enum EventParticipantBase {
    "Initiator" = "Initiator",
    "Investigator" = "Investigator",
    "Other" = "Other",
    "PrimaryPointOfContact" = "PrimaryPointOfContact",
    "Recipient" = "Recipient",
    "Resolver" = "Resolver",
    "Responder" = "Responder"
}
;
/**
 * Term: Exception Interest Adjustment Day Method Type Definition: The day basis on which the exception interest adjustment is computed based on the servicing contract.
 */
export enum ExceptionInterestAdjustmentDayMethodBase {
    "ActualLastPaidInstallmentDueDate" = "ActualLastPaidInstallmentDueDate",
    "FirstOfMonth" = "FirstOfMonth",
    "ScheduledLastPaidInstallmentDueDate" = "ScheduledLastPaidInstallmentDueDate"
}
;
/**
 * Term: Execution Type Definition: Specifies the type of execution through which the loan was purchased by an investor.
 */
export enum ExecutionBase {
    "Cash" = "Cash",
    "Guarantor" = "Guarantor",
    "Multilender" = "Multilender",
    "Other" = "Other"
}
;
/**
 * Term: Execution Judicial District Type Definition: The type of judicial district where documents were signed (executed).
 */
export enum ExecutionJudicialDistrictBase {
    "Borough" = "Borough",
    "City" = "City",
    "County" = "County",
    "District" = "District",
    "Other" = "Other",
    "Parish" = "Parish",
    "Town" = "Town"
}
;
/**
 * Term: Expense Type Definition: A value from a MISMO prescribed list that specifies items commonly listed as borrower expenses on a mortgage loan transaction.
 */
export enum ExpenseBase {
    "Alimony" = "Alimony",
    "CarMaintenance" = "CarMaintenance",
    "CharitableContributions" = "CharitableContributions",
    "ChildCare" = "ChildCare",
    "ChildSupport" = "ChildSupport",
    "Clothing" = "Clothing",
    "DryCleaning" = "DryCleaning",
    "Entertainment" = "Entertainment",
    "GroceryToiletry" = "GroceryToiletry",
    "HealthInsurance" = "HealthInsurance",
    "JobRelatedExpenses" = "JobRelatedExpenses",
    "Medical" = "Medical",
    "MiscellaneousLivingExpenses" = "MiscellaneousLivingExpenses",
    "NetRentalExpense" = "NetRentalExpense",
    "Other" = "Other",
    "PayrollInsuranceDeduction" = "PayrollInsuranceDeduction",
    "PayrollMiscellaneousDeductions" = "PayrollMiscellaneousDeductions",
    "PayrollProfitSharingDeduction" = "PayrollProfitSharingDeduction",
    "PayrollRetirementDeduction" = "PayrollRetirementDeduction",
    "PayrollTaxDeduction" = "PayrollTaxDeduction",
    "SeparateMaintenanceExpense" = "SeparateMaintenanceExpense",
    "UnionDues" = "UnionDues"
}
;
/**
 * Term: Expense Claim Item Insurance Placed Type Definition: Specifies the party who placed the insurance associated with the expense claim.
 */
export enum ExpenseClaimItemInsurancePlacedBase {
    "Homeowner" = "Homeowner",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: Expense Claim Submission Type Definition: Specifies the occurrence of the claim being submitted.
 */
export enum ExpenseClaimSubmissionBase {
    "Final" = "Final",
    "Initial" = "Initial",
    "Other" = "Other",
    "Supplemental" = "Supplemental"
}
;
/**
 * Term: Expense Claim Submission Reason Type Definition: Specifies the reason for the expense claim submission.
 */
export enum ExpenseClaimSubmissionReasonBase {
    "Other" = "Other",
    "PriorApproval" = "PriorApproval",
    "Reimbursement" = "Reimbursement"
}
;
/**
 * Term: Exterior Feature Type Definition: Specifies one exterior feature of the property.
 */
export enum ExteriorFeatureBase {
    "Doors" = "Doors",
    "GuttersAndDownspouts" = "GuttersAndDownspouts",
    "Other" = "Other",
    "Skirting" = "Skirting"
}
;
/**
 * Term: Fee Type Definition: A value from a MISMO prescribed list that represents a fee or cost associated with a real estate transaction or the ongoing servicing of a loan.
 */
export enum FeeBase {
    "203KConsultantFee" = "203KConsultantFee",
    "203KDiscountOnRepairs" = "203KDiscountOnRepairs",
    "203KInspectionFee" = "203KInspectionFee",
    "203KPermits" = "203KPermits",
    "203KSupplementalOriginationFee" = "203KSupplementalOriginationFee",
    "203KTitleUpdate" = "203KTitleUpdate",
    "ApplicationFee" = "ApplicationFee",
    "AppraisalDeskReviewFee" = "AppraisalDeskReviewFee",
    "AppraisalFee" = "AppraisalFee",
    "AppraisalFieldReviewFee" = "AppraisalFieldReviewFee",
    "AppraisalManagementCompanyFee" = "AppraisalManagementCompanyFee",
    "ARMConversionFee" = "ARMConversionFee",
    "AsbestosInspectionFee" = "AsbestosInspectionFee",
    "AssignmentPreparationFee" = "AssignmentPreparationFee",
    "AssumptionFee" = "AssumptionFee",
    "AttorneyFee" = "AttorneyFee",
    "AutomatedUnderwritingFee" = "AutomatedUnderwritingFee",
    "AVMFee" = "AVMFee",
    "BankruptcyMonitoringFee" = "BankruptcyMonitoringFee",
    "BondFee" = "BondFee",
    "BondReviewFee" = "BondReviewFee",
    "CEMAProcessingFee" = "CEMAProcessingFee",
    "CertificationFee" = "CertificationFee",
    "ChosenInterestRateCreditOrChargeTotal" = "ChosenInterestRateCreditOrChargeTotal",
    "CommitmentFee" = "CommitmentFee",
    "CondominiumAssociationDues" = "CondominiumAssociationDues",
    "CondominiumAssociationSpecialAssessment" = "CondominiumAssociationSpecialAssessment",
    "CondominiumHOADocumentsFee" = "CondominiumHOADocumentsFee",
    "ConstructionHandlingFee" = "ConstructionHandlingFee",
    "ConstructionInspectionFee" = "ConstructionInspectionFee",
    "CooperativeAssociationDues" = "CooperativeAssociationDues",
    "CooperativeAssociationSpecialAssessment" = "CooperativeAssociationSpecialAssessment",
    "CopyOrFaxFee" = "CopyOrFaxFee",
    "CourierFee" = "CourierFee",
    "CreditDisabilityInsurancePremium" = "CreditDisabilityInsurancePremium",
    "CreditLifeInsurancePremium" = "CreditLifeInsurancePremium",
    "CreditPropertyInsurancePremium" = "CreditPropertyInsurancePremium",
    "CreditReportFee" = "CreditReportFee",
    "CreditUnemploymentInsurancePremium" = "CreditUnemploymentInsurancePremium",
    "DebtCancellationInsurancePremium" = "DebtCancellationInsurancePremium",
    "DebtSuspensionInsurancePremium" = "DebtSuspensionInsurancePremium",
    "DeedPreparationFee" = "DeedPreparationFee",
    "DisasterInspectionFee" = "DisasterInspectionFee",
    "DiscountOnRepairsFee" = "DiscountOnRepairsFee",
    "DocumentaryStampFee" = "DocumentaryStampFee",
    "DocumentPreparationFee" = "DocumentPreparationFee",
    "DownPaymentProtectionFee" = "DownPaymentProtectionFee",
    "DryWallInspectionFee" = "DryWallInspectionFee",
    "ElectricalInspectionFee" = "ElectricalInspectionFee",
    "ElectronicDocumentDeliveryFee" = "ElectronicDocumentDeliveryFee",
    "EnvironmentalInspectionFee" = "EnvironmentalInspectionFee",
    "EscrowHoldbackFee" = "EscrowHoldbackFee",
    "EscrowServiceFee" = "EscrowServiceFee",
    "EscrowWaiverFee" = "EscrowWaiverFee",
    "FilingFee" = "FilingFee",
    "FloodCertification" = "FloodCertification",
    "FoundationInspectionFee" = "FoundationInspectionFee",
    "HeatingCoolingInspectionFee" = "HeatingCoolingInspectionFee",
    "HELOCAnnualFee" = "HELOCAnnualFee",
    "HELOCOverLimitFee" = "HELOCOverLimitFee",
    "HighCostMortgageCounselingFee" = "HighCostMortgageCounselingFee",
    "HomeInspectionFee" = "HomeInspectionFee",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "HomeownersAssociationServiceFee" = "HomeownersAssociationServiceFee",
    "HomeownersAssociationSpecialAssessment" = "HomeownersAssociationSpecialAssessment",
    "HomeWarrantyFee" = "HomeWarrantyFee",
    "JurisdictionalOccupancyFee" = "JurisdictionalOccupancyFee",
    "LateCharge" = "LateCharge",
    "LeadInspectionFee" = "LeadInspectionFee",
    "LendersAttorneyFee" = "LendersAttorneyFee",
    "LoanDiscountPoints" = "LoanDiscountPoints",
    "LoanLevelPriceAdjustment" = "LoanLevelPriceAdjustment",
    "LoanOriginationFee" = "LoanOriginationFee",
    "LoanOriginatorCompensation" = "LoanOriginatorCompensation",
    "ManualUnderwritingFee" = "ManualUnderwritingFee",
    "ManufacturedHousingInspectionFee" = "ManufacturedHousingInspectionFee",
    "ManufacturedHousingProcessingFee" = "ManufacturedHousingProcessingFee",
    "MasterInsurancePolicyFee" = "MasterInsurancePolicyFee",
    "MERSRegistrationFee" = "MERSRegistrationFee",
    "MIInitialPremium" = "MIInitialPremium",
    "MIUpfrontPremium" = "MIUpfrontPremium",
    "ModificationFee" = "ModificationFee",
    "MoldInspectionFee" = "MoldInspectionFee",
    "MortgageBrokerFee" = "MortgageBrokerFee",
    "MortgageSurchargeCountyOrParish" = "MortgageSurchargeCountyOrParish",
    "MortgageSurchargeMunicipal" = "MortgageSurchargeMunicipal",
    "MortgageSurchargeState" = "MortgageSurchargeState",
    "MortgageTaxCreditServiceFee" = "MortgageTaxCreditServiceFee",
    "MultipleLoansClosingFee" = "MultipleLoansClosingFee",
    "MunicipalLienCertificateFee" = "MunicipalLienCertificateFee",
    "NotaryFee" = "NotaryFee",
    "NSFFee" = "NSFFee",
    "Other" = "Other",
    "OurOriginationChargeTotal" = "OurOriginationChargeTotal",
    "PartialLienReleaseFee" = "PartialLienReleaseFee",
    "PayoffRequestFee" = "PayoffRequestFee",
    "PestInspectionFee" = "PestInspectionFee",
    "PlumbingInspectionFee" = "PlumbingInspectionFee",
    "PowerOfAttorneyPreparationFee" = "PowerOfAttorneyPreparationFee",
    "PowerOfAttorneyRecordingFee" = "PowerOfAttorneyRecordingFee",
    "PreclosingVerificationControlFee" = "PreclosingVerificationControlFee",
    "ProcessingFee" = "ProcessingFee",
    "ProgramGuaranteeFee" = "ProgramGuaranteeFee",
    "PropertyInspectionWaiverFee" = "PropertyInspectionWaiverFee",
    "RadonInspectionFee" = "RadonInspectionFee",
    "RateLockFee" = "RateLockFee",
    "RealEstateCommissionBuyersBroker" = "RealEstateCommissionBuyersBroker",
    "RealEstateCommissionSellersBroker" = "RealEstateCommissionSellersBroker",
    "RecastFee" = "RecastFee",
    "ReconveyanceFee" = "ReconveyanceFee",
    "ReconveyanceTrackingFee" = "ReconveyanceTrackingFee",
    "RecordingFeeForAssignment" = "RecordingFeeForAssignment",
    "RecordingFeeForDeed" = "RecordingFeeForDeed",
    "RecordingFeeForMortgage" = "RecordingFeeForMortgage",
    "RecordingFeeForMunicipalLienCertificate" = "RecordingFeeForMunicipalLienCertificate",
    "RecordingFeeForOtherDocument" = "RecordingFeeForOtherDocument",
    "RecordingFeeForRelease" = "RecordingFeeForRelease",
    "RecordingFeeForSubordination" = "RecordingFeeForSubordination",
    "RecordingFeeTotal" = "RecordingFeeTotal",
    "RecordingServiceFee" = "RecordingServiceFee",
    "RedrawFee" = "RedrawFee",
    "ReinspectionFee" = "ReinspectionFee",
    "RenovationConsultantFee" = "RenovationConsultantFee",
    "RepairsFee" = "RepairsFee",
    "RoofInspectionFee" = "RoofInspectionFee",
    "SepticInspectionFee" = "SepticInspectionFee",
    "SettlementFee" = "SettlementFee",
    "SigningAgentFee" = "SigningAgentFee",
    "SmokeDetectorInspectionFee" = "SmokeDetectorInspectionFee",
    "StateTitleInsuranceFee" = "StateTitleInsuranceFee",
    "StructuralInspectionFee" = "StructuralInspectionFee",
    "SubordinationFee" = "SubordinationFee",
    "SurveyFee" = "SurveyFee",
    "TaxServiceFee" = "TaxServiceFee",
    "TaxStampForCityDeed" = "TaxStampForCityDeed",
    "TaxStampForCityMortgage" = "TaxStampForCityMortgage",
    "TaxStampForCountyDeed" = "TaxStampForCountyDeed",
    "TaxStampForCountyMortgage" = "TaxStampForCountyMortgage",
    "TaxStampForStateDeed" = "TaxStampForStateDeed",
    "TaxStampForStateMortgage" = "TaxStampForStateMortgage",
    "TaxStatusResearchFee" = "TaxStatusResearchFee",
    "TemporaryBuydownAdministrationFee" = "TemporaryBuydownAdministrationFee",
    "TemporaryBuydownPoints" = "TemporaryBuydownPoints",
    "TitleAbstractFee" = "TitleAbstractFee",
    "TitleAdministrationFee" = "TitleAdministrationFee",
    "TitleBorrowerClosingProtectionLetterFee" = "TitleBorrowerClosingProtectionLetterFee",
    "TitleCertificationFee" = "TitleCertificationFee",
    "TitleClosingCoordinationFee" = "TitleClosingCoordinationFee",
    "TitleClosingFee" = "TitleClosingFee",
    "TitleClosingProtectionLetterFee" = "TitleClosingProtectionLetterFee",
    "TitleCommitmentFee" = "TitleCommitmentFee",
    "TitleDocumentPreparationFee" = "TitleDocumentPreparationFee",
    "TitleDocumentStorageFee" = "TitleDocumentStorageFee",
    "TitleEndorsementFee" = "TitleEndorsementFee",
    "TitleEscrowDepositFee" = "TitleEscrowDepositFee",
    "TitleExaminationFee" = "TitleExaminationFee",
    "TitleFinalPolicyShortFormFee" = "TitleFinalPolicyShortFormFee",
    "TitleInsuranceBinderFee" = "TitleInsuranceBinderFee",
    "TitleInsuranceFee" = "TitleInsuranceFee",
    "TitleLendersCoveragePremium" = "TitleLendersCoveragePremium",
    "TitleLoanTieInFee" = "TitleLoanTieInFee",
    "TitleNotaryFee" = "TitleNotaryFee",
    "TitleOwnersCoveragePremium" = "TitleOwnersCoveragePremium",
    "TitleSearchFee" = "TitleSearchFee",
    "TitleServicesFeeTotal" = "TitleServicesFeeTotal",
    "TitleServicesSalesTax" = "TitleServicesSalesTax",
    "TitleSubEscrowFee" = "TitleSubEscrowFee",
    "TitleSubordinationProcessingFee" = "TitleSubordinationProcessingFee",
    "TitleUnderwritingIssueResolutionFee" = "TitleUnderwritingIssueResolutionFee",
    "TransferTaxTotal" = "TransferTaxTotal",
    "UnderwritingFee" = "UnderwritingFee",
    "USDARuralDevelopmentGuaranteeFee" = "USDARuralDevelopmentGuaranteeFee",
    "VAFundingFee" = "VAFundingFee",
    "VerificationOfAssetsFee" = "VerificationOfAssetsFee",
    "VerificationOfEmploymentFee" = "VerificationOfEmploymentFee",
    "VerificationOfIncomeFee" = "VerificationOfIncomeFee",
    "VerificationOfResidencyStatusFee" = "VerificationOfResidencyStatusFee",
    "VerificationOfTaxpayerIdentificationFee" = "VerificationOfTaxpayerIdentificationFee",
    "VerificationOfTaxReturnFee" = "VerificationOfTaxReturnFee",
    "WaterTestingFee" = "WaterTestingFee",
    "WellInspectionFee" = "WellInspectionFee",
    "WireTransferFee" = "WireTransferFee"
}
;
/**
 * Term: Fee Paid To Type Definition: Identifies the category or type of payee to which the fee or payment will be paid.
 */
export enum FeePaidToBase {
    "Broker" = "Broker",
    "BrokerAffiliate" = "BrokerAffiliate",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "LenderAffiliate" = "LenderAffiliate",
    "Other" = "Other",
    "ThirdPartyProvider" = "ThirdPartyProvider"
}
;
/**
 * Term: Fee Payment Collected By Type Definition: Identifies the role of the party collecting the fee.
 */
export enum FeePaymentCollectedByBase {
    "Broker" = "Broker",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: Fee Payment Paid By Type Definition: A value from a MISMO prescribed list that represents the role of the party paying a fee or cost.
 */
export enum FeePaymentPaidByBase {
    "Borrower" = "Borrower",
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Correspondent" = "Correspondent",
    "Lender" = "Lender",
    "Seller" = "Seller",
    "Servicer" = "Servicer",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Fee Payment Process Type Definition: Processing - typical buyer paid fee to be disclosed on GFE;
Closing - typical seller fee not disclosed on GFE.
 */
export enum FeePaymentProcessBase {
    "Closing" = "Closing",
    "Processing" = "Processing"
}
;
/**
 * Term: Fee Payment Responsible Party Type Definition: Identifies the fee payment as the responsibility of the Buyer, Seller or other party of the loan transaction.
 */
export enum FeePaymentResponsiblePartyBase {
    "Branch" = "Branch",
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller"
}
;
/**
 * Term: Fee Percent Basis Type Definition: Defines the amount upon which the Fee Total Percent is calculated.
 */
export enum FeePercentBasisBase {
    "BaseLoanAmount" = "BaseLoanAmount",
    "OriginalLoanAmount" = "OriginalLoanAmount",
    "Other" = "Other",
    "PropertyAppraisedValueAmount" = "PropertyAppraisedValueAmount",
    "PurchasePriceAmount" = "PurchasePriceAmount"
}
;
/**
 * Term: Fee Process Type Definition: A value from a MISMO prescribed list that represents a category for a fee or cost associated with a real estate transaction or the ongoing servicing of a loan.
 */
export enum FeeProcessBase {
    "Origination" = "Origination",
    "Other" = "Other",
    "Servicing" = "Servicing"
}
;
/**
 * Term: Fee Summary Total Fees Paid By Type Definition: A party to the transaction by whom a fee or fees have been designated paid.
 */
export enum FeeSummaryTotalFeesPaidByBase {
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller"
}
;
/**
 * Term: Fee Summary Total Fees Paid To Type Definition: A party to the transaction to whom a fees have been paid.
 */
export enum FeeSummaryTotalFeesPaidToBase {
    "Broker" = "Broker",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: FHA VA Borrower Certification Sales Price Exceeds Appraised Value Type Definition: FHA/VA Borrower acknowledgement when Sales Price exceeds the Appraised Value. FHA/VA Borrower Certification, HUD-92900-A (HUD/VA Addendum to URLA), section 25(3).
 */
export enum FHA_VABorrowerCertificationSalesPriceExceedsAppraisedValueBase {
    "A" = "A",
    "B" = "B"
}
;
/**
 * Term: FHA Alimony Liability Treatment Type Definition: Identifies how the borrower or lender prefers that the judgment process treat alimony in an FHA transaction.
 */
export enum FHAAlimonyLiabilityTreatmentBase {
    "AdditionToDebt" = "AdditionToDebt",
    "ReductionToIncome" = "ReductionToIncome"
}
;
/**
 * Term: FHA Insurance Program Type Definition: Type of FHA mortgage protection insurance program.
 */
export enum FHAInsuranceProgramBase {
    "FHAUpfront" = "FHAUpfront",
    "RBP" = "RBP",
    "Section530" = "Section530"
}
;
/**
 * Term: FIPS County Subdivision Type Definition: A legal or statistical division of a county recognized as part of the Federal Information Processing Standards (FIPS) 55 system. The two major types of county subdivisions are census county divisions and minor civil divisions. This information is used by the US Census Bureau.
 */
export enum FIPSCountySubdivisionBase {
    "CensusCountyDivision" = "CensusCountyDivision",
    "MinorCivilDivision" = "MinorCivilDivision"
}
;
/**
 * Term: Flood Request Action Type Definition: Describes the type of action to be performed for the request in question.
 */
export enum FloodRequestActionBase {
    "Cancellation" = "Cancellation",
    "Change" = "Change",
    "Dispute" = "Dispute",
    "Original" = "Original",
    "Reissue" = "Reissue",
    "StatusQuery" = "StatusQuery",
    "Transfer" = "Transfer",
    "Upgrade" = "Upgrade"
}
;
/**
 * Term: Flood Request Dispute Item Type Definition: Specifies the field on the FEMA document which is being disputed.
 */
export enum FloodRequestDisputeItemBase {
    "CBRAStatus" = "CBRAStatus",
    "CommunityNumber" = "CommunityNumber",
    "CommunityStatus" = "CommunityStatus",
    "MapDate" = "MapDate",
    "MapPanel" = "MapPanel",
    "Other" = "Other",
    "Zone" = "Zone"
}
;
/**
 * Term: Flooring Type Definition: A value from a MISMO prescribed list that represents the flooring material.
 */
export enum FlooringBase {
    "Carpet" = "Carpet",
    "CeramicTile" = "CeramicTile",
    "EngineeredWood" = "EngineeredWood",
    "FinishedConcrete" = "FinishedConcrete",
    "Hardwood" = "Hardwood",
    "Laminate" = "Laminate",
    "Marble" = "Marble",
    "Other" = "Other",
    "SubflooringOnly" = "SubflooringOnly",
    "Vinyl" = "Vinyl"
}
;
/**
 * Term: FNM Home Improvement Product Type Definition: Denotes the Fannie Mae specific home improvement product.
 */
export enum FNMHomeImprovementProductBase {
    "ActualActualBiweekly" = "ActualActualBiweekly",
    "ConstructionToPermanent" = "ConstructionToPermanent",
    "DailySimpleInterestCashConventional" = "DailySimpleInterestCashConventional",
    "DailySimpleInterestMBS" = "DailySimpleInterestMBS",
    "GovernmentTitleI" = "GovernmentTitleI",
    "Universal" = "Universal"
}
;
/**
 * Term: Foreclosure Action Type Definition: A value from a MISMO prescribed list that represents a reportable action that occurred during a foreclosure process.
 */
export enum ForeclosureActionBase {
    "BreachNoticeSent" = "BreachNoticeSent",
    "EvictionApproved" = "EvictionApproved",
    "EvictionCompleted" = "EvictionCompleted",
    "EvictionStarted" = "EvictionStarted",
    "FirstLegalAction" = "FirstLegalAction",
    "ForeclosureBidInstructionIssued" = "ForeclosureBidInstructionIssued",
    "ForeclosureCompleted" = "ForeclosureCompleted",
    "ForeclosureSaleCancelled" = "ForeclosureSaleCancelled",
    "ForeclosureSaleConfirmed" = "ForeclosureSaleConfirmed",
    "ForeclosureSaleHeld" = "ForeclosureSaleHeld",
    "ForeclosureSalePostponed" = "ForeclosureSalePostponed",
    "ForeclosureSalePublicationCommenced" = "ForeclosureSalePublicationCommenced",
    "ForeclosureSaleRescinded" = "ForeclosureSaleRescinded",
    "ForeclosureSaleScheduled" = "ForeclosureSaleScheduled",
    "ForeclosureTerminated" = "ForeclosureTerminated",
    "FormalNoticeFiled" = "FormalNoticeFiled",
    "Other" = "Other",
    "RedemptionPeriodEnded" = "RedemptionPeriodEnded",
    "RedemptionPeriodStarted" = "RedemptionPeriodStarted",
    "ReferralToAttorney" = "ReferralToAttorney"
}
;
/**
 * Term: Foreclosure Case Dismissed Reason Type Definition: The reason that a foreclosure case was dismissed by the processing party.
 */
export enum ForeclosureCaseDismissedReasonBase {
    "CourtOrdered" = "CourtOrdered",
    "LossMitigationCompleted" = "LossMitigationCompleted",
    "LossMitigationInReview" = "LossMitigationInReview",
    "Other" = "Other",
    "Reinstatement" = "Reinstatement",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Foreclosure Delay Category Type Definition: A value from a MISMO prescribed list that represents a general grouping for activities that may create a processing delay.
 */
export enum ForeclosureDelayCategoryBase {
    "BankruptcyFiled" = "BankruptcyFiled",
    "ContestedOrLitigatedForeclosure" = "ContestedOrLitigatedForeclosure",
    "ImpactedPartyProcess" = "ImpactedPartyProcess",
    "LegalProcess" = "LegalProcess",
    "LegislativeChange" = "LegislativeChange",
    "Mediation" = "Mediation",
    "MilitaryIndulgence" = "MilitaryIndulgence",
    "MissingDocuments" = "MissingDocuments",
    "MonetaryTransactionPending" = "MonetaryTransactionPending",
    "Moratorium" = "Moratorium",
    "Other" = "Other",
    "Probate" = "Probate",
    "PropertyCondition" = "PropertyCondition",
    "PropertySeizure" = "PropertySeizure",
    "TitleIssue" = "TitleIssue",
    "WorkoutInReview" = "WorkoutInReview"
}
;
/**
 * Term: Foreclosure Delay End Reason Type Definition: A value from a MISMO prescribed list that represents the reason an interruption in the established foreclosure timeline ended and the foreclosure process resumed.
 */
export enum ForeclosureDelayEndReasonBase {
    "AttorneyTransferReviewCompleted" = "AttorneyTransferReviewCompleted",
    "BankruptcyStayLifted" = "BankruptcyStayLifted",
    "BorrowerRequestedToExit" = "BorrowerRequestedToExit",
    "LegalProcessEnded" = "LegalProcessEnded",
    "LegislativeImpactAssessed" = "LegislativeImpactAssessed",
    "LoanPayoffReceived" = "LoanPayoffReceived",
    "MediationEnded" = "MediationEnded",
    "MilitaryIndulgenceEnded" = "MilitaryIndulgenceEnded",
    "MissingDocumentsReceived" = "MissingDocumentsReceived",
    "MoratoriumEnded" = "MoratoriumEnded",
    "Other" = "Other",
    "ProbateEnded" = "ProbateEnded",
    "PropertyConditionResolved" = "PropertyConditionResolved",
    "PropertySeizureResolved" = "PropertySeizureResolved",
    "ReinstatementReceived" = "ReinstatementReceived",
    "ServicingTransferCompleted" = "ServicingTransferCompleted",
    "TitleIssueResolved" = "TitleIssueResolved",
    "WorkoutEnded" = "WorkoutEnded"
}
;
/**
 * Term: Foreclosure Expense Type Definition: Specifies a type of liquidation or foreclosure expense.
 */
export enum ForeclosureExpenseBase {
    "AttorneyFees" = "AttorneyFees",
    "Eviction" = "Eviction",
    "LegalFees" = "LegalFees",
    "Other" = "Other"
}
;
/**
 * Term: Foreclosure Method Type Definition: The type of foreclosure method based on the property's geographic location.
 */
export enum ForeclosureMethodBase {
    "Judicial" = "Judicial",
    "NonJudicial" = "NonJudicial",
    "Other" = "Other"
}
;
/**
 * Term: Foreclosure Procedure Terminated Reason Type Definition: A value from a MISMO prescribed list that represents the reason the foreclosure proceedings ended and the file was closed.
 */
export enum ForeclosureProcedureTerminatedReasonBase {
    "ActiveMilitaryIndulgence" = "ActiveMilitaryIndulgence",
    "Bankruptcy" = "Bankruptcy",
    "ChargedOff" = "ChargedOff",
    "CourtOrdered" = "CourtOrdered",
    "FundsApplied" = "FundsApplied",
    "HazardClaimOrPropertyDamage" = "HazardClaimOrPropertyDamage",
    "LossMitigation" = "LossMitigation",
    "Other" = "Other",
    "PaidInFull" = "PaidInFull",
    "Redeemed" = "Redeemed",
    "Reinstated" = "Reinstated",
    "ServicingTransfer" = "ServicingTransfer",
    "StartedInError" = "StartedInError"
}
;
/**
 * Term: Foreclosure Sale Cancellation Reason Type Definition: A value from a MISMO prescribed list that represents the reason that a foreclosure sale was cancelled.
 */
export enum ForeclosureSaleCancellationReasonBase {
    "ExcessiveDelays" = "ExcessiveDelays",
    "FilingErrors" = "FilingErrors",
    "Other" = "Other",
    "Payoff" = "Payoff",
    "Workout" = "Workout"
}
;
/**
 * Term: Foreclosure Sale Postponement Reason Type Definition: A value from a MISMO prescribed list that represents the reason for a postponement of the foreclosure sale.
 */
export enum ForeclosureSalePostponementReasonBase {
    "AttorneyProcess" = "AttorneyProcess",
    "CompromisedPropertyCondition" = "CompromisedPropertyCondition",
    "GovernmentSeizure" = "GovernmentSeizure",
    "Moratorium" = "Moratorium",
    "Other" = "Other",
    "ServicerDelegation" = "ServicerDelegation",
    "ServicerProcess" = "ServicerProcess",
    "StatutoryJurisdictionalDelay" = "StatutoryJurisdictionalDelay",
    "TitleDefect" = "TitleDefect"
}
;
/**
 * Term: Foreclosure Sale Rescinded Reason Type Definition: A value from a MISMO prescribed list that represents the reason that a foreclosure sale was revoked after the sale had occurred.
 */
export enum ForeclosureSaleRescindedReasonBase {
    "ExcessivePropertyDamage" = "ExcessivePropertyDamage",
    "Other" = "Other",
    "ProceduralError" = "ProceduralError"
}
;
/**
 * Term: Foreclosure Status Type Definition: A value from a MISMO prescribed list that classifies that foreclosure proceedings are active or closed as of the status date.
 */
export enum ForeclosureStatusBase {
    "Active" = "Active",
    "Closed" = "Closed"
}
;
/**
 * Term: Foundation Type Definition: Describes the construction style of the foundation of the structure.
 */
export enum FoundationBase {
    "Basement" = "Basement",
    "CrawlSpace" = "CrawlSpace",
    "Other" = "Other",
    "PartialBasement" = "PartialBasement",
    "PostAndPier" = "PostAndPier",
    "Runner" = "Runner",
    "Slab" = "Slab"
}
;
/**
 * Term: Foundation Deficiencies Type Definition: Indicates a type of condition of the foundation which is described by Foundation Condition Comment.
 */
export enum FoundationDeficienciesBase {
    "Dampness" = "Dampness",
    "Infestation" = "Infestation",
    "Other" = "Other",
    "Settlement" = "Settlement"
}
;
/**
 * Term: Foundation Feature Type Definition: Specifies the features and characteristics of a building foundation.
 */
export enum FoundationFeatureBase {
    "Other" = "Other",
    "Ventilation" = "Ventilation"
}
;
/**
 * Term: Foundation Material Type Definition: A value from a MISMO prescribed list that specifies the type of material used in the foundation.
 */
export enum FoundationMaterialBase {
    "BlockAndPier" = "BlockAndPier",
    "Brick" = "Brick",
    "ConcreteBlock" = "ConcreteBlock",
    "ConcreteRunners" = "ConcreteRunners",
    "Metal" = "Metal",
    "Other" = "Other",
    "PouredConcrete" = "PouredConcrete",
    "Stone" = "Stone",
    "Wood" = "Wood"
}
;
/**
 * Term: FRE Purchase Eligibility Type Definition: To convey the Freddie Mac purchase eligibility.
 */
export enum FREPurchaseEligibilityBase {
    "FreddieMacEligible" = "FreddieMacEligible",
    "FreddieMacIneligible" = "FreddieMacIneligible"
}
;
/**
 * Term: Front Door Approximate Elevation Range Type Definition: A value from a MISMO prescribed list that represents the approximate elevation range from grade to the bottom of the front entrance door.
 */
export enum FrontDoorApproximateElevationRangeBase {
    "EightToNineFeet" = "EightToNineFeet",
    "FiveToSixFeet" = "FiveToSixFeet",
    "FourToFiveFeet" = "FourToFiveFeet",
    "GroundLevel" = "GroundLevel",
    "NineToTenFeet" = "NineToTenFeet",
    "OneToTwoFeet" = "OneToTwoFeet",
    "SevenToEightFeet" = "SevenToEightFeet",
    "SixToSevenFeet" = "SixToSevenFeet",
    "TenOrMoreFeet" = "TenOrMoreFeet",
    "ThreeToFourFeet" = "ThreeToFourFeet",
    "TwoToThreeFeet" = "TwoToThreeFeet",
    "UpToOneFoot" = "UpToOneFoot"
}
;
/**
 * Term: Fulfillment Party Role Type Definition: This describes the fulfillment party's profession.
 */
export enum FulfillmentPartyRoleBase {
    "Notary" = "Notary",
    "Other" = "Other",
    "TitleAgent" = "TitleAgent"
}
;
/**
 * Term: Fulfillment Party Service Type Definition: Defines the type of service provided by the fulfillment party.
 */
export enum FulfillmentPartyServiceBase {
    "Flood" = "Flood",
    "Other" = "Other",
    "Title" = "Title"
}
;
/**
 * Term: Functional Issue Type Definition: A value from a MISMO prescribed list that represents an apparent functional issue observed.
 */
export enum FunctionalIssueBase {
    "CeilingHeight" = "CeilingHeight",
    "FloorPlan" = "FloorPlan",
    "NonConformity" = "NonConformity",
    "None" = "None",
    "Other" = "Other",
    "Overimprovement" = "Overimprovement",
    "Underimprovement" = "Underimprovement"
}
;
/**
 * Term: Funding Interest Adjustment Day Method Type Definition: The day basis on which the funding interest adjustment is computed based on the purchase contract.
 */
export enum FundingInterestAdjustmentDayMethodBase {
    "ActualLastPaidInstallmentDueDate" = "ActualLastPaidInstallmentDueDate",
    "FirstOfMonth" = "FirstOfMonth",
    "ScheduledLastPaidInstallmentDueDate" = "ScheduledLastPaidInstallmentDueDate"
}
;
/**
 * Term: Funds Type Definition: A value from a MISMO defined list that specifies a monetary source commonly used to pay obligations in a mortgage loan transaction.
 */
export enum FundsBase {
    "BridgeLoan" = "BridgeLoan",
    "CashOnHand" = "CashOnHand",
    "CashOrOtherEquity" = "CashOrOtherEquity",
    "CheckingSavings" = "CheckingSavings",
    "Contribution" = "Contribution",
    "CreditCard" = "CreditCard",
    "Cryptocurrency" = "Cryptocurrency",
    "DepositOnSalesContract" = "DepositOnSalesContract",
    "EquityOnPendingSale" = "EquityOnPendingSale",
    "EquityOnSoldProperty" = "EquityOnSoldProperty",
    "EquityOnSubjectProperty" = "EquityOnSubjectProperty",
    "ExcessDeposit" = "ExcessDeposit",
    "ForgivableSecuredLoan" = "ForgivableSecuredLoan",
    "GiftFunds" = "GiftFunds",
    "Grant" = "Grant",
    "HousingRelocation" = "HousingRelocation",
    "LifeInsuranceCashValue" = "LifeInsuranceCashValue",
    "LotEquity" = "LotEquity",
    "MortgageCreditCertificates" = "MortgageCreditCertificates",
    "MortgageRevenueBond" = "MortgageRevenueBond",
    "MutualFund" = "MutualFund",
    "Other" = "Other",
    "OtherEquity" = "OtherEquity",
    "PledgedCollateral" = "PledgedCollateral",
    "PremiumFunds" = "PremiumFunds",
    "RentWithOptionToPurchase" = "RentWithOptionToPurchase",
    "RetirementFunds" = "RetirementFunds",
    "SaleOfChattel" = "SaleOfChattel",
    "SalesPriceAdjustment" = "SalesPriceAdjustment",
    "SecondaryFinancing" = "SecondaryFinancing",
    "SecuredLoan" = "SecuredLoan",
    "StocksAndBonds" = "StocksAndBonds",
    "SweatEquity" = "SweatEquity",
    "TradeEquity" = "TradeEquity",
    "TrustFunds" = "TrustFunds",
    "UnsecuredBorrowedFunds" = "UnsecuredBorrowedFunds"
}
;
/**
 * Term: Funds Source Type Definition: A value from a MISMO prescribed list that specifies the party providing the associated funds.
 */
export enum FundsSourceBase {
    "Borrower" = "Borrower",
    "Builder" = "Builder",
    "CommunityNonProfit" = "CommunityNonProfit",
    "Crowdfunding" = "Crowdfunding",
    "Employer" = "Employer",
    "FederalAgency" = "FederalAgency",
    "Institutional" = "Institutional",
    "Lender" = "Lender",
    "LocalAgency" = "LocalAgency",
    "NonOriginatingFinancialInstitution" = "NonOriginatingFinancialInstitution",
    "NonParentRelative" = "NonParentRelative",
    "Other" = "Other",
    "Parent" = "Parent",
    "PropertySeller" = "PropertySeller",
    "Relative" = "Relative",
    "ReligiousNonProfit" = "ReligiousNonProfit",
    "RuralHousingService" = "RuralHousingService",
    "StateAgency" = "StateAgency",
    "Unknown" = "Unknown",
    "UnmarriedPartner" = "UnmarriedPartner",
    "UnrelatedFriend" = "UnrelatedFriend"
}
;
/**
 * Term: GFE Aggregation Type Definition: Specifies the fee or charges group, combined fee or charges category, or compensation category, to which the individual fee or charge should be associated, as reflected on a single instance of the GFE.
 */
export enum GFEAggregationBase {
    "ChosenInterestRateCreditOrCharge" = "ChosenInterestRateCreditOrCharge",
    "CombinedOurOriginationAndInterestRateCreditOrCharge" = "CombinedOurOriginationAndInterestRateCreditOrCharge",
    "GovernmentRecordingCharges" = "GovernmentRecordingCharges",
    "HomeownersInsurance" = "HomeownersInsurance",
    "None" = "None",
    "Other" = "Other",
    "OurOriginationCharge" = "OurOriginationCharge",
    "OwnersTitleInsurance" = "OwnersTitleInsurance",
    "RequiredServicesLenderSelected" = "RequiredServicesLenderSelected",
    "RequiredServicesYouCanShopFor" = "RequiredServicesYouCanShopFor",
    "TitleServices" = "TitleServices",
    "TransferTaxes" = "TransferTaxes"
}
;
/**
 * Term: GFE Comparison Type Definition: Specifies how the loan conditions have been changed for this comparison instance for the purposes of GFE requirements.
 */
export enum GFEComparisonBase {
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "SameLoanWithLowerInterestRate" = "SameLoanWithLowerInterestRate",
    "SameLoanWithLowerSettlementCharges" = "SameLoanWithLowerSettlementCharges"
}
;
/**
 * Term: GFE Credit Or Charge For Chosen Interest Rate Type Definition: Identifies the type of credit or charge to the Borrower associated with the Borrower chosen interest rate, as reflected on a single instance of the GFE.
 */
export enum GFECreditOrChargeForChosenInterestRateBase {
    "BorrowerCharge" = "BorrowerCharge",
    "BorrowerCredit" = "BorrowerCredit",
    "CreditOrChargeIncludedInOriginationCharge" = "CreditOrChargeIncludedInOriginationCharge",
    "Other" = "Other"
}
;
/**
 * Term: GFE Loan Originator Fee Payment Credit Type Definition: Identifies the type of application of loan originator credit(s) to be reflected on the GFE and the HUD1.
 */
export enum GFELoanOriginatorFeePaymentCreditBase {
    "AmountsPaidByOrInBehalfOfBorrower" = "AmountsPaidByOrInBehalfOfBorrower",
    "ChosenInterestRateCreditOrCharge" = "ChosenInterestRateCreditOrCharge",
    "Other" = "Other"
}
;
/**
 * Term: GFE Section Identifier Type Definition: The identifier of a particular section of the GFE.
 */
export enum GFESectionIdentifierBase {
    "A" = "A",
    "AB" = "AB",
    "B" = "B",
    "Eight" = "Eight",
    "Eleven" = "Eleven",
    "Five" = "Five",
    "Four" = "Four",
    "Nine" = "Nine",
    "One" = "One",
    "Other" = "Other",
    "Seven" = "Seven",
    "Six" = "Six",
    "Ten" = "Ten",
    "Three" = "Three",
    "Two" = "Two"
}
;
/**
 * Term: Government Agency Appraisal Type Definition: A value from a MISMO prescribed list that represents the federal agency for which the appraisal has been prepared.
 */
export enum GovernmentAgencyAppraisalBase {
    "FHA" = "FHA",
    "Other" = "Other",
    "USDA" = "USDA",
    "VA" = "VA"
}
;
/**
 * Term: Government Bond Financing Program Type Definition: Type of state or local housing bond financing program (BFP).
 */
export enum GovernmentBondFinancingProgramBase {
    "BuilderBond" = "BuilderBond",
    "ConsolidatedBond" = "ConsolidatedBond",
    "FinalBond" = "FinalBond",
    "Other" = "Other"
}
;
/**
 * Term: Government Loan Application Type Definition: Specifies the type of government loan application. This information is referenced on VA forms 26-1802a and 26-1820, for example.
 */
export enum GovernmentLoanApplicationBase {
    "HomeLoanGuaranty" = "HomeLoanGuaranty",
    "NationalHousingAct" = "NationalHousingAct"
}
;
/**
 * Term: Government Refinance Type Definition: A value from a MISMO prescribed list that categorizes Federal government housing program refinance loans.
 */
export enum GovernmentRefinanceBase {
    "CashOutVA" = "CashOutVA",
    "FullDocumentation" = "FullDocumentation",
    "InterestRateReductionRefinanceLoan" = "InterestRateReductionRefinanceLoan",
    "Other" = "Other",
    "StreamlineWithAppraisal" = "StreamlineWithAppraisal",
    "StreamlineWithoutAppraisal" = "StreamlineWithoutAppraisal"
}
;
/**
 * Term: Grade Level Type Definition: A value from a MISMO prescribed list that represents the unit's or level's grade as it relates to ground level.
 */
export enum GradeLevelBase {
    "AboveGrade" = "AboveGrade",
    "FullyBelowGrade" = "FullyBelowGrade",
    "PartiallyBelowGrade" = "PartiallyBelowGrade"
}
;
/**
 * Term: Guarantor Classification Type Definition: A value from a MISMO defined list that identifies whether the guarantor is the primary or a secondary guarantor.
 */
export enum GuarantorClassificationBase {
    "Primary" = "Primary",
    "Secondary" = "Secondary"
}
;
/**
 * Term: Hardship Duration Type Definition: Indicates the duration of the borrower's primary hardship. Duration is determined based on trading party policy guidelines.
 */
export enum HardshipDurationBase {
    "LongTerm" = "LongTerm",
    "MediumTerm" = "MediumTerm",
    "Other" = "Other",
    "Permanent" = "Permanent",
    "ShortTerm" = "ShortTerm",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Hazard Insurance Coverage Type Definition: The type of loss the insurance policy covers.
 */
export enum HazardInsuranceCoverageBase {
    "Earthquake" = "Earthquake",
    "FireAndExtendedCoverage" = "FireAndExtendedCoverage",
    "Flood" = "Flood",
    "Hazard" = "Hazard",
    "Homeowners" = "Homeowners",
    "Hurricane" = "Hurricane",
    "InsectInfestation" = "InsectInfestation",
    "Leasehold" = "Leasehold",
    "MineSubsidence" = "MineSubsidence",
    "Other" = "Other",
    "PersonalProperty" = "PersonalProperty",
    "Storm" = "Storm",
    "Tornado" = "Tornado",
    "Volcano" = "Volcano",
    "Wind" = "Wind"
}
;
/**
 * Term: Hazard Insurance Non Standard Policy Type Definition: Additional Description of the Hazard Insurance coverage document.
 */
export enum HazardInsuranceNonStandardPolicyBase {
    "Application" = "Application",
    "Binder" = "Binder",
    "Bridge" = "Bridge",
    "Condo" = "Condo",
    "CondominiumPUDMasterPolicy" = "CondominiumPUDMasterPolicy",
    "FairPlan" = "FairPlan",
    "ForcePlaced" = "ForcePlaced",
    "Other" = "Other"
}
;
/**
 * Term: Hazard Zone Type Definition: A value from a MISMO prescribed list that represents the geographic area, as specified by a government entity, documenting a potential risk to the property.
 */
export enum HazardZoneBase {
    "FEMASpecialFloodHazardArea" = "FEMASpecialFloodHazardArea",
    "None" = "None",
    "Other" = "Other",
    "USGSLavaFlowZone" = "USGSLavaFlowZone"
}
;
/**
 * Term: Heating Fuel Type Definition: Indicates the type of fuel used by the heating system.
 */
export enum HeatingFuelBase {
    "Coal" = "Coal",
    "Electric" = "Electric",
    "Geothermal" = "Geothermal",
    "NaturalGas" = "NaturalGas",
    "Oil" = "Oil",
    "Other" = "Other",
    "Propane" = "Propane",
    "Solar" = "Solar",
    "Wood" = "Wood"
}
;
/**
 * Term: Heating System Type Definition: A value from a MISMO prescribed list that specifies the type of heating.
 */
export enum HeatingSystemBase {
    "Baseboard" = "Baseboard",
    "Fireplace" = "Fireplace",
    "ForcedWarmAir" = "ForcedWarmAir",
    "GravityAir" = "GravityAir",
    "MiniSplit" = "MiniSplit",
    "None" = "None",
    "Other" = "Other",
    "PassiveSolar" = "PassiveSolar",
    "Radiant" = "Radiant",
    "Radiators" = "Radiators",
    "Stove" = "Stove"
}
;
/**
 * Term: HELOC Daily Periodic Interest Rate Calculation Type Definition: The factor used in calculating the dollar amount of daily periodic interest charged in the HELOC loan transaction.
 */
export enum HELOCDailyPeriodicInterestRateCalculationBase {
    "360_" = "360",
    "365_" = "365"
}
;
/**
 * Term: HELOC Teaser Rate Type Definition: The type of introductory (teaser) rate on a line of credit.
 */
export enum HELOCTeaserRateBase {
    "Adjustable" = "Adjustable",
    "Fixed" = "Fixed"
}
;
/**
 * Term: High Cost Jurisdiction Type Definition: The type of the jurisdiction whose high cost rules are being applied for high cost determination purposes.
 */
export enum HighCostJurisdictionBase {
    "City" = "City",
    "County" = "County",
    "Other" = "Other",
    "State" = "State"
}
;
/**
 * Term: HMDA HOEPA Loan Status Reason Type Definition: A value from a MISMO prescribed list that specifies the reason behind the HOEPA disposition for a HMDA covered loan that you originated or purchased that is a high-cost mortgage under the Home Ownership and Equity Protection Act of 1994 (HOEPA), as implemented in Regulation Z Section 1026.32.
 */
export enum HMDA_HOEPALoanStatusReasonBase {
    "HOEPALoanBecauseOfAPR" = "HOEPALoanBecauseOfAPR",
    "HOEPALoanBecauseOfBothAPRAndPointsAndFees" = "HOEPALoanBecauseOfBothAPRAndPointsAndFees",
    "HOEPALoanBecauseOfPointsAndFees" = "HOEPALoanBecauseOfPointsAndFees",
    "Other" = "Other"
}
;
/**
 * Term: HMDA Application Submission Type Definition: A value from a MISMO prescribed list that specifies whether the applicant or borrower, on a HMDA covered loan or application, submitted the application directly to the reporting institution.
 */
export enum HMDAApplicationSubmissionBase {
    "Exempt" = "Exempt",
    "NotApplicable" = "NotApplicable",
    "NotSubmittedDirectly" = "NotSubmittedDirectly",
    "Other" = "Other",
    "SubmittedDirectly" = "SubmittedDirectly"
}
;
/**
 * Term: HMDA Covered Loan Initially Payable To Reporting Institution Status Type Definition: A value from a MISMO prescribed list that specifies whether a loan, or in the case of an application that is required to be reported to HMDA, would have been initially payable to the reporting entity.
 */
export enum HMDACoveredLoanInitiallyPayableToReportingInstitutionStatusBase {
    "Exempt" = "Exempt",
    "InitiallyPayable" = "InitiallyPayable",
    "NotApplicable" = "NotApplicable",
    "NotInitiallyPayable" = "NotInitiallyPayable",
    "Other" = "Other"
}
;
/**
 * Term: HMDA Demographic Collection Version Type Definition: A value from a MISMO prescribed list that represents the version of the demographic information that is collected for a borrower or applicant.
 */
export enum HMDADemographicCollectionVersionBase {
    "2018Version" = "2018Version",
    "Other" = "Other",
    "Pre2018Version" = "Pre2018Version"
}
;
/**
 * Term: HMDA Disposition Type Definition: A value from a MISMO prescribed list that specifies the type of action taken on the application or HMDA covered loan.
 */
export enum HMDADispositionBase {
    "ApplicationApprovedButNotAccepted" = "ApplicationApprovedButNotAccepted",
    "ApplicationDenied" = "ApplicationDenied",
    "ApplicationWithdrawn" = "ApplicationWithdrawn",
    "FileClosedForIncompleteness" = "FileClosedForIncompleteness",
    "LoanOriginated" = "LoanOriginated",
    "LoanPurchasedByYourInstitution" = "LoanPurchasedByYourInstitution",
    "Other" = "Other",
    "PreapprovalRequestApprovedButNotAccepted" = "PreapprovalRequestApprovedButNotAccepted",
    "PreapprovalRequestDenied" = "PreapprovalRequestDenied"
}
;
/**
 * Term: HMDA Ethnicity Type Definition: A value from a MISMO prescribed list that represents the borrower's or interviewer's statement about the borrower's ethnicity as defined in the Home Mortgage Disclosure Act (HMDA).
 */
export enum HMDAEthnicityBase {
    "HispanicOrLatino" = "HispanicOrLatino",
    "InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication" = "InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication",
    "NotApplicable" = "NotApplicable",
    "NotHispanicOrLatino" = "NotHispanicOrLatino",
    "Other" = "Other"
}
;
/**
 * Term: HMDA Ethnicity Origin Type Definition: A value from a MISMO prescribed list that represents the borrower's statement about the borrower's ethnicity origin as defined in the Home Mortgage Disclosure Act (HMDA).
 */
export enum HMDAEthnicityOriginBase {
    "Cuban" = "Cuban",
    "Mexican" = "Mexican",
    "Other" = "Other",
    "PuertoRican" = "PuertoRican"
}
;
/**
 * Term: HMDA Gender Type Definition: A value from a MISMO prescribed list that represents the borrower's or interviewer's statement about the borrower's gender.
 */
export enum HMDAGenderBase {
    "ApplicantSelectedBothMaleAndFemale" = "ApplicantSelectedBothMaleAndFemale",
    "Female" = "Female",
    "InformationNotProvidedUnknown" = "InformationNotProvidedUnknown",
    "Male" = "Male",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other"
}
;
/**
 * Term: HMDA Manufactured Home Legal Classification Type Definition: A value from a MISMO prescribed list that specifies whether the manufactured  home is legally classified as real property or as personal property.
 */
export enum HMDAManufacturedHomeLegalClassificationBase {
    "Exempt" = "Exempt",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "PersonalProperty" = "PersonalProperty",
    "RealProperty" = "RealProperty"
}
;
/**
 * Term: HMDA Postal Address Unknown Type Definition: A value from a MISMO prescribed list that specifies what aspects of the postal address for the subject property is or are unknown.
 */
export enum HMDAPostalAddressUnknownBase {
    "CityName" = "CityName",
    "EntireAddress" = "EntireAddress",
    "None" = "None",
    "PostalCode" = "PostalCode",
    "StreetAddress" = "StreetAddress",
    "StreetAddressAndCityName" = "StreetAddressAndCityName",
    "StreetAddressAndPostalCode" = "StreetAddressAndPostalCode"
}
;
/**
 * Term: HMDA Preapproval Type Definition: A value from a MISMO prescribed list that specifies how the loan meets the HMDA Preapproval reporting requirements.
 */
export enum HMDAPreapprovalBase {
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "PreapprovalWasNotRequested" = "PreapprovalWasNotRequested",
    "PreapprovalWasRequested" = "PreapprovalWasRequested"
}
;
/**
 * Term: HMDA Purchaser Type Definition: A value from a MISMO prescribed list that specifies whether a covered loan that your institution originated or purchased was then sold to a secondary market entity within the same calendar year.
 */
export enum HMDAPurchaserBase {
    "AffiliateInstitution" = "AffiliateInstitution",
    "CommercialOrSavingsBank" = "CommercialOrSavingsBank",
    "CreditUnionMortgageOrFinanceCompany" = "CreditUnionMortgageOrFinanceCompany",
    "FannieMae" = "FannieMae",
    "FarmerMac" = "FarmerMac",
    "FreddieMac" = "FreddieMac",
    "GinnieMae" = "GinnieMae",
    "LifeInsuranceCompany" = "LifeInsuranceCompany",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "PrivateSecuritization" = "PrivateSecuritization"
}
;
/**
 * Term: HMDA Purpose Of Loan Type Definition: A value from a MISMO prescribed list that specifies the HMDA Purpose of Loan as defined in Regulation C. The definitions of a home improvement loan and a refinancing were substantially revised in the final rules adopted in 2002.
 */
export enum HMDAPurposeOfLoanBase {
    "HomeImprovement" = "HomeImprovement",
    "HomePurchase" = "HomePurchase",
    "Other" = "Other",
    "Refinancing" = "Refinancing"
}
;
/**
 * Term: HMDA Race Type Definition: A value from a MISMO prescribed list that represents the borrower's or interviewer's statement about the borrower's race as defined in the Home Mortgage Disclosure Act. Up to 5 Race Types may be included per borrower.
 */
export enum HMDARaceBase {
    "AmericanIndianOrAlaskaNative" = "AmericanIndianOrAlaskaNative",
    "Asian" = "Asian",
    "BlackOrAfricanAmerican" = "BlackOrAfricanAmerican",
    "InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication" = "InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication",
    "NativeHawaiianOrOtherPacificIslander" = "NativeHawaiianOrOtherPacificIslander",
    "NotApplicable" = "NotApplicable",
    "White" = "White"
}
;
/**
 * Term: HMDA Race Designation Type Definition: A value from a MISMO prescribed list that represents the borrower's statement about the borrower's race designation as defined in the Home Mortgage Disclosure Act.
 */
export enum HMDARaceDesignationBase {
    "AsianIndian" = "AsianIndian",
    "Chinese" = "Chinese",
    "Filipino" = "Filipino",
    "GuamanianOrChamorro" = "GuamanianOrChamorro",
    "Japanese" = "Japanese",
    "Korean" = "Korean",
    "NativeHawaiian" = "NativeHawaiian",
    "Other" = "Other",
    "OtherAsian" = "OtherAsian",
    "OtherPacificIslander" = "OtherPacificIslander",
    "Samoan" = "Samoan",
    "Vietnamese" = "Vietnamese"
}
;
/**
 * Term: HMDA Reason For Denial Type Definition: A value from a MISMO prescribed list that specifies the reason for a mortgage loan application denial, as required for HMDA reporting.
 */
export enum HMDAReasonForDenialBase {
    "CreditApplicationIncomplete" = "CreditApplicationIncomplete",
    "Exempt" = "Exempt",
    "InsufficientCash" = "InsufficientCash",
    "InsufficientCollateralValue" = "InsufficientCollateralValue",
    "InsufficientCreditHistory" = "InsufficientCreditHistory",
    "InsufficientEmploymentHistory" = "InsufficientEmploymentHistory",
    "InsufficientIncome" = "InsufficientIncome",
    "MortgageInsuranceDenied" = "MortgageInsuranceDenied",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "UnverifiableInformation" = "UnverifiableInformation"
}
;
/**
 * Term: Homeowner Past Three Years Type Definition: Borrower's answer to the question: Have you had an ownership interest in a property in the last three years?
 */
export enum HomeownerPastThreeYearsBase {
    "No" = "No",
    "Unknown" = "Unknown",
    "Yes" = "Yes"
}
;
/**
 * Term: Household Impact Scope Type Definition: A value from a MISMO prescribed list that represents the impact and scope of housing counseling services reporting during the reporting period.
 */
export enum HouseholdImpactScopeBase {
    "AvoidedEvictionAfterRentalCounseling" = "AvoidedEvictionAfterRentalCounseling",
    "CounselingAndGroupEducation" = "CounselingAndGroupEducation",
    "FairHousingRights" = "FairHousingRights",
    "HECMAfterReverseMortgageCounseling" = "HECMAfterReverseMortgageCounseling",
    "HomelessHouseholdsObtainingHousing" = "HomelessHouseholdsObtainingHousing",
    "HousingPurchaseAfterPrepurchaseCounseling" = "HousingPurchaseAfterPrepurchaseCounseling",
    "HousingResources" = "HousingResources",
    "ImprovedConditionsAffordabilityAfterPostPurchaseCounseling" = "ImprovedConditionsAffordabilityAfterPostPurchaseCounseling",
    "ImprovedConditionsAfterRentalCounseling" = "ImprovedConditionsAfterRentalCounseling",
    "ImprovedFinancialCapacity" = "ImprovedFinancialCapacity",
    "NonHousingResources" = "NonHousingResources",
    "PreventedResolvedMortgageDefault" = "PreventedResolvedMortgageDefault",
    "SustainableHouseholdBudget" = "SustainableHouseholdBudget"
}
;
/**
 * Term: Housing Counseling Agency List Source Type Definition: A value from a prescribed list that classifies the source from which a written list of housing counseling organizations in the borrower's location was generated.
 */
export enum HousingCounselingAgencyListSourceBase {
    "CFPB" = "CFPB",
    "HUD" = "HUD",
    "Other" = "Other"
}
;
/**
 * Term: Housing Counseling Report Category Type Definition: A value from a MISMO prescribed list that represents the housing counseling report column.
 */
export enum HousingCounselingReportCategoryBase {
    "Comparison" = "Comparison",
    "Other" = "Other",
    "Total" = "Total"
}
;
/**
 * Term: Housing Expense Type Definition: A value from a MISMO prescribed list that specifies the housing expense items listed in a mortgage loan transaction.
 */
export enum HousingExpenseBase {
    "Cable" = "Cable",
    "Electricity" = "Electricity",
    "EscrowShortage" = "EscrowShortage",
    "FirstMortgagePITI" = "FirstMortgagePITI",
    "FirstMortgagePrincipalAndInterest" = "FirstMortgagePrincipalAndInterest",
    "FloodInsurance" = "FloodInsurance",
    "GroundRent" = "GroundRent",
    "Heating" = "Heating",
    "HomeownersAssociationDuesAndCondominiumFees" = "HomeownersAssociationDuesAndCondominiumFees",
    "HomeownersInsurance" = "HomeownersInsurance",
    "LeaseholdPayments" = "LeaseholdPayments",
    "MaintenanceAndMiscellaneous" = "MaintenanceAndMiscellaneous",
    "MIPremium" = "MIPremium",
    "Other" = "Other",
    "OtherMortgageLoanPrincipalAndInterest" = "OtherMortgageLoanPrincipalAndInterest",
    "OtherMortgageLoanPrincipalInterestTaxesAndInsurance" = "OtherMortgageLoanPrincipalInterestTaxesAndInsurance",
    "RealEstateTax" = "RealEstateTax",
    "Rent" = "Rent",
    "SupplementalPropertyInsurance" = "SupplementalPropertyInsurance",
    "Telephone" = "Telephone",
    "Utilities" = "Utilities"
}
;
/**
 * Term: Housing Expense Timing Type Definition: A value from a MISMO prescribed list that specifies the relative time frame of a Housing Expense Payment Amount.
 */
export enum HousingExpenseTimingBase {
    "Present" = "Present",
    "Proposed" = "Proposed"
}
;
/**
 * Term: HUD1 Line Item Paid By Type Definition: The party responsible for payment of the specified HUD-1 line item.
 */
export enum HUD1LineItemPaidByBase {
    "Buyer" = "Buyer",
    "LenderPremium" = "LenderPremium",
    "Seller" = "Seller"
}
;
/**
 * Term: Identity Document Type Definition: The kind of document that was examined to verify individual identity. A driver's license is an example of an identity document.
 */
export enum IdentityDocumentBase {
    "BankStatement" = "BankStatement",
    "DriversLicense" = "DriversLicense",
    "EmployeeIdentification" = "EmployeeIdentification",
    "MilitaryIdentification" = "MilitaryIdentification",
    "NationalIdentification" = "NationalIdentification",
    "Other" = "Other",
    "Passport" = "Passport",
    "PrivateIdentification" = "PrivateIdentification",
    "StateIdentification" = "StateIdentification",
    "TaxpayerIdentification" = "TaxpayerIdentification",
    "Visa" = "Visa"
}
;
/**
 * Term: Identity Document Issued By Type Definition: The type of entity that issued the document used for identity verification for this individual.
 */
export enum IdentityDocumentIssuedByBase {
    "Country" = "Country",
    "Other" = "Other",
    "StateProvince" = "StateProvince"
}
;
/**
 * Term: Image Category Type Definition: A value from a MISMO prescribed list that categorizes the image.
 */
export enum ImageCategoryBase {
    "AbsorptionRateGraph" = "AbsorptionRateGraph",
    "AssignmentExhibit" = "AssignmentExhibit",
    "CompletedConstruction" = "CompletedConstruction",
    "CostApproachExhibit" = "CostApproachExhibit",
    "DisasterMitigationExhibit" = "DisasterMitigationExhibit",
    "DwellingExteriorExhibit" = "DwellingExteriorExhibit",
    "DwellingFront" = "DwellingFront",
    "DwellingRear" = "DwellingRear",
    "Encroachment" = "Encroachment",
    "EnergyEfficientAndGreenFeaturesExhibit" = "EnergyEfficientAndGreenFeaturesExhibit",
    "FloorPlan" = "FloorPlan",
    "FunctionalObsolescenceExhibit" = "FunctionalObsolescenceExhibit",
    "GrossRentMultiplierComparableMap" = "GrossRentMultiplierComparableMap",
    "HighestAndBestUseExhibit" = "HighestAndBestUseExhibit",
    "IncomeApproachExhibit" = "IncomeApproachExhibit",
    "LandComparableMap" = "LandComparableMap",
    "LegalDescription" = "LegalDescription",
    "ManufacturedHomeExhibit" = "ManufacturedHomeExhibit",
    "ManufacturedHomeFinancingProgramEligibilityCertification" = "ManufacturedHomeFinancingProgramEligibilityCertification",
    "ManufacturedHomeHUDCertificationLabel" = "ManufacturedHomeHUDCertificationLabel",
    "ManufacturedHomeHUDDataPlate" = "ManufacturedHomeHUDDataPlate",
    "MarketAnalysisExhibit" = "MarketAnalysisExhibit",
    "MedianDaysOnMarketGraph" = "MedianDaysOnMarketGraph",
    "NoncontinuousArea" = "NoncontinuousArea",
    "NonResidentialUse" = "NonResidentialUse",
    "Other" = "Other",
    "OutbuildingExhibit" = "OutbuildingExhibit",
    "PercentOfDistressedSalesGraph" = "PercentOfDistressedSalesGraph",
    "PermanentWaterfrontFeature" = "PermanentWaterfrontFeature",
    "PriceTrendGraph" = "PriceTrendGraph",
    "PriorSaleAndTransferHistoryExhibit" = "PriorSaleAndTransferHistoryExhibit",
    "ProjectAmenity" = "ProjectAmenity",
    "ProjectDeficiency" = "ProjectDeficiency",
    "ProjectExhibit" = "ProjectExhibit",
    "PropertyAccess" = "PropertyAccess",
    "PropertyBoundaries" = "PropertyBoundaries",
    "PropertyPhoto" = "PropertyPhoto",
    "ReconciliationExhibit" = "ReconciliationExhibit",
    "RentalComparableMap" = "RentalComparableMap",
    "RentalInformationExhibit" = "RentalInformationExhibit",
    "SalesComparableMap" = "SalesComparableMap",
    "SalesComparisonApproachExhibit" = "SalesComparisonApproachExhibit",
    "SalesContractExhibit" = "SalesContractExhibit",
    "SiteCharacteristic" = "SiteCharacteristic",
    "SiteExhibit" = "SiteExhibit",
    "SiteInfluence" = "SiteInfluence",
    "SubjectListingExhibit" = "SubjectListingExhibit",
    "SubjectPropertyAmenitiesExhibit" = "SubjectPropertyAmenitiesExhibit",
    "SubjectPropertyExhibit" = "SubjectPropertyExhibit",
    "SubjectPropertyImprovementSketch" = "SubjectPropertyImprovementSketch",
    "SupplementalExhibit" = "SupplementalExhibit",
    "UnitInteriorExhibit" = "UnitInteriorExhibit",
    "ValuationCompletionExhibit" = "ValuationCompletionExhibit",
    "ValuationUpdateExhibit" = "ValuationUpdateExhibit",
    "VehicleStorageExhibit" = "VehicleStorageExhibit",
    "View" = "View",
    "WaterFrontage" = "WaterFrontage",
    "YearBuiltOfSalesGraph" = "YearBuiltOfSalesGraph"
}
;
/**
 * Term: Improved Surface Material Type Definition: A value from a MISMO prescribed list that specifies the predominant material used to surface the road, street and/or driveway.
 */
export enum ImprovedSurfaceMaterialBase {
    "Asphalt" = "Asphalt",
    "Brick" = "Brick",
    "Cobblestone" = "Cobblestone",
    "Concrete" = "Concrete",
    "Dirt" = "Dirt",
    "Gravel" = "Gravel",
    "Other" = "Other"
}
;
/**
 * Term: Improvement Type Definition: A value from a MISMO prescribed list that classifies the structure on the property.
 */
export enum ImprovementBase {
    "Dwelling" = "Dwelling",
    "Outbuilding" = "Outbuilding"
}
;
/**
 * Term: Improvement Component Type Definition: A value from a MISMO prescribed list that represents the improvement component that is being identified (e.g. Foundation, Floors).
 */
export enum ImprovementComponentBase {
    "ExteriorWallsAndTrim" = "ExteriorWallsAndTrim",
    "Flooring" = "Flooring",
    "Foundation" = "Foundation",
    "Insulation" = "Insulation",
    "Other" = "Other",
    "Roof" = "Roof",
    "WallsAndCeiling" = "WallsAndCeiling",
    "Windows" = "Windows"
}
;
/**
 * Term: Improvement Component Condition Status Type Definition: A value from a MISMO prescribed list that represents the condition status of the component being referenced.
 */
export enum ImprovementComponentConditionStatusBase {
    "DamagedAndFunctional" = "DamagedAndFunctional",
    "DamagedAndNonfunctional" = "DamagedAndNonfunctional",
    "NewOrLikeNew" = "NewOrLikeNew",
    "NoFinish" = "NoFinish",
    "Other" = "Other",
    "TypicalWearAndTear" = "TypicalWearAndTear"
}
;
/**
 * Term: Income Type Definition: A value from a MISMO prescribed list that specifies borrower income items on a mortgage loan application.
 */
export enum IncomeBase {
    "AccessoryUnitIncome" = "AccessoryUnitIncome",
    "Alimony" = "Alimony",
    "AutomobileAllowance" = "AutomobileAllowance",
    "Base" = "Base",
    "BoarderIncome" = "BoarderIncome",
    "Bonus" = "Bonus",
    "BorrowerEstimatedTotalMonthlyIncome" = "BorrowerEstimatedTotalMonthlyIncome",
    "CapitalGains" = "CapitalGains",
    "ChildSupport" = "ChildSupport",
    "Commissions" = "Commissions",
    "ContractBasis" = "ContractBasis",
    "DefinedContributionPlan" = "DefinedContributionPlan",
    "Disability" = "Disability",
    "DividendsInterest" = "DividendsInterest",
    "EmploymentRelatedAccount" = "EmploymentRelatedAccount",
    "FosterCare" = "FosterCare",
    "HousingAllowance" = "HousingAllowance",
    "HousingChoiceVoucherProgram" = "HousingChoiceVoucherProgram",
    "MilitaryBasePay" = "MilitaryBasePay",
    "MilitaryClothesAllowance" = "MilitaryClothesAllowance",
    "MilitaryCombatPay" = "MilitaryCombatPay",
    "MilitaryFlightPay" = "MilitaryFlightPay",
    "MilitaryHazardPay" = "MilitaryHazardPay",
    "MilitaryOverseasPay" = "MilitaryOverseasPay",
    "MilitaryPropPay" = "MilitaryPropPay",
    "MilitaryQuartersAllowance" = "MilitaryQuartersAllowance",
    "MilitaryRationsAllowance" = "MilitaryRationsAllowance",
    "MilitaryVariableHousingAllowance" = "MilitaryVariableHousingAllowance",
    "MiscellaneousIncome" = "MiscellaneousIncome",
    "MortgageCreditCertificate" = "MortgageCreditCertificate",
    "MortgageDifferential" = "MortgageDifferential",
    "NetRentalIncome" = "NetRentalIncome",
    "NonBorrowerContribution" = "NonBorrowerContribution",
    "NonBorrowerHouseholdIncome" = "NonBorrowerHouseholdIncome",
    "NotesReceivableInstallment" = "NotesReceivableInstallment",
    "Other" = "Other",
    "Overtime" = "Overtime",
    "Pension" = "Pension",
    "ProposedGrossRentForSubjectProperty" = "ProposedGrossRentForSubjectProperty",
    "PublicAssistance" = "PublicAssistance",
    "RealEstateOwnedGrossRentalIncome" = "RealEstateOwnedGrossRentalIncome",
    "Royalties" = "Royalties",
    "SelfEmploymentIncome" = "SelfEmploymentIncome",
    "SelfEmploymentLoss" = "SelfEmploymentLoss",
    "SeparateMaintenance" = "SeparateMaintenance",
    "SocialSecurity" = "SocialSecurity",
    "SubjectPropertyNetCashFlow" = "SubjectPropertyNetCashFlow",
    "TemporaryLeave" = "TemporaryLeave",
    "TipIncome" = "TipIncome",
    "TrailingCoBorrowerIncome" = "TrailingCoBorrowerIncome",
    "Trust" = "Trust",
    "Unemployment" = "Unemployment",
    "VABenefitsNonEducational" = "VABenefitsNonEducational",
    "WorkersCompensation" = "WorkersCompensation"
}
;
/**
 * Term: Income Document Type Definition: A value from a MISMO defined list that specifies the type of document used as a means of identifying or verifying the borrower's income used in the transaction.
 */
export enum IncomeDocumentBase {
    "BusinessBankStatement" = "BusinessBankStatement",
    "IRSW2" = "IRSW2",
    "Other" = "Other",
    "PayStub" = "PayStub",
    "PersonalBankStatement" = "PersonalBankStatement",
    "ProfitAndLossStatement" = "ProfitAndLossStatement",
    "RentalIncomeAnalysisStatement" = "RentalIncomeAnalysisStatement",
    "RetirementAccountStatement" = "RetirementAccountStatement",
    "TaxReturn" = "TaxReturn",
    "ThirdPartyEmploymentStatement" = "ThirdPartyEmploymentStatement",
    "VerbalStatement" = "VerbalStatement",
    "VerificationOfIncome" = "VerificationOfIncome"
}
;
/**
 * Term: Income Reported Type Definition: Specifies whether the total monthly income is either Pre-tax or Post-tax.
 */
export enum IncomeReportedBase {
    "PostTax" = "PostTax",
    "PreTax" = "PreTax"
}
;
/**
 * Term: Index Averaging Type Definition: Indicates if and how multiple index values are to be averaged to arrive at the value to be used in the interest rate calculation.
 */
export enum IndexAveragingBase {
    "AverageConsecutiveIndexValues" = "AverageConsecutiveIndexValues",
    "AveragePeriodicIndexRates" = "AveragePeriodicIndexRates",
    "AveragePreviousLoanIndexRates" = "AveragePreviousLoanIndexRates"
}
;
/**
 * Term: Index Type Definition: A value from a MISMO prescribed list that specifies the general category of mortgage index to be used to determine the interest rate at each adjustment.
 */
export enum IndexBase {
    "BankPrimeLoan" = "BankPrimeLoan",
    "CertificateOfDepositIndex" = "CertificateOfDepositIndex",
    "ConstantMaturityTreasury" = "ConstantMaturityTreasury",
    "CostOfSavingsIndex" = "CostOfSavingsIndex",
    "EleventhDistrictCostOfFundsIndex" = "EleventhDistrictCostOfFundsIndex",
    "LIBOR" = "LIBOR",
    "Other" = "Other",
    "SOFR" = "SOFR",
    "TreasuryBill" = "TreasuryBill",
    "TwelveMonthTreasuryAverage" = "TwelveMonthTreasuryAverage"
}
;
/**
 * Term: Index Calculation Method Type Definition: Indicates the method used to determine the index rate used to calculate the new interest rate.
 */
export enum IndexCalculationMethodBase {
    "AverageTwoIndexRates" = "AverageTwoIndexRates",
    "CurrentDaysIndexRate" = "CurrentDaysIndexRate",
    "HighestOfTwoIndexRates" = "HighestOfTwoIndexRates",
    "LowestOfTwoIndexRates" = "LowestOfTwoIndexRates",
    "SingleIndexRate" = "SingleIndexRate"
}
;
/**
 * Term: Index Designation Type Definition: Specifies whether the index is the primary or secondary.
 */
export enum IndexDesignationBase {
    "Alternate" = "Alternate",
    "Primary" = "Primary"
}
;
/**
 * Term: Index Lookback Type Definition: A value from a MISMO defined list that specifies the point in time prior to the effective date of the payment adjustment at which date the effective value of the published index is taken to compute the new payment.
 */
export enum IndexLookbackBase {
    "FirstBusinessDayOfCurrentMonth" = "FirstBusinessDayOfCurrentMonth",
    "FirstBusinessDayOfPreviousMonth" = "FirstBusinessDayOfPreviousMonth",
    "FirstMondayOfTheMonth" = "FirstMondayOfTheMonth",
    "Other" = "Other",
    "SecondTuesdayOfTheMonth" = "SecondTuesdayOfTheMonth",
    "SpecificDayOfTheMonth" = "SpecificDayOfTheMonth",
    "ThirdFridayOfTheMonth" = "ThirdFridayOfTheMonth"
}
;
/**
 * Term: Index Rounding Type Definition: Indicates how the index is rounded prior to use in the calculation of the new interest rate. The index can be rounded up, down or to the nearest factor. This field is used in conjunction with Index Rounding Factor which indicates the percentage to which the rounding occurs.
 */
export enum IndexRoundingBase {
    "Nearest" = "Nearest",
    "NoRounding" = "NoRounding",
    "Up" = "Up"
}
;
/**
 * Term: Index Rounding Timing Type Definition: Describes when rounding occurs relative to the minimum index movement rule.
 */
export enum IndexRoundingTimingBase {
    "RoundIndexAfterCheckingMinimumIndexMovement" = "RoundIndexAfterCheckingMinimumIndexMovement",
    "RoundIndexBeforeCheckingMinimumIndexMovement" = "RoundIndexBeforeCheckingMinimumIndexMovement"
}
;
/**
 * Term: Index Source Type Definition: A value from a MISMO prescribed list that specifies the type and source of index to be used to determine the interest rate at each adjustment.
 */
export enum IndexSourceBase {
    "180DayAverageSOFR" = "180DayAverageSOFR",
    "30DayAverageSOFR" = "30DayAverageSOFR",
    "90DayAverageSOFR" = "90DayAverageSOFR",
    "FHLBEleventhDistrictMonthlyCostOfFundsIndex" = "FHLBEleventhDistrictMonthlyCostOfFundsIndex",
    "FHLBEleventhDistrictSemi-AnnualCostOfFundsIndex" = "FHLBEleventhDistrictSemi-AnnualCostOfFundsIndex",
    "LIBOROneMonthWSJ25thDayOfMonth" = "LIBOROneMonthWSJ25thDayOfMonth",
    "LIBOROneMonthWSJ25thDayOfMonthOrNextBusinessDay" = "LIBOROneMonthWSJ25thDayOfMonthOrNextBusinessDay",
    "LIBOROneMonthWSJDaily" = "LIBOROneMonthWSJDaily",
    "LIBOROneMonthWSJFifteenthDayOfMonth" = "LIBOROneMonthWSJFifteenthDayOfMonth",
    "LIBOROneMonthWSJFifteenthDayOfMonthOrNextBusinessDay" = "LIBOROneMonthWSJFifteenthDayOfMonthOrNextBusinessDay",
    "LIBOROneMonthWSJFirstBusinessDayOfTheMonth" = "LIBOROneMonthWSJFirstBusinessDayOfTheMonth",
    "LIBOROneMonthWSJFirstDayOfTheMonth" = "LIBOROneMonthWSJFirstDayOfTheMonth",
    "LIBOROneYearWSJDaily" = "LIBOROneYearWSJDaily",
    "LIBOROneYearWSJFirstBusinessDayOfTheMonth" = "LIBOROneYearWSJFirstBusinessDayOfTheMonth",
    "LIBORSixMonthWSJ25thDayOfMonth" = "LIBORSixMonthWSJ25thDayOfMonth",
    "LIBORSixMonthWSJ25thDayOfMonthOrNextBusinessDay" = "LIBORSixMonthWSJ25thDayOfMonthOrNextBusinessDay",
    "LIBORSixMonthWSJFifteenthDayOfMonth" = "LIBORSixMonthWSJFifteenthDayOfMonth",
    "LIBORSixMonthWSJFifteenthDayOfMonthOrNextBusinessDay" = "LIBORSixMonthWSJFifteenthDayOfMonthOrNextBusinessDay",
    "LIBORSixMonthWSJLastBusinessDayOfMonth" = "LIBORSixMonthWSJLastBusinessDayOfMonth",
    "LIBORThreeMonthWSJDaily" = "LIBORThreeMonthWSJDaily",
    "LIBORThreeMonthWSJFirstBusinessDayOfTheMonth" = "LIBORThreeMonthWSJFirstBusinessDayOfTheMonth",
    "MonthlyFiveYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlyFiveYearTreasurySecuritiesConstantMaturityFRBH15",
    "MonthlyOneYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlyOneYearTreasurySecuritiesConstantMaturityFRBH15",
    "MonthlySevenYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlySevenYearTreasurySecuritiesConstantMaturityFRBH15",
    "MonthlyTenYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlyTenYearTreasurySecuritiesConstantMaturityFRBH15",
    "MonthlyThreeYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlyThreeYearTreasurySecuritiesConstantMaturityFRBH15",
    "MonthlyTwoYearTreasurySecuritiesConstantMaturityFRBH15" = "MonthlyTwoYearTreasurySecuritiesConstantMaturityFRBH15",
    "NationalAverageContractMortgageRate" = "NationalAverageContractMortgageRate",
    "NationalMonthlyMedianCostOfFundsIndexOTS" = "NationalMonthlyMedianCostOfFundsIndexOTS",
    "OneMonthUSTBillWeeklyAuctionInvestmentYieldUST" = "OneMonthUSTBillWeeklyAuctionInvestmentYieldUST",
    "OneYearCMTMovingTwelveMonthAverageMTA" = "OneYearCMTMovingTwelveMonthAverageMTA",
    "Other" = "Other",
    "PrimeRateWSJEffectiveDate" = "PrimeRateWSJEffectiveDate",
    "PrimeRateWSJFirstBusinessDayOfTheMonth" = "PrimeRateWSJFirstBusinessDayOfTheMonth",
    "PrimeRateWSJPublicationDate" = "PrimeRateWSJPublicationDate",
    "SixMonthLIBOR_WSJDaily" = "SixMonthLIBOR_WSJDaily",
    "SixMonthLIBOR_WSJFirstBusinessDayOfTheMonth" = "SixMonthLIBOR_WSJFirstBusinessDayOfTheMonth",
    "SixMonthUSTBillMonthlyAuctionDiscountRateCalculated" = "SixMonthUSTBillMonthlyAuctionDiscountRateCalculated",
    "SixMonthUSTBillMonthlyAuctionDiscountRateUST" = "SixMonthUSTBillMonthlyAuctionDiscountRateUST",
    "SixMonthUSTBillMonthlyAuctionInvestmentYieldCalculated" = "SixMonthUSTBillMonthlyAuctionInvestmentYieldCalculated",
    "SixMonthUSTBillWeeklyAuctionDiscountRateUST" = "SixMonthUSTBillWeeklyAuctionDiscountRateUST",
    "SixMonthUSTBillWeeklyAuctionInvestmentYieldUST" = "SixMonthUSTBillWeeklyAuctionInvestmentYieldUST",
    "ThreeMonthUSTBillMonthlyAuctionDiscountRateCalculated" = "ThreeMonthUSTBillMonthlyAuctionDiscountRateCalculated",
    "ThreeMonthUSTBillWeeklyAuctionInvestmentYieldUST" = "ThreeMonthUSTBillWeeklyAuctionInvestmentYieldUST",
    "WeeklyFiveYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklyFiveYearTreasurySecuritiesConstantMaturityFRBH15",
    "WeeklyOneYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklyOneYearTreasurySecuritiesConstantMaturityFRBH15",
    "WeeklySevenYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklySevenYearTreasurySecuritiesConstantMaturityFRBH15",
    "WeeklySixMonthCertificateOfDepositSecondaryMarketFRBH15" = "WeeklySixMonthCertificateOfDepositSecondaryMarketFRBH15",
    "WeeklyTenYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklyTenYearTreasurySecuritiesConstantMaturityFRBH15",
    "WeeklyThreeYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklyThreeYearTreasurySecuritiesConstantMaturityFRBH15",
    "WeeklyTwoYearTreasurySecuritiesConstantMaturityFRBH15" = "WeeklyTwoYearTreasurySecuritiesConstantMaturityFRBH15",
    "WellsCostOfSavingsIndex" = "WellsCostOfSavingsIndex"
}
;
/**
 * Term: Indoor Air Quality Mitigation Type Definition: A value from a MISMO prescribed list that specifies the type of indoor air quality mitigation in place on the property.
 */
export enum IndoorAirQualityMitigationBase {
    "EnergyRecoveryVentilatorUnit" = "EnergyRecoveryVentilatorUnit",
    "IndoorAirPLUS" = "IndoorAirPLUS",
    "NonToxicPestControl" = "NonToxicPestControl",
    "Other" = "Other"
}
;
/**
 * Term: Influence Impact Type Definition: Identifies the impact of the indicated Influence on the subject property as used in the appraiser's analysis.
 */
export enum InfluenceImpactBase {
    "Adverse" = "Adverse",
    "Beneficial" = "Beneficial",
    "Neutral" = "Neutral"
}
;
/**
 * Term: Inspection Request Action Type Definition: Defines the inspection service requested.
 */
export enum InspectionRequestActionBase {
    "Cancellation" = "Cancellation",
    "Change" = "Change",
    "Hold" = "Hold",
    "Original" = "Original",
    "Other" = "Other",
    "PriceQuote" = "PriceQuote",
    "Reissue" = "Reissue",
    "Resume" = "Resume",
    "StatusQuery" = "StatusQuery",
    "Update" = "Update",
    "Upgrade" = "Upgrade"
}
;
/**
 * Term: Insulation Area Type Definition: Indicates that the area specified by Insulation Area Type does have insulation.
 */
export enum InsulationAreaBase {
    "Ceiling" = "Ceiling",
    "Floor" = "Floor",
    "Other" = "Other",
    "Roof" = "Roof",
    "Walls" = "Walls"
}
;
/**
 * Term: Insulation HERS Type Definition: A value from a predefined MISMO list representing the Index developed by the Residential Energy Services Network and is a nationally recognized system by which a home's insulation energy efficiency is measured.
 */
export enum InsulationHERSBase {
    "Best" = "Best",
    "Lowest" = "Lowest",
    "Moderate" = "Moderate"
}
;
/**
 * Term: Insulation Material Type Definition: A collection of values that specify the insulation material that is used in the specified Insulation Area Type.
 */
export enum InsulationMaterialBase {
    "Cellulose" = "Cellulose",
    "FiberglassBatt" = "FiberglassBatt",
    "FiberglassBlownIn" = "FiberglassBlownIn",
    "Foam" = "Foam",
    "MineralWool" = "MineralWool",
    "Other" = "Other"
}
;
/**
 * Term: Insulation Presence Type Definition: Identifies  the presence or absence of insulation in area as specified by the Insulation Area Type.
 */
export enum InsulationPresenceBase {
    "Absent" = "Absent",
    "Exists" = "Exists",
    "Other" = "Other",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Insurance Claim Type Definition: Specifies the type of insurance against which the claim is being made.
 */
export enum InsuranceClaimBase {
    "Hazard" = "Hazard",
    "MI" = "MI",
    "Other" = "Other"
}
;
/**
 * Term: Integrated Disclosure Cash To Close Item Type Definition: Identifies the type of cash to close item as specified in the Calculating Cash to Close section of the integrated disclosure document.
 */
export enum IntegratedDisclosureCashToCloseItemBase {
    "AdjustmentsAndOtherCredits" = "AdjustmentsAndOtherCredits",
    "CashToCloseTotal" = "CashToCloseTotal",
    "ClosingCostsFinanced" = "ClosingCostsFinanced",
    "ClosingCostsPaidBeforeClosing" = "ClosingCostsPaidBeforeClosing",
    "Deposit" = "Deposit",
    "DownPayment" = "DownPayment",
    "FundsForBorrower" = "FundsForBorrower",
    "FundsFromBorrower" = "FundsFromBorrower",
    "LenderCredits" = "LenderCredits",
    "LoanAmount" = "LoanAmount",
    "LoanCostsAndOtherCostsTotal" = "LoanCostsAndOtherCostsTotal",
    "SellerCredits" = "SellerCredits",
    "TotalClosingCosts" = "TotalClosingCosts",
    "TotalPayoffsAndPayments" = "TotalPayoffsAndPayments"
}
;
/**
 * Term: Integrated Disclosure Cash To Close Item Payment Type Definition: Identifies whether the Cash To Close Item Amount is due to or from the borrower.
 */
export enum IntegratedDisclosureCashToCloseItemPaymentBase {
    "FromBorrower" = "FromBorrower",
    "ToBorrower" = "ToBorrower"
}
;
/**
 * Term: Integrated Disclosure Document Type Definition: Specifies the type of integrated disclosure document.
 */
export enum IntegratedDisclosureDocumentBase {
    "ClosingDisclosure" = "ClosingDisclosure",
    "ClosingDisclosure:AlternateForm" = "ClosingDisclosure:AlternateForm",
    "ClosingDisclosure:BorrowerOnly" = "ClosingDisclosure:BorrowerOnly",
    "ClosingDisclosure:ModelForm" = "ClosingDisclosure:ModelForm",
    "ClosingDisclosure:SellerOnly" = "ClosingDisclosure:SellerOnly",
    "LoanEstimate" = "LoanEstimate",
    "Other" = "Other"
}
;
/**
 * Term: Integrated Disclosure Section Type Definition: A value from a MISMO prescribed list that represents the title or description of a primary section of an integrated disclosure document.
 */
export enum IntegratedDisclosureSectionBase {
    "DueFromBorrowerAtClosing" = "DueFromBorrowerAtClosing",
    "DueFromSellerAtClosing" = "DueFromSellerAtClosing",
    "DueToSellerAtClosing" = "DueToSellerAtClosing",
    "InitialEscrowPaymentAtClosing" = "InitialEscrowPaymentAtClosing",
    "OriginationCharges" = "OriginationCharges",
    "Other" = "Other",
    "OtherCosts" = "OtherCosts",
    "PaidAlreadyByOrOnBehalfOfBorrowerAtClosing" = "PaidAlreadyByOrOnBehalfOfBorrowerAtClosing",
    "PayoffsAndPayments" = "PayoffsAndPayments",
    "Prepaids" = "Prepaids",
    "ServicesBorrowerDidNotShopFor" = "ServicesBorrowerDidNotShopFor",
    "ServicesBorrowerDidShopFor" = "ServicesBorrowerDidShopFor",
    "ServicesYouCannotShopFor" = "ServicesYouCannotShopFor",
    "ServicesYouCanShopFor" = "ServicesYouCanShopFor",
    "TaxesAndOtherGovernmentFees" = "TaxesAndOtherGovernmentFees",
    "TotalClosingCosts" = "TotalClosingCosts",
    "TotalLoanCosts" = "TotalLoanCosts",
    "TotalOtherCosts" = "TotalOtherCosts"
}
;
/**
 * Term: Integrated Disclosure Subsection Type Definition: A value from a MISMO prescribed list that represents the title or description of a subsection of an integrated disclosure document.
 */
export enum IntegratedDisclosureSubsectionBase {
    "Adjustments" = "Adjustments",
    "AdjustmentsForItemsPaidBySellerInAdvance" = "AdjustmentsForItemsPaidBySellerInAdvance",
    "AdjustmentsForItemsUnpaidBySeller" = "AdjustmentsForItemsUnpaidBySeller",
    "ClosingCostsSubtotal" = "ClosingCostsSubtotal",
    "LenderCredits" = "LenderCredits",
    "LoanCostsSubtotal" = "LoanCostsSubtotal",
    "Other" = "Other",
    "OtherCostsSubtotal" = "OtherCostsSubtotal",
    "OtherCredits" = "OtherCredits",
    "TotalClosingCostsSellerOnly" = "TotalClosingCostsSellerOnly"
}
;
/**
 * Term: Integrated Disclosure Subsection Paid By Type Definition: The role of the party making the payment of the amount associated with the Integrated Disclosure Subsection Total Amount.
 */
export enum IntegratedDisclosureSubsectionPaidByBase {
    "Buyer" = "Buyer",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Integrated Disclosure Subsection Payment Timing Type Definition: Defines the point in time during the origination process when the integrated disclosure subsection payment was paid.
 */
export enum IntegratedDisclosureSubsectionPaymentTimingBase {
    "AtClosing" = "AtClosing",
    "BeforeClosing" = "BeforeClosing"
}
;
/**
 * Term: Intent To Occupy Type Definition: Borrower's answer to the question: Do you intend to occupy the property as your primary residence?
 */
export enum IntentToOccupyBase {
    "No" = "No",
    "Unknown" = "Unknown",
    "Yes" = "Yes"
}
;
/**
 * Term: Interest Accrual Type Definition: Describes the formula used to calculate interest accrued since the previous payment.
 */
export enum InterestAccrualBase {
    "AverageDailyInterestAccrual" = "AverageDailyInterestAccrual",
    "DailyInterestAccrual" = "DailyInterestAccrual"
}
;
/**
 * Term: Interest Calculation Type Definition: Defines the method used to calculate the interest on the loan.
 */
export enum InterestCalculationBase {
    "Compound" = "Compound",
    "Other" = "Other",
    "RuleOf78s" = "RuleOf78s",
    "Simple" = "Simple"
}
;
/**
 * Term: Interest Calculation Basis Type Definition: Defines the loan balance upon which the interest is calculated.
 */
export enum InterestCalculationBasisBase {
    "AverageBalance" = "AverageBalance",
    "DailyLoanBalance" = "DailyLoanBalance",
    "EndOfPeriod" = "EndOfPeriod",
    "MaximumBalance" = "MaximumBalance",
    "Other" = "Other"
}
;
/**
 * Term: Interest Calculation Basis Days In Period Type Definition: The length of the payment period used to calculate interest.
 */
export enum InterestCalculationBasisDaysInPeriodBase {
    "30Days" = "30Days",
    "DaysBetweenPayments" = "DaysBetweenPayments",
    "DaysInCalendarMonth" = "DaysInCalendarMonth",
    "Other" = "Other"
}
;
/**
 * Term: Interest Calculation Basis Days in Year Count Type Definition: The number of days in a year to be used for a loans interest calculation. Commonly used for Daily Simple Interest and other loans where interest due is calculated monthly.
 */
export enum InterestCalculationBasisDaysInYearCountBase {
    "360_" = "360",
    "365_" = "365",
    "365.25_" = "365.25",
    "365Or366" = "365Or366",
    "366_" = "366"
}
;
/**
 * Term: Interest Calculation Period Type Definition: Describes the length of the interest accrual period.
 */
export enum InterestCalculationPeriodBase {
    "Biweekly" = "Biweekly",
    "Day" = "Day",
    "Month" = "Month",
    "Quarter" = "Quarter",
    "Semimonthly" = "Semimonthly",
    "Week" = "Week",
    "Year" = "Year"
}
;
/**
 * Term: Interest Calculation Purpose Type Definition: Specifies the purpose of the interest calculation.
 */
export enum InterestCalculationPurposeBase {
    "Draw" = "Draw",
    "Other" = "Other",
    "Payoff" = "Payoff",
    "ServicerAdvance" = "ServicerAdvance",
    "Standard" = "Standard"
}
;
/**
 * Term: Interest Rate Adjustment Calculation Method Type Definition: Specifies a method employed to calculate the interest rate of the loan.
 */
export enum InterestRateAdjustmentCalculationMethodBase {
    "AddFixedPercentageToCurrentInterestRate" = "AddFixedPercentageToCurrentInterestRate",
    "AddFixedPercentageToOriginalInterestRate" = "AddFixedPercentageToOriginalInterestRate",
    "AddImpliedMarginToValueOfFinancialIndex" = "AddImpliedMarginToValueOfFinancialIndex",
    "AddIndexChangeToOriginalInterestRate" = "AddIndexChangeToOriginalInterestRate",
    "AddMarginToValueOfFinancialIndex" = "AddMarginToValueOfFinancialIndex",
    "Other" = "Other",
    "Renegotiated" = "Renegotiated"
}
;
/**
 * Term: Interest Rate Lifetime Adjustment Ceiling Type Definition: Describes if a lifetime ceiling exists for the specified plan and the method of calculating the ceiling. This field used in conjunction with the Maximum Increase Rate.
 */
export enum InterestRateLifetimeAdjustmentCeilingBase {
    "AbsoluteRequiredCeiling" = "AbsoluteRequiredCeiling",
    "FactorAddedToTheGreaterOfTheNetCommitmentYieldOrTheOriginalNoteRate" = "FactorAddedToTheGreaterOfTheNetCommitmentYieldOrTheOriginalNoteRate",
    "FactorAddedToTheNetCommitmentYield" = "FactorAddedToTheNetCommitmentYield",
    "FactorAddedToTheOriginalNoteRate" = "FactorAddedToTheOriginalNoteRate",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other"
}
;
/**
 * Term: Interest Rate Lifetime Adjustment Floor Type Definition: A value from a MISMO prescribed list that describes the method or basis used in calculating the lifetime floor interest rate, if a lifetime floor exists. This field is used in conjunction with the Maximum Decrease Rate.
 */
export enum InterestRateLifetimeAdjustmentFloorBase {
    "AbsoluteMinimumNetInterestRate" = "AbsoluteMinimumNetInterestRate",
    "FactorAddedToOriginalNoteRate" = "FactorAddedToOriginalNoteRate",
    "FloorIsMargin" = "FloorIsMargin",
    "InitialNoteRate" = "InitialNoteRate",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other"
}
;
/**
 * Term: Interest Rate Rounding Type Definition: Specifies how the interest rate is rounded when a new interest rate is calculated for an ARM change. The interest rate can be rounded Up, Down or to the Nearest Percent. This field is used in conjunction with Interest Rate Rounding Percent which indicates the percentage to which the rounding occurs.
Term: Pool Interest Rate Rounding Type Definition: Indicates how the interest rate is rounded when a new interest rate is calculated for a pool of loans.
 */
export enum InterestRateRoundingBase {
    "Down" = "Down",
    "Nearest" = "Nearest",
    "NoRounding" = "NoRounding",
    "Up" = "Up"
}
;
/**
 * Term: Investor Ownership Type Definition: Identifies the ownership status of the investor.
 */
export enum InvestorOwnershipBase {
    "Administered" = "Administered",
    "Participation" = "Participation",
    "Pending" = "Pending",
    "Whole" = "Whole"
}
;
/**
 * Term: Investor Program Name Type Definition: To identify loans originated for specific investor programs.
 */
export enum InvestorProgramNameBase {
    "Calpers" = "Calpers",
    "Other" = "Other",
    "PaymentPower" = "PaymentPower",
    "PrimeRatePlus" = "PrimeRatePlus",
    "SettleAmerica" = "SettleAmerica"
}
;
/**
 * Term: Investor Remittance Type Definition: This describes the contractual accounting method used to calculate the funds received by the Servicer from the borrower that are due to the investor.
 */
export enum InvestorRemittanceBase {
    "ActualInterestActualPrincipal" = "ActualInterestActualPrincipal",
    "Other" = "Other",
    "ScheduledInterestActualPrincipal" = "ScheduledInterestActualPrincipal",
    "ScheduledInterestScheduledPrincipal" = "ScheduledInterestScheduledPrincipal"
}
;
/**
 * Term: Investor Reporting Action Type Definition: The Reporting System status of the loan as reported to the investor or other interested party.
 */
export enum InvestorReportingActionBase {
    "Active" = "Active",
    "AssignedToFHAOrVA" = "AssignedToFHAOrVA",
    "ChargedOff" = "ChargedOff",
    "DeedInLieuLiquidated" = "DeedInLieuLiquidated",
    "ExerciseSkipPay" = "ExerciseSkipPay",
    "ForeclosureLiquidatedHeldForSale" = "ForeclosureLiquidatedHeldForSale",
    "ForeclosureLiquidatedPendingConveyance" = "ForeclosureLiquidatedPendingConveyance",
    "ForeclosureLiquidatedThirdPartySale" = "ForeclosureLiquidatedThirdPartySale",
    "ForeclosureSaleUnsuccessful" = "ForeclosureSaleUnsuccessful",
    "Inactive" = "Inactive",
    "LiquidatedHeldForSale" = "LiquidatedHeldForSale",
    "MICancellationAutomaticTermination" = "MICancellationAutomaticTermination",
    "MICancellationBasedOnCurrentPropertyValue" = "MICancellationBasedOnCurrentPropertyValue",
    "MICancellationBasedOnMandatoryTermination" = "MICancellationBasedOnMandatoryTermination",
    "MICancellationBasedOnOriginalPropertyValue" = "MICancellationBasedOnOriginalPropertyValue",
    "MIRescindedByInsurer" = "MIRescindedByInsurer",
    "NoServicerActionTaken" = "NoServicerActionTaken",
    "NoteSale" = "NoteSale",
    "Other" = "Other",
    "PaidInFullAtMaturity" = "PaidInFullAtMaturity",
    "PaidInFullPriorToMaturity" = "PaidInFullPriorToMaturity",
    "Payoff" = "Payoff",
    "PayoffShortSale" = "PayoffShortSale",
    "PrincipalBalanceCorrection" = "PrincipalBalanceCorrection",
    "REOSaleCompleted" = "REOSaleCompleted",
    "Replaced" = "Replaced",
    "Repurchase" = "Repurchase",
    "RepurchaseDueToARMConversionToFixedRate" = "RepurchaseDueToARMConversionToFixedRate",
    "RepurchaseDueToModifiedARM" = "RepurchaseDueToModifiedARM",
    "Supplemental" = "Supplemental",
    "TransferOfServicing" = "TransferOfServicing",
    "TransferToREO" = "TransferToREO"
}
;
/**
 * Term: Investor Reporting Additional Charge Assessed To Party Type Definition: The party that has responsibility for payment of the additional charge. An additional charge is a charge, an adjustment, a loss, a recovery or an advance associated with a loan that may be part of an activity or occur separately that is required to be reported to an investor.
 */
export enum InvestorReportingAdditionalChargeAssessedToPartyBase {
    "Borrower" = "Borrower",
    "Investor" = "Investor",
    "Other" = "Other",
    "Servicer" = "Servicer"
}
;
/**
 * Term: Investor Reporting Additional Charge Type Definition: A description of a charge, an adjustment, a loss, a recovery, or an advance associated with a loan that may be part of an activity or occur separately that is required to be reported to an investor. An additional charge is a charge, an adjustment, a loss, a recovery, or an advance associated with a loan that may be part of an activity or occur separately that is required to be reported to an investor.
 */
export enum InvestorReportingAdditionalChargeBase {
    "FeesCollected" = "FeesCollected",
    "LatePaymentCharge" = "LatePaymentCharge",
    "Other" = "Other",
    "PrepaymentPenalty" = "PrepaymentPenalty",
    "RealizedLossDueToForeclosedREOPropertyLiquidation" = "RealizedLossDueToForeclosedREOPropertyLiquidation",
    "RealizedLossDueToLoanModification" = "RealizedLossDueToLoanModification",
    "SkipPaymentCharge" = "SkipPaymentCharge"
}
;
/**
 * Term: Investor Reporting Method Type Definition: Specifies the reporting method required by the investor from the servicer.
 */
export enum InvestorReportingMethodBase {
    "ExceptionReporting" = "ExceptionReporting",
    "FullReporting" = "FullReporting"
}
;
/**
 * Term: Irrigation System Source Type Definition: A collection of values that specify the source of water for an irrigation system.
 */
export enum IrrigationSystemSourceBase {
    "CatchmentSystemFed" = "CatchmentSystemFed",
    "CisternFed" = "CisternFed",
    "CityWaterFed" = "CityWaterFed",
    "Other" = "Other",
    "ReclaimedWater" = "ReclaimedWater",
    "WellFed" = "WellFed"
}
;
/**
 * Term: IRS Document Type Definition: A value from a MISMO prescribed list that identifies the form type that is being requested from the Internal Revenue Service (IRS).
 */
export enum IRSDocumentBase {
    "IRS1040" = "IRS1040",
    "IRS1065" = "IRS1065",
    "IRS1098" = "IRS1098",
    "IRS1099" = "IRS1099",
    "IRS1120" = "IRS1120",
    "IRS1120H" = "IRS1120H",
    "IRS1120L" = "IRS1120L",
    "IRS1120S" = "IRS1120S",
    "IRS5498" = "IRS5498",
    "IRSW2" = "IRSW2",
    "Other" = "Other"
}
;
/**
 * Term: IRS Document Filing Position Type Definition: A value from a MISMO prescribed list that identifies the taxpayer's filing position (First or Second) on an Internal Revenue Service (IRS) Document.
 */
export enum IRSDocumentFilingPositionBase {
    "First" = "First",
    "Other" = "Other",
    "Second" = "Second"
}
;
/**
 * Term: Issue Type Definition: A value from a MISMO prescribed list that represents the type of issue raised or discovered by an event participant.
 */
export enum IssueBase {
    "AdditionalErrorIdentified" = "AdditionalErrorIdentified",
    "AssertionOfDissatisfaction" = "AssertionOfDissatisfaction",
    "AssertionOfError" = "AssertionOfError",
    "DebtCollectionRestrictionRequest" = "DebtCollectionRestrictionRequest",
    "InformationRequest" = "InformationRequest",
    "MaintenanceRequest" = "MaintenanceRequest",
    "Notification" = "Notification",
    "Other" = "Other"
}
;
/**
 * Term: Issue Follow Up Type Definition: A value from a MISMO prescribed list that represents the follow-up action required to resolve an event issue.
 */
export enum IssueFollowUpBase {
    "Conversation" = "Conversation",
    "ExtensionOfTimeRequest" = "ExtensionOfTimeRequest",
    "InterimActionUpdate" = "InterimActionUpdate",
    "Other" = "Other",
    "Research" = "Research",
    "WrittenInformationRequest" = "WrittenInformationRequest"
}
;
/**
 * Term: Issue Resolution Type Definition: A value from a MISMO prescribed list that represents how a recipient has responded to the initiator to close an event issue.
 */
export enum IssueResolutionBase {
    "ConfidentialProprietaryOrPrivileged" = "ConfidentialProprietaryOrPrivileged",
    "Duplicative" = "Duplicative",
    "ErrorCorrectionMade" = "ErrorCorrectionMade",
    "Irrelevant" = "Irrelevant",
    "NoErrorOccurred" = "NoErrorOccurred",
    "NotServicedLoan" = "NotServicedLoan",
    "Other" = "Other",
    "Overbroad" = "Overbroad",
    "ReferredToRegulatoryAgency" = "ReferredToRegulatoryAgency",
    "RequestedInformationProvided" = "RequestedInformationProvided",
    "UnauthorizedParty" = "UnauthorizedParty",
    "Untimely" = "Untimely"
}
;
/**
 * Term: Joint Asset Liability Reporting Type Definition: A value from a MISMO prescribed list that specifies how assets and liabilities are being reported on the loan application.
 */
export enum JointAssetLiabilityReportingBase {
    "Jointly" = "Jointly",
    "NotJointly" = "NotJointly"
}
;
/**
 * Term: Judgment Type Definition: A value from a MISMO prescribed list that represents the type of legal judgment that has been rendered in favor of one or more parties.
 */
export enum JudgmentBase {
    "Consent" = "Consent",
    "Default" = "Default",
    "ForeclosureBySale" = "ForeclosureBySale",
    "Other" = "Other",
    "Renewal" = "Renewal",
    "StrictForeclosure" = "StrictForeclosure",
    "SummaryJudgment" = "SummaryJudgment",
    "WritOfExecution" = "WritOfExecution"
}
;
/**
 * Term: Judgment Result Type Definition: The value from a MISMO prescribed list that represents whether a judgment is a result of an interim ruling or the final outcome of a litigation.
 */
export enum JudgmentResultBase {
    "Final" = "Final",
    "Interim" = "Interim"
}
;
/**
 * Term: Kitchen Equipment Type Definition: A value from a MISMO prescribed list that represents the equipment normally used for food preparation.
 */
export enum KitchenEquipmentBase {
    "Compactor" = "Compactor",
    "Cooktop" = "Cooktop",
    "Dishwasher" = "Dishwasher",
    "Disposal" = "Disposal",
    "DoubleOven" = "DoubleOven",
    "FanHood" = "FanHood",
    "Grill" = "Grill",
    "Microwave" = "Microwave",
    "Other" = "Other",
    "Range" = "Range",
    "RangeOven" = "RangeOven",
    "Refrigerator" = "Refrigerator",
    "SingleOven" = "SingleOven",
    "SolidSurfaceManmadeCountertop" = "SolidSurfaceManmadeCountertop",
    "SolidSurfaceNaturalCountertop" = "SolidSurfaceNaturalCountertop",
    "WasherDryer" = "WasherDryer",
    "WaterEfficientFaucet" = "WaterEfficientFaucet"
}
;
/**
 * Term: Landscape Lighting Power Source Type Definition: A collection of values that describe the source of power for a landscape lighting system.
 */
export enum LandscapeLightingPowerSourceBase {
    "Other" = "Other",
    "Solar" = "Solar",
    "TraditionalElectric" = "TraditionalElectric"
}
;
/**
 * Term: Landscaping Type Definition: A collection of values that describe materials or methods used in landscaping a property.
 */
export enum LandscapingBase {
    "HardScape" = "HardScape",
    "Natural" = "Natural",
    "Other" = "Other",
    "ProfessionalPlantings" = "ProfessionalPlantings",
    "XeriScape" = "XeriScape",
    "ZeroImpact" = "ZeroImpact"
}
;
/**
 * Term: Land Trust Type Definition: A value from a MISMO prescribed list that specifies the type of land trust associated with the title.
 */
export enum LandTrustBase {
    "CommunityLandTrust" = "CommunityLandTrust",
    "IllinoisLandTrust" = "IllinoisLandTrust",
    "LandTrust" = "LandTrust",
    "Other" = "Other"
}
;
/**
 * Term: Land Use Type Definition: Identifies the designation of land use by a governmental authority described by Land Used Description.
 */
export enum LandUseBase {
    "Agricultural" = "Agricultural",
    "Commercial" = "Commercial",
    "Income" = "Income",
    "Industrial" = "Industrial",
    "Other" = "Other",
    "PublicAndSemipublic" = "PublicAndSemipublic",
    "Recreational" = "Recreational",
    "Residential" = "Residential",
    "TransportationAndUtility" = "TransportationAndUtility",
    "Vacant" = "Vacant"
}
;
/**
 * Term: Late Charge Type Definition: A value from a MISMO prescribed list that represents the payment basis used in calculating the late charge amount.
 */
export enum LateChargeBase {
    "FlatDollarAmount" = "FlatDollarAmount",
    "NoLateCharges" = "NoLateCharges",
    "Other" = "Other",
    "PercentageOfDelinquentInterest" = "PercentageOfDelinquentInterest",
    "PercentageOfNetPayment" = "PercentageOfNetPayment",
    "PercentageOfPrincipalBalance" = "PercentageOfPrincipalBalance",
    "PercentageOfTotalPayment" = "PercentageOfTotalPayment",
    "PercentOfPrincipalAndInterest" = "PercentOfPrincipalAndInterest"
}
;
/**
 * Term: Legal Entity Type Definition: The description of the entity type of the party or organization.
 */
export enum LegalEntityBase {
    "Corporation" = "Corporation",
    "CorporationSole" = "CorporationSole",
    "Estate" = "Estate",
    "GovernmentEntity" = "GovernmentEntity",
    "JointVenture" = "JointVenture",
    "LimitedLiabilityCompany" = "LimitedLiabilityCompany",
    "LimitedPartnership" = "LimitedPartnership",
    "NonProfitCorporation" = "NonProfitCorporation",
    "Other" = "Other",
    "Partnership" = "Partnership",
    "SoleProprietorship" = "SoleProprietorship",
    "Trust" = "Trust"
}
;
/**
 * Term: Lending Limit Type Definition: Specifies the criteria, guidelines or calculation used to establish the Lending Limit Amount.
 */
export enum LendingLimitBase {
    "Calculated" = "Calculated",
    "County" = "County",
    "Investor" = "Investor",
    "Other" = "Other"
}
;
/**
 * Term: Level Type Definition: A value from a MISMO prescribed list that identifies a specific above grade or below grade level in the living unit.
 */
export enum LevelBase {
    "Attic" = "Attic",
    "Basement" = "Basement",
    "BelowGradeFive" = "BelowGradeFive",
    "BelowGradeFour" = "BelowGradeFour",
    "BelowGradeOne" = "BelowGradeOne",
    "BelowGradeThree" = "BelowGradeThree",
    "BelowGradeTwo" = "BelowGradeTwo",
    "LevelEight" = "LevelEight",
    "LevelFive" = "LevelFive",
    "LevelFour" = "LevelFour",
    "LevelNine" = "LevelNine",
    "LevelOne" = "LevelOne",
    "LevelSeven" = "LevelSeven",
    "LevelSix" = "LevelSix",
    "LevelTen" = "LevelTen",
    "LevelThree" = "LevelThree",
    "LevelTwo" = "LevelTwo",
    "Other" = "Other"
}
;
/**
 * Term: Liability Type Definition: A value from a MISMO prescribed list that represents a financial obligation of an individual or entity. In a mortgage transaction, these are typically related to one or more borrowers.
 */
export enum LiabilityBase {
    "BorrowerEstimatedTotalMonthlyLiabilityPayment" = "BorrowerEstimatedTotalMonthlyLiabilityPayment",
    "CollectionsJudgmentsAndLiens" = "CollectionsJudgmentsAndLiens",
    "DeferredStudentLoan" = "DeferredStudentLoan",
    "DelinquentTaxes" = "DelinquentTaxes",
    "FirstPositionMortgageLien" = "FirstPositionMortgageLien",
    "Garnishments" = "Garnishments",
    "HELOC" = "HELOC",
    "HomeownersAssociationLien" = "HomeownersAssociationLien",
    "Installment" = "Installment",
    "LeasePayment" = "LeasePayment",
    "MonetaryJudgment" = "MonetaryJudgment",
    "MortgageLoan" = "MortgageLoan",
    "Open30DayChargeAccount" = "Open30DayChargeAccount",
    "Other" = "Other",
    "PersonalLoan" = "PersonalLoan",
    "Revolving" = "Revolving",
    "SecondPositionMortgageLien" = "SecondPositionMortgageLien",
    "Taxes" = "Taxes",
    "TaxLien" = "TaxLien",
    "ThirdPositionMortgageLien" = "ThirdPositionMortgageLien",
    "UnsecuredHomeImprovementLoanInstallment" = "UnsecuredHomeImprovementLoanInstallment",
    "UnsecuredHomeImprovementLoanRevolving" = "UnsecuredHomeImprovementLoanRevolving"
}
;
/**
 * Term: License Authority Level Type Definition: Level of authority of the license issuer.
 */
export enum LicenseAuthorityLevelBase {
    "Other" = "Other",
    "Private" = "Private",
    "PublicFederal" = "PublicFederal",
    "PublicLocal" = "PublicLocal",
    "PublicState" = "PublicState"
}
;
/**
 * Term: Lien Holder Type Definition: Describes the holder of the lien.
 */
export enum LienHolderBase {
    "FNM" = "FNM",
    "FRE" = "FRE",
    "GovernmentAgency" = "GovernmentAgency",
    "Lender" = "Lender",
    "NonProfitOrganization" = "NonProfitOrganization",
    "Other" = "Other",
    "PropertySeller" = "PropertySeller",
    "StateOrLocalHousingFinanceAgency" = "StateOrLocalHousingFinanceAgency",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Lien Priority Exception Type Definition: Describes the lien priority for a piece of collateral where multiple pieces of collateral secure a single loan.
Term: Lien Priority Type Definition: A value from a MISMO prescribed list that specifies the priority of the lien against the property.
 */
export enum LienPriorityBase {
    "FirstLien" = "FirstLien",
    "FourthLien" = "FourthLien",
    "Other" = "Other",
    "SecondLien" = "SecondLien",
    "ThirdLien" = "ThirdLien"
}
;
/**
 * Term: Lien Recommendation Type Definition: Specifies the recommendation to the investor from the servicer on loan disposition of the senior lien when the subject loan is a subordinate lien.
 */
export enum LienRecommendationBase {
    "BuyOut" = "BuyOut",
    "ChargeOffSubordinate" = "ChargeOffSubordinate",
    "NoRecommendation" = "NoRecommendation",
    "Other" = "Other",
    "Reinstate" = "Reinstate"
}
;
/**
 *
 */
export enum LinearUnitOfMeasureBase {
    "Feet" = "Feet",
    "Kilometers" = "Kilometers",
    "Meters" = "Meters",
    "Miles" = "Miles",
    "Yards" = "Yards"
}
;
/**
 * Term: Line Of Credit Pro Rata Share Selection Method Type Definition: A value from a MISMO prescribed list that represents the pro rata share line of credit amount that was used in determining the final opinion of value when one or more blanket financing liens is a line of credit.
 */
export enum LineOfCreditProRataShareSelectionMethodBase {
    "Drawn" = "Drawn",
    "Maximum" = "Maximum"
}
;
/**
 * Term: Listing Type Definition: A value from a MISMO prescribed list that represents how the property is being listed.
 */
export enum ListingBase {
    "Auction" = "Auction",
    "ForSaleByOwner" = "ForSaleByOwner",
    "MLS" = "MLS",
    "Other" = "Other"
}
;
/**
 * Term: Listing Status Type Definition: The disposition of the listing.
 */
export enum ListingStatusBase {
    "Active" = "Active",
    "Expired" = "Expired",
    "Leased" = "Leased",
    "LeasedOrRented" = "LeasedOrRented",
    "OffMarket" = "OffMarket",
    "Other" = "Other",
    "Pending" = "Pending",
    "SettledSale" = "SettledSale",
    "Withdrawn" = "Withdrawn"
}
;
/**
 * Term: Litigation Type Definition: A value from a MISMO prescribed list that represents the type of legal action that has been filed or threatened by one or more parties that may impact the servicer, investor, borrower or underlying obligation.
 */
export enum LitigationBase {
    "Bankruptcy" = "Bankruptcy",
    "Contract" = "Contract",
    "Foreclosure" = "Foreclosure",
    "Other" = "Other",
    "Probate" = "Probate",
    "Tort" = "Tort"
}
;
/**
 * Term: Litigation End Reason Type Definition: A value from a MISMO prescribed list that represents the reason the judicial process has ended.
 */
export enum LitigationEndReasonBase {
    "Dismissal" = "Dismissal",
    "FinalJudgment" = "FinalJudgment",
    "Other" = "Other",
    "Settlement" = "Settlement"
}
;
/**
 * Term: Litigation Status Type Definition: A value from a MISMO prescribed list that represents the current procedural state of the reported litigation.
 */
export enum LitigationStatusBase {
    "Filed" = "Filed",
    "Other" = "Other",
    "Resolved" = "Resolved",
    "Threatened" = "Threatened"
}
;
/**
 * Term: Loan Amortization Period Type Definition: The duration of time used to define the period over which the loan is amortized.
 */
export enum LoanAmortizationPeriodBase {
    "Biweekly" = "Biweekly",
    "Day" = "Day",
    "Month" = "Month",
    "Quarter" = "Quarter",
    "Semimonthly" = "Semimonthly",
    "Week" = "Week",
    "Year" = "Year"
}
;
/**
 * Term: Loan Buyup Buydown Type Definition: Specifies the type of buyup or buydown an eligible Seller has elected to exercise for a specific mortgage.
 */
export enum LoanBuyupBuydownBase {
    "Buydown" = "Buydown",
    "Buyup" = "Buyup",
    "BuyupBuydownDoesNotApply" = "BuyupBuydownDoesNotApply",
    "Other" = "Other"
}
;
/**
 * Term: Loan Closing Status Type Definition: Defines whether the loan is a closed loan purchase or a table funded loan.
 */
export enum LoanClosingStatusBase {
    "Closed" = "Closed",
    "TableFunded" = "TableFunded"
}
;
/**
 * Term: Loan Consideration Disclosure Statement Type Definition: A value from a prescribed list that specifies the type of statement required to be disclosed to, or considered by, the borrower of certain information pertaining to loan program features, creditor policies, and requirements in or arising from the legal obligation or loan.
 */
export enum LoanConsiderationDisclosureStatementBase {
    "Appraisal" = "Appraisal",
    "Assumption" = "Assumption",
    "Construction" = "Construction",
    "ContractDetails" = "ContractDetails",
    "DemandFeature" = "DemandFeature",
    "EscrowAccountCurrent" = "EscrowAccountCurrent",
    "EscrowAccountFuture" = "EscrowAccountFuture",
    "HomeownersInsurance" = "HomeownersInsurance",
    "LatePayment" = "LatePayment",
    "LiabilityAfterForeclosure" = "LiabilityAfterForeclosure",
    "LoanAcceptance" = "LoanAcceptance",
    "NegativeAmortization" = "NegativeAmortization",
    "Other" = "Other",
    "PartialPayment" = "PartialPayment",
    "Refinance" = "Refinance",
    "SecurityInterest" = "SecurityInterest",
    "Servicing" = "Servicing",
    "TaxDeductions" = "TaxDeductions"
}
;
/**
 * Term: Loan Credit History Age Type Definition: Describes the period of time prior to the note date within which the credit history was obtained.
 */
export enum LoanCreditHistoryAgeBase {
    "LessThan180Days" = "LessThan180Days",
    "LessThan270Days" = "LessThan270Days",
    "LessThan90Days" = "LessThan90Days",
    "Other" = "Other"
}
;
/**
 * Term: Loan Defaulted Reporting Frequency Type Definition: The frequency that the servicer must report for loans that are in default.
 */
export enum LoanDefaultedReportingFrequencyBase {
    "Annually" = "Annually",
    "Biweekly" = "Biweekly",
    "Daily" = "Daily",
    "Monthly" = "Monthly",
    "Quarterly" = "Quarterly",
    "Semiannually" = "Semiannually",
    "Semimonthly" = "Semimonthly",
    "Weekly" = "Weekly"
}
;
/**
 * Term: Loan Default Loss Party Type Definition: Indicates the party that bears the default loss for the loan.
 */
export enum LoanDefaultLossPartyBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "LoanSeller" = "LoanSeller",
    "MortgageInsuranceCompany" = "MortgageInsuranceCompany",
    "Servicer" = "Servicer",
    "Shared" = "Shared"
}
;
/**
 * Term: Loan Delinquency Event Type Definition: Used to report an event on a delinquent loan.
 */
export enum LoanDelinquencyEventBase {
    "BorrowerEmailSent" = "BorrowerEmailSent",
    "BorrowerFaceToFaceInterviewConducted" = "BorrowerFaceToFaceInterviewConducted",
    "BorrowerFormLetterSent" = "BorrowerFormLetterSent",
    "BreachLetterExpires" = "BreachLetterExpires",
    "BreachLetterSent" = "BreachLetterSent",
    "BrokerPriceOpinionOrAppraisalObtained" = "BrokerPriceOpinionOrAppraisalObtained",
    "BrokerPriceOpinionOrdered" = "BrokerPriceOpinionOrdered",
    "ChapterElevenBankruptcyPlanConfirmed" = "ChapterElevenBankruptcyPlanConfirmed",
    "ChapterElevenCourtClearanceObtained" = "ChapterElevenCourtClearanceObtained",
    "ChapterElevenPropertySurrendered" = "ChapterElevenPropertySurrendered",
    "ChapterSevenBankruptcyAssetsPursued" = "ChapterSevenBankruptcyAssetsPursued",
    "ChapterSevenCourtClearanceObtained" = "ChapterSevenCourtClearanceObtained",
    "ChapterSevenPropertySurrendered" = "ChapterSevenPropertySurrendered",
    "ChapterThirteenBankruptcyPlanConfirmed" = "ChapterThirteenBankruptcyPlanConfirmed",
    "ChapterThirteenCourtClearanceObtained" = "ChapterThirteenCourtClearanceObtained",
    "ChapterThirteenPropertySurrendered" = "ChapterThirteenPropertySurrendered",
    "ChapterTwelveBankruptcyPlanConfirmed" = "ChapterTwelveBankruptcyPlanConfirmed",
    "ChapterTwelveCourtClearanceObtained" = "ChapterTwelveCourtClearanceObtained",
    "ChapterTwelvePropertySurrendered" = "ChapterTwelvePropertySurrendered",
    "DeedInLieu" = "DeedInLieu",
    "EligibleForHAMP" = "EligibleForHAMP",
    "FinalJudgmentRecorded" = "FinalJudgmentRecorded",
    "FirstLegalAction" = "FirstLegalAction",
    "FirstRightPartyContact" = "FirstRightPartyContact",
    "ForbearanceBegin" = "ForbearanceBegin",
    "ForbearanceEnd" = "ForbearanceEnd",
    "ForeclosureOnHold" = "ForeclosureOnHold",
    "ForeclosureRestarted" = "ForeclosureRestarted",
    "ForeclosureSaleCancelled" = "ForeclosureSaleCancelled",
    "ForeclosureSaleConfirmed" = "ForeclosureSaleConfirmed",
    "ForeclosureSaleContinued" = "ForeclosureSaleContinued",
    "ForeclosureSaleHeld" = "ForeclosureSaleHeld",
    "ForeclosureSaleRescinded" = "ForeclosureSaleRescinded",
    "ForeclosureSaleScheduled" = "ForeclosureSaleScheduled",
    "FullReinstatement" = "FullReinstatement",
    "HAMPBorrowerResponsePackageEvaluated" = "HAMPBorrowerResponsePackageEvaluated",
    "HAMPDeclinedByBorrower" = "HAMPDeclinedByBorrower",
    "HAMPInReview" = "HAMPInReview",
    "HAMPModificationAgreementReceived" = "HAMPModificationAgreementReceived",
    "HAMPModificationAgreementSent" = "HAMPModificationAgreementSent",
    "HAMPStipulationDocumentsReceived" = "HAMPStipulationDocumentsReceived",
    "HardshipAffidavitReceived" = "HardshipAffidavitReceived",
    "IneligibleForModification" = "IneligibleForModification",
    "IneligibleForShortSale" = "IneligibleForShortSale",
    "InvestorREONotificationSent" = "InvestorREONotificationSent",
    "LastOutboundCallAttemptToBorrower" = "LastOutboundCallAttemptToBorrower",
    "LastRightPartyContact" = "LastRightPartyContact",
    "LastSkipTraceAttempt" = "LastSkipTraceAttempt",
    "ModificationInReview" = "ModificationInReview",
    "ModificationNotificationDenied" = "ModificationNotificationDenied",
    "ModificationTrialBegin" = "ModificationTrialBegin",
    "ModificationTrialEnd" = "ModificationTrialEnd",
    "NoActivity" = "NoActivity",
    "Other" = "Other",
    "PartialReinstatement" = "PartialReinstatement",
    "PositiveSolicitationResponse" = "PositiveSolicitationResponse",
    "PromiseToPayBroken" = "PromiseToPayBroken",
    "PromiseToPayKept" = "PromiseToPayKept",
    "PromiseToPayMade" = "PromiseToPayMade",
    "PropertyIsListedForSale" = "PropertyIsListedForSale",
    "ReinitiateForeclosure" = "ReinitiateForeclosure",
    "REO" = "REO",
    "RepaymentBegin" = "RepaymentBegin",
    "RepaymentEnd" = "RepaymentEnd",
    "RepaymentPlanFirstPlanPaymentMade" = "RepaymentPlanFirstPlanPaymentMade",
    "RepaymentPlanInReview" = "RepaymentPlanInReview",
    "RightPartyContactNextContactScheduled" = "RightPartyContactNextContactScheduled",
    "RightPartyContactNoAction" = "RightPartyContactNoAction",
    "ServicerSinglePointOfContactAssigned" = "ServicerSinglePointOfContactAssigned",
    "ShortSaleAgreementSigned" = "ShortSaleAgreementSigned",
    "ShortSaleCompleted" = "ShortSaleCompleted",
    "ShortSaleContractReceived" = "ShortSaleContractReceived",
    "ShortSaleInReview" = "ShortSaleInReview",
    "SkipTraceInitiated" = "SkipTraceInitiated",
    "SkipTraceSuccessful" = "SkipTraceSuccessful",
    "SolicitationLetterSent" = "SolicitationLetterSent",
    "ThirdPartySale" = "ThirdPartySale",
    "TitleClaimResolutionPursed" = "TitleClaimResolutionPursed",
    "UnsuccessfulRightPartyContactPhoneContactAttempt" = "UnsuccessfulRightPartyContactPhoneContactAttempt",
    "UpdatedBorrowerFinancialsReceived" = "UpdatedBorrowerFinancialsReceived",
    "WorkoutEvaluationComplete" = "WorkoutEvaluationComplete",
    "WorkoutInReview" = "WorkoutInReview",
    "WorkoutPackageCompleted" = "WorkoutPackageCompleted"
}
;
/**
 * Term: Loan Delinquency Reason Type Definition: The reason why the Borrower has become delinquent on the loan.
 */
export enum LoanDelinquencyReasonBase {
    "AbandonmentOfProperty" = "AbandonmentOfProperty",
    "BusinessFailure" = "BusinessFailure",
    "CasualtyLoss" = "CasualtyLoss",
    "CurtailmentOfIncome" = "CurtailmentOfIncome",
    "DeathOfMortgagorFamilyMember" = "DeathOfMortgagorFamilyMember",
    "DeathOfPrincipalMortgagor" = "DeathOfPrincipalMortgagor",
    "Disaster" = "Disaster",
    "DistantEmploymentTransfer" = "DistantEmploymentTransfer",
    "EnergyEnvironmentCost" = "EnergyEnvironmentCost",
    "ExcessiveObligations" = "ExcessiveObligations",
    "Fraud" = "Fraud",
    "IllnessOfMortgagorFamilyMember" = "IllnessOfMortgagorFamilyMember",
    "IllnessOfPrincipalMortgagor" = "IllnessOfPrincipalMortgagor",
    "InabilityToRentProperty" = "InabilityToRentProperty",
    "InabilityToSellProperty" = "InabilityToSellProperty",
    "Incarceration" = "Incarceration",
    "MaritalDifficulties" = "MaritalDifficulties",
    "MilitaryService" = "MilitaryService",
    "Other" = "Other",
    "PaymentAdjustment" = "PaymentAdjustment",
    "PaymentDispute" = "PaymentDispute",
    "PropertyProblem" = "PropertyProblem",
    "SeparationOfBorrowersUnrelatedToMarriage" = "SeparationOfBorrowersUnrelatedToMarriage",
    "ServicingProblems" = "ServicingProblems",
    "ThirdPartyOccupantFiledBankruptcy" = "ThirdPartyOccupantFiledBankruptcy",
    "TransferOfOwnershipPending" = "TransferOfOwnershipPending",
    "UnableToContactBorrower" = "UnableToContactBorrower",
    "Underemployment" = "Underemployment",
    "Unemployment" = "Unemployment"
}
;
/**
 * Term: Loan Delinquency Status Type Definition: Loan Delinquency Status Type is used to report the status of a delinquent loan (i.e., is the loan in delinquency, foreclosure, bankruptcy, or some other status).
 */
export enum LoanDelinquencyStatusBase {
    "AssignmentPursued" = "AssignmentPursued",
    "Assumption" = "Assumption",
    "ChapterElevenBankruptcy" = "ChapterElevenBankruptcy",
    "ChapterSevenBankruptcy" = "ChapterSevenBankruptcy",
    "ChapterThirteenBankruptcy" = "ChapterThirteenBankruptcy",
    "ChapterTwelveBankruptcy" = "ChapterTwelveBankruptcy",
    "ChargeOffPursued" = "ChargeOffPursued",
    "ContestedForeclosure" = "ContestedForeclosure",
    "Current" = "Current",
    "DelinquentNoAction" = "DelinquentNoAction",
    "DrugSeizure" = "DrugSeizure",
    "Forbearance" = "Forbearance",
    "Foreclosure" = "Foreclosure",
    "GovernmentSeizure" = "GovernmentSeizure",
    "MediationReferral" = "MediationReferral",
    "MilitaryIndulgence" = "MilitaryIndulgence",
    "Modification" = "Modification",
    "Other" = "Other",
    "PreforeclosureSalePlanned" = "PreforeclosureSalePlanned",
    "Probate" = "Probate",
    "Refinance" = "Refinance",
    "RepaymentPlan" = "RepaymentPlan",
    "SecondLienConsiderations" = "SecondLienConsiderations",
    "ShortSalePlanning" = "ShortSalePlanning",
    "TrialModificationActive" = "TrialModificationActive",
    "VeteransAffairsBuydown" = "VeteransAffairsBuydown",
    "VeteransAffairsNoBids" = "VeteransAffairsNoBids",
    "VeteransAffairsRefundPursued" = "VeteransAffairsRefundPursued",
    "Workout" = "Workout"
}
;
/**
 * Term: Loan Identifier Type Definition: A value from a MISMO prescribed list that specifies the type of loan identifier.
 */
export enum LoanIdentifierBase {
    "AgencyCase" = "AgencyCase",
    "InvestorCommitment" = "InvestorCommitment",
    "InvestorContract" = "InvestorContract",
    "InvestorLoan" = "InvestorLoan",
    "InvestorWorkoutCase" = "InvestorWorkoutCase",
    "LenderCase" = "LenderCase",
    "LenderLoan" = "LenderLoan",
    "LoanPriceQuote" = "LoanPriceQuote",
    "MERS_MIN" = "MERS_MIN",
    "MIRateQuote" = "MIRateQuote",
    "NewServicerLoan" = "NewServicerLoan",
    "Other" = "Other",
    "PoolIssuerLoan" = "PoolIssuerLoan",
    "PriceResponse" = "PriceResponse",
    "SellerLoan" = "SellerLoan",
    "ServicerLoan" = "ServicerLoan",
    "ServicerWorkoutCase" = "ServicerWorkoutCase",
    "SubservicerLoan" = "SubservicerLoan",
    "UniversalLoan" = "UniversalLoan",
    "WholesaleLenderLoan" = "WholesaleLenderLoan"
}
;
/**
 * Term: Loan Imminent Default Source Type Definition: The source of the information that the loan is in a state of imminent default.
 */
export enum LoanImminentDefaultSourceBase {
    "InvestorModel" = "InvestorModel",
    "Other" = "Other",
    "ServicerEvaluation" = "ServicerEvaluation"
}
;
/**
 * Term: Loan Level Credit Score Selection Method Type Definition: Specifies the method used to select the Loan Credit Score across all borrowers.
 */
export enum LoanLevelCreditScoreSelectionMethodBase {
    "AverageThenAverage" = "AverageThenAverage",
    "MiddleOrLowerThenAverage" = "MiddleOrLowerThenAverage",
    "MiddleOrLowerThenLowest" = "MiddleOrLowerThenLowest",
    "Other" = "Other"
}
;
/**
 * Term: Loan Limit Category Type Definition: A value from a MISMO prescribed list that represents a category of lending limits that are particular to a type of loan.
 */
export enum LoanLimitCategoryBase {
    "Conventional" = "Conventional",
    "FHA" = "FHA",
    "Forward" = "Forward",
    "HECM" = "HECM",
    "Other" = "Other"
}
;
/**
 * Term: Loan Margin Calculation Method Type Definition: Describes how to calculate the margin on the loan.
 */
export enum LoanMarginCalculationMethodBase {
    "BasedOnProduct" = "BasedOnProduct",
    "Constant" = "Constant"
}
;
/**
 * Term: Loan Maturity Period Type Definition: The unit of time used to define the period over which the loan matures. Used in conjunction with Loan Maturity Period Count.
 */
export enum LoanMaturityPeriodBase {
    "Biweekly" = "Biweekly",
    "Day" = "Day",
    "Month" = "Month",
    "Quarter" = "Quarter",
    "Semimonthly" = "Semimonthly",
    "Week" = "Week",
    "Year" = "Year"
}
;
/**
 * Term: Loan Modification Action Type Definition: A value from a MISMO prescribed list that identifies the modification action that resulted in a change or changes to the loan note terms.
 */
export enum LoanModificationActionBase {
    "AdjustableRateConversionToFixedRate" = "AdjustableRateConversionToFixedRate",
    "AdjustableRateIndexReplacement" = "AdjustableRateIndexReplacement",
    "BorrowerChangeDueToDeath" = "BorrowerChangeDueToDeath",
    "BorrowerChangeDueToMarriage" = "BorrowerChangeDueToMarriage",
    "BorrowerChangeDueToPropertyTransfer" = "BorrowerChangeDueToPropertyTransfer",
    "BorrowerDelinquencyWorkout" = "BorrowerDelinquencyWorkout",
    "Capitalization" = "Capitalization",
    "ChangeOfPaymentFrequency" = "ChangeOfPaymentFrequency",
    "ConsolidationAndExtensionRefinance" = "ConsolidationAndExtensionRefinance",
    "ConstructionToPermanentFinancing" = "ConstructionToPermanentFinancing",
    "ForgivenInterest" = "ForgivenInterest",
    "HAMP" = "HAMP",
    "LenderPortfolioManagement" = "LenderPortfolioManagement",
    "NoteCorrection" = "NoteCorrection",
    "Other" = "Other",
    "PrincipalForgiveness" = "PrincipalForgiveness",
    "Restructure" = "Restructure",
    "UnscheduledPaymentRecast" = "UnscheduledPaymentRecast"
}
;
/**
 * Term: Loan Modification Type Definition: A value from a MISMO prescribed list that identifies the note term(s) that changed as a result of a loan modification. More than one term could change as the result of one loan modification.
 */
export enum LoanModificationBase {
    "AmortizationMethod" = "AmortizationMethod",
    "InterestRate" = "InterestRate",
    "MaturityDate" = "MaturityDate",
    "Other" = "Other",
    "PaymentAmount" = "PaymentAmount",
    "PaymentFrequency" = "PaymentFrequency",
    "PrincipalAmount" = "PrincipalAmount"
}
;
/**
 * Term: Loan Negative Amortization Resolution Type Definition: Denotes the method of resolving a loan that has reached the negative amortization limit percent.
 */
export enum LoanNegativeAmortizationResolutionBase {
    "NoMoreNegativeAmortizationAllowed" = "NoMoreNegativeAmortizationAllowed",
    "Other" = "Other",
    "PaymentRecastToFullyAmortizingTermRemainsTheSame" = "PaymentRecastToFullyAmortizingTermRemainsTheSame",
    "PayoffDifference" = "PayoffDifference",
    "TermExtendedAndPaymentRecastToFullyAmortizing" = "TermExtendedAndPaymentRecastToFullyAmortizing",
    "TermExtendedPaymentRemainsTheSame" = "TermExtendedPaymentRemainsTheSame"
}
;
/**
 * Term: Loan Originator Type Definition: A value from a MISMO defined list that specifies the type of party that originated the loan.
 */
export enum LoanOriginatorBase {
    "CorrespondentLender" = "CorrespondentLender",
    "MortgageBroker" = "MortgageBroker",
    "Other" = "Other",
    "RetailLender" = "RetailLender"
}
;
/**
 * Term: Loan Price Line Item Type Definition: Denotes a type of fee, price adjustment, or other charge that is provided as detail information with a price quote.
 */
export enum LoanPriceLineItemBase {
    "AlternatePropertyValuation" = "AlternatePropertyValuation",
    "BalloonLoan" = "BalloonLoan",
    "CashOutRefinance" = "CashOutRefinance",
    "HighCreditRisk" = "HighCreditRisk",
    "HighLTVLoan" = "HighLTVLoan",
    "InsufficientFloodInsurance" = "InsufficientFloodInsurance",
    "InterestRateDifferential" = "InterestRateDifferential",
    "InvestmentProperty" = "InvestmentProperty",
    "LoanWithSubordinateFinancing" = "LoanWithSubordinateFinancing",
    "LockPeriod" = "LockPeriod",
    "MarginDifferential" = "MarginDifferential",
    "ModifiableLoan" = "ModifiableLoan",
    "MultipleDwellingUnitProperty" = "MultipleDwellingUnitProperty",
    "Other" = "Other",
    "ReducedDocumentation" = "ReducedDocumentation",
    "SeasonedLoan" = "SeasonedLoan",
    "SecondLien" = "SecondLien",
    "ServiceReleasePremium" = "ServiceReleasePremium",
    "StreamlinedOrigination" = "StreamlinedOrigination",
    "TexasEquityRefinance" = "TexasEquityRefinance",
    "VeryHighLTVLoan" = "VeryHighLTVLoan"
}
;
/**
 * Term: Loan Price Percent Format Type Definition: Describes the format of the price as being relative to par (0-Base) or absolute (100-base).
 */
export enum LoanPricePercentFormatBase {
    "0Base" = "0Base",
    "100Base" = "100Base"
}
;
/**
 * Term: Loan Price Quote Type Definition: The supply chain of loans, both before and after a loan closing involves funds to purchase the asset and expected or real income from the sale of the asset. In the supply chain one organizations sale price is the purchase price of another organization.
 */
export enum LoanPriceQuoteBase {
    "BuySide" = "BuySide",
    "Other" = "Other",
    "SellSide" = "SellSide"
}
;
/**
 * Term: Loan Product Status Type Definition: The status of the particular loan product.
 */
export enum LoanProductStatusBase {
    "Available" = "Available",
    "Eligible" = "Eligible",
    "Ineligible" = "Ineligible",
    "Offered" = "Offered",
    "Requested" = "Requested",
    "Selected" = "Selected"
}
;
/**
 * Term: Loan Purpose Type Definition: Specifies the purpose for which the loan proceeds will be used.
 */
export enum LoanPurposeBase {
    "MortgageModification" = "MortgageModification",
    "Other" = "Other",
    "Purchase" = "Purchase",
    "Refinance" = "Refinance",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Loan Repayment Type Definition: Specifies whether the loan payment schedule has been calculated to fully repay the loan over the mortgage term.
 */
export enum LoanRepaymentBase {
    "ConstantPrincipal" = "ConstantPrincipal",
    "Other" = "Other",
    "PrincipalPaymentOption" = "PrincipalPaymentOption",
    "ScheduledAmortization" = "ScheduledAmortization"
}
;
/**
 *
 */
export enum LoanRoleBase {
    "HistoricalLoan" = "HistoricalLoan",
    "RelatedLoan" = "RelatedLoan",
    "SubjectLoan" = "SubjectLoan"
}
;
/**
 * Term: Loan Secured By Type Definition: Specifies the type of collateral securing the loan.
 */
export enum LoanSecuredByBase {
    "Other" = "Other",
    "SubjectProperty" = "SubjectProperty"
}
;
/**
 * Term: Loan State Type Definition: A value from a MISMO prescribed list that identifies the state in time for the information associated with this occurrence of LOAN.
 */
export enum LoanStateBase {
    "AtAssumption" = "AtAssumption",
    "AtBankruptcyFiling" = "AtBankruptcyFiling",
    "AtClosing" = "AtClosing",
    "AtConstruction" = "AtConstruction",
    "AtConversion" = "AtConversion",
    "AtEstimate" = "AtEstimate",
    "AtModification" = "AtModification",
    "AtRelief" = "AtRelief",
    "AtReportingCycleBeginning" = "AtReportingCycleBeginning",
    "AtRepurchase" = "AtRepurchase",
    "AtReset" = "AtReset",
    "AtSecurityIssuance" = "AtSecurityIssuance",
    "AtTransfer" = "AtTransfer",
    "AtTrial" = "AtTrial",
    "AtUnderwriting" = "AtUnderwriting",
    "Current" = "Current"
}
;
/**
 * Term: Loan Underwriting Guideline Trigger Type Definition: A value from a MISMO prescribed list that specifies the date that must be on or after the loan underwriting guideline effective date.
 */
export enum LoanUnderwritingGuidelineTriggerBase {
    "ApplicationReceivedDate" = "ApplicationReceivedDate",
    "LockDateTime" = "LockDateTime",
    "NoteDate" = "NoteDate",
    "Other" = "Other"
}
;
/**
 * Term: Loan Underwriting Submitter Type Definition: Specifies the type of entity who submitted the loan for underwriting.
 */
export enum LoanUnderwritingSubmitterBase {
    "Broker" = "Broker",
    "Correspondent" = "Correspondent",
    "LenderOtherThanSeller" = "LenderOtherThanSeller",
    "Other" = "Other",
    "Seller" = "Seller"
}
;
/**
 * Term: Location Type Definition: The type of location influences associated with the property.
 */
export enum LocationBase {
    "AdjacentToPark" = "AdjacentToPark",
    "AdjacentToPowerLines" = "AdjacentToPowerLines",
    "BusyRoad" = "BusyRoad",
    "Commercial" = "Commercial",
    "GolfCourse" = "GolfCourse",
    "Industrial" = "Industrial",
    "Landfill" = "Landfill",
    "Other" = "Other",
    "PublicTransportation" = "PublicTransportation",
    "Residential" = "Residential",
    "WaterFront" = "WaterFront"
}
;
/**
 * Term: Lock Status Type Definition: The state of the loan price and interest rate lock that is established between a borrower and a lender or between a lender and an investor.
 */
export enum LockStatusBase {
    "CanceledOrWithdrawn" = "CanceledOrWithdrawn",
    "Expired" = "Expired",
    "Locked" = "Locked",
    "ModificationRequested" = "ModificationRequested",
    "Modified" = "Modified",
    "None" = "None",
    "Other" = "Other",
    "Pending" = "Pending",
    "Rejected" = "Rejected",
    "Requested" = "Requested"
}
;
/**
 * Term: Loss Payee Type Definition: Specifies the general types of loss payees associated with the mortgage loan.
 */
export enum LossPayeeBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: LTV Property Value Calculation Method Type Definition: A value from a MISMO defined list that identifies the method used to determine the property value used for the LTV calculation.
 */
export enum LTVPropertyValueCalculationMethodBase {
    "AverageOfMultipleAppraisals" = "AverageOfMultipleAppraisals",
    "LowerOfMultipleAppraisals" = "LowerOfMultipleAppraisals",
    "LowerOfSalesContractAmountOrPropertyValuationAmount" = "LowerOfSalesContractAmountOrPropertyValuationAmount",
    "Other" = "Other",
    "PropertyValuationAmount" = "PropertyValuationAmount",
    "SalesContractAmount" = "SalesContractAmount"
}
;
/**
 * Term: Manufactured Home Condition Description Type Definition: The description of the condition of the manufactured home.
 */
export enum ManufacturedHomeConditionDescriptionBase {
    "New" = "New",
    "Used" = "Used"
}
;
/**
 * Term: Manufactured Home Construction Quality Rating Type Definition: A rating of the quality of construction of the manufactured home based on objective criteria such as NADA Manufactured Housing Appraisal Guide, Marshall and Swift Residential Cost Handbook or other published cost source.
 */
export enum ManufacturedHomeConstructionQualityRatingBase {
    "Average" = "Average",
    "Excellent" = "Excellent",
    "Fair" = "Fair",
    "Poor" = "Poor"
}
;
/**
 * Term: Manufactured Home Financing Program Eligibility Type Definition: A value from a MISMO prescribed list that represents the financing program for which the manufactured home is designed to be eligible.
 */
export enum ManufacturedHomeFinancingProgramEligibilityBase {
    "FannieMaeMHAdvantage" = "FannieMaeMHAdvantage",
    "FreddieMacCHOICEHome" = "FreddieMacCHOICEHome",
    "Other" = "Other"
}
;
/**
 * Term: Manufactured Home Modification Type Definition: A value from a MISMO prescribed list that represents a modification, attachment or addition made to or that relies on the original structure for support.
 */
export enum ManufacturedHomeModificationBase {
    "Carport" = "Carport",
    "Deck" = "Deck",
    "Garage" = "Garage",
    "LivingArea" = "LivingArea",
    "Other" = "Other",
    "Porch" = "Porch",
    "Sunroom" = "Sunroom"
}
;
/**
 * Term: Manufactured Home Section Type Definition: Specifies the section of the manufactured home being measured.
 */
export enum ManufacturedHomeSectionBase {
    "Other" = "Other",
    "SectionFour" = "SectionFour",
    "SectionOne" = "SectionOne",
    "SectionThree" = "SectionThree",
    "SectionTwo" = "SectionTwo"
}
;
/**
 * Term: Manufactured Home Width Type Definition: Specifies the common size (width) designation of a Manufactured home.
 */
export enum ManufacturedHomeWidthBase {
    "MultiWide" = "MultiWide",
    "SingleWide" = "SingleWide"
}
;
/**
 * Term: Marital Status Type Definition: A value from a MISMO prescribed list that specifies the marital status of the party as disclosed by the party.
 */
export enum MaritalStatusBase {
    "Divorced" = "Divorced",
    "Married" = "Married",
    "NotProvided" = "NotProvided",
    "Other" = "Other",
    "Separated" = "Separated",
    "Unknown" = "Unknown",
    "Unmarried" = "Unmarried"
}
;
/**
 * Term: Marketing Or Exposure Time Type Definition: A value from a MISMO prescribed list that represents either the market or exposure time supporting the appraisal amount and condition for the subject property.
 */
export enum MarketingOrExposureTimeBase {
    "ClientImposedRestrictedMarketingTime" = "ClientImposedRestrictedMarketingTime",
    "ReasonableExposureTime" = "ReasonableExposureTime"
}
;
/**
 * Term: Marketing Time Type Definition: A value from a MISMO prescribed list that represents the range of time needed to sell the property.
 */
export enum MarketingTimeBase {
    "OverSixMonths" = "OverSixMonths",
    "ThreeToSixMonths" = "ThreeToSixMonths",
    "UnderThreeMonths" = "UnderThreeMonths"
}
;
/**
 * Term: Market Inventory Type Definition: A value from a MISMO prescribed list that represents the category of real estate market inventory as of the appraisal report effective date.
 */
export enum MarketInventoryBase {
    "AbsorptionRate" = "AbsorptionRate",
    "ActiveListings" = "ActiveListings",
    "MedianListDaysOnMarket" = "MedianListDaysOnMarket",
    "MedianListPrice" = "MedianListPrice",
    "MedianSalesDaysOnMarket" = "MedianSalesDaysOnMarket",
    "MedianSalesPrice" = "MedianSalesPrice",
    "MedianSalesToListRatio" = "MedianSalesToListRatio",
    "PendingSales" = "PendingSales",
    "Supply" = "Supply",
    "TotalListings" = "TotalListings",
    "TotalSales" = "TotalSales"
}
;
/**
 * Term: Market Inventory Month Range Type Definition: Specifies the date range of the real estate market inventory analysis.
 */
export enum MarketInventoryMonthRangeBase {
    "LastThreeMonths" = "LastThreeMonths",
    "PriorFourToSixMonths" = "PriorFourToSixMonths",
    "PriorSevenToTwelveMonths" = "PriorSevenToTwelveMonths"
}
;
/**
 * Term: Market Inventory Trend Type Definition: Specifies the trend of the real estate market inventory type.
 */
export enum MarketInventoryTrendBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Market Property Value Trend Type Definition: A value from a MISMO prescribed list that represents the price trend of properties in the defined market.
 */
export enum MarketPropertyValueTrendBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Market Supply Trend Type Definition: A value from a MISMO prescribed list that represents the housing supply in the defined market.
 */
export enum MarketSupplyTrendBase {
    "InBalance" = "InBalance",
    "OverSupply" = "OverSupply",
    "Shortage" = "Shortage"
}
;
/**
 * Term: Market Trend Period Type Definition: Specifies the date range of the real estate market analysis.
 */
export enum MarketTrendPeriodBase {
    "FutureEighteenMonths" = "FutureEighteenMonths",
    "FutureSixMonths" = "FutureSixMonths",
    "FutureThreeMonths" = "FutureThreeMonths",
    "FutureTwelveMonths" = "FutureTwelveMonths",
    "PriorEighteenMonths" = "PriorEighteenMonths",
    "PriorSixMonths" = "PriorSixMonths",
    "PriorThreeMonths" = "PriorThreeMonths",
    "PriorTwelveMonths" = "PriorTwelveMonths"
}
;
/**
 * Term: Market Trends Historic Prices Type Definition: Specifies the historic trend of sales prices in a neighborhood (e.g. Increasing, Stable, or Decreasing).
 */
export enum MarketTrendsHistoricPricesBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Market Trends Interest Rates Type Definition: Specifies the mortgage interest rate trend (e.g. Decreasing, Stable, or Increasing).
 */
export enum MarketTrendsInterestRatesBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Market Trends Sales Activity Type Definition: Specifies the sale activity trend of properties similar to the subject property (e.g. Decreasing, Stable, Increasing).
 */
export enum MarketTrendsSalesActivityBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Measurement Standard Publisher Type Definition: A value from a MISMO prescribed list that represents the publisher of the property area measurement standard used for the appraisal.
 */
export enum MeasurementStandardPublisherBase {
    "AmericanMeasurementStandard" = "AmericanMeasurementStandard",
    "AmericanNationalStandardsInstitute" = "AmericanNationalStandardsInstitute",
    "Other" = "Other"
}
;
/**
 * Term: Measurement Unit Type Definition: The type of measurement unit used to express the top offset, the left offset, the width and the height of the view field area. Available options are: Inches, Centimeters, Points and Pixels.
 */
export enum MeasurementUnitBase {
    "Centimeters" = "Centimeters",
    "Inches" = "Inches",
    "Pixels" = "Pixels",
    "Points" = "Points"
}
;
/**
 * Term: Mechanical System Type Definition: A value from a MISMO prescribed list that represents the type of mechanical system.
 */
export enum MechanicalSystemBase {
    "Other" = "Other",
    "RadonMitigation" = "RadonMitigation",
    "SumpPump" = "SumpPump",
    "WaterHeater" = "WaterHeater",
    "WholeHouseWaterTreatment" = "WholeHouseWaterTreatment"
}
;
/**
 * Term: MERS Registration Type Definition: The system at MERS that the loan is registered on.
 */
export enum MERSRegistrationBase {
    "MERS_ERegistry" = "MERS_ERegistry",
    "MERSSystem" = "MERSSystem",
    "Other" = "Other"
}
;
/**
 * Term: MERS Registration Status Type Definition: The status of the loans registration with MERS. A loan is registered one time with MERS with its Mortgage Identification Number (MIN). Various life of loan activities may alter the registration status  such as a deactivation transaction.
 */
export enum MERSRegistrationStatusBase {
    "Active" = "Active",
    "Inactive" = "Inactive",
    "Other" = "Other"
}
;
/**
 * Term: MI LTV Cutoff Type Definition: Specifies the basis of the mortgage insurance LTV cutoff.
 */
export enum MI_LTVCutoffBase {
    "AppraisedValue" = "AppraisedValue",
    "SalesPrice" = "SalesPrice"
}
;
/**
 * Term: MI Application Type Definition: Specifies the way the lender directs the mortgage insurer to handle the processing of the loan.
 */
export enum MIApplicationBase {
    "Delegated" = "Delegated",
    "Other" = "Other",
    "Standard" = "Standard"
}
;
/**
 * Term: MI Application Request Type Definition: To distinguish an original request application for private mortgage insurance from any subsequent requests for the same loan, and from the MIs response to the order.
 */
export enum MIApplicationRequestBase {
    "OriginalRequest" = "OriginalRequest",
    "Other" = "Other",
    "Resubmission" = "Resubmission"
}
;
/**
 * Term: MI Certificate Type Definition: Specifies the type of mortgage insurance certificate required by the customer.
 */
export enum MICertificateBase {
    "BothPrimaryAndPool" = "BothPrimaryAndPool",
    "NoCoverage" = "NoCoverage",
    "Pool" = "Pool",
    "Primary" = "Primary"
}
;
/**
 * Term: MI Certification Status Type Definition: Defines the party that will obtain an MI Certificate.
 */
export enum MICertificationStatusBase {
    "LenderToObtain" = "LenderToObtain",
    "Other" = "Other",
    "SellerOfLoanToObtain" = "SellerOfLoanToObtain"
}
;
/**
 * Term: MI Company Name Type Definition: To convey the private MI company short/common name from whom the private mortgage insurance coverage was obtained.
 */
export enum MICompanyNameBase {
    "ArchMI" = "ArchMI",
    "CMG" = "CMG",
    "Enact" = "Enact",
    "Essent" = "Essent",
    "MGIC" = "MGIC",
    "NationalMI" = "NationalMI",
    "Other" = "Other",
    "PMI" = "PMI",
    "Radian" = "Radian",
    "RMIC" = "RMIC",
    "Triad" = "Triad",
    "UGI" = "UGI"
}
;
/**
 * Term: MI Coverage Plan Type Definition: Specifies the coverage category of mortgage insurance applicable to the loan.
 */
export enum MICoveragePlanBase {
    "LossLimitCap" = "LossLimitCap",
    "Other" = "Other",
    "Pool" = "Pool",
    "RiskSharing" = "RiskSharing",
    "SecondLayer" = "SecondLayer",
    "StandardPrimary" = "StandardPrimary"
}
;
/**
 * Term: MI Decision Type Definition: To convey the mortgage insurers decision regarding the application for mortgage insurance.
 */
export enum MIDecisionBase {
    "Approved" = "Approved",
    "ApprovedAfterReevaluation" = "ApprovedAfterReevaluation",
    "Canceled" = "Canceled",
    "ConditionedApproval" = "ConditionedApproval",
    "Declined" = "Declined",
    "PendingReview" = "PendingReview",
    "Suspended" = "Suspended"
}
;
/**
 * Term: MI Initial Premium At Closing Type Definition: Specifies whether the initial Mortgage Insurance premium is prepaid upon closing or deferred until first principal payment.
 */
export enum MIInitialPremiumAtClosingBase {
    "Deferred" = "Deferred",
    "Other" = "Other",
    "Prepaid" = "Prepaid"
}
;
/**
 * Term: Military Branch Type Definition: Specifies the branch of service to which the VA borrower belongs.
 */
export enum MilitaryBranchBase {
    "AirForce" = "AirForce",
    "AirNationalGuard" = "AirNationalGuard",
    "Army" = "Army",
    "ArmyNationalGuard" = "ArmyNationalGuard",
    "ArmyReserves" = "ArmyReserves",
    "CoastGuard" = "CoastGuard",
    "Marines" = "Marines",
    "MarinesReserves" = "MarinesReserves",
    "Navy" = "Navy",
    "NavyReserves" = "NavyReserves",
    "Other" = "Other"
}
;
/**
 * Term: Military Service Classification Type Definition: A value from a MISMO prescribed list that classifies the military rank or military grade of the service member or veteran.
 */
export enum MilitaryServiceClassificationBase {
    "CommissionedOfficer" = "CommissionedOfficer",
    "Enlisted" = "Enlisted",
    "NonCommissionedOfficer" = "NonCommissionedOfficer",
    "Other" = "Other",
    "WarrantOfficer" = "WarrantOfficer"
}
;
/**
 * Term: Military Status Type Definition: A value from a MISMO prescribed list that specifies duty status of current or former military personnel.
 */
export enum MilitaryStatusBase {
    "ActiveDuty" = "ActiveDuty",
    "Other" = "Other",
    "ReserveNationalGuardNeverActivated" = "ReserveNationalGuardNeverActivated",
    "Separated" = "Separated",
    "Veteran" = "Veteran"
}
;
/**
 * Term: MI Policy Status Type Definition: Conveys the current status of the MI policy.
 */
export enum MIPolicyStatusBase {
    "ActiveApplication" = "ActiveApplication",
    "ActiveCertificate" = "ActiveCertificate",
    "ActiveCommitment" = "ActiveCommitment",
    "InactiveApplication" = "InactiveApplication",
    "InactiveCertificate" = "InactiveCertificate",
    "InactiveCommitment" = "InactiveCommitment",
    "Other" = "Other"
}
;
/**
 * Term: MI Premium Calculation Type Definition: Method by which new PMI premium is calculated.
 */
export enum MIPremiumCalculationBase {
    "AverageAnnualScheduledUnpaidPrincipalBalance" = "AverageAnnualScheduledUnpaidPrincipalBalance",
    "BaseLoanAmount" = "BaseLoanAmount",
    "Constant" = "Constant",
    "Declining" = "Declining",
    "NoRenewals" = "NoRenewals",
    "Other" = "Other",
    "PercentOfCurrentBalance" = "PercentOfCurrentBalance",
    "PercentOfOriginalBalance" = "PercentOfOriginalBalance"
}
;
/**
 * Term: MI Premium Monthly Payment Rounding Type Definition: The rounding method applied to the monthly payment amount.
 */
export enum MIPremiumMonthlyPaymentRoundingBase {
    "Down" = "Down",
    "None" = "None",
    "Other" = "Other",
    "Up" = "Up"
}
;
/**
 * Term: MI Premium Payment Type Definition: A value from a MISMO defined list that defines how the MI premium payments are to be paid.
 */
export enum MIPremiumPaymentBase {
    "Escrowed" = "Escrowed",
    "Financed" = "Financed",
    "Other" = "Other"
}
;
/**
 * Term: MI Premium Payment Paid By Type Definition: The role of the party making the MI Premium payment.
 */
export enum MIPremiumPaymentPaidByBase {
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Correspondent" = "Correspondent",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: MI Premium Payment Timing Type Definition: Defines the point in time during the origination process when the MI Premium payment was paid.
 */
export enum MIPremiumPaymentTimingBase {
    "AtClosing" = "AtClosing",
    "BeforeClosing" = "BeforeClosing",
    "Other" = "Other"
}
;
/**
 * Term: MI Premium Period Type Definition: Defines the type of premium being paid during different stages of the mortgage insurance policy.
 */
export enum MIPremiumPeriodBase {
    "Other" = "Other",
    "Renewal" = "Renewal",
    "Upfront" = "Upfront"
}
;
/**
 * Term: MI Premium Plan Type Definition: A value from a MISMO prescribed list that specifies the timing of up-front and recurring MI Premium payments.
 */
export enum MIPremiumPlanBase {
    "Annual" = "Annual",
    "Monthly" = "Monthly",
    "Other" = "Other",
    "Single" = "Single",
    "Split" = "Split"
}
;
/**
 * Term: MI Premium Rate Plan Type Definition: Specifies pattern of Mortgage Insurance premium rates charged over the life of the coverage.
 */
export enum MIPremiumRatePlanBase {
    "BackLoaded" = "BackLoaded",
    "Level" = "Level",
    "ModifiedFrontLoaded" = "ModifiedFrontLoaded",
    "Other" = "Other",
    "StandardFrontLoaded" = "StandardFrontLoaded"
}
;
/**
 * Term: MI Premium Refundable Type Definition: Specifies how the unearned portion of any private mortgage insurance premiums will be treated if the private mortgage insurance coverage is canceled.
 */
export enum MIPremiumRefundableBase {
    "NotRefundable" = "NotRefundable",
    "Other" = "Other",
    "Refundable" = "Refundable",
    "RefundableWithLimits" = "RefundableWithLimits"
}
;
/**
 * Term: MI Premium Sequence Type Definition: Specifies the order in which the MI premium rate and amount applies.
 */
export enum MIPremiumSequenceBase {
    "Fifth" = "Fifth",
    "First" = "First",
    "Fourth" = "Fourth",
    "Second" = "Second",
    "Third" = "Third"
}
;
/**
 * Term: MI Premium Source Type Definition: Defines the source of the MI premium payment.
 */
export enum MIPremiumSourceBase {
    "Borrower" = "Borrower",
    "BorrowerAndLender" = "BorrowerAndLender",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: MI Premium Tax Code Type Definition: To convey the type of premium tax (State, Municipal or County).
 */
export enum MIPremiumTaxCodeBase {
    "AllTaxes" = "AllTaxes",
    "County" = "County",
    "Municipal" = "Municipal",
    "State" = "State"
}
;
/**
 * Term: MI Renewal Calculation Type Definition: Specifies the way in which the renewal premiums will be calculated.
 */
export enum MIRenewalCalculationBase {
    "AverageAnnualScheduledUnpaidPrincipalBalance" = "AverageAnnualScheduledUnpaidPrincipalBalance",
    "Constant" = "Constant",
    "Declining" = "Declining",
    "NoRenewals" = "NoRenewals",
    "Other" = "Other"
}
;
/**
 * Term: MI Service Type Definition: Defines the type of service provided by the mortgage insurer.
 */
export enum MIServiceBase {
    "ContractUnderwrite" = "ContractUnderwrite",
    "ContractUnderwriteWithMI" = "ContractUnderwriteWithMI",
    "FullUnderwrite" = "FullUnderwrite",
    "MIActivation" = "MIActivation",
    "MIApplication" = "MIApplication",
    "NotApplicable" = "NotApplicable",
    "Other" = "Other",
    "PostCloseDocuments" = "PostCloseDocuments",
    "PreQualification" = "PreQualification",
    "RateQuote" = "RateQuote",
    "RateQuoteAndEligibility" = "RateQuoteAndEligibility",
    "StatusQuery" = "StatusQuery"
}
;
/**
 * Term: MI Service Method Type Definition: A value from a MISMO prescribed list that represents the method by which a transaction was submitted to the MI Company. The transaction can be automatically submitted by a system based on loan or workflow criteria, or manually submitted through a user interface.
 */
export enum MIServiceMethodBase {
    "Automated" = "Automated",
    "Manual" = "Manual",
    "Other" = "Other"
}
;
/**
 * Term: MI Source Type Definition: The source of mortgage protection insurance.
 */
export enum MISourceBase {
    "FHA" = "FHA",
    "Other" = "Other",
    "PMI" = "PMI",
    "USDA" = "USDA"
}
;
/**
 * Term: MI Sub Prime Program Type Definition: To convey the loan is processed as sub prime.
 */
export enum MISubPrimeProgramBase {
    "AMinus" = "AMinus",
    "BPaper" = "BPaper",
    "CPaper" = "CPaper",
    "Other" = "Other"
}
;
/**
 * Term: MI Validation Request Type Definition: To distinguish an original MI validation request for private mortgage insurance from any subsequent validation requests for the same loan.
 */
export enum MIValidationRequestBase {
    "Initial" = "Initial",
    "Other" = "Other",
    "Recurring" = "Recurring"
}
;
/**
 * Term: MI Workout Approval Condition Type Definition: Specifies the condition under which the MI has approved a workout.
 */
export enum MIWorkoutApprovalConditionBase {
    "AdvanceFundsPartial" = "AdvanceFundsPartial",
    "BorrowerContribution" = "BorrowerContribution",
    "DelinquencyCapitalization" = "DelinquencyCapitalization",
    "Other" = "Other",
    "WithRightToPursueDeficiencyJudgement" = "WithRightToPursueDeficiencyJudgement"
}
;
/**
 * Term: MI Workout Decision Type Definition: Specifies the decision made by the mortgage insurer on the workout.
 */
export enum MIWorkoutDecisionBase {
    "Approved" = "Approved",
    "BorrowerDeclined" = "BorrowerDeclined",
    "Denied" = "Denied",
    "Other" = "Other",
    "UnderReview" = "UnderReview"
}
;
/**
 * Term: MI Workout Delegation Type Definition: The decision authority made by the MI company on the workout is delegated to another party.
 */
export enum MIWorkoutDelegationBase {
    "InvestorDelegated" = "InvestorDelegated",
    "Other" = "Other",
    "ServicerDelegated" = "ServicerDelegated"
}
;
/**
 * Term: MI Workout Denial Reason Type Definition: Specifies the reason for which the MI has denied a workout.
 */
export enum MIWorkoutDenialReasonBase {
    "BorrowerCannotAfford" = "BorrowerCannotAfford",
    "BorrowerQualifiesForDifferentWorkoutOption" = "BorrowerQualifiesForDifferentWorkoutOption",
    "DelegatedAuthorityNotCompliant" = "DelegatedAuthorityNotCompliant",
    "HasAssetsAndRefusedToContribute" = "HasAssetsAndRefusedToContribute",
    "InsufficientContribution" = "InsufficientContribution",
    "MissingDocumentation" = "MissingDocumentation",
    "NoLegitimateHardship" = "NoLegitimateHardship",
    "NonArmsLengthTransaction" = "NonArmsLengthTransaction",
    "Other" = "Other",
    "SecondLienHolderRefusedRelease" = "SecondLienHolderRefusedRelease",
    "SecondLienHolderWillNotResubordinate" = "SecondLienHolderWillNotResubordinate",
    "ServicerDelegated" = "ServicerDelegated",
    "SufficientIncomeToSupportDebt" = "SufficientIncomeToSupportDebt",
    "TornDownOrNotRepairable" = "TornDownOrNotRepairable",
    "UnacceptableOffer" = "UnacceptableOffer"
}
;
/**
 * Term: Monetary Event Type Definition: Identifies type of monetary event that affects balances associated with a loan.
 */
export enum MonetaryEventBase {
    "BalloonPayment" = "BalloonPayment",
    "CurtailmentToFirstYearChargesSetAside" = "CurtailmentToFirstYearChargesSetAside",
    "CurtailmentToLineOfCredit" = "CurtailmentToLineOfCredit",
    "CurtailmentToRepairSetAside" = "CurtailmentToRepairSetAside",
    "CurtailmentToTaxAndInsuranceSetAside" = "CurtailmentToTaxAndInsuranceSetAside",
    "Draw" = "Draw",
    "FinalDraw" = "FinalDraw",
    "FinalDrawWithEarlyConversion" = "FinalDrawWithEarlyConversion",
    "FinalDrawWithPaydown" = "FinalDrawWithPaydown",
    "FinalDrawWithPaydownAndEarlyConversion" = "FinalDrawWithPaydownAndEarlyConversion",
    "FirstYearPropertyChargesFinal" = "FirstYearPropertyChargesFinal",
    "FirstYearPropertyChargesNotFinal" = "FirstYearPropertyChargesNotFinal",
    "LineOfCreditForAppraisal" = "LineOfCreditForAppraisal",
    "LineOfCreditToPreventLien" = "LineOfCreditToPreventLien",
    "NonBorrowerFundsRemitted" = "NonBorrowerFundsRemitted",
    "Other" = "Other",
    "Payment" = "Payment",
    "PrincipalCurtailment" = "PrincipalCurtailment",
    "RepairSetAsideFinal" = "RepairSetAsideFinal",
    "RepairSetAsideNotFinal" = "RepairSetAsideNotFinal",
    "TaxAndInsuranceSetAside" = "TaxAndInsuranceSetAside",
    "TrialPayment" = "TrialPayment",
    "UnscheduledDraw" = "UnscheduledDraw"
}
;
/**
 * Term: Monthly Rent Current Rating Type Definition: This is the landlord evaluation of the current payment status of monthly rent by a borrower or co-borrower.
 */
export enum MonthlyRentCurrentRatingBase {
    "AsAgreed" = "AsAgreed",
    "ChargeOff" = "ChargeOff",
    "Collection" = "Collection",
    "Late30Days" = "Late30Days",
    "Late60Days" = "Late60Days",
    "Late90Days" = "Late90Days",
    "LateOver120Days" = "LateOver120Days",
    "NoDataAvailable" = "NoDataAvailable",
    "TooNew" = "TooNew"
}
;
/**
 * Term: Mortgage Type Definition: A value from a MISMO prescribed list that specifies the private or public sector entity under whose guidelines the mortgage is originated.
Term: Pool Mortgage Type Definition: Specifies mortgage type of the loans for the pool.
Term: Supplemental Mortgage Type Definition: Identifies another lower-level private or public sector agency under whose guidelines the mortgage is originated.
 */
export enum MortgageBase {
    "Conventional" = "Conventional",
    "FHA" = "FHA",
    "LocalAgency" = "LocalAgency",
    "Other" = "Other",
    "Private" = "Private",
    "PublicAndIndianHousing" = "PublicAndIndianHousing",
    "StateAgency" = "StateAgency",
    "USDARuralDevelopment" = "USDARuralDevelopment",
    "VA" = "VA"
}
;
/**
 * Term: Mortgage Score Type Definition: Identifies the type of proprietary mortgage score being reported.
 */
export enum MortgageScoreBase {
    "FraudFilterScore" = "FraudFilterScore",
    "GE_IQScore" = "GE_IQScore",
    "Other" = "Other",
    "PMIAuraAQIScore" = "PMIAuraAQIScore",
    "UGIAccuscore" = "UGIAccuscore"
}
;
/**
 * Term: NAIC Title Policy Classification Type Definition: NAIC-defined classification for policies insuring title to real property as either residential or nonresidential.
 */
export enum NAICTitlePolicyClassificationBase {
    "NonResidential" = "NonResidential",
    "Residential" = "Residential"
}
;
/**
 * Term: Named Insured Type Definition: Designates the type of entity that will be the named insured on the Title Insurance Policy document.
 */
export enum NamedInsuredBase {
    "Lender" = "Lender",
    "Owner" = "Owner"
}
;
/**
 * Term: Name Documents Drawn In Type Definition: Name of the party to appear on the Security Instrument.
 */
export enum NameDocumentsDrawnInBase {
    "Broker" = "Broker",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: Native American Lands Type Definition: A value from a MISMO prescribed list that categorizes the legal means by which Native American land may be owned.
 */
export enum NativeAmericanLandsBase {
    "AlaskaNativeCorporationLand" = "AlaskaNativeCorporationLand",
    "FeeSimple" = "FeeSimple",
    "HawaiianHomeLands" = "HawaiianHomeLands",
    "IndividualTrustLand" = "IndividualTrustLand",
    "Other" = "Other",
    "TribalTrustLand" = "TribalTrustLand",
    "TribalTrustLandOffReservation" = "TribalTrustLandOffReservation",
    "TribalTrustLandOnAReservation" = "TribalTrustLandOnAReservation"
}
;
/**
 * Term: Negative Amortization Type Definition: Specifies whether negative amortization is scheduled or potential on the loan. Negative amortization is unpaid interest added to the mortgage principal. This applies to loans where the principal balance increases because the payments do not cover the interest.
 */
export enum NegativeAmortizationBase {
    "PotentialNegativeAmortization" = "PotentialNegativeAmortization",
    "ScheduledNegativeAmortization" = "ScheduledNegativeAmortization"
}
;
/**
 * Term: Negative Amortization Recast Type Definition: Indicates the condition that will cause a mortgage to be recalculated as positively amortizing without any future negative amortization.
 */
export enum NegativeAmortizationRecastBase {
    "BothScheduledAndMaximumPercent" = "BothScheduledAndMaximumPercent",
    "MaximumPercent" = "MaximumPercent",
    "Scheduled" = "Scheduled"
}
;
/**
 * Term: Neighborhood Built Up Range Type Definition: Specifies an estimated percentage range of available land in the neighborhood that has been improved.
 */
export enum NeighborhoodBuiltUpRangeBase {
    "Over75Percent" = "Over75Percent",
    "TwentyFiveToSeventyFivePercent" = "TwentyFiveToSeventyFivePercent",
    "Under25Percent" = "Under25Percent"
}
;
/**
 * Term: Neighborhood Demand Supply Type Definition: Specifies the state of market demand versus the supply of properties in the neighborhood.
 */
export enum NeighborhoodDemandSupplyBase {
    "InBalance" = "InBalance",
    "OverSupply" = "OverSupply",
    "Shortage" = "Shortage"
}
;
/**
 * Term: Neighborhood Growth Pace Type Definition: Specifies the rate at which the neighborhood is being developed or if it has been fully developed.
 */
export enum NeighborhoodGrowthPaceBase {
    "Declining" = "Declining",
    "FullyDeveloped" = "FullyDeveloped",
    "Rapid" = "Rapid",
    "Slow" = "Slow",
    "Stable" = "Stable"
}
;
/**
 * Term: Neighborhood Housing Type Definition: Specifies a type of housing found in the neighborhood.
 */
export enum NeighborhoodHousingBase {
    "Condominium" = "Condominium",
    "Cooperative" = "Cooperative",
    "ManufacturedHome" = "ManufacturedHome",
    "Other" = "Other",
    "SingleFamily" = "SingleFamily",
    "TwoToFourFamily" = "TwoToFourFamily"
}
;
/**
 * Term: Neighborhood Housing Predominant Occupancy Type Definition: The predominant occupancy for the specified Neighborhood Housing Type.
 */
export enum NeighborhoodHousingPredominantOccupancyBase {
    "Owner" = "Owner",
    "Tenant" = "Tenant",
    "Vacant" = "Vacant"
}
;
/**
 * Term: Neighborhood Influence Type Definition: Specifies a feature of the neighborhood in which the property is located.
 */
export enum NeighborhoodInfluenceBase {
    "AdequacyOfShopping" = "AdequacyOfShopping",
    "AdequacyOfUtilities" = "AdequacyOfUtilities",
    "AppealToMarket" = "AppealToMarket",
    "Broadband" = "Broadband",
    "ConvenienceToEmployment" = "ConvenienceToEmployment",
    "ConvenienceToFreewayAccess" = "ConvenienceToFreewayAccess",
    "ConvenienceToGrammarSchool" = "ConvenienceToGrammarSchool",
    "ConvenienceToPublicTransportation" = "ConvenienceToPublicTransportation",
    "ConvenienceToShopping" = "ConvenienceToShopping",
    "EmploymentConditions" = "EmploymentConditions",
    "EmploymentOpportunities" = "EmploymentOpportunities",
    "EmploymentStability" = "EmploymentStability",
    "GeneralAppearanceOfProperties" = "GeneralAppearanceOfProperties",
    "HousingSupply" = "HousingSupply",
    "MarketConditions" = "MarketConditions",
    "MarketingTime" = "MarketingTime",
    "Other" = "Other",
    "PoliceAndFireProtection" = "PoliceAndFireProtection",
    "PropertyCompatibility" = "PropertyCompatibility",
    "PropertyValues" = "PropertyValues",
    "ProtectionFromDetrimentalConditions" = "ProtectionFromDetrimentalConditions",
    "RecreationalFacilities" = "RecreationalFacilities"
}
;
/**
 * Term: Neighborhood Land Use Type Definition: Specifies the land use category for a neighborhood.
 */
export enum NeighborhoodLandUseBase {
    "Apartment" = "Apartment",
    "Commercial" = "Commercial",
    "Condominium" = "Condominium",
    "Cooperative" = "Cooperative",
    "Industrial" = "Industrial",
    "ManufacturedHome" = "ManufacturedHome",
    "MultiFamily" = "MultiFamily",
    "Other" = "Other",
    "SingleFamily" = "SingleFamily",
    "TwoToFourFamily" = "TwoToFourFamily",
    "Vacant" = "Vacant"
}
;
/**
 * Term: Neighborhood Land Use Change Status Type Definition: Specifies whether the land use in the neighborhood is not likely, likely or in the process of changing.
 */
export enum NeighborhoodLandUseChangeStatusBase {
    "InProcess" = "InProcess",
    "Likely" = "Likely",
    "NotLikely" = "NotLikely"
}
;
/**
 * Term: Neighborhood Property Location Type Definition: Specifies the urban, suburban, or rural nature of the location of the subject property.
 */
export enum NeighborhoodPropertyLocationBase {
    "Other" = "Other",
    "Rural" = "Rural",
    "RuralUrban" = "RuralUrban",
    "Suburban" = "Suburban",
    "Urban" = "Urban",
    "UrbanSprawl" = "UrbanSprawl"
}
;
/**
 * Term: Neighborhood Property Value Trend Type Definition: Specifies the current trend of property values in the neighborhood.
 */
export enum NeighborhoodPropertyValueTrendBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Neighborhood Typical Marketing Months Duration Type Definition: Specifies the length of time in terms of months that a property typical to the neighborhood would stay on the market before being sold.
 */
export enum NeighborhoodTypicalMarketingMonthsDurationBase {
    "OverSixMonths" = "OverSixMonths",
    "ThreeToSixMonths" = "ThreeToSixMonths",
    "UnderThreeMonths" = "UnderThreeMonths"
}
;
/**
 * Term: NFIP Community Participation Status Type Definition: A code indicating the type of flood program.
 */
export enum NFIPCommunityParticipationStatusBase {
    "Emergency" = "Emergency",
    "NonParticipating" = "NonParticipating",
    "Other" = "Other",
    "Probation" = "Probation",
    "Regular" = "Regular",
    "Suspended" = "Suspended",
    "Unknown" = "Unknown"
}
;
/**
 * Term: NFIP Flood Data Revision Type Definition: Letter of Map Amendment or Revision has been issued by FEMA.
 */
export enum NFIPFloodDataRevisionBase {
    "LOMA" = "LOMA",
    "LOMR" = "LOMR"
}
;
/**
 * Term: Non Residential Use Type Definition: A value from a MISMO prescribed list that represents the type of non-residential use observed on the property (e.g. Agricultural, Professional Office).
 */
export enum NonResidentialUseBase {
    "Agricultural" = "Agricultural",
    "Commercial" = "Commercial",
    "Industrial" = "Industrial",
    "Other" = "Other"
}
;
/**
 * Term: Notary Certificate Signer Identification Type Definition: The type of identification provided by the party signing before the notary.
 */
export enum NotaryCertificateSignerIdentificationBase {
    "PersonallyKnown" = "PersonallyKnown",
    "ProvidedIdentification" = "ProvidedIdentification"
}
;
/**
 * Term: Note Addendum Type Definition: Specifies the type of addendum referenced on the Note.
 */
export enum NoteAddendumBase {
    "AffordableMeritRate" = "AffordableMeritRate",
    "Arbitration" = "Arbitration",
    "Balloon" = "Balloon",
    "Construction" = "Construction",
    "FixedRateOption" = "FixedRateOption",
    "GEM" = "GEM",
    "GPM" = "GPM",
    "InterestOnly" = "InterestOnly",
    "InterVivosRevocableTrust" = "InterVivosRevocableTrust",
    "OccupancyDeclaration" = "OccupancyDeclaration",
    "Other" = "Other",
    "Prepayment" = "Prepayment",
    "RateImprovement" = "RateImprovement"
}
;
/**
 * Term: Note Rider Type Definition: Specifies the type of rider referenced on the Note.
 */
export enum NoteRiderBase {
    "ARM" = "ARM",
    "Balloon" = "Balloon",
    "Buydown" = "Buydown",
    "Occupancy" = "Occupancy",
    "Other" = "Other",
    "Prepayment" = "Prepayment",
    "StepRate" = "StepRate"
}
;
/**
 * Term: Object Encoding Type Definition: Specifies the type of encoding used by the resource.
 */
export enum ObjectEncodingBase {
    "Base64" = "Base64",
    "DeflateBase64" = "DeflateBase64",
    "EscapedXML" = "EscapedXML",
    "GzipBase64" = "GzipBase64",
    "None" = "None",
    "Other" = "Other"
}
;
/**
 * Term: Offer Contingency Type Definition: A contingency(s) that must be met to complete the transaction.
 */
export enum OfferContingencyBase {
    "Appraisal" = "Appraisal",
    "BuyerFinancingApproval" = "BuyerFinancingApproval",
    "EnvironmentalRemediation" = "EnvironmentalRemediation",
    "HomeInspection" = "HomeInspection",
    "Other" = "Other",
    "SaleOfBuyersExistingHome" = "SaleOfBuyersExistingHome",
    "SubjectToRepairs" = "SubjectToRepairs",
    "ThirdPartyApproval" = "ThirdPartyApproval"
}
;
/**
 * Term: Offering History Type Definition: The type of events within the history of a specific offering.
 */
export enum OfferingHistoryBase {
    "Cancelled" = "Cancelled",
    "ContingentSale" = "ContingentSale",
    "ContractOffMarket" = "ContractOffMarket",
    "ContractOnMarket" = "ContractOnMarket",
    "OfferPending" = "OfferPending",
    "OnHold" = "OnHold",
    "OriginalOffering" = "OriginalOffering",
    "Other" = "Other",
    "PriceChange" = "PriceChange",
    "Sold" = "Sold",
    "TemporaryHold" = "TemporaryHold"
}
;
/**
 * Term: Office Of Recordation Type Definition: The Office of Recordation type referenced in the subject recordable document.
 */
export enum OfficeOfRecordationBase {
    "ClerkOfCourts" = "ClerkOfCourts",
    "CountyClerk" = "CountyClerk",
    "Other" = "Other",
    "RegisterOfDeeds" = "RegisterOfDeeds"
}
;
/**
 * Term: Off Site Improvement Type Definition: Used to specify a particular off-site improvement feature of the property.
 */
export enum OffSiteImprovementBase {
    "Alley" = "Alley",
    "CurbGutter" = "CurbGutter",
    "Gated" = "Gated",
    "Other" = "Other",
    "Sidewalk" = "Sidewalk",
    "Street" = "Street",
    "StreetAccess" = "StreetAccess",
    "StreetLighting" = "StreetLighting",
    "StreetMaintenance" = "StreetMaintenance",
    "StreetSurface" = "StreetSurface"
}
;
/**
 * Term: Off Site Improvement Ownership Type Definition: Specifies the ownership or responsibility type of an off-site improvement feature such as a public or private road.
 */
export enum OffSiteImprovementOwnershipBase {
    "Private" = "Private",
    "Public" = "Public",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Online Portal Host Type Definition: A value from a MISMO prescribed list that represents the sponsor of an online functionality used for interaction and or transmission of data between parties in a uniform manner.
 */
export enum OnlinePortalHostBase {
    "Agency" = "Agency",
    "CFPB" = "CFPB",
    "HomeownersProtectionOffice" = "HomeownersProtectionOffice",
    "LoanInvestor" = "LoanInvestor",
    "LoanOriginator" = "LoanOriginator",
    "LoanServicer" = "LoanServicer",
    "OCC" = "OCC",
    "Other" = "Other",
    "OwnerAssignee" = "OwnerAssignee",
    "ServiceProvider" = "ServiceProvider"
}
;
/**
 * Term: Optional Product Cancellation Reason Type Definition:  Indicates the reason for cancellation of the associated optional product.
 */
export enum OptionalProductCancellationReasonBase {
    "Bankruptcy" = "Bankruptcy",
    "Foreclosure" = "Foreclosure",
    "NonPaymentOfPremium" = "NonPaymentOfPremium",
    "Other" = "Other",
    "PolicyOrProductExpiration" = "PolicyOrProductExpiration"
}
;
/**
 * Term: Optional Product Change Type Definition: Indicates the type of change to the associated optional product.
 */
export enum OptionalProductChangeBase {
    "Add" = "Add",
    "Cancel" = "Cancel",
    "Modify" = "Modify",
    "Other" = "Other"
}
;
/**
 * Term: Optional Product Plan Type Definition: The type of product purchased by the borrower from a third party, where the servicer collects funds from the borrower, normally included with the periodic mortgage payment, and remits funds to the third party.
 */
export enum OptionalProductPlanBase {
    "AccidentalDeathAndDismembermentInsurance" = "AccidentalDeathAndDismembermentInsurance",
    "AccidentAndHealthInsurance" = "AccidentAndHealthInsurance",
    "CreditInsurance" = "CreditInsurance",
    "DebtCancellationInsurance" = "DebtCancellationInsurance",
    "DisabilityInsurance" = "DisabilityInsurance",
    "FloodInsurance" = "FloodInsurance",
    "HazardInsurance" = "HazardInsurance",
    "LifeInsurance" = "LifeInsurance",
    "Other" = "Other"
}
;
/**
 * Term: Outbuilding Type Definition: A value from a MISMO prescribed list that represents the intended functional design of an outbuilding present on the property.
 */
export enum OutbuildingBase {
    "Barn" = "Barn",
    "Boathouse" = "Boathouse",
    "Bunkhouse" = "Bunkhouse",
    "DetachedGarage" = "DetachedGarage",
    "EnclosedKennel" = "EnclosedKennel",
    "Greenhouse" = "Greenhouse",
    "GuestHouse" = "GuestHouse",
    "IndoorRidingArena" = "IndoorRidingArena",
    "ManufacturedHome" = "ManufacturedHome",
    "Office" = "Office",
    "Other" = "Other",
    "PoolHouse" = "PoolHouse",
    "Shed" = "Shed",
    "Silo" = "Silo",
    "Stable" = "Stable",
    "StandaloneADU" = "StandaloneADU",
    "Studio" = "Studio",
    "Workshop" = "Workshop"
}
;
/**
 * Term: Outgoing Call Method Type Definition: Specifies the method of placing the most recent call to borrower, whether manually or using a dialer.
 */
export enum OutgoingCallMethodBase {
    "Dialer" = "Dialer",
    "Manual" = "Manual"
}
;
/**
 * Term: Overall Bathrooms Update Status Type Definition: A value from a MISMO prescribed list that represents the degree to which all of the bathrooms have been updated.
 */
export enum OverallBathroomsUpdateStatusBase {
    "FullyUpdated" = "FullyUpdated",
    "ModeratelyUpdated" = "ModeratelyUpdated",
    "NotUpdated" = "NotUpdated",
    "SignificantlyUpdated" = "SignificantlyUpdated"
}
;
/**
 * Term: Overall Flooring Update Status Type Definition: A value from a MISMO prescribed list that represents the degree to which the flooring has been updated in the entire living unit.
 */
export enum OverallFlooringUpdateStatusBase {
    "FullyUpdated" = "FullyUpdated",
    "ModeratelyUpdated" = "ModeratelyUpdated",
    "NotUpdated" = "NotUpdated",
    "SignificantlyUpdated" = "SignificantlyUpdated"
}
;
/**
 * Term: Owned Property Disposition Status Type Definition: A value from a MISMO prescribed list that specifies the intended disposition of an owned real property.
 */
export enum OwnedPropertyDispositionStatusBase {
    "PendingSale" = "PendingSale",
    "Retain" = "Retain",
    "Sold" = "Sold"
}
;
/**
 * Term: Ownership Interest Type Definition: A value from a MISMO prescribed list that specifies the percentage of the total business of the borrower's self-owned business.
 */
export enum OwnershipInterestBase {
    "GreaterThanOrEqualTo25Percent" = "GreaterThanOrEqualTo25Percent",
    "LessThan25Percent" = "LessThan25Percent",
    "Other" = "Other"
}
;
/**
 * Term: Ownership Transfer Amount Not Available Reason Type Definition: A value from a MISMO prescribed list that represents the reason why the transfer price is not available for the property.
 */
export enum OwnershipTransferAmountNotAvailableReasonBase {
    "NotDisclosed" = "NotDisclosed",
    "NotRecorded" = "NotRecorded",
    "Other" = "Other"
}
;
/**
 * Term: Ownership Transfer Transaction Type Definition: The type of ownership transfer of real property as recognized in the jurisdiction in which it is located.
 */
export enum OwnershipTransferTransactionBase {
    "DeedTransferOnly" = "DeedTransferOnly",
    "Other" = "Other",
    "Sale" = "Sale"
}
;
/**
 * Term: Parcel Description Classification Type Definition: A value from a MISMO prescribed list that represents the categorization of the parcel description.
 */
export enum ParcelDescriptionClassificationBase {
    "BoatSlip" = "BoatSlip",
    "CondominiumUnit" = "CondominiumUnit",
    "LandWithDwelling" = "LandWithDwelling",
    "LandWithImprovement" = "LandWithImprovement",
    "Other" = "Other",
    "Parking" = "Parking",
    "Storage" = "Storage",
    "VacantLand" = "VacantLand"
}
;
/**
 * Term: Parcel Identification Type Definition: A value from a MISMO prescribed list that specifies the method used by taxing authorities or others to identify a parcel of property.
 */
export enum ParcelIdentificationBase {
    "AlternativePropertyIdentifier" = "AlternativePropertyIdentifier",
    "AssessorUnformattedIdentifier" = "AssessorUnformattedIdentifier",
    "Other" = "Other",
    "ParcelIdentificationNumber" = "ParcelIdentificationNumber",
    "TaxMapIdentifier" = "TaxMapIdentifier",
    "TaxParcelIdentifier" = "TaxParcelIdentifier",
    "TorrensCertificateIdentifier" = "TorrensCertificateIdentifier"
}
;
/**
 * Term: Parcel Separator Type Definition: A value from a MISMO prescribed list that represents the predominant element that separates non-contiguous parcels.
 */
export enum ParcelSeparatorBase {
    "BodyOfWater" = "BodyOfWater",
    "Other" = "Other",
    "OtherParcel" = "OtherParcel",
    "Road" = "Road"
}
;
/**
 * Term: Partial Payment Application Item Type Definition: A value from a MISMO prescribed list that specifies the item to which a partial payment is to be applied.
 */
export enum PartialPaymentApplicationItemBase {
    "Escrow" = "Escrow",
    "Interest" = "Interest",
    "Principal" = "Principal"
}
;
/**
 * Term: Partial Payment Application Method Type Definition: The method used for applying a partial payment to the loan.
 */
export enum PartialPaymentApplicationMethodBase {
    "ApplyPartialPayment" = "ApplyPartialPayment",
    "HoldUntilCompleteAmount" = "HoldUntilCompleteAmount",
    "Other" = "Other"
}
;
/**
 * Term: Partial Payment Application Order Type Definition: A value from a MISMO prescribed list that specifies the order in which a partial payment is applied against the designated item.
 */
export enum PartialPaymentApplicationOrderBase {
    "First" = "First",
    "Second" = "Second",
    "Third" = "Third"
}
;
/**
 * Term: Party Role Type Definition: A value from a MISMO defined list that identifies the role that the party plays in the transaction. Parties may be either a person or legal entity. A party may play multiple roles in a transaction.
 */
export enum PartyRoleBase {
    "Aggregator" = "Aggregator",
    "Appraiser" = "Appraiser",
    "AppraiserSupervisor" = "AppraiserSupervisor",
    "AppraiserTrainee" = "AppraiserTrainee",
    "AssignFrom" = "AssignFrom",
    "AssignTo" = "AssignTo",
    "Attorney" = "Attorney",
    "AttorneyInFact" = "AttorneyInFact",
    "AuthorizedRepresentative" = "AuthorizedRepresentative",
    "AuthorizedThirdParty" = "AuthorizedThirdParty",
    "BankruptcyFiler" = "BankruptcyFiler",
    "BankruptcyTrustee" = "BankruptcyTrustee",
    "BeneficialInterestParty" = "BeneficialInterestParty",
    "BillToParty" = "BillToParty",
    "Borrower" = "Borrower",
    "Builder" = "Builder",
    "Client" = "Client",
    "ClosingAgent" = "ClosingAgent",
    "Conservator" = "Conservator",
    "ConsumerReportingAgency" = "ConsumerReportingAgency",
    "CooperativeCompany" = "CooperativeCompany",
    "CorrespondentLender" = "CorrespondentLender",
    "Cosigner" = "Cosigner",
    "CreditCounselingAgent" = "CreditCounselingAgent",
    "CreditEnhancementRiskHolder" = "CreditEnhancementRiskHolder",
    "CustodianNotePayTo" = "CustodianNotePayTo",
    "DebtCollector" = "DebtCollector",
    "Defendant" = "Defendant",
    "DeliverRescissionTo" = "DeliverRescissionTo",
    "DesignatedContact" = "DesignatedContact",
    "DocumentCustodian" = "DocumentCustodian",
    "ENoteController" = "ENoteController",
    "ENoteControllerTransferee" = "ENoteControllerTransferee",
    "ENoteCustodian" = "ENoteCustodian",
    "ENoteCustodianTransferee" = "ENoteCustodianTransferee",
    "ENoteDelegateeForTransfers" = "ENoteDelegateeForTransfers",
    "ENoteRegisteringParty" = "ENoteRegisteringParty",
    "ENoteServicer" = "ENoteServicer",
    "ENoteServicerTransferee" = "ENoteServicerTransferee",
    "ENoteTransferInitiator" = "ENoteTransferInitiator",
    "Executor" = "Executor",
    "FHASponsor" = "FHASponsor",
    "FloodCertificateProvider" = "FloodCertificateProvider",
    "FulfillmentParty" = "FulfillmentParty",
    "GiftDonor" = "GiftDonor",
    "Grantee" = "Grantee",
    "Grantor" = "Grantor",
    "Guarantor" = "Guarantor",
    "HazardInsuranceAgent" = "HazardInsuranceAgent",
    "HazardInsuranceCompany" = "HazardInsuranceCompany",
    "HomeInspector" = "HomeInspector",
    "HomeownersAssociation" = "HomeownersAssociation",
    "HousingCounselingAgency" = "HousingCounselingAgency",
    "HousingCounselingAgent" = "HousingCounselingAgent",
    "HUD1SettlementAgent" = "HUD1SettlementAgent",
    "InsuranceInspector" = "InsuranceInspector",
    "Interviewer" = "Interviewer",
    "InterviewerEmployer" = "InterviewerEmployer",
    "Investor" = "Investor",
    "IRSTaxFormThirdParty" = "IRSTaxFormThirdParty",
    "IVESParticipant" = "IVESParticipant",
    "LawFirm" = "LawFirm",
    "Lender" = "Lender",
    "LenderBranch" = "LenderBranch",
    "LienHolder" = "LienHolder",
    "LoanCloser" = "LoanCloser",
    "LoanDeliveryFilePreparer" = "LoanDeliveryFilePreparer",
    "LoanFunder" = "LoanFunder",
    "LoanOfficer" = "LoanOfficer",
    "LoanOriginationCompany" = "LoanOriginationCompany",
    "LoanOriginator" = "LoanOriginator",
    "LoanProcessor" = "LoanProcessor",
    "LoanSeller" = "LoanSeller",
    "LoanUnderwriter" = "LoanUnderwriter",
    "LossPayee" = "LossPayee",
    "ManagementCompany" = "ManagementCompany",
    "MICompany" = "MICompany",
    "MortgageBroker" = "MortgageBroker",
    "NonTitleNonSpouseOwnershipInterest" = "NonTitleNonSpouseOwnershipInterest",
    "NonTitleSpouse" = "NonTitleSpouse",
    "Notary" = "Notary",
    "NotePayTo" = "NotePayTo",
    "NotePayToRecipient" = "NotePayToRecipient",
    "Other" = "Other",
    "Payee" = "Payee",
    "Plaintiff" = "Plaintiff",
    "PoolInsurer" = "PoolInsurer",
    "PoolIssuer" = "PoolIssuer",
    "PoolIssuerTransferee" = "PoolIssuerTransferee",
    "PreparedBy" = "PreparedBy",
    "ProjectDeveloper" = "ProjectDeveloper",
    "ProjectManagementAgent" = "ProjectManagementAgent",
    "PropertyAccessContact" = "PropertyAccessContact",
    "PropertyDataCollector" = "PropertyDataCollector",
    "PropertyJurisdictionalAuthority" = "PropertyJurisdictionalAuthority",
    "PropertyOwner" = "PropertyOwner",
    "PropertyPreservationAgent" = "PropertyPreservationAgent",
    "PropertyPurchaser" = "PropertyPurchaser",
    "PropertySeller" = "PropertySeller",
    "RealEstateAgent" = "RealEstateAgent",
    "ReceivingParty" = "ReceivingParty",
    "RegistryOperator" = "RegistryOperator",
    "RegulatoryAgency" = "RegulatoryAgency",
    "RelocationCompany" = "RelocationCompany",
    "RepresentationAndWarrantyProvider" = "RepresentationAndWarrantyProvider",
    "RequestingParty" = "RequestingParty",
    "RespondingParty" = "RespondingParty",
    "RespondToParty" = "RespondToParty",
    "ReturnTo" = "ReturnTo",
    "ReviewAppraiser" = "ReviewAppraiser",
    "SecurityIssuer" = "SecurityIssuer",
    "ServiceBureau" = "ServiceBureau",
    "ServiceProvider" = "ServiceProvider",
    "Servicer" = "Servicer",
    "ServicerPaymentCollection" = "ServicerPaymentCollection",
    "Settlor" = "Settlor",
    "SignificantRealPropertyAppraisalAssistance" = "SignificantRealPropertyAppraisalAssistance",
    "Spouse" = "Spouse",
    "SubmittingParty" = "SubmittingParty",
    "SuccessorInInterest" = "SuccessorInInterest",
    "TaxableParty" = "TaxableParty",
    "TaxAssessor" = "TaxAssessor",
    "TaxCollector" = "TaxCollector",
    "Taxpayer" = "Taxpayer",
    "TaxServiceProvider" = "TaxServiceProvider",
    "TaxServicer" = "TaxServicer",
    "ThirdPartyAutomatedVerificationServiceProvider" = "ThirdPartyAutomatedVerificationServiceProvider",
    "ThirdPartyInvestor" = "ThirdPartyInvestor",
    "ThirdPartyOriginator" = "ThirdPartyOriginator",
    "TitleCompany" = "TitleCompany",
    "TitleHolder" = "TitleHolder",
    "TitleUnderwriter" = "TitleUnderwriter",
    "Trust" = "Trust",
    "TrustBeneficiary" = "TrustBeneficiary",
    "Trustee" = "Trustee",
    "UnderwritingPublisher" = "UnderwritingPublisher",
    "Unspecified" = "Unspecified",
    "WarehouseLender" = "WarehouseLender",
    "Witness" = "Witness"
}
;
/**
 * Term: Pass Through Calculation Method Type Definition: Determines what formula is used to calculate the investor pass through rate as defined in the investor contract.
 */
export enum PassThroughCalculationMethodBase {
    "BottomUp" = "BottomUp",
    "TopDown" = "TopDown"
}
;
/**
 * Term: Payee Type Definition: Indicates how one would categorized this payee based on the type of entity that is being paid.
 */
export enum PayeeBase {
    "Appraiser" = "Appraiser",
    "Attorney" = "Attorney",
    "CityTaxAuthority" = "CityTaxAuthority",
    "CountyTaxAuthority" = "CountyTaxAuthority",
    "DocumentCustodian" = "DocumentCustodian",
    "HazardInsuranceAgent" = "HazardInsuranceAgent",
    "HazardInsuranceCompany" = "HazardInsuranceCompany",
    "MortgageInsuranceCompany" = "MortgageInsuranceCompany",
    "OptionalProductProvider" = "OptionalProductProvider",
    "Other" = "Other",
    "OtherTaxAuthority" = "OtherTaxAuthority",
    "PoolCertificateHolder" = "PoolCertificateHolder",
    "PropertyInspectionService" = "PropertyInspectionService",
    "PropertyManagementCompany" = "PropertyManagementCompany",
    "RealEstateBroker" = "RealEstateBroker",
    "TaxServiceProvider" = "TaxServiceProvider"
}
;
/**
 * Term: Payee Remittance Type Definition: Indicates how the remittance is to be made to the payee.
 */
export enum PayeeRemittanceBase {
    "Check" = "Check",
    "Other" = "Other",
    "Wire" = "Wire"
}
;
/**
 * Term: Payment Billing Method Type Definition: Identifies the method used by the servicer to notify the mortgagor to remit the mortgage payment.
 */
export enum PaymentBillingMethodBase {
    "BillOnReceipt" = "BillOnReceipt",
    "Coupons" = "Coupons",
    "NoBilling" = "NoBilling",
    "Statement" = "Statement",
    "StatementAndCoupon" = "StatementAndCoupon"
}
;
/**
 * Term: Payment Billing Statement Frequency Type Definition: Identifies the frequency that statements are sent to the borrower.
 */
export enum PaymentBillingStatementFrequencyBase {
    "Annual" = "Annual",
    "Monthly" = "Monthly",
    "Quarterly" = "Quarterly",
    "Semiannual" = "Semiannual"
}
;
/**
 * Term: Payment Delinquency Status Type Definition: Reports the delinquency status of the specific delinquency event.
 */
export enum PaymentDelinquencyStatusBase {
    "MoreThan120Days" = "MoreThan120Days",
    "MoreThan30Days" = "MoreThan30Days",
    "MoreThan60Days" = "MoreThan60Days",
    "MoreThan90Days" = "MoreThan90Days",
    "NotDelinquent" = "NotDelinquent"
}
;
/**
 * Term: Payment Frequency Type Definition: A value from a MISMO prescribed list that specifies how often the obligor must make the financing payments.
 */
export enum PaymentFrequencyBase {
    "Annual" = "Annual",
    "AtMaturity" = "AtMaturity",
    "Biweekly" = "Biweekly",
    "Monthly" = "Monthly",
    "Other" = "Other",
    "Quarterly" = "Quarterly",
    "Semiannual" = "Semiannual",
    "Semimonthly" = "Semimonthly",
    "Weekly" = "Weekly"
}
;
/**
 * Term: Payment Option Type Definition: A value from a MISMO prescribed list that specifies an option that is available to the borrower for the payment amount for each installment on the loan.
 */
export enum PaymentOptionBase {
    "Amortization" = "Amortization",
    "InterestOnly" = "InterestOnly",
    "MinimumPayment" = "MinimumPayment",
    "Other" = "Other"
}
;
/**
 * Term: Payment Option Recast Trigger Type Definition: A value from a MISMO prescribed list that specifies the type of event that triggers a recalculation (i.e., recast) of the set of payment options.
 */
export enum PaymentOptionRecastTriggerBase {
    "Other" = "Other",
    "Scheduled" = "Scheduled",
    "TooManyMinimumPayments" = "TooManyMinimumPayments"
}
;
/**
 * Term: Payment Pattern Rating Code Type Definition: Identifies which system of rating codes is used within the Credit Liability Payment Pattern Data text string.
 */
export enum PaymentPatternRatingCodeBase {
    "Equifax" = "Equifax",
    "Experian" = "Experian",
    "Other" = "Other"
}
;
/**
 * Term: Payment State Type Definition: Specifies the state of the payment that is being reported.
 */
export enum PaymentStateBase {
    "Current" = "Current",
    "Other" = "Other",
    "Pending" = "Pending",
    "Previous" = "Previous"
}
;
/**
 * Term: Payoff Action Type Definition: Specifies the type of action related to the liability payoff.
 */
export enum PayoffActionBase {
    "LenderOrderBothPayoffSubordinate" = "LenderOrderBothPayoffSubordinate",
    "LenderOrderPayoff" = "LenderOrderPayoff",
    "LenderOrderSubordinate" = "LenderOrderSubordinate",
    "Other" = "Other",
    "TitleCompanyOrderBothPayoffSubordinate" = "TitleCompanyOrderBothPayoffSubordinate",
    "TitleCompanyOrderPayoff" = "TitleCompanyOrderPayoff",
    "TitleCompanyOrderSubordinate" = "TitleCompanyOrderSubordinate"
}
;
/**
 * Term: Payoff Application Sequence Type Definition: Specifies the order in which the payoff is applied relative to the scheduled payment.
 */
export enum PayoffApplicationSequenceBase {
    "JustPayoff" = "JustPayoff",
    "NormalPaymentThenPayoff" = "NormalPaymentThenPayoff"
}
;
/**
 * Term: Payoff Requested By Type Definition: A collection of values that specify the party making the request for payoff of the loan.
 */
export enum PayoffRequestedByBase {
    "Lender" = "Lender",
    "Other" = "Other",
    "ServiceProvider" = "ServiceProvider"
}
;
/**
 * Term: Per Change Interest Rate Rounding Timing Type Definition: Describes when the rate is rounded relative to checking other rules.
 */
export enum PerChangeInterestRateRoundingTimingBase {
    "RoundRateAfterCheckingMinimumIndexRateMovement" = "RoundRateAfterCheckingMinimumIndexRateMovement",
    "RoundRateBeforeCheckingMinimumIndexRateMovement" = "RoundRateBeforeCheckingMinimumIndexRateMovement"
}
;
/**
 * Term: Per Change Principal And Interest Calculation Type Definition: Describes the method employed to calculate the principal and interest payment of the loan.
 */
export enum PerChangePrincipalAndInterestCalculationBase {
    "AddDollarAmountToPreviousPrincipalAndInterest" = "AddDollarAmountToPreviousPrincipalAndInterest",
    "AddPercentBasedOnOriginalPrincipalAndInterest" = "AddPercentBasedOnOriginalPrincipalAndInterest",
    "AddPercentBasedOnPreviousPrincipalAndInterest" = "AddPercentBasedOnPreviousPrincipalAndInterest",
    "BasedOnInterestRateUsingAThrowawayRate" = "BasedOnInterestRateUsingAThrowawayRate",
    "BasedOnNewInterestRate" = "BasedOnNewInterestRate",
    "FHA245Formula" = "FHA245Formula",
    "Other" = "Other"
}
;
/**
 * Term: Periodic Late Count Type Definition: Indicates the time interval for the Late Count data. Possible intervals are First Year. Second Year, Third Year.
 */
export enum PeriodicLateCountBase {
    "CurrentOneToTwelveMonths" = "CurrentOneToTwelveMonths",
    "Other" = "Other",
    "Previous25To36Months" = "Previous25To36Months",
    "PreviousThirteenTo24Months" = "PreviousThirteenTo24Months"
}
;
/**
 * Term: Plat Type Definition: Identifies the type of plat (i.e. subdivision, condominium, certified survey map).
 */
export enum PlatBase {
    "CertifiedSurveyMap" = "CertifiedSurveyMap",
    "Condominium" = "Condominium",
    "Other" = "Other",
    "PlannedUnitDevelopment" = "PlannedUnitDevelopment",
    "Subdivision" = "Subdivision",
    "Timeshare" = "Timeshare"
}
;
/**
 * Term: Pool Accrual Rate Structure Type Definition: Specifies the structure used to determine the accrual interest rate for the pool.
 */
export enum PoolAccrualRateStructureBase {
    "StatedStructure" = "StatedStructure",
    "WeightedAverageStructure" = "WeightedAverageStructure"
}
;
/**
 * Term: Pool Class Type Definition: Indicates the type of pool and its guarantor (if any).
 */
export enum PoolClassBase {
    "FNM" = "FNM",
    "FRE" = "FRE",
    "GNMAI" = "GNMAI",
    "GNMAII" = "GNMAII",
    "Other" = "Other",
    "Private" = "Private"
}
;
/**
 * Term: Pooling Method Type Definition: Indicates the timing of the remittance of the scheduled principal and interest payment from the servicer to the certificate holders of a particular pool.
 */
export enum PoolingMethodBase {
    "ConcurrentDate" = "ConcurrentDate",
    "InternalReserve" = "InternalReserve",
    "Other" = "Other"
}
;
/**
 * Term: Pool Structure Type Definition: Denotes the type of mortgage backed security structure.
 */
export enum PoolStructureBase {
    "InvestorDefinedMultipleLender" = "InvestorDefinedMultipleLender",
    "LenderInitiatedMultipleLender" = "LenderInitiatedMultipleLender",
    "MultipleIssuer" = "MultipleIssuer",
    "Other" = "Other",
    "SingleIssuer" = "SingleIssuer",
    "SingleLender" = "SingleLender"
}
;
/**
 * Term: Preferred Response Format Type Definition: Designate the response format type for the service or product being requested. The format options are Text, PCL, PDF, XML or Other. If Other is selected, enter the format in Preferred Response Format Other Description.
 */
export enum PreferredResponseFormatBase {
    "Other" = "Other",
    "PCL" = "PCL",
    "PDF" = "PDF",
    "Text" = "Text",
    "XML" = "XML"
}
;
/**
 * Term: Preferred Response Method Type Definition: Specifies the method for delivering the service or product requested - Email, Fax, File, FTP, HTTP, etc. The destination information is listed in the Preferred Response Destination Description element.
 */
export enum PreferredResponseMethodBase {
    "Fax" = "Fax",
    "File" = "File",
    "FTP" = "FTP",
    "HTTP" = "HTTP",
    "HTTPS" = "HTTPS",
    "Mail" = "Mail",
    "MessageQueue" = "MessageQueue",
    "Other" = "Other",
    "SMTP" = "SMTP",
    "VAN" = "VAN"
}
;
/**
 * Term: Prepaid Item Type Definition: Identification of a monthly housing expense component that must be paid in advance.
 */
export enum PrepaidItemBase {
    "BoroughPropertyTax" = "BoroughPropertyTax",
    "CityPropertyTax" = "CityPropertyTax",
    "CondominiumAssociationDues" = "CondominiumAssociationDues",
    "CondominiumAssociationSpecialAssessment" = "CondominiumAssociationSpecialAssessment",
    "CooperativeAssociationDues" = "CooperativeAssociationDues",
    "CooperativeAssociationService" = "CooperativeAssociationService",
    "CooperativeAssociationSpecialAssessment" = "CooperativeAssociationSpecialAssessment",
    "CountyPropertyTax" = "CountyPropertyTax",
    "DistrictPropertyTax" = "DistrictPropertyTax",
    "EarthquakeInsurancePremium" = "EarthquakeInsurancePremium",
    "FloodInsurancePremium" = "FloodInsurancePremium",
    "HailInsurancePremium" = "HailInsurancePremium",
    "HazardInsurancePremium" = "HazardInsurancePremium",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "HomeownersAssociationSpecialAssessment" = "HomeownersAssociationSpecialAssessment",
    "HomeownersInsurancePremium" = "HomeownersInsurancePremium",
    "MortgageInsurancePremium" = "MortgageInsurancePremium",
    "Other" = "Other",
    "PrepaidInterest" = "PrepaidInterest",
    "StatePropertyTax" = "StatePropertyTax",
    "TownPropertyTax" = "TownPropertyTax",
    "USDARuralDevelopmentGuaranteeFee" = "USDARuralDevelopmentGuaranteeFee",
    "VAFundingFee" = "VAFundingFee",
    "VolcanoInsurancePremium" = "VolcanoInsurancePremium",
    "WindAndStormInsurancePremium" = "WindAndStormInsurancePremium"
}
;
/**
 * Term: Prepaid Item Payment Paid By Type Definition: The role of the party making the breakout payment.
 */
export enum PrepaidItemPaymentPaidByBase {
    "Broker" = "Broker",
    "Buyer" = "Buyer",
    "Correspondent" = "Correspondent",
    "Lender" = "Lender",
    "Other" = "Other",
    "Seller" = "Seller",
    "ThirdParty" = "ThirdParty"
}
;
/**
 * Term: Prepaid Item Payment Timing Type Definition: Defines the point in time during the origination process when the prepaid item payment was paid.
 */
export enum PrepaidItemPaymentTimingBase {
    "AtClosing" = "AtClosing",
    "BeforeClosing" = "BeforeClosing",
    "FirstPayment" = "FirstPayment",
    "Other" = "Other"
}
;
/**
 * Term: Prepaid Item Per Diem Calculation Method Type Definition: The number of days in the year used in calculating the dollar amount charged per day for the prepaid item per diem amount.
 */
export enum PrepaidItemPerDiemCalculationMethodBase {
    "360_" = "360",
    "365_" = "365",
    "365Or366" = "365Or366",
    "Other" = "Other"
}
;
/**
 * Term: Prepaid Item Per Diem Rounding Type Definition: Defines the rounding method applied to the calculation of the dollar amount charged per day for the prepaid item.
 */
export enum PrepaidItemPerDiemRoundingBase {
    "Down" = "Down",
    "None" = "None",
    "Other" = "Other",
    "Up" = "Up"
}
;
/**
 * Term: Prepayment Penalty Type Definition: Identifies the type of early principal repayment eligible for a penalty charge.
 */
export enum PrepaymentPenaltyBase {
    "Assumption" = "Assumption",
    "EarlyPayoff" = "EarlyPayoff",
    "Other" = "Other",
    "PrincipalCurtailment" = "PrincipalCurtailment",
    "Refinance" = "Refinance"
}
;
/**
 * Term: Prepayment Penalty Calculation Period Type Definition: A value from a MISMO prescribed list that specifies the unit of time used for calculating the amount of the prepayment penalty.
 */
export enum PrepaymentPenaltyCalculationPeriodBase {
    "Biweekly" = "Biweekly",
    "Day" = "Day",
    "Month" = "Month",
    "Other" = "Other",
    "Quarter" = "Quarter",
    "Semimonthly" = "Semimonthly",
    "Week" = "Week",
    "Year" = "Year"
}
;
/**
 * Term: Prepayment Penalty Calculation Value Type Definition: The value used to calculate the amount of the prepayment penalty.
 */
export enum PrepaymentPenaltyCalculationValueBase {
    "FixedAmount" = "FixedAmount",
    "Other" = "Other",
    "PercentageOfPrincipalBalance" = "PercentageOfPrincipalBalance",
    "QualifyingAmountOfCurtailment" = "QualifyingAmountOfCurtailment",
    "SpecifiedPeriodOfInterest" = "SpecifiedPeriodOfInterest",
    "YieldMaintenance" = "YieldMaintenance"
}
;
/**
 * Term: Prepayment Penalty Option Type Definition: Characteristic of prepayment penalty that indicates under what transaction type the penalty may be applied (hard/soft).
 */
export enum PrepaymentPenaltyOptionBase {
    "Hard" = "Hard",
    "Soft" = "Soft"
}
;
/**
 * Term: Prepayment Penalty Period Type Definition: The unit of time used for defining the duration of the prepayment penalty period (e.g., day, month).
 */
export enum PrepaymentPenaltyPeriodBase {
    "Biweekly" = "Biweekly",
    "Day" = "Day",
    "Month" = "Month",
    "Quarter" = "Quarter",
    "Semimonthly" = "Semimonthly",
    "Week" = "Week",
    "Year" = "Year"
}
;
/**
 * Term: Prepayment Penalty Principal Balance Type Definition: The principal balance used to calculate the amount of the prepayment penalty.
 */
export enum PrepaymentPenaltyPrincipalBalanceBase {
    "CurrentPrincipalBalance" = "CurrentPrincipalBalance",
    "ExcessPrincipal" = "ExcessPrincipal",
    "OriginalPrincipalBalance" = "OriginalPrincipalBalance",
    "Other" = "Other"
}
;
/**
 * Term: Prepayment Penalty Summary Option Type Definition: A value from a MISMO prescribed list that specifies the overall type of prepayment penalty that applies for the life of the prepayment penalty period.
 */
export enum PrepaymentPenaltySummaryOptionBase {
    "Hard" = "Hard",
    "Hybrid" = "Hybrid",
    "Other" = "Other",
    "Soft" = "Soft"
}
;
/**
 * Term: Prepayment Penalty Waiver Type Definition: Denotes conditions under which the prepayment penalty is waived.
 */
export enum PrepaymentPenaltyWaiverBase {
    "HardshipSale" = "HardshipSale",
    "None" = "None",
    "Other" = "Other",
    "ThirdPartySale" = "ThirdPartySale"
}
;
/**
 * Term: Presumption Of Compliance Type Definition: Specifies creditor is presumed to have complied with Regulation Z (12 CFR Part 1026.43(e)(1)) with respect to a transaction.
 */
export enum PresumptionOfComplianceBase {
    "RebuttablePresumption" = "RebuttablePresumption",
    "SafeHarbor" = "SafeHarbor"
}
;
/**
 * Term: PRIA Request Type Definition: A description of the action being requested.
 */
export enum PRIARequestBase {
    "FeeQuote" = "FeeQuote",
    "Other" = "Other",
    "RecordCorrectedDocuments" = "RecordCorrectedDocuments",
    "RecordDocuments" = "RecordDocuments",
    "StatusUpdate" = "StatusUpdate"
}
;
/**
 * Term: PRIA Response Type Definition: Indicates the type of request this response relates to.
 */
export enum PRIAResponseBase {
    "FeeQuote" = "FeeQuote",
    "Other" = "Other",
    "Received" = "Received",
    "Recorded" = "Recorded",
    "Rejected" = "Rejected"
}
;
/**
 * Term: Primary Income Qualifying Method Type Definition: A value from a MISMO prescribed list that specifies the primary method used to determine that the income is sufficient to satisfy the monthly payment. Only used when the loan does not conform to Appendix Q of the ability-to-repay qualified mortgage rule.
 */
export enum PrimaryIncomeQualifyingMethodBase {
    "AssetDepletion" = "AssetDepletion",
    "DTIRatioPercent" = "DTIRatioPercent",
    "Other" = "Other",
    "PropertyCashFlowPercent" = "PropertyCashFlowPercent",
    "ResidualIncomeAmount" = "ResidualIncomeAmount"
}
;
/**
 * Term: Primary MI Absence Reason Type Definition: Specifies the reason that primary mortgage insurance is not required or provided.
 */
export enum PrimaryMIAbsenceReasonBase {
    "CharterParticipation" = "CharterParticipation",
    "DelinquencyDisposition" = "DelinquencyDisposition",
    "InvestorPurchasedMortgageInsurance" = "InvestorPurchasedMortgageInsurance",
    "MICanceledBasedOnCurrentLTV" = "MICanceledBasedOnCurrentLTV",
    "NoMIBasedOnOriginalLTV" = "NoMIBasedOnOriginalLTV",
    "Other" = "Other",
    "PledgedAsset" = "PledgedAsset",
    "PoolCoverage" = "PoolCoverage",
    "Repurchase" = "Repurchase",
    "SelfInsured" = "SelfInsured"
}
;
/**
 * Term: Primary Occupation Type Definition: A value from a MISMO prescribed list that represents the primary occupation of the identified party role.
 */
export enum PrimaryOccupationBase {
    "Appraiser" = "Appraiser",
    "AppraiserTrainee" = "AppraiserTrainee",
    "HomeInspector" = "HomeInspector",
    "InsuranceInspector" = "InsuranceInspector",
    "Other" = "Other",
    "RealEstateAgent" = "RealEstateAgent"
}
;
/**
 * Term: Principal And Interest Calculation Payment Period Type Definition: Specifies the payment period used to calculate the principal and interest payment.
 */
export enum PrincipalAndInterestCalculationPaymentPeriodBase {
    "30DayPaymentPeriod" = "30DayPaymentPeriod",
    "NumberOfDaysBetweenPayments" = "NumberOfDaysBetweenPayments",
    "NumberOfDaysInCalendarMonth" = "NumberOfDaysInCalendarMonth",
    "Other" = "Other"
}
;
/**
 * Term: Principal And Interest Payment Decrease Cap Type Definition: Defines the optionality of a principal and interest payment cap when the principal and interest payment is adjusting downward.
 */
export enum PrincipalAndInterestPaymentDecreaseCapBase {
    "Mandatory" = "Mandatory",
    "Optional" = "Optional"
}
;
/**
 * Term: Principal And Interest Payment Final Recast Type Definition: Describes the principal and interest recast behavior at the end of the loan term.
 */
export enum PrincipalAndInterestPaymentFinalRecastBase {
    "None" = "None",
    "Other" = "Other",
    "RecastOnceOnFinalPaymentChangeDate" = "RecastOnceOnFinalPaymentChangeDate",
    "RecastOnFinalPaymentChangeDateAndEveryMonthThereafter" = "RecastOnFinalPaymentChangeDateAndEveryMonthThereafter"
}
;
/**
 * Term: Principal And Interest Payment Increase Cap Type Definition: Defines the optionality of a principal and interest payment cap when the principal and interest payment is adjusting upward.
 */
export enum PrincipalAndInterestPaymentIncreaseCapBase {
    "Mandatory" = "Mandatory",
    "Optional" = "Optional"
}
;
/**
 * Term: Principal Balance Calculation Method Type Definition: Indicates the method used to determine the principal balance to be used to compute the new principal and interest payment.
 */
export enum PrincipalBalanceCalculationMethodBase {
    "CurrentPrincipalBalance" = "CurrentPrincipalBalance",
    "ProjectedPrincipalBalance" = "ProjectedPrincipalBalance"
}
;
/**
 * Term: Prior Property Title Type Definition: A value from a MISMO prescribed list that specifies how the borrower held title to the property.
 */
export enum PriorPropertyTitleBase {
    "JointWithOtherThanSpouse" = "JointWithOtherThanSpouse",
    "JointWithSpouse" = "JointWithSpouse",
    "Sole" = "Sole"
}
;
/**
 * Term: Prior Property Usage Type Definition: A value from a MISMO prescribed list that specifies the actual usage of the borrower for the previously owned property.
 */
export enum PriorPropertyUsageBase {
    "Investment" = "Investment",
    "PrimaryResidence" = "PrimaryResidence",
    "SecondHome" = "SecondHome"
}
;
/**
 * Term: Product Provider Type Definition: Specifies the role of the provider of the defined offering of goods or services.
 */
export enum ProductProviderBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other"
}
;
/**
 * Term: Project Analysis Adequacy Of Budget Type Definition: Identifies the assessment, by the reviewer, if the operating budget of the project is adequate for its immediate as well as long-term needs.
 */
export enum ProjectAnalysisAdequacyOfBudgetBase {
    "Adequate" = "Adequate",
    "Inadequate" = "Inadequate",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Project Analysis Adequacy Of Management Type Definition: Identifies the assessment by the reviewer if the management of the project as well as its rules and regulations are adequate to protect its operations and future value.
 */
export enum ProjectAnalysisAdequacyOfManagementBase {
    "Adequate" = "Adequate",
    "Inadequate" = "Inadequate",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Project Analysis Competitive Project Comparison Type Definition: Specifies the type of competition the project faces.
 */
export enum ProjectAnalysisCompetitiveProjectComparisonBase {
    "Average" = "Average",
    "High" = "High",
    "Low" = "Low"
}
;
/**
 * Term: Project Aspect Type Definition: Specifies an aspect of the project, PUD or mobile home park that will be rated using Rating Condition Type.
 */
export enum ProjectAspectBase {
    "AmenityAndRecreationalFacilities" = "AmenityAndRecreationalFacilities",
    "AppealToMarket" = "AppealToMarket",
    "ConditionOfExterior" = "ConditionOfExterior",
    "ConditionOfInterior" = "ConditionOfInterior",
    "Density" = "Density",
    "GeneralAppearance" = "GeneralAppearance",
    "Location" = "Location",
    "Other" = "Other",
    "QualityOfConstruction" = "QualityOfConstruction",
    "UnitMix" = "UnitMix"
}
;
/**
 * Term: Project Attachment Type Definition: Specifies the type of physical attachment, if any, between the dwelling units in the project.
 */
export enum ProjectAttachmentBase {
    "Attached" = "Attached",
    "Detached" = "Detached"
}
;
/**
 * Term: Project Type Definition: Specifies whether the referenced project is associated with the subject or other property.
 */
export enum ProjectBase {
    "OtherPhase" = "OtherPhase",
    "SubjectPhase" = "SubjectPhase"
}
;
/**
 * Term: Project Component Category Type Definition: A value from a MISMO prescribed list that represents classification of a project component associated with the project.
 */
export enum ProjectComponentCategoryBase {
    "Amenities" = "Amenities",
    "CommonAreas" = "CommonAreas",
    "Other" = "Other",
    "Units" = "Units"
}
;
/**
 * Term: Project Conversion Original Use Type Definition: A value from a MISMO prescribed list that specifies the original use before the project was converted to its current form of project ownership legal structure.
 */
export enum ProjectConversionOriginalUseBase {
    "Apartment" = "Apartment",
    "CommercialBuilding" = "CommercialBuilding",
    "HotelOrMotel" = "HotelOrMotel",
    "House" = "House",
    "IndustrialBuilding" = "IndustrialBuilding",
    "Other" = "Other"
}
;
/**
 * Term: Project Design Type Definition: This field specifies the type of design for the multiple unit buildings in a project.
 */
export enum ProjectDesignBase {
    "GardenProject" = "GardenProject",
    "HighriseProject" = "HighriseProject",
    "MidriseProject" = "MidriseProject",
    "Other" = "Other",
    "TownhouseRowhouse" = "TownhouseRowhouse"
}
;
/**
 * Term: Projected Payment Calculation Period Term Type Definition: The duration of time used to define the projected payment period.
 */
export enum ProjectedPaymentCalculationPeriodTermBase {
    "FinalPayment" = "FinalPayment",
    "Monthly" = "Monthly",
    "Other" = "Other",
    "Yearly" = "Yearly"
}
;
/**
 * Term: Projected Payment Escrowed Type Definition: Specifies if the projected payment item is to be paid from an escrow account.
 */
export enum ProjectedPaymentEscrowedBase {
    "Escrowed" = "Escrowed",
    "NotEscrowed" = "NotEscrowed",
    "SomeEscrowed" = "SomeEscrowed"
}
;
/**
 * Term: Projected Payment Estimated Taxes Insurance Assessment Component Type Definition: Specifies the type of payment component included in the calculation of the Projected Payment Estimated Taxes Insurance And Assessment Total Amount.
 */
export enum ProjectedPaymentEstimatedTaxesInsuranceAssessmentComponentBase {
    "CondominiumAssociationDues" = "CondominiumAssociationDues",
    "CondominiumAssociationSpecialAssessment" = "CondominiumAssociationSpecialAssessment",
    "CooperativeAssociationDues" = "CooperativeAssociationDues",
    "CooperativeAssociationSpecialAssessment" = "CooperativeAssociationSpecialAssessment",
    "GroundRent" = "GroundRent",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "HomeownersAssociationSpecialAssessment" = "HomeownersAssociationSpecialAssessment",
    "HomeownersInsurance" = "HomeownersInsurance",
    "LeaseholdPayment" = "LeaseholdPayment",
    "Other" = "Other",
    "PropertyTaxes" = "PropertyTaxes"
}
;
/**
 * Term: Project Eligibility Determination Type Definition: Specifies the level of review performed to determine that a project meets eligibility guidelines for purchase by the investor.
 */
export enum ProjectEligibilityDeterminationBase {
    "FullReview" = "FullReview",
    "LimitedReview" = "LimitedReview",
    "ProjectEligibilityReviewService" = "ProjectEligibilityReviewService"
}
;
/**
 * Term: Project Legal Structure Type Definition: A value from a MISMO prescribed list that specifies the form of ownership of a project. The Project Legal Structure Type defines the quality and quantity of project ownership and rights accruing to the individual unit owner.
 */
export enum ProjectLegalStructureBase {
    "CommonInterestApartment" = "CommonInterestApartment",
    "Condominium" = "Condominium",
    "Condop" = "Condop",
    "Cooperative" = "Cooperative",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Project Management Type Definition: Identifies type of management associated with the project.
 */
export enum ProjectManagementBase {
    "CooperativeBoard" = "CooperativeBoard",
    "Developer" = "Developer",
    "HomeownersAssociation" = "HomeownersAssociation",
    "ManagementAgent" = "ManagementAgent",
    "Other" = "Other"
}
;
/**
 * Term: Project Parking Space Assignment Type Definition: Specifies the type of arrangement between the project and the assigned car storage for the subject unit.
 */
export enum ProjectParkingSpaceAssignmentBase {
    "Assigned" = "Assigned",
    "Other" = "Other",
    "Owned" = "Owned",
    "Unassigned" = "Unassigned"
}
;
/**
 * Term: Project Primary Usage Type Definition: Specifies the primary type of occupancy of the Project.
 */
export enum ProjectPrimaryUsageBase {
    "Investment" = "Investment",
    "PrimaryResidence" = "PrimaryResidence",
    "SecondHome" = "SecondHome",
    "Tenant" = "Tenant"
}
;
/**
 * Term: Property Current Occupancy Type Definition: Specifies the property occupancy status of a subject property.
 */
export enum PropertyCurrentOccupancyBase {
    "Abandoned" = "Abandoned",
    "AdverseOccupied" = "AdverseOccupied",
    "OccupiedByUnknown" = "OccupiedByUnknown",
    "OwnerOccupied" = "OwnerOccupied",
    "PartiallyVacant" = "PartiallyVacant",
    "TenantOccupied" = "TenantOccupied",
    "Unknown" = "Unknown",
    "Vacant" = "Vacant"
}
;
/**
 * Term: Property Current Usage Type Definition: A value from a MISMO prescribed list that specifies the current usage of the property by the borrower.
 */
export enum PropertyCurrentUsageBase {
    "Investment" = "Investment",
    "Other" = "Other",
    "PrimaryResidence" = "PrimaryResidence",
    "SecondHome" = "SecondHome"
}
;
/**
 * Term: Property Disposition Status Type Definition: The intended disposition of the property.
 */
export enum PropertyDispositionStatusBase {
    "Other" = "Other",
    "Retain" = "Retain",
    "Sell" = "Sell",
    "Undecided" = "Undecided",
    "Unknown" = "Unknown",
    "Vacate" = "Vacate"
}
;
/**
 * Term: Property Estate Type Definition: A value from a MISMO prescribed list that specifies the ownership interest in the property.
 */
export enum PropertyEstateBase {
    "FeeSimple" = "FeeSimple",
    "Fractional" = "Fractional",
    "Leasehold" = "Leasehold",
    "Other" = "Other"
}
;
/**
 * Term: Property Exterior Inspection Method Type Definition: A value from a MISMO prescribed list that represents the method by which the exterior inspection was conducted.
 */
export enum PropertyExteriorInspectionMethodBase {
    "NoInspection" = "NoInspection",
    "Physical" = "Physical",
    "Virtual" = "Virtual"
}
;
/**
 * Term: Property Information Service Type Definition: A value from a MISMO prescribed list that specifies a particular property information service.
 */
export enum PropertyInformationServiceBase {
    "AutomatedValuationReport" = "AutomatedValuationReport",
    "InternationalEnergyConservationCodeAssessmentReport" = "InternationalEnergyConservationCodeAssessmentReport",
    "PropertyDetailReport" = "PropertyDetailReport"
}
;
/**
 * Term: Property Inspection Type Definition: Specifies the extent of the inspection.
 */
export enum PropertyInspectionBase {
    "Exterior" = "Exterior",
    "Interior" = "Interior",
    "InteriorAndExterior" = "InteriorAndExterior",
    "None" = "None",
    "Other" = "Other"
}
;
/**
 * Term: Property Inspection Purpose Type Definition: Identifies the scope of the inspection performed and the type of inspector that is performing the inspection.
 */
export enum PropertyInspectionPurposeBase {
    "BuildingCodeCompliance" = "BuildingCodeCompliance",
    "BuildingComponent" = "BuildingComponent",
    "ComplianceInspection" = "ComplianceInspection",
    "EnergyEfficiency" = "EnergyEfficiency",
    "EnvironmentalHazard" = "EnvironmentalHazard",
    "HomeInspection" = "HomeInspection",
    "Other" = "Other",
    "Pest" = "Pest",
    "PropertyPreservation" = "PropertyPreservation",
    "Valuation" = "Valuation"
}
;
/**
 * Term: Property Interest Rights Appraised Type Definition: Identifies the components of the bundle of rights inherent in the ownership of real estate is what is bought and sold in a real property transaction. In an appraisal, the rights being appraised must be stated, because any limitation on the rights of ownership may affect property value. This observation is at the property level versus the party level (individual or entity) named as the owner of such right. This is different than the ownership rights that may be recorded with the lien transaction.
 */
export enum PropertyInterestRightsAppraisedBase {
    "Easement" = "Easement",
    "Encroachment" = "Encroachment",
    "FeeSimpleEstate" = "FeeSimpleEstate",
    "LeaseFeeEstate" = "LeaseFeeEstate",
    "LeaseholdEstate" = "LeaseholdEstate",
    "License" = "License",
    "LifeEstate" = "LifeEstate",
    "Other" = "Other"
}
;
/**
 * Term: Property Interior Inspection Method Type Definition: A value from a MISMO prescribed list that represents the method by which the interior inspection was conducted.
 */
export enum PropertyInteriorInspectionMethodBase {
    "NoInspection" = "NoInspection",
    "Physical" = "Physical",
    "Virtual" = "Virtual"
}
;
/**
 * Term: Property License Type Definition: The type of license or certificate to operate as a right of use issued by a local jurisdiction for the property.
 */
export enum PropertyLicenseBase {
    "Other" = "Other",
    "Rental" = "Rental",
    "RightToUse" = "RightToUse"
}
;
/**
 * Term: Property Non Conforming To Surrounding Area Reason Type Definition: A value from a MISMO prescribed list that represents the reasons the property does not conform or is not similar to other properties in the surrounding area.
 */
export enum PropertyNonConformingToSurroundingAreaReasonBase {
    "DesignOrStyle" = "DesignOrStyle",
    "DifferentLandUse" = "DifferentLandUse",
    "FunctionalObsolescence" = "FunctionalObsolescence",
    "LotSize" = "LotSize",
    "Other" = "Other",
    "Overimprovement" = "Overimprovement",
    "Underimprovement" = "Underimprovement"
}
;
/**
 * Term: Property Owner Status Type Definition: A value from a MISMO prescribed list that specifies the time frame of a party's ownership of a property.
 */
export enum PropertyOwnerStatusBase {
    "Current" = "Current",
    "Proposed" = "Proposed"
}
;
/**
 * Term: Property Partial Interest Type Definition: Indicates the specific type of Partial Ownership Interest on the property as evaluated in the appraisal process. May also be referred to as a fractional ownership interest.
 */
export enum PropertyPartialInterestBase {
    "AirRights" = "AirRights",
    "Easement" = "Easement",
    "GroundLease" = "GroundLease",
    "HuntingRights" = "HuntingRights",
    "MineralRights" = "MineralRights",
    "Other" = "Other",
    "TimberRights" = "TimberRights",
    "WaterRights" = "WaterRights"
}
;
/**
 * Term: Property Photo Type Definition: Specifies the type of photo desired or included with the inspection.
 */
export enum PropertyPhotoBase {
    "AreaOfConcern" = "AreaOfConcern",
    "CompletedRepair" = "CompletedRepair",
    "Exterior" = "Exterior",
    "Interior" = "Interior",
    "Other" = "Other",
    "StreetView" = "StreetView"
}
;
/**
 * Term: Property Preservation Action Type Definition: Specifies the action taken to preserve and protect the property.
 */
export enum PropertyPreservationActionBase {
    "Other" = "Other",
    "Secured" = "Secured",
    "Unknown" = "Unknown",
    "Winterized" = "Winterized"
}
;
/**
 * Term: Property Preservation Status Type Definition: Specifies the status of the Property Preservation Action Type.
 */
export enum PropertyPreservationStatusBase {
    "Approved" = "Approved",
    "Cancelled" = "Cancelled",
    "Other" = "Other",
    "Required" = "Required"
}
;
/**
 * Term: Property Primary Entry Exit Method Type Definition: A value from a MISMO prescribed list that represents the primary ingress and/or egress method for the property.
 */
export enum PropertyPrimaryEntryExitMethodBase {
    "Other" = "Other",
    "PedestrianOnlyAccess" = "PedestrianOnlyAccess",
    "PrivateAirstrip" = "PrivateAirstrip",
    "PrivateStreet" = "PrivateStreet",
    "PublicStreet" = "PublicStreet",
    "Waterway" = "Waterway"
}
;
/**
 * Term: Property Rent Control Status Type Definition: A value from a MISMO prescribed list that represents the existence or likelihood of rent control on the property.
 */
export enum PropertyRentControlStatusBase {
    "Likely" = "Likely",
    "No" = "No",
    "Yes" = "Yes"
}
;
/**
 * Term: Property Typical Marketing Days Duration Type Definition: Specifies the estimated marketing duration in terms of days for the subject property before it is sold. The use of days to indicate the marketing duration is specific to the Employee Relocation Appraisal Forms.
 */
export enum PropertyTypicalMarketingDaysDurationBase {
    "30To120Days" = "30To120Days",
    "Over120Days" = "Over120Days",
    "Under30Days" = "Under30Days"
}
;
/**
 * Term: Property Usage Type Definition: A value from a MISMO prescribed list that specifies the intended usage of the property by the borrower.
 */
export enum PropertyUsageBase {
    "Investment" = "Investment",
    "Other" = "Other",
    "PrimaryResidence" = "PrimaryResidence",
    "SecondHome" = "SecondHome"
}
;
/**
 * Term: Property Valuation Conditional Conclusion Type Definition: A value from a MISMO prescribed list that represents the conclusions of the appraisal that there may be a dependency on future repairs or activities.
 */
export enum PropertyValuationConditionalConclusionBase {
    "AsIs" = "AsIs",
    "Other" = "Other",
    "SubjectToCompletionPerPlans" = "SubjectToCompletionPerPlans",
    "SubjectToExtraordinaryAssumptions" = "SubjectToExtraordinaryAssumptions",
    "SubjectToHypotheticalConditions" = "SubjectToHypotheticalConditions",
    "SubjectToInspection" = "SubjectToInspection",
    "SubjectToRepair" = "SubjectToRepair",
    "SubjectToRepairsProvingUnnecessary" = "SubjectToRepairsProvingUnnecessary"
}
;
/**
 * Term: Property Valuation Form Type Definition: Specifies the form used to provide the property valuation.
 */
export enum PropertyValuationFormBase {
    "AppraisalInstituteGreenAddendum" = "AppraisalInstituteGreenAddendum",
    "AppraisalUpdateAndOrCompletionReport" = "AppraisalUpdateAndOrCompletionReport",
    "ComplianceInspectionReport" = "ComplianceInspectionReport",
    "ConditionalCommitmentDirectEndorsementStatementOfAppraisedValue" = "ConditionalCommitmentDirectEndorsementStatementOfAppraisedValue",
    "DefinitionsStatementOfLimitingConditionsAndAppraisersCertification" = "DefinitionsStatementOfLimitingConditionsAndAppraisersCertification",
    "DesktopUnderwriterPropertyInspectionReport" = "DesktopUnderwriterPropertyInspectionReport",
    "EmployeeRelocationCouncil2001" = "EmployeeRelocationCouncil2001",
    "ExteriorOnlyInspectionIndividualCondominiumUnitAppraisalReport" = "ExteriorOnlyInspectionIndividualCondominiumUnitAppraisalReport",
    "ExteriorOnlyInspectionIndividualCooperativeInterestAppraisalReport" = "ExteriorOnlyInspectionIndividualCooperativeInterestAppraisalReport",
    "ExteriorOnlyInspectionResidentialAppraisalReport" = "ExteriorOnlyInspectionResidentialAppraisalReport",
    "ForYourProtectionGetAHomeInspection" = "ForYourProtectionGetAHomeInspection",
    "GeneralAddendum" = "GeneralAddendum",
    "HUD_VAAddendumToURLA" = "HUD_VAAddendumToURLA",
    "ImportantNoticeToHomebuyers" = "ImportantNoticeToHomebuyers",
    "IndividualCondominiumUnitAppraisalReport" = "IndividualCondominiumUnitAppraisalReport",
    "IndividualCooperativeInterestAppraisalReport" = "IndividualCooperativeInterestAppraisalReport",
    "LoanProspectorConditionAndMarketability" = "LoanProspectorConditionAndMarketability",
    "ManufacturedHomeAppraisalReport" = "ManufacturedHomeAppraisalReport",
    "ManufacturedHomeAppraisalReportVA" = "ManufacturedHomeAppraisalReportVA",
    "MarketConditionsAddendumToTheAppraisalReport" = "MarketConditionsAddendumToTheAppraisalReport",
    "MortgageesAssuranceOfCompletion" = "MortgageesAssuranceOfCompletion",
    "NewConstructionSubterraneanTermiteSoilTreatmentRecord" = "NewConstructionSubterraneanTermiteSoilTreatmentRecord",
    "OneUnitResidentialAppraisalFieldReviewReport" = "OneUnitResidentialAppraisalFieldReviewReport",
    "Other" = "Other",
    "RequestForDeterminationOfReasonableValue" = "RequestForDeterminationOfReasonableValue",
    "SmallResidentialIncomePropertyAppraisalReport" = "SmallResidentialIncomePropertyAppraisalReport",
    "SubterraneanTermiteSoilTreatmentBuildersGuarantee" = "SubterraneanTermiteSoilTreatmentBuildersGuarantee",
    "TwoToFourUnitResidentialAppraisalFieldReviewReport" = "TwoToFourUnitResidentialAppraisalFieldReviewReport",
    "UniformResidentialAppraisalReport" = "UniformResidentialAppraisalReport",
    "WorldwideEmployeeRelocationCouncilSummaryAppraisalReport" = "WorldwideEmployeeRelocationCouncilSummaryAppraisalReport"
}
;
/**
 * Term: Property Valuation Method Type Definition: A value from a MISMO prescribed list that specifies the method by which the property value was assessed.
 */
export enum PropertyValuationMethodBase {
    "AutomatedValuationModel" = "AutomatedValuationModel",
    "BrokerPriceOpinion" = "BrokerPriceOpinion",
    "DesktopAppraisal" = "DesktopAppraisal",
    "EstimateManuallyRenderedFromAPublishedGuide" = "EstimateManuallyRenderedFromAPublishedGuide",
    "ExteriorAppraisal" = "ExteriorAppraisal",
    "ExteriorHybridAppraisal" = "ExteriorHybridAppraisal",
    "HybridAppraisal" = "HybridAppraisal",
    "None" = "None",
    "Other" = "Other",
    "PriorAppraisalUsed" = "PriorAppraisalUsed",
    "TaxValuation" = "TaxValuation",
    "TraditionalAppraisal" = "TraditionalAppraisal"
}
;
/**
 * Term: Property Valuation Service Type Definition: Provides a categorization for valuation products in terms of USPAP compliance and level of professional services required.
 */
export enum PropertyValuationServiceBase {
    "LimitedSummaryReport" = "LimitedSummaryReport",
    "NonUSPAPAutomatedValuationModel" = "NonUSPAPAutomatedValuationModel",
    "NonUSPAPPriceOpinion" = "NonUSPAPPriceOpinion",
    "Other" = "Other",
    "RestrictedUseReport" = "RestrictedUseReport",
    "SelfContainedReport" = "SelfContainedReport"
}
;
/**
 * Term: Property Valuation State Type Definition: A value from a MISMO prescribed list that specifies that the subject property valuation amount is the amount at the point of origination or a subsequent evaluation.
 */
export enum PropertyValuationStateBase {
    "Original" = "Original",
    "Subsequent" = "Subsequent"
}
;
/**
 * Term: Property Zoning Category Type Definition: Specifies the property zoning category. The zoning category is not the official legal description.
 */
export enum PropertyZoningCategoryBase {
    "Agricultural" = "Agricultural",
    "Commercial" = "Commercial",
    "Industrial" = "Industrial",
    "NonResidentialGrandfatheredResidential" = "NonResidentialGrandfatheredResidential",
    "NoZoning" = "NoZoning",
    "Other" = "Other",
    "Residential" = "Residential"
}
;
/**
 * Term: Proration Item Type Definition: A value from a MISMO prescribed list that represents a cost already paid by one party that must be prorated at the time of loan closing and allocated between a property seller, homebuyer, or other parties to a real estate transaction.
 */
export enum ProrationItemBase {
    "BoroughPropertyTax" = "BoroughPropertyTax",
    "CityPropertyTax" = "CityPropertyTax",
    "CondominiumAssociationDues" = "CondominiumAssociationDues",
    "CondominiumAssociationSpecialAssessment" = "CondominiumAssociationSpecialAssessment",
    "CooperativeAssociationDues" = "CooperativeAssociationDues",
    "CooperativeAssociationSpecialAssessment" = "CooperativeAssociationSpecialAssessment",
    "CountyPropertyTax" = "CountyPropertyTax",
    "DistrictPropertyTax" = "DistrictPropertyTax",
    "EarthquakeInsurancePremium" = "EarthquakeInsurancePremium",
    "FloodInsurancePremium" = "FloodInsurancePremium",
    "GroundRent" = "GroundRent",
    "HailInsurancePremium" = "HailInsurancePremium",
    "HazardInsurancePremium" = "HazardInsurancePremium",
    "HomeownersAssociationDues" = "HomeownersAssociationDues",
    "HomeownersAssociationSpecialAssessment" = "HomeownersAssociationSpecialAssessment",
    "HomeownersInsurancePremium" = "HomeownersInsurancePremium",
    "InterestOnLoanAssumption" = "InterestOnLoanAssumption",
    "MortgageInsurancePremium" = "MortgageInsurancePremium",
    "Other" = "Other",
    "OtherAssessment" = "OtherAssessment",
    "PastDuePropertyTax" = "PastDuePropertyTax",
    "RentFromSubjectProperty" = "RentFromSubjectProperty",
    "SellersReserveAccountAssumption" = "SellersReserveAccountAssumption",
    "SpecialAssessment" = "SpecialAssessment",
    "StatePropertyTax" = "StatePropertyTax",
    "TownPropertyTax" = "TownPropertyTax",
    "Utilities" = "Utilities",
    "VolcanoInsurancePremium" = "VolcanoInsurancePremium",
    "WindAndStormInsurancePremium" = "WindAndStormInsurancePremium"
}
;
/**
 * Term: Published Valuation Source Guide Type Definition: A value from a MISMO list that represents the name of the guide and its publisher used as a data source in a valuation process.
 */
export enum PublishedValuationSourceGuideBase {
    "NADAYellowBook" = "NADAYellowBook",
    "Other" = "Other"
}
;
/**
 * Term: Purchase Credit Type Definition: A value from a MISMO prescribed list that specifies monetary credits commonly accepted as valid sources of borrower funds to close a mortgage loan transaction excluding adding amounts to the note amount.
 */
export enum PurchaseCreditBase {
    "BuydownFund" = "BuydownFund",
    "CommitmentOriginationFee" = "CommitmentOriginationFee",
    "EarnestMoney" = "EarnestMoney",
    "EmployerAssistedHousing" = "EmployerAssistedHousing",
    "FederalAgencyFundingFeeRefund" = "FederalAgencyFundingFeeRefund",
    "GiftOfEquity" = "GiftOfEquity",
    "LeasePurchaseFund" = "LeasePurchaseFund",
    "MIPremiumRefund" = "MIPremiumRefund",
    "Other" = "Other",
    "RelocationFunds" = "RelocationFunds",
    "SweatEquity" = "SweatEquity",
    "TradeEquity" = "TradeEquity",
    "TradeEquityFromPropertySwap" = "TradeEquityFromPropertySwap"
}
;
/**
 * Term: Purchase Credit Source Type Definition: A value from a MISMO prescribed list that specifies the party contributing credits to the transaction exclusive of the mortgage financing.
 */
export enum PurchaseCreditSourceBase {
    "BorrowerPaidOutsideClosing" = "BorrowerPaidOutsideClosing",
    "BuilderDeveloper" = "BuilderDeveloper",
    "Employer" = "Employer",
    "FederalAgency" = "FederalAgency",
    "Lender" = "Lender",
    "LocalAgency" = "LocalAgency",
    "NonParentRelative" = "NonParentRelative",
    "Other" = "Other",
    "Parent" = "Parent",
    "PropertySeller" = "PropertySeller",
    "RealEstateAgent" = "RealEstateAgent",
    "StateAgency" = "StateAgency",
    "UnrelatedFriend" = "UnrelatedFriend"
}
;
/**
 * Term: Qualified Mortgage Type Definition: A value from a MISMO prescribed list that specifies the specific standard used to satisfy Regulation Z Qualified Mortgage standards.
 */
export enum QualifiedMortgageBase {
    "BalloonPayment" = "BalloonPayment",
    "NotApplicable" = "NotApplicable",
    "NotAQualifiedMortgage" = "NotAQualifiedMortgage",
    "Other" = "Other",
    "SmallCreditor" = "SmallCreditor",
    "SmallCreditorRural" = "SmallCreditorRural",
    "Standard" = "Standard",
    "Temporary" = "Temporary",
    "TemporaryAgencyGSE" = "TemporaryAgencyGSE",
    "TemporarySmallCreditorBalloon" = "TemporarySmallCreditorBalloon"
}
;
/**
 * Term: Qualified Mortgage Temporary GSE Type Definition: Specifies the GSE Guidelines by which Temporary Qualified Mortgage eligibility was determined.
 */
export enum QualifiedMortgageTemporaryGSEBase {
    "FannieMae" = "FannieMae",
    "FreddieMac" = "FreddieMac"
}
;
/**
 * Term: Qualifying Method Type Definition: A value from a MISMO prescribed list that specifies the type of mortgage payment used to qualify the obligor(s) for the loan.
 */
export enum QualifyingMethodBase {
    "FirstYearCapRate" = "FirstYearCapRate",
    "FullyIndexed" = "FullyIndexed",
    "InterestOnly" = "InterestOnly",
    "MinimumPayment" = "MinimumPayment",
    "Other" = "Other",
    "StartRate" = "StartRate"
}
;
/**
 * Term: Qualifying Rate Type Definition: Indicates what interest rate was used to qualify the borrower in correlation with the note rate.
 */
export enum QualifyingRateBase {
    "AboveNoteRate" = "AboveNoteRate",
    "AtNoteRate" = "AtNoteRate",
    "BelowNoteRate" = "BelowNoteRate",
    "BoughtDownRate" = "BoughtDownRate",
    "Other" = "Other"
}
;
/**
 * Term: Quality Rating Type Definition: A rating of the quality of the identified component type.
 */
export enum QualityRatingBase {
    "Average" = "Average",
    "Excellent" = "Excellent",
    "Fair" = "Fair",
    "Good" = "Good",
    "Poor" = "Poor"
}
;
/**
 * Term: Rate Lock Type Definition: Specifies the method by which the rate lock period will be determined.
 */
export enum RateLockBase {
    "BestEfforts" = "BestEfforts",
    "Mandatory" = "Mandatory"
}
;
/**
 * Term: Rate Quote Type Definition: Indicates the type of data set included with the request. Initial limited data, or complete detail data.
 */
export enum RateQuoteBase {
    "Detail" = "Detail",
    "Estimated" = "Estimated",
    "Other" = "Other"
}
;
/**
 * Term: Real Estate Agent Type Definition: Describes the type of real estate agent.
 */
export enum RealEstateAgentBase {
    "Listing" = "Listing",
    "Other" = "Other",
    "Selling" = "Selling"
}
;
/**
 * Term: Reason For MI Policy Cancellation Type Definition: The reason for the cancellation of Active/In Force MI Coverage.
 */
export enum ReasonForMIPolicyCancellationBase {
    "ClaimDenial" = "ClaimDenial",
    "ClaimPaid" = "ClaimPaid",
    "CoverageNoLongerRequired" = "CoverageNoLongerRequired",
    "LoanPaidInFull" = "LoanPaidInFull",
    "LoanRefinanced" = "LoanRefinanced",
    "NonPaymentOfPremium" = "NonPaymentOfPremium",
    "Other" = "Other",
    "Rescinded" = "Rescinded"
}
;
/**
 * Term: Reason Property Not Used Type Definition: A value from a MISMO prescribed list that represents the reason the appraiser did not include the property in the Sales Comparison Approach.
 */
export enum ReasonPropertyNotUsedBase {
    "AccessoryDwellingUnit" = "AccessoryDwellingUnit",
    "Age" = "Age",
    "Amenities" = "Amenities",
    "AreaBelowGrade" = "AreaBelowGrade",
    "BathroomCount" = "BathroomCount",
    "BedroomCount" = "BedroomCount",
    "Condition" = "Condition",
    "DatedSale" = "DatedSale",
    "DesignOrStyleVariance" = "DesignOrStyleVariance",
    "GrossBuildingArea" = "GrossBuildingArea",
    "GrossLivingArea" = "GrossLivingArea",
    "LotSize" = "LotSize",
    "Other" = "Other",
    "Outbuildings" = "Outbuildings",
    "Proximity" = "Proximity",
    "Quality" = "Quality",
    "SaleOrTransferType" = "SaleOrTransferType",
    "SiteInfluence" = "SiteInfluence"
}
;
/**
 * Term: Recording Endorsement Type Definition: Describes the source and purpose of the recording endorsement information.
 */
export enum RecordingEndorsementBase {
    "AdditionalRecordingJurisdiction" = "AdditionalRecordingJurisdiction",
    "CorrectiveEndorsement" = "CorrectiveEndorsement",
    "Other" = "Other",
    "PreviouslyRecordedReference" = "PreviouslyRecordedReference",
    "PrimaryRecordingJurisdiction" = "PrimaryRecordingJurisdiction"
}
;
/**
 * Term: Recording Jurisdiction Type Definition: The type of Recording Jurisdiction in which the subject property is located.
 */
export enum RecordingJurisdictionBase {
    "County" = "County",
    "Other" = "Other"
}
;
/**
 * Term: Recording Transaction Identifier Type Definition: This enumerated attribute identifies what agency the transaction is intended for.
 */
export enum RecordingTransactionIdentifierBase {
    "CourtCase" = "CourtCase",
    "Other" = "Other",
    "Recorder" = "Recorder",
    "TitleEscrow" = "TitleEscrow"
}
;
/**
 *
 */
export enum ReferenceSigningBase {
    "NotSigned" = "NotSigned",
    "ReferenceAndContentSignedDirectly" = "ReferenceAndContentSignedDirectly",
    "ReferenceAndContentSignedIndirectly" = "ReferenceAndContentSignedIndirectly",
    "ReferenceCreatedFromSignedContent" = "ReferenceCreatedFromSignedContent",
    "ReferenceSignedDirectly" = "ReferenceSignedDirectly"
}
;
/**
 * Term: Refinance Cash Out Determination Type Definition: A value from a MISMO prescribed list that classifies a refinanced loan.
 */
export enum RefinanceCashOutDeterminationBase {
    "CashOut" = "CashOut",
    "LimitedCashOut" = "LimitedCashOut",
    "NoCashOut" = "NoCashOut",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Refinance Improvements Type Definition: Specifies whether the improvements associated with a refinance have been made to the property or if they are planned.
 */
export enum RefinanceImprovementsBase {
    "Made" = "Made",
    "ToBeMade" = "ToBeMade",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Refinance Initiator Type Definition: A value from a MISMO prescribed list that specifies who initiated the refinance.
 */
export enum RefinanceInitiatorBase {
    "BorrowerInitiated" = "BorrowerInitiated",
    "LenderInitiated" = "LenderInitiated",
    "Other" = "Other"
}
;
/**
 * Term: Refinance Primary Purpose Type Definition: Specifies the primary purpose of the refinance.
 */
export enum RefinancePrimaryPurposeBase {
    "AssetAcquisition" = "AssetAcquisition",
    "CapitalizedInterestTaxesInsuranceOrFees" = "CapitalizedInterestTaxesInsuranceOrFees",
    "Cash" = "Cash",
    "Convenience" = "Convenience",
    "DebtConsolidation" = "DebtConsolidation",
    "Education" = "Education",
    "EquityBuyout" = "EquityBuyout",
    "HomeImprovement" = "HomeImprovement",
    "InterestRateReduction" = "InterestRateReduction",
    "Medical" = "Medical",
    "MortgageTermReduction" = "MortgageTermReduction",
    "Other" = "Other",
    "PayoffLeaseholdInterest" = "PayoffLeaseholdInterest",
    "PrimaryLienPayoff" = "PrimaryLienPayoff",
    "SecondaryLienPayoff" = "SecondaryLienPayoff",
    "SpecialPurpose" = "SpecialPurpose",
    "UnsecuredLienPayoff" = "UnsecuredLienPayoff",
    "Unspecified" = "Unspecified"
}
;
/**
 * Term: Regulatory Agency Type Definition: A value from a MISMO prescribed list that specifies the regulatory agency.
 */
export enum RegulatoryAgencyBase {
    "CFPB" = "CFPB",
    "FDIC" = "FDIC",
    "FHA" = "FHA",
    "FHFA" = "FHFA",
    "FRB" = "FRB",
    "FRS" = "FRS",
    "HUD" = "HUD",
    "NationalCreditUnionAssociation" = "NationalCreditUnionAssociation",
    "OfficeOfTheComptrollerOfTheCurrency" = "OfficeOfTheComptrollerOfTheCurrency",
    "OfficeOfThriftSupervision" = "OfficeOfThriftSupervision",
    "Other" = "Other",
    "VA" = "VA"
}
;
/**
 * Term: Regulatory Product Match Type Definition: Indicates which information about the borrowers in the file matched the regulatory database information.
 */
export enum RegulatoryProductMatchBase {
    "Address" = "Address",
    "City" = "City",
    "FirstName" = "FirstName",
    "LastName" = "LastName",
    "Other" = "Other",
    "PostalCode" = "PostalCode",
    "State" = "State"
}
;
/**
 * Term: Regulatory Product Result Status Type Definition: Indicates the result of the current product request.
 */
export enum RegulatoryProductResultStatusBase {
    "Clear" = "Clear",
    "Error" = "Error",
    "Match" = "Match",
    "Other" = "Other"
}
;
/**
 * Term: Regulatory Product Source Type Definition: Identifies the regulatory product provided by the federal government. These products are used to screen borrower names to see if they match any names listed in the regulatory product.
 */
export enum RegulatoryProductSourceBase {
    "MilitaryLendingAct" = "MilitaryLendingAct",
    "OFAC" = "OFAC",
    "Other" = "Other"
}
;
/**
 * Term: Related Loan Investor Type Definition: Specifies the investor of the associated loan.
 */
export enum RelatedLoanInvestorBase {
    "FNM" = "FNM",
    "FRE" = "FRE",
    "Other" = "Other",
    "Seller" = "Seller",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Relationship Vesting Type Definition: A value from a MISMO prescribed list that specifies a type of real property ownership by one or more parties. This defines the rights of the parties to occupy, sell their interest in the property to others, to will the property, or to sever joint ownership of the property.
 */
export enum RelationshipVestingBase {
    "CommunityProperty" = "CommunityProperty",
    "Individual" = "Individual",
    "JointTenants" = "JointTenants",
    "JointTenantsWithRightOfSurvivorship" = "JointTenantsWithRightOfSurvivorship",
    "LeasedFee" = "LeasedFee",
    "LifeEstate" = "LifeEstate",
    "Other" = "Other",
    "TenantsByTheEntirety" = "TenantsByTheEntirety",
    "TenantsInCommon" = "TenantsInCommon",
    "Unassigned" = "Unassigned"
}
;
/**
 * Term: Remittance Record Type Definition: Specifies a type of remittance record.
 */
export enum RemittanceRecordBase {
    "ClosingProtectionLetterFee" = "ClosingProtectionLetterFee",
    "Endorsement" = "Endorsement",
    "Other" = "Other",
    "PolicyFee" = "PolicyFee",
    "PolicyPremium" = "PolicyPremium",
    "Tax" = "Tax"
}
;
/**
 * Term: Renewable Energy Component Type Definition: A value from a MISMO prescribed list that specifies the type of renewable energy component present on the site.
 */
export enum RenewableEnergyComponentBase {
    "Geothermal" = "Geothermal",
    "Other" = "Other",
    "Solar" = "Solar",
    "WindTurbine" = "WindTurbine"
}
;
/**
 * Term: Renewable Energy Component Ownership Type Definition: A value from a MISMO prescribed list that identifies the type of ownership for the renewable energy component.
 */
export enum RenewableEnergyComponentOwnershipBase {
    "Leased" = "Leased",
    "Other" = "Other",
    "Owned" = "Owned",
    "PowerPurchaseAgreement" = "PowerPurchaseAgreement"
}
;
/**
 * Term: Rent Adjustment Type Definition: Specifies the type of rent adjustment that is made when using the Rent Schedule Comparison approach to estimate the market rent of a property. Each type corresponds to a property feature that may affect the market rent.
 */
export enum RentAdjustmentBase {
    "Age" = "Age",
    "Appeal" = "Appeal",
    "Condition" = "Condition",
    "Design" = "Design",
    "GrossLivingArea" = "GrossLivingArea",
    "Location" = "Location",
    "Other" = "Other",
    "OtherConcessions" = "OtherConcessions",
    "RentConcessions" = "RentConcessions",
    "View" = "View"
}
;
/**
 * Term: Rental Feature Type Definition: Specifies a feature of a rental unit or property used in determining the estimated market rent of that unit or property.
 */
export enum RentalFeatureBase {
    "Age" = "Age",
    "Condition" = "Condition",
    "Lease" = "Lease",
    "Location" = "Location",
    "Other" = "Other",
    "UtilitiesIncluded" = "UtilitiesIncluded"
}
;
/**
 * Term: Rental Unit To Subject Comparison Type Definition: A value from a MISMO prescribed list that represents the overall rating of the differences between the comparable and the subject.
 */
export enum RentalUnitToSubjectComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Rent Control Status Type Definition: Specifies the existence or likelihood of rent controls such as controls on businesses and apartment complexes.
 */
export enum RentControlStatusBase {
    "Likely" = "Likely",
    "No" = "No",
    "Yes" = "Yes"
}
;
/**
 * Term: Rent Includes Utility Type Definition: Specifies the type of utility that is included in the monthly rent.
 */
export enum RentIncludesUtilityBase {
    "Cable" = "Cable",
    "Electric" = "Electric",
    "Gas" = "Gas",
    "Oil" = "Oil",
    "Other" = "Other",
    "Sewer" = "Sewer",
    "Trash" = "Trash",
    "Water" = "Water"
}
;
/**
 * Term: REO Marketing Party Type Definition: Identifies the party responsible for marketing the property in case of default.
 */
export enum REOMarketingPartyBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "MortgageInsuranceCompany" = "MortgageInsuranceCompany",
    "Other" = "Other",
    "Seller" = "Seller",
    "Servicer" = "Servicer",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Replacement Or Reproduction Cost Area Type Definition: A value from a MISMO prescribed list that represents the area, associated with this improvement, whose costs to reproduce or replace are being estimated.
 */
export enum ReplacementOrReproductionCostAreaBase {
    "AttachedGarage" = "AttachedGarage",
    "BuiltInGarage" = "BuiltInGarage",
    "Carport" = "Carport",
    "EnergyEfficientItems" = "EnergyEfficientItems",
    "FinishedArea" = "FinishedArea",
    "Foundation" = "Foundation",
    "NonStandardFinishedAreaAboveGrade" = "NonStandardFinishedAreaAboveGrade",
    "NonStandardFinishedAreaBelowGrade" = "NonStandardFinishedAreaBelowGrade",
    "Other" = "Other",
    "StandardFinishedAreaAboveGrade" = "StandardFinishedAreaAboveGrade",
    "StandardFinishedAreaBelowGrade" = "StandardFinishedAreaBelowGrade",
    "UnfinishedArea" = "UnfinishedArea",
    "UnfinishedAreaAboveGrade" = "UnfinishedAreaAboveGrade",
    "UnfinishedAreaBelowGrade" = "UnfinishedAreaBelowGrade"
}
;
/**
 * Term: Represented Party Type Definition: The party that the attorney represents.
 */
export enum RepresentedPartyBase {
    "Borrower" = "Borrower",
    "Other" = "Other",
    "RealEstateAgent" = "RealEstateAgent",
    "Servicer" = "Servicer"
}
;
/**
 * Term: Repurchase Demand Status Type Definition: A value from a MISMO prescribed list that represents the current status of the repurchase or replacement demand.
 */
export enum RepurchaseDemandStatusBase {
    "AssetPendingRepurchaseOrReplacement" = "AssetPendingRepurchaseOrReplacement",
    "AssetWasRepurchasedOrReplaced" = "AssetWasRepurchasedOrReplaced",
    "DemandInDispute" = "DemandInDispute",
    "DemandRejected" = "DemandRejected",
    "DemandWithdrawn" = "DemandWithdrawn",
    "Other" = "Other"
}
;
/**
 * Term: Repurchase Reason Type Definition: A value from a MISMO prescribed list that represents the reason for the repurchase or replacement.
 */
export enum RepurchaseReasonBase {
    "EarlyPaymentDefault" = "EarlyPaymentDefault",
    "Fraud" = "Fraud",
    "Other" = "Other",
    "RepsWarrantsBreach" = "RepsWarrantsBreach",
    "ServicerBreach" = "ServicerBreach"
}
;
/**
 * Term: Requested URLA Version Type Definition: A value from a MISMO prescribed list that identifies the version of the Uniform Residential Loan Application (URLA) specified in a document request.
 */
export enum RequestedURLAVersionBase {
    "EffectiveJanuary2021" = "EffectiveJanuary2021",
    "Other" = "Other",
    "RevisedJune2009" = "RevisedJune2009"
}
;
/**
 * Term: RESPA Conforming Year Type Definition: A value from a MISMO prescribed list that represents the version of RESPA regulation under which the loan was originated.
 */
export enum RESPAConformingYearBase {
    "January2010" = "January2010",
    "October2015" = "October2015",
    "Other" = "Other",
    "Pre2010" = "Pre2010"
}
;
/**
 * Term: Restriction Type Definition: A type of restriction that could impact the value or use of the property.
 */
export enum RestrictionBase {
    "Age" = "Age",
    "AnimalPet" = "AnimalPet",
    "Architectural" = "Architectural",
    "CommonArea" = "CommonArea",
    "HistoricPreservation" = "HistoricPreservation",
    "Income" = "Income",
    "LandUse" = "LandUse",
    "Other" = "Other",
    "PropertyUse" = "PropertyUse",
    "Racial" = "Racial",
    "Rental" = "Rental",
    "Resale" = "Resale",
    "SalePrice" = "SalePrice",
    "Unenforceable" = "Unenforceable"
}
;
/**
 * Term: Reverse Mortgage Reporting Action Type Definition: The reporting system status of the reverse mortgage as reported to the investor.
 */
export enum ReverseMortgageReportingActionBase {
    "CalledDue" = "CalledDue",
    "DefaultCondition" = "DefaultCondition",
    "DisbursementOrPaymentResumed" = "DisbursementOrPaymentResumed",
    "DisbursementOrPaymentSuspended" = "DisbursementOrPaymentSuspended",
    "ForeclosureLiquidatedHeldForSale" = "ForeclosureLiquidatedHeldForSale",
    "ForeclosureLiquidatedPendingConveyance" = "ForeclosureLiquidatedPendingConveyance",
    "ForeclosureLiquidatedThirdPartySale" = "ForeclosureLiquidatedThirdPartySale",
    "LegalActionInitiated" = "LegalActionInitiated",
    "Other" = "Other",
    "Payoff" = "Payoff",
    "ReferredForDeedInLieu" = "ReferredForDeedInLieu",
    "ReferredForForeclosure" = "ReferredForForeclosure",
    "Repurchase" = "Repurchase",
    "UnscheduledPaymentMade" = "UnscheduledPaymentMade"
}
;
/**
 * Term: Reverse Payment Plan Type Definition: Specifies the manner in which loan proceeds are paid out to the borrower.
 */
export enum ReversePaymentPlanBase {
    "LineOfCredit" = "LineOfCredit",
    "ModifiedTenure" = "ModifiedTenure",
    "ModifiedTerm" = "ModifiedTerm",
    "Other" = "Other",
    "Tenure" = "Tenure",
    "Term" = "Term"
}
;
/**
 * Term: Revision Category Type Definition: A value from a MISMO prescribed list that categorizes the appraisal report section in which a revision is being made.
 */
export enum RevisionCategoryBase {
    "AssignmentInformation" = "AssignmentInformation",
    "Certifications" = "Certifications",
    "CostApproach" = "CostApproach",
    "DisasterMitigation" = "DisasterMitigation",
    "DwellingExterior" = "DwellingExterior",
    "EnergyEfficientAndGreenFeatures" = "EnergyEfficientAndGreenFeatures",
    "Footer" = "Footer",
    "FunctionalObsolescence" = "FunctionalObsolescence",
    "HighestAndBestUse" = "HighestAndBestUse",
    "IncomeApproach" = "IncomeApproach",
    "ManufacturedHome" = "ManufacturedHome",
    "Market" = "Market",
    "Outbuilding" = "Outbuilding",
    "OverallQualityAndCondition" = "OverallQualityAndCondition",
    "PriorSaleAndTransferHistory" = "PriorSaleAndTransferHistory",
    "ProjectInformation" = "ProjectInformation",
    "Reconciliation" = "Reconciliation",
    "RentalInformation" = "RentalInformation",
    "SalesComparisonApproach" = "SalesComparisonApproach",
    "SalesContract" = "SalesContract",
    "Site" = "Site",
    "Sketch" = "Sketch",
    "SubjectListingInformation" = "SubjectListingInformation",
    "SubjectProperty" = "SubjectProperty",
    "SubjectPropertyAmenities" = "SubjectPropertyAmenities",
    "SupplementalInformation" = "SupplementalInformation",
    "UnitInterior" = "UnitInterior",
    "VehicleStorage" = "VehicleStorage"
}
;
/**
 * Term: Roof Estimated Age Range Type Definition: A value from a MISMO prescribed list that represents the estimated age range of the roof.
 */
export enum RoofEstimatedAgeRangeBase {
    "LessThanOneYear" = "LessThanOneYear",
    "OneToTenYears" = "OneToTenYears",
    "TenToTwentyYears" = "TenToTwentyYears",
    "TwentyOrMoreYears" = "TwentyOrMoreYears"
}
;
/**
 * Term: Roof Material Type Definition: Identifies the type of roofing material used in the structure.
 */
export enum RoofMaterialBase {
    "Aluminum" = "Aluminum",
    "Asbestos" = "Asbestos",
    "Asphalt" = "Asphalt",
    "CeramicTile" = "CeramicTile",
    "Clay" = "Clay",
    "Composition" = "Composition",
    "Concrete" = "Concrete",
    "Copper" = "Copper",
    "FireRetardant" = "FireRetardant",
    "Gravel" = "Gravel",
    "Metal" = "Metal",
    "Other" = "Other",
    "Roll" = "Roll",
    "Rubber" = "Rubber",
    "Shake" = "Shake",
    "Shingle" = "Shingle",
    "Slate" = "Slate",
    "SolarShingles" = "SolarShingles",
    "SpanishTile" = "SpanishTile",
    "Stone" = "Stone",
    "Synthetic" = "Synthetic",
    "Tar" = "Tar",
    "TarAndGravel" = "TarAndGravel",
    "Tile" = "Tile",
    "Tin" = "Tin",
    "Wood" = "Wood"
}
;
/**
 * Term: Room Type Definition: A value from a MISMO prescribed list that represents a category of room.
 */
export enum RoomBase {
    "AllRooms" = "AllRooms",
    "Bedroom" = "Bedroom",
    "BonusRoom" = "BonusRoom",
    "BreakfastRoom" = "BreakfastRoom",
    "Den" = "Den",
    "DiningRoom" = "DiningRoom",
    "EnsuiteFullBath" = "EnsuiteFullBath",
    "ExerciseRoom" = "ExerciseRoom",
    "FamilyRoom" = "FamilyRoom",
    "Foyer" = "Foyer",
    "FullBathroom" = "FullBathroom",
    "GameRoom" = "GameRoom",
    "GreatRoom" = "GreatRoom",
    "HalfBathroom" = "HalfBathroom",
    "Kitchen" = "Kitchen",
    "LaundryRoom" = "LaundryRoom",
    "Library" = "Library",
    "LivingRoom" = "LivingRoom",
    "Loft" = "Loft",
    "MasterBedroom" = "MasterBedroom",
    "MediaRoom" = "MediaRoom",
    "Mudroom" = "Mudroom",
    "Office" = "Office",
    "Other" = "Other",
    "RecreationRoom" = "RecreationRoom",
    "Sunroom" = "Sunroom",
    "UtilityRoom" = "UtilityRoom",
    "WalkInPantry" = "WalkInPantry",
    "Workshop" = "Workshop"
}
;
/**
 * Term: Room Condition Status Type Definition: A value from a MISMO prescribed list that represents the condition of the room.
 */
export enum RoomConditionStatusBase {
    "DamagedAndFunctional" = "DamagedAndFunctional",
    "DamagedAndNonfunctional" = "DamagedAndNonfunctional",
    "NewOrLikeNew" = "NewOrLikeNew",
    "Other" = "Other",
    "TypicalWearAndTear" = "TypicalWearAndTear"
}
;
/**
 * Term: Room Feature Type Definition: Specifies the features of the identified Room Type.
 */
export enum RoomFeatureBase {
    "BathroomFloors" = "BathroomFloors",
    "BathroomWainscot" = "BathroomWainscot",
    "Doors" = "Doors",
    "Other" = "Other",
    "TrimAndFinish" = "TrimAndFinish"
}
;
/**
 * Term: Room Updated Timeframe Type Definition: A value from a MISMO prescribed list that represents the estimated range of years when the room was updated.
 */
export enum RoomUpdatedTimeframeBase {
    "FiveToTenYears" = "FiveToTenYears",
    "LessThanOneYear" = "LessThanOneYear",
    "OneToFiveYears" = "OneToFiveYears",
    "Other" = "Other",
    "TenOrMoreYears" = "TenOrMoreYears"
}
;
/**
 * Term: Room Update Status Type Definition: A value from a MISMO prescribed list that represents the degree to which the room has been finished.
 */
export enum RoomUpdateStatusBase {
    "FullyUpdated" = "FullyUpdated",
    "NotUpdated" = "NotUpdated",
    "PartiallyUpdated" = "PartiallyUpdated"
}
;
/**
 * Term: Rowhouse Townhouse Location Type Definition: A value from a MISMO prescribed list that represents the location of the rowhouse/townhouse when there are other properties above or below.
 */
export enum RowhouseTownhouseLocationBase {
    "BottomUnit" = "BottomUnit",
    "MiddleUnit" = "MiddleUnit",
    "TopUnit" = "TopUnit"
}
;
/**
 * Term: Sale Type Definition: A value from a MISMO prescribed list that represents the type of sales transaction for the property.
 */
export enum SaleBase {
    "CourtOrderedNonForeclosureSale" = "CourtOrderedNonForeclosureSale",
    "EstateSale" = "EstateSale",
    "ForeclosureSale" = "ForeclosureSale",
    "LandSale" = "LandSale",
    "Other" = "Other",
    "PreSubdivisionSale" = "PreSubdivisionSale",
    "ProbateSale" = "ProbateSale",
    "RelocationSale" = "RelocationSale",
    "REOSale" = "REOSale",
    "SaleBetweenRelatedParties" = "SaleBetweenRelatedParties",
    "ShortSale" = "ShortSale",
    "Subdivided" = "Subdivided",
    "TrusteeJudicialForeclosureSale" = "TrusteeJudicialForeclosureSale",
    "TrusteeNonJudicialForeclosureSale" = "TrusteeNonJudicialForeclosureSale",
    "TypicallyMotivated" = "TypicallyMotivated"
}
;
/**
 * Term: Sales Concession Type Definition: Quantifies the type of concessions related to the transaction for which the contract has been analyzed.
 */
export enum SalesConcessionBase {
    "Automobile" = "Automobile",
    "ClosingCosts" = "ClosingCosts",
    "Downpayment" = "Downpayment",
    "InteriorDecorationAllowance" = "InteriorDecorationAllowance",
    "Other" = "Other",
    "Prepaids" = "Prepaids",
    "Repairs" = "Repairs",
    "ThirdPartyFinancingDiscounts" = "ThirdPartyFinancingDiscounts",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Sales Concession Provided By Type Definition: Specifies the party providing the sales concession.
 */
export enum SalesConcessionProvidedByBase {
    "Builder" = "Builder",
    "MortgageLender" = "MortgageLender",
    "Other" = "Other",
    "RealEstateBroker" = "RealEstateBroker",
    "Seller" = "Seller"
}
;
/**
 * Term: School Type Definition: The public school type as categorized by the common names for grades supported by the indicated school. Each state determines what grade range constitutes elementary education. According to its length, elementary education may be followed (or not) by a number of years of middle school education (generally three years). Secondary education takes place in grades 7-12, depending upon the laws and policies of states and local school districts. There is no national structure, curriculum or governing law; all laws and policies are set and enforced by the 50 state governments and the over 14,000 local school districts. All states and school districts have set the secondary school graduation level as the completion of 12th grade, and the common name for the secondary graduation qualification is the High School Diploma. This diploma name covers a variety of awards for different curricula and standards.
 */
export enum SchoolBase {
    "ElementarySchool" = "ElementarySchool",
    "HighSchool" = "HighSchool",
    "JuniorHighSchool" = "JuniorHighSchool",
    "MiddleSchool" = "MiddleSchool",
    "Other" = "Other"
}
;
/**
 * Term: School Maximum Grade Type Definition: The highest grade offered by the school.
Term: School Minimum Grade Type Definition: The lowest grade offered by the school.
 */
export enum SchoolGradeBase {
    "Eighth" = "Eighth",
    "Eleventh" = "Eleventh",
    "Fifth" = "Fifth",
    "First" = "First",
    "Fourth" = "Fourth",
    "Kindergarten" = "Kindergarten",
    "Ninth" = "Ninth",
    "PreKindergarten" = "PreKindergarten",
    "Second" = "Second",
    "Seventh" = "Seventh",
    "Sixth" = "Sixth",
    "Tenth" = "Tenth",
    "Third" = "Third",
    "Twelfth" = "Twelfth"
}
;
/**
 * Term: SCRA Relief Status Type Definition: Specifies the status of relief under the Servicemembers Civil Relief Act (SCRA) for any borrower on the loan.
 */
export enum SCRAReliefStatusBase {
    "NeverReceived" = "NeverReceived",
    "OneOrMoreBorrowersCurrentlyReceive" = "OneOrMoreBorrowersCurrentlyReceive",
    "OneOrMoreBorrowersPreviouslyReceived" = "OneOrMoreBorrowersPreviouslyReceived",
    "Other" = "Other"
}
;
/**
 * Term: Section Classification Type Definition: The section number on the Good Faith Estimate/HUD-1 associated with a fee type.
 */
export enum SectionClassificationBase {
    "100_" = "100",
    "1000_" = "1000",
    "1100_" = "1100",
    "1200_" = "1200",
    "1300_" = "1300",
    "200_" = "200",
    "300_" = "300",
    "400_" = "400",
    "500_" = "500",
    "600_" = "600",
    "700_" = "700",
    "800_" = "800",
    "900_" = "900"
}
;
/**
 * Term: Section Of Act Type Definition: Identifies the section of the National Housing Act which defines underwriting guidelines for VA or FHA loan evaluations.
 */
export enum SectionOfActBase {
    "184_" = "184",
    "184A" = "184A",
    "201S" = "201S",
    "201SD" = "201SD",
    "201U" = "201U",
    "201UD" = "201UD",
    "203B" = "203B",
    "203B2" = "203B2",
    "203B241" = "203B241",
    "203B251" = "203B251",
    "203H" = "203H",
    "203I" = "203I",
    "203K" = "203K",
    "203K241" = "203K241",
    "203K251" = "203K251",
    "204A" = "204A",
    "204GFHAGoodNeighborNextDoor" = "204GFHAGoodNeighborNextDoor",
    "204GSingleFamilyPropertyDisposition" = "204GSingleFamilyPropertyDisposition",
    "213_" = "213",
    "220_" = "220",
    "221_" = "221",
    "221D2" = "221D2",
    "221D2251" = "221D2251",
    "222_" = "222",
    "223E" = "223E",
    "233_" = "233",
    "234C" = "234C",
    "234C251" = "234C251",
    "235_" = "235",
    "237_" = "237",
    "240_" = "240",
    "245_" = "245",
    "245A" = "245A",
    "247_" = "247",
    "248_" = "248",
    "251_" = "251",
    "255_" = "255",
    "256_" = "256",
    "257_" = "257",
    "26101_" = "26101",
    "26102_" = "26102",
    "26201_" = "26201",
    "26202_" = "26202",
    "27001_" = "27001",
    "27002_" = "27002",
    "27003_" = "27003",
    "3710_" = "3710",
    "502USDARuralDevelopmentGuaranteedHousingLoan" = "502USDARuralDevelopmentGuaranteedHousingLoan",
    "513_" = "513",
    "729_" = "729",
    "8Y" = "8Y",
    "FHATitleIInsuranceForManufacturedHomes" = "FHATitleIInsuranceForManufacturedHomes",
    "FHATitleIInsuranceForPropertyImprovementLoans" = "FHATitleIInsuranceForPropertyImprovementLoans",
    "Other" = "Other"
}
;
/**
 * Term: Security Instrument Addendum Type Definition: Specifies the type of addendum referenced on the Security Instrument.
 */
export enum SecurityInstrumentAddendumBase {
    "FixedRateOption" = "FixedRateOption",
    "Other" = "Other"
}
;
/**
 * Term: Security Instrument Rider Type Definition: Specifies the type of rider referenced on the Security Instrument.
 */
export enum SecurityInstrumentRiderBase {
    "AffordableMeritRate" = "AffordableMeritRate",
    "ARM" = "ARM",
    "Balloon" = "Balloon",
    "Beneficiary" = "Beneficiary",
    "Biweekly" = "Biweekly",
    "Condominium" = "Condominium",
    "Construction" = "Construction",
    "GEM" = "GEM",
    "GPM" = "GPM",
    "HomesteadExemption" = "HomesteadExemption",
    "IllinoisLandTrust" = "IllinoisLandTrust",
    "InterestOnly" = "InterestOnly",
    "InterVivosRevocableTrust" = "InterVivosRevocableTrust",
    "Investor" = "Investor",
    "Leasehold" = "Leasehold",
    "ManufacturedHousing" = "ManufacturedHousing",
    "NonOwnerOccupancy" = "NonOwnerOccupancy",
    "OneToFourFamily" = "OneToFourFamily",
    "Other" = "Other",
    "OwnerOccupancy" = "OwnerOccupancy",
    "Prepayment" = "Prepayment",
    "PUD" = "PUD",
    "RateImprovement" = "RateImprovement",
    "Rehabilitation" = "Rehabilitation",
    "RenewalAndExtension" = "RenewalAndExtension",
    "SecondHome" = "SecondHome",
    "SecondLien" = "SecondLien",
    "TaxExemptFinancing" = "TaxExemptFinancing",
    "VA" = "VA",
    "VeteransLandBoard" = "VeteransLandBoard",
    "WaiverOfBorrowersRights" = "WaiverOfBorrowersRights",
    "WaiverOfDowerRights" = "WaiverOfDowerRights"
}
;
/**
 * Term: Security System Type Definition: A collection of values that describe the type or level of monitoring of a security system that is installed in a home.
 */
export enum SecuritySystemBase {
    "InteractiveAlarmSystem" = "InteractiveAlarmSystem",
    "LocalAlarmSystem" = "LocalAlarmSystem",
    "MonitoredAlarmSystem" = "MonitoredAlarmSystem",
    "Other" = "Other"
}
;
/**
 *
 */
export enum SelectionBase {
    "Comparison" = "Comparison",
    "Proposed" = "Proposed",
    "Requested" = "Requested",
    "Selected" = "Selected"
}
;
/**
 * Term: Service Type Definition: A value from a MISMO prescribed list that specifies the type of service being defined under the SERVICE element.
 */
export enum ServiceBase {
    "AutomatedUnderwritingSystem" = "AutomatedUnderwritingSystem",
    "Claim" = "Claim",
    "Credit" = "Credit",
    "DataChange" = "DataChange",
    "DocumentManagement" = "DocumentManagement",
    "DocumentPreparation" = "DocumentPreparation",
    "Flood" = "Flood",
    "Fraud" = "Fraud",
    "Inspection" = "Inspection",
    "LoanDelivery" = "LoanDelivery",
    "MERS" = "MERS",
    "MI" = "MI",
    "Other" = "Other",
    "PRIA" = "PRIA",
    "Tax" = "Tax",
    "Title" = "Title",
    "Valuation" = "Valuation",
    "VerificationOfAssets" = "VerificationOfAssets",
    "VerificationOfEmployment" = "VerificationOfEmployment",
    "VerificationOfIncome" = "VerificationOfIncome",
    "VerificationOfTaxTranscripts" = "VerificationOfTaxTranscripts"
}
;
/**
 * Term: Service Payment Credit Method Type Definition: This enumerated attribute identifies the type of credit card or other payment method.
 */
export enum ServicePaymentCreditMethodBase {
    "AmericanExpress" = "AmericanExpress",
    "DinersClub" = "DinersClub",
    "Discover" = "Discover",
    "MasterCard" = "MasterCard",
    "MasterCardDebit" = "MasterCardDebit",
    "Other" = "Other",
    "Visa" = "Visa",
    "VisaDebit" = "VisaDebit"
}
;
/**
 * Term: Service Payment Method Type Definition: A description of the method of funds transfer to be used for the transaction.
 */
export enum ServicePaymentMethodBase {
    "ACH" = "ACH",
    "CreditCard" = "CreditCard",
    "DebitCard" = "DebitCard",
    "OnAccount" = "OnAccount",
    "Other" = "Other",
    "Voucher" = "Voucher",
    "Wire" = "Wire"
}
;
/**
 * Term: Servicer Type Definition: Specifies a type of Servicer.
 */
export enum ServicerBase {
    "MasterServicer" = "MasterServicer",
    "Other" = "Other",
    "PrimaryServicer" = "PrimaryServicer",
    "PriorPrimaryServicer" = "PriorPrimaryServicer",
    "SpecialServicer" = "SpecialServicer",
    "Subservicer" = "Subservicer"
}
;
/**
 * Term: Servicing Comment Type Definition: Indicates the type of servicing comment.
 */
export enum ServicingCommentBase {
    "Bankruptcy" = "Bankruptcy",
    "Collection" = "Collection",
    "CustomerService" = "CustomerService",
    "Foreclosure" = "Foreclosure",
    "LossMitigation" = "LossMitigation",
    "Other" = "Other"
}
;
/**
 * Term: Servicing REO Exit Reason Type Definition: A value from a MISMO prescribed list that identifies the reason that the REO process is concluded as of the status date.
 */
export enum ServicingREOExitReasonBase {
    "Bankruptcy" = "Bankruptcy",
    "LegalActionInitiated" = "LegalActionInitiated",
    "LossMitigation" = "LossMitigation",
    "Other" = "Other",
    "REOSaleCompleted" = "REOSaleCompleted",
    "Rescinded" = "Rescinded"
}
;
/**
 * Term: Servicing REO Status Type Definition: A value from a MISMO prescribed list that identifies that the REO proceedings are active or closed as of the status date.
 */
export enum ServicingREOStatusBase {
    "Active" = "Active",
    "Closed" = "Closed",
    "Other" = "Other"
}
;
/**
 * Term: Servicing Stop Action Type Definition: A value from a MISMO prescribed list that specifies specialized servicing action to be taken or restricted regarding the servicing of an account.
 */
export enum ServicingStopActionBase {
    "AcceptCertifiedFundsOnly" = "AcceptCertifiedFundsOnly",
    "CeaseAndDesist" = "CeaseAndDesist",
    "DoNotAdvanceFunds" = "DoNotAdvanceFunds",
    "DoNotApplyARMAdjustments" = "DoNotApplyARMAdjustments",
    "DoNotApplyNormalPayments" = "DoNotApplyNormalPayments",
    "DoNotAssessLateCharge" = "DoNotAssessLateCharge",
    "DoNotDisburseFromEscrow" = "DoNotDisburseFromEscrow",
    "DoNotPerformEscrowAnalysis" = "DoNotPerformEscrowAnalysis",
    "DoNotSendDelinquentNotices" = "DoNotSendDelinquentNotices",
    "DoNotSolicitForOptionalProducts" = "DoNotSolicitForOptionalProducts",
    "Other" = "Other",
    "SpecialHandling" = "SpecialHandling"
}
;
/**
 * Term: Servicing Stop Reason Type Definition: A value from a MISMO prescribed list that specifies a loan condition that triggers a stop code action on the account.
 */
export enum ServicingStopReasonBase {
    "AccountInForeclosure" = "AccountInForeclosure",
    "AccountPaidInFull" = "AccountPaidInFull",
    "BadCheckHoldingNSF" = "BadCheckHoldingNSF",
    "BorrowerInBankruptcy" = "BorrowerInBankruptcy",
    "DisasterDeclared" = "DisasterDeclared",
    "FDCPARestrictionRequested" = "FDCPARestrictionRequested",
    "HardestHitFundParticipant" = "HardestHitFundParticipant",
    "Other" = "Other",
    "PayoffPending" = "PayoffPending",
    "PayoffQuoted" = "PayoffQuoted",
    "ServicingHasBeenTransferred" = "ServicingHasBeenTransferred",
    "ServicingREOProperty" = "ServicingREOProperty",
    "ServicingTransferGracePeriod" = "ServicingTransferGracePeriod",
    "WorkoutInProcess" = "WorkoutInProcess"
}
;
/**
 * Term: Servicing Transfer Role Type Definition: The role of this servicer in a servicing transfer transaction.
 */
export enum ServicingTransferRoleBase {
    "ServicingTransferee" = "ServicingTransferee",
    "ServicingTransferor" = "ServicingTransferor"
}
;
/**
 * Term: Servicing Transfer Status Type Definition: Defines whether the servicing on the loan will be retained or transferred to another party. Typically only on closed loans.
 */
export enum ServicingTransferStatusBase {
    "Released" = "Released",
    "Retained" = "Retained"
}
;
/**
 * Term: Sewer System Type Definition: A value from a MISMO prescribed list that represents a type of sewer system. Also used in conjunction with a type of utility ownership.
 */
export enum SewerSystemBase {
    "Cesspool" = "Cesspool",
    "Other" = "Other",
    "Septic" = "Septic"
}
;
/**
 * Term: Short Sale Offering Type Definition: Describes type of short sale related to a property.
 */
export enum ShortSaleOfferingBase {
    "Other" = "Other",
    "Preapproved" = "Preapproved",
    "Requested" = "Requested"
}
;
/**
 * Term: Signatory Role Type Definition: An authorized representative who is required to sign documents on behalf of the legal entity. To be used in conjunction with Required Signatory Count. If the rule varies per document, this information must be provided under DOCUMENT/DEAL_SETS.
 */
export enum SignatoryRoleBase {
    "Authorized" = "Authorized",
    "NotAuthorized" = "NotAuthorized",
    "Required" = "Required"
}
;
/**
 * Term: Actual Signature Type Definition: The ActualSignatureType contains the actual type of the signature applied to the signature field.
Term: Signature Type Definition: Contains the signature type proposed by the document creator. The actual type of the signature applied to the signature field may be different (please see audit trail).
 */
export enum SignatureBase {
    "Digital" = "Digital",
    "Image" = "Image",
    "Other" = "Other",
    "Text" = "Text",
    "Wet" = "Wet"
}
;
/**
 * Term: Signature Field Mark Type Definition: Specifies whether the signature field is for a full signature or for an initials mark.
 */
export enum SignatureFieldMarkBase {
    "FullSignature" = "FullSignature",
    "Initials" = "Initials"
}
;
/**
 * Term: Site Drainage Reason Type Definition: A value from a MISMO prescribed list that represents the drainage reason that may impact the property.
 */
export enum SiteDrainageReasonBase {
    "EvidenceOfErosion" = "EvidenceOfErosion",
    "ImproperGrading" = "ImproperGrading",
    "Other" = "Other",
    "StandingWater" = "StandingWater"
}
;
/**
 * Term: Site Feature Type Definition: A value from a MISMO prescribed list that represents a given characteristic associated with the site.
 */
export enum SiteFeatureBase {
    "CoastalBarrierResourcesSystem" = "CoastalBarrierResourcesSystem",
    "Drainage" = "Drainage",
    "ExcessLand" = "ExcessLand",
    "Landlocked" = "Landlocked",
    "Landscaping" = "Landscaping",
    "None" = "None",
    "Other" = "Other",
    "RoadFrontage" = "RoadFrontage",
    "Shape" = "Shape",
    "SoilSuitability" = "SoilSuitability",
    "SurplusLand" = "SurplusLand",
    "Topography" = "Topography",
    "Wetlands" = "Wetlands",
    "ZeroLotLine" = "ZeroLotLine"
}
;
/**
 * Term: Site Influence Type Definition: Specifies a type of condition that affects the property.
 */
export enum SiteInfluenceBase {
    "Agricultural" = "Agricultural",
    "Airport" = "Airport",
    "BodyOfWater" = "BodyOfWater",
    "BusyRoadway" = "BusyRoadway",
    "CommercialArea" = "CommercialArea",
    "Easements" = "Easements",
    "Encroachments" = "Encroachments",
    "EnvironmentalConditions" = "EnvironmentalConditions",
    "GolfCourse" = "GolfCourse",
    "GreenSpace" = "GreenSpace",
    "HighDensityResidential" = "HighDensityResidential",
    "HighPressureGasLine" = "HighPressureGasLine",
    "HistoricDistrict" = "HistoricDistrict",
    "IndustrialArea" = "IndustrialArea",
    "LandUses" = "LandUses",
    "LocalDistributionLine" = "LocalDistributionLine",
    "Location" = "Location",
    "None" = "None",
    "OilOrGasWell" = "OilOrGasWell",
    "Other" = "Other",
    "OverheadElectricPowerTransmissionLine" = "OverheadElectricPowerTransmissionLine",
    "Park" = "Park",
    "Pastoral" = "Pastoral",
    "PublicTransportationHub" = "PublicTransportationHub",
    "RailLine" = "RailLine",
    "Residential" = "Residential",
    "School" = "School",
    "StormwaterRetention" = "StormwaterRetention",
    "View" = "View",
    "WaterRights" = "WaterRights"
}
;
/**
 * Term: Site Influence Proximity Type Definition: A value from a MISMO prescribed list that represents proximity of the site influence to the property.
 */
export enum SiteInfluenceProximityBase {
    "Bordering" = "Bordering",
    "Offsite" = "Offsite",
    "Onsite" = "Onsite"
}
;
/**
 * Term: Site Influences Comparison Type Definition: A value from a MISMO prescribed list which represents the overall rating of the differences between the comparable and the subject for all types of site influences.
 */
export enum SiteInfluencesComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Site Utility Alternative Energy Source Type Definition: A collection of values that specify the alternative energy source that is used by a utility.
 */
export enum SiteUtilityAlternativeEnergySourceBase {
    "Biomass" = "Biomass",
    "Ethanol" = "Ethanol",
    "Geothermal" = "Geothermal",
    "Hydrogen" = "Hydrogen",
    "Other" = "Other",
    "Propane" = "Propane",
    "RecycledOils" = "RecycledOils",
    "Solar" = "Solar",
    "Wind" = "Wind"
}
;
/**
 * Term: Site Utility Ownership Type Definition: A value from a MISMO prescribed list that specifies whether the utility is public or non-public.
 */
export enum SiteUtilityOwnershipBase {
    "NonPublic" = "NonPublic",
    "Public" = "Public",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Site Valuation Method Type Definition: A value from a MISMO prescribed list that represents the method by which the site value is calculated.
 */
export enum SiteValuationMethodBase {
    "Allocation" = "Allocation",
    "Extraction" = "Extraction",
    "Other" = "Other",
    "SalesComparison" = "SalesComparison"
}
;
/**
 * Term: Site Zoning Compliance Type Definition: A value from a MISMO prescribed list that represents the level of compliance of the site to zoning regulations.
 */
export enum SiteZoningComplianceBase {
    "Illegal" = "Illegal",
    "Legal" = "Legal",
    "LegalNonConforming" = "LegalNonConforming",
    "NoZoning" = "NoZoning",
    "Undetermined" = "Undetermined",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Site Zoning Compliance Illegal Reason Type Definition: A value from a MISMO prescribed list that represents the reason that the site does not comply with zoning regulations.
 */
export enum SiteZoningComplianceIllegalReasonBase {
    "AccessoryDwellingUnit" = "AccessoryDwellingUnit",
    "DevelopmentStandards" = "DevelopmentStandards",
    "ExcessiveUnits" = "ExcessiveUnits",
    "LotSize" = "LotSize",
    "ManufacturedHome" = "ManufacturedHome",
    "Other" = "Other"
}
;
/**
 * Term: Skip Payment Action Type Definition: Specifies the action to be taken when a skip payment feature is exercised.
 */
export enum SkipPaymentActionBase {
    "CapitalizeInterest" = "CapitalizeInterest",
    "CreateSubordinateLoanComponent" = "CreateSubordinateLoanComponent",
    "ExtendTerm" = "ExtendTerm",
    "MakeupPayment" = "MakeupPayment",
    "Other" = "Other"
}
;
/**
 * Term: Skirting Material Type Definition: A value from a MISMO prescribed list that represents the skirting material.
 */
export enum SkirtingMaterialBase {
    "Asbestos" = "Asbestos",
    "Brick" = "Brick",
    "CementBoard" = "CementBoard",
    "ConcreteBlock" = "ConcreteBlock",
    "EngineeredWood" = "EngineeredWood",
    "Fiberglass" = "Fiberglass",
    "Log" = "Log",
    "Metal" = "Metal",
    "Other" = "Other",
    "PouredConcrete" = "PouredConcrete",
    "Vinyl" = "Vinyl",
    "Wood" = "Wood"
}
;
/**
 * Term: Solar Panel Array Location Type Definition: A value from a MISMO prescribed list that indicates the area of structure or site where the subject solar panel array is located.
 */
export enum SolarPanelArrayLocationBase {
    "Ground" = "Ground",
    "Other" = "Other",
    "Roof" = "Roof"
}
;
/**
 * Term: Solar Panel Array Ownership Type Definition: A value from a MISMO prescribed list that classifies the type of ownership of the solar panel on the property.
 */
export enum SolarPanelArrayOwnershipBase {
    "Leased" = "Leased",
    "Owned" = "Owned"
}
;
/**
 * Term: Solicitation Method Type Definition: Specifies the method used in an attempt to make contact with the right party in a solicitation effort.
 */
export enum SolicitationMethodBase {
    "Email" = "Email",
    "Letter" = "Letter",
    "Other" = "Other",
    "PhoneCall" = "PhoneCall"
}
;
/**
 *
 */
export enum SoundUnitOfMeasureBase {
    "Decibels" = "Decibels"
}
;
/**
 * Term: Special Airport Hazard Zone Type Definition: A value from a MISMO prescribed list that represents areas mapped as special airport hazard zones at the end of the runway(s) where aircraft accidents are most likely to occur.
 */
export enum SpecialAirportHazardZoneBase {
    "CivilAirportRunwayClearZone" = "CivilAirportRunwayClearZone",
    "MilitaryAirportAccidentPotentialZone1" = "MilitaryAirportAccidentPotentialZone1",
    "MilitaryAirportClearZone" = "MilitaryAirportClearZone",
    "None" = "None",
    "Other" = "Other"
}
;
/**
 * Term: Special Borrower Employer Relationship Type Definition: Specifies a unique category of employer which is the source of income for the borrower.
 */
export enum SpecialBorrowerEmployerRelationshipBase {
    "EmployedByRelative" = "EmployedByRelative",
    "Other" = "Other",
    "PropertySeller" = "PropertySeller",
    "RealEstateBroker" = "RealEstateBroker"
}
;
/**
 * Term: Standardized Address Unit Designator Type Definition: A value from a MISMO prescribed list that specifies a further level of detail for a street address, for example, Suite or Unit, in a standardized abbreviated form approved by USPS. This list is based on the USPS Publication 28 on Postal Addressing Standards.
 */
export enum StandardizedAddressUnitDesignatorBase {
    "APT" = "APT",
    "BLDG" = "BLDG",
    "BSMT" = "BSMT",
    "DEPT" = "DEPT",
    "FL" = "FL",
    "FRNT" = "FRNT",
    "HNGR" = "HNGR",
    "KEY" = "KEY",
    "LBBY" = "LBBY",
    "LOT" = "LOT",
    "LOWR" = "LOWR",
    "OFC" = "OFC",
    "Other" = "Other",
    "PH" = "PH",
    "PIER" = "PIER",
    "REAR" = "REAR",
    "RM" = "RM",
    "SIDE" = "SIDE",
    "SLIP" = "SLIP",
    "SPC" = "SPC",
    "STE" = "STE",
    "STOP" = "STOP",
    "TRLR" = "TRLR",
    "UNIT" = "UNIT",
    "UPPR" = "UPPR"
}
;
/**
 * Term: Standardized PR Urbanization Type Definition: A value from a MISMO prescribed list that describes text used in a Spanish language Puerto Rican street address that contains an urbanization that is not preceded by the prefix URB, and is expressed as a standardized USPS abbreviation as outlined in USPS publication 28.
 */
export enum StandardizedPRUrbanizationBase {
    "ALT" = "ALT",
    "ALTS" = "ALTS",
    "BDA" = "BDA",
    "BO" = "BO",
    "BOSQUE" = "BOSQUE",
    "BRISA" = "BRISA",
    "BRISAS" = "BRISAS",
    "CHALETS" = "CHALETS",
    "CIUDAD" = "CIUDAD",
    "COLINA" = "COLINA",
    "COLINAS" = "COLINAS",
    "COMUNIDAD" = "COMUNIDAD",
    "EST" = "EST",
    "EXT" = "EXT",
    "HACIENDA" = "HACIENDA",
    "IND" = "IND",
    "JARD" = "JARD",
    "LOMA" = "LOMA",
    "LOMAS" = "LOMAS",
    "MANS" = "MANS",
    "Other" = "Other",
    "PARCELA" = "PARCELA",
    "PARCELAS" = "PARCELAS",
    "PARQ" = "PARQ",
    "PASEO" = "PASEO",
    "PORTAL" = "PORTAL",
    "PORTALES" = "PORTALES",
    "PRADERA" = "PRADERA",
    "QUINTAS" = "QUINTAS",
    "REPTO" = "REPTO",
    "RES" = "RES",
    "RIBERAS" = "RIBERAS",
    "SECT" = "SECT",
    "TERR" = "TERR",
    "VALLE" = "VALLE",
    "VILLA" = "VILLA",
    "VILLAS" = "VILLAS",
    "VISTA" = "VISTA",
    "VISTAS" = "VISTAS"
}
;
/**
 * Term: Standardized Rural Highway Contract Route Type Definition: A value from a MISMO prescribed list that describes the name of the Rural Route, Highway Contract Route, or other special route type, expressed as the standardized USPS abbreviation as outlined in USPS publication 28.
 */
export enum StandardizedRuralHighwayContractRouteBase {
    "HC" = "HC",
    "Other" = "Other",
    "RR" = "RR"
}
;
/**
 * Term: Standardized Spanish Address Designator Type Definition: A value from a MISMO prescribed list that describes text sometimes used in a Spanish language Puerto Rican address, instead of a specific street address, expressed as a standardized USPS abbreviation as outlined in USPS publication 28.
 */
export enum StandardizedSpanishAddressDesignatorBase {
    "ALT" = "ALT",
    "ALTS" = "ALTS",
    "BDA" = "BDA",
    "BO" = "BO",
    "CARR" = "CARR",
    "COND" = "COND",
    "COOP" = "COOP",
    "DEPT" = "DEPT",
    "EDIF" = "EDIF",
    "EST" = "EST",
    "EXT" = "EXT",
    "INDINT" = "INDINT",
    "JARD" = "JARD",
    "MANS" = "MANS",
    "Other" = "Other",
    "PARC" = "PARC",
    "QBDA" = "QBDA",
    "REPTO" = "REPTO",
    "RES" = "RES",
    "SECC" = "SECC",
    "SECT" = "SECT",
    "TERR" = "TERR",
    "URB" = "URB"
}
;
/**
 * Term: Standardized Street Suffix Type Definition: A value from a MISMO prescribed list that describes the trailing designator in a street address expressed as the standardized USPS abbreviation as outlined in USPS publication 28.
 */
export enum StandardizedStreetSuffixBase {
    "ALY" = "ALY",
    "ANX" = "ANX",
    "ARC" = "ARC",
    "AVE" = "AVE",
    "BCH" = "BCH",
    "BG" = "BG",
    "BGS" = "BGS",
    "BLF" = "BLF",
    "BLFS" = "BLFS",
    "BLVD" = "BLVD",
    "BND" = "BND",
    "BR" = "BR",
    "BRG" = "BRG",
    "BRK" = "BRK",
    "BRKS" = "BRKS",
    "BTM" = "BTM",
    "BYP" = "BYP",
    "BYU" = "BYU",
    "CIR" = "CIR",
    "CIRS" = "CIRS",
    "CLB" = "CLB",
    "CLF" = "CLF",
    "CLFS" = "CLFS",
    "CMN" = "CMN",
    "CMNS" = "CMNS",
    "COR" = "COR",
    "CORS" = "CORS",
    "CP" = "CP",
    "CPE" = "CPE",
    "CRES" = "CRES",
    "CRK" = "CRK",
    "CRSE" = "CRSE",
    "CRST" = "CRST",
    "CSWY" = "CSWY",
    "CT" = "CT",
    "CTR" = "CTR",
    "CTRS" = "CTRS",
    "CTS" = "CTS",
    "CURV" = "CURV",
    "CV" = "CV",
    "CVS" = "CVS",
    "CYN" = "CYN",
    "DL" = "DL",
    "DM" = "DM",
    "DR" = "DR",
    "DRS" = "DRS",
    "DV" = "DV",
    "EST" = "EST",
    "ESTS" = "ESTS",
    "EXPY" = "EXPY",
    "EXT" = "EXT",
    "EXTS" = "EXTS",
    "FALL" = "FALL",
    "FLD" = "FLD",
    "FLDS" = "FLDS",
    "FLS" = "FLS",
    "FLT" = "FLT",
    "FLTS" = "FLTS",
    "FRD" = "FRD",
    "FRDS" = "FRDS",
    "FRG" = "FRG",
    "FRGS" = "FRGS",
    "FRK" = "FRK",
    "FRKS" = "FRKS",
    "FRST" = "FRST",
    "FRY" = "FRY",
    "FT" = "FT",
    "FWY" = "FWY",
    "GDN" = "GDN",
    "GDNS" = "GDNS",
    "GLN" = "GLN",
    "GLNS" = "GLNS",
    "GRN" = "GRN",
    "GRNS" = "GRNS",
    "GRV" = "GRV",
    "GRVS" = "GRVS",
    "GTWY" = "GTWY",
    "HBR" = "HBR",
    "HBRS" = "HBRS",
    "HL" = "HL",
    "HLS" = "HLS",
    "HOLW" = "HOLW",
    "HOLWS" = "HOLWS",
    "HTS" = "HTS",
    "HVN" = "HVN",
    "HWY" = "HWY",
    "INLT" = "INLT",
    "IS" = "IS",
    "ISLE" = "ISLE",
    "ISS" = "ISS",
    "JCT" = "JCT",
    "JCTS" = "JCTS",
    "KNL" = "KNL",
    "KNLS" = "KNLS",
    "KY" = "KY",
    "KYS" = "KYS",
    "LAND" = "LAND",
    "LCK" = "LCK",
    "LCKS" = "LCKS",
    "LDG" = "LDG",
    "LF" = "LF",
    "LGT" = "LGT",
    "LGTS" = "LGTS",
    "LKS" = "LKS",
    "LN" = "LN",
    "LNDG" = "LNDG",
    "LOOP" = "LOOP",
    "MALL" = "MALL",
    "MDW" = "MDW",
    "MDWS" = "MDWS",
    "MEWS" = "MEWS",
    "ML" = "ML",
    "MLS" = "MLS",
    "MNR" = "MNR",
    "MNRS" = "MNRS",
    "MSN" = "MSN",
    "MT" = "MT",
    "MTN" = "MTN",
    "MTNS" = "MTNS",
    "MTWY" = "MTWY",
    "NCK" = "NCK",
    "OPAS" = "OPAS",
    "ORCH" = "ORCH",
    "Other" = "Other",
    "OVAL" = "OVAL",
    "PARK" = "PARK",
    "PASS" = "PASS",
    "PATH" = "PATH",
    "PIKE" = "PIKE",
    "PKWY" = "PKWY",
    "PL" = "PL",
    "PLN" = "PLN",
    "PLNS" = "PLNS",
    "PLZ" = "PLZ",
    "PNE" = "PNE",
    "PNES" = "PNES",
    "PR" = "PR",
    "PRT" = "PRT",
    "PRTS" = "PRTS",
    "PSGE" = "PSGE",
    "PT" = "PT",
    "PTS" = "PTS",
    "RADL" = "RADL",
    "RAMP" = "RAMP",
    "RD" = "RD",
    "RDG" = "RDG",
    "RDGS" = "RDGS",
    "RDS" = "RDS",
    "RIV" = "RIV",
    "RNCH" = "RNCH",
    "ROW" = "ROW",
    "RPD" = "RPD",
    "RPDS" = "RPDS",
    "RST" = "RST",
    "RTE" = "RTE",
    "RUE" = "RUE",
    "RUN" = "RUN",
    "SHL" = "SHL",
    "SHLS" = "SHLS",
    "SHR" = "SHR",
    "SHRS" = "SHRS",
    "SKWY" = "SKWY",
    "SMT" = "SMT",
    "SPG" = "SPG",
    "SPGS" = "SPGS",
    "SPUR" = "SPUR",
    "SQ" = "SQ",
    "SQS" = "SQS",
    "ST" = "ST",
    "STA" = "STA",
    "STRA" = "STRA",
    "STRM" = "STRM",
    "STS" = "STS",
    "TER" = "TER",
    "TPKE" = "TPKE",
    "TRAK" = "TRAK",
    "TRCE" = "TRCE",
    "TRFY" = "TRFY",
    "TRL" = "TRL",
    "TRLR" = "TRLR",
    "TRWY" = "TRWY",
    "TUNL" = "TUNL",
    "XING" = "XING",
    "XRD" = "XRD",
    "XRDS" = "XRDS"
}
;
/**
 * Term: State Refinance Program Type Definition: A collection of values that specify a state program under which a refinance transaction is executed.
 */
export enum StateRefinanceProgramBase {
    "ConsolidationExtensionAndModificationAgreement" = "ConsolidationExtensionAndModificationAgreement",
    "Other" = "Other",
    "TexasHomeEquity" = "TexasHomeEquity"
}
;
/**
 * Term: Street Access Type Definition: A value from a MISMO prescribed list that represents the means of access and exit to and from the property.
 */
export enum StreetAccessBase {
    "Alley" = "Alley",
    "Arterial" = "Arterial",
    "Collector" = "Collector",
    "CulDeSac" = "CulDeSac",
    "DeadEnd" = "DeadEnd",
    "Local" = "Local",
    "Other" = "Other",
    "Rural" = "Rural"
}
;
/**
 * Term: Structural Design Type Definition: A value from a MISMO prescribed list that represents the type of structural design when dwellings are connected (e.g. rowhouse, townhouse).
 */
export enum StructuralDesignBase {
    "Highrise" = "Highrise",
    "Lowrise" = "Lowrise",
    "Midrise" = "Midrise",
    "Other" = "Other",
    "RowhouseTownhouse" = "RowhouseTownhouse",
    "SemiDetached" = "SemiDetached"
}
;
/**
 * Term: Structure Analysis Rating Item Type Definition: Specifies the characteristic of the structure being rated. The rating value of the characteristic is specified by Rating Condition Type.
 */
export enum StructureAnalysisRatingItemBase {
    "AdequacyOfClosetsAndStorage" = "AdequacyOfClosetsAndStorage",
    "AdequacyOfInsulation" = "AdequacyOfInsulation",
    "AppealAndMarketability" = "AppealAndMarketability",
    "Condition" = "Condition",
    "ConstructionQuality" = "ConstructionQuality",
    "Electrical" = "Electrical",
    "ExteriorAppeal" = "ExteriorAppeal",
    "FunctionalUtility" = "FunctionalUtility",
    "InteriorAppeal" = "InteriorAppeal",
    "KitchenEquipment" = "KitchenEquipment",
    "LocationWithinProjectOrView" = "LocationWithinProjectOrView",
    "Other" = "Other",
    "OverallLivability" = "OverallLivability",
    "Plumbing" = "Plumbing",
    "RoomSizeAndLayout" = "RoomSizeAndLayout",
    "Skirting" = "Skirting",
    "TrimAndFinish" = "TrimAndFinish"
}
;
/**
 * Term: Structure Feature Type Definition: Specifies an aspect of the structure that is typical to its neighborhood.
 */
export enum StructureFeatureBase {
    "Age" = "Age",
    "Appeal" = "Appeal",
    "Design" = "Design",
    "GrossLivingArea" = "GrossLivingArea",
    "LotShapeAndTopography" = "LotShapeAndTopography",
    "LotSize" = "LotSize",
    "MaterialAndConstruction" = "MaterialAndConstruction",
    "Other" = "Other",
    "Overall" = "Overall",
    "Utilities" = "Utilities",
    "View" = "View"
}
;
/**
 * Term: Subject To Completion Feature Comparison Type Definition: A value from a MISMO prescribed list that represents the comparison of the materials and workmanship to the original plans and specifications.
 */
export enum SubjectToCompletionFeatureComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Subservicer Rights Type Definition: Specifies the servicing rights that a subservicer holds.
 */
export enum SubservicerRightsBase {
    "AllLoans" = "AllLoans",
    "OneLoan" = "OneLoan",
    "OneRemittance" = "OneRemittance",
    "OneSecurity" = "OneSecurity",
    "Other" = "Other"
}
;
/**
 * Term: Summary Amount Type Definition: Identifies the type of summary amount.
 */
export enum SummaryAmountBase {
    "Other" = "Other",
    "SubtotalLiabilitiesForRentalPropertyBalance" = "SubtotalLiabilitiesForRentalPropertyBalance",
    "SubtotalLiabilitiesForRentalPropertyMonthlyPayment" = "SubtotalLiabilitiesForRentalPropertyMonthlyPayment",
    "SubtotalLiabilitiesMonthlyPayment" = "SubtotalLiabilitiesMonthlyPayment",
    "SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensBalance" = "SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensBalance",
    "SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensMonthlyPayment" = "SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensMonthlyPayment",
    "SubtotalLiquidAssetsNotIncludingGift" = "SubtotalLiquidAssetsNotIncludingGift",
    "SubtotalNonLiquidAssets" = "SubtotalNonLiquidAssets",
    "SubtotalOmittedLiabilitiesBalance" = "SubtotalOmittedLiabilitiesBalance",
    "SubtotalOmittedLiabilitiesMonthlyPayment" = "SubtotalOmittedLiabilitiesMonthlyPayment",
    "SubtotalResubordinatedLiabilitiesBalanceForSubjectProperty" = "SubtotalResubordinatedLiabilitiesBalanceForSubjectProperty",
    "SubtotalResubordinatedLiabilitiesMonthlyPaymentForSubjectProperty" = "SubtotalResubordinatedLiabilitiesMonthlyPaymentForSubjectProperty",
    "SubtotalSubjectPropertyLiensPaidByClosingBalance" = "SubtotalSubjectPropertyLiensPaidByClosingBalance",
    "SubtotalSubjectPropertyLiensPaidByClosingMonthlyPayment" = "SubtotalSubjectPropertyLiensPaidByClosingMonthlyPayment",
    "TotalLiabilitiesBalance" = "TotalLiabilitiesBalance",
    "TotalMonthlyIncomeNotIncludingNetRentalIncome" = "TotalMonthlyIncomeNotIncludingNetRentalIncome",
    "TotalPresentHousingExpense" = "TotalPresentHousingExpense",
    "UndrawnHELOC" = "UndrawnHELOC"
}
;
/**
 * Term: Supporting Record Type Definition: A value from a MISMO prescribed list that classifies the human perceivable presentation of an electronic record used to provide evidence.
 */
export enum SupportingRecordBase {
    "CallRecording" = "CallRecording",
    "ConversationSummary" = "ConversationSummary",
    "CreditReportingHistory" = "CreditReportingHistory",
    "Document" = "Document",
    "ElectronicCommunication" = "ElectronicCommunication",
    "ElectronicImage" = "ElectronicImage",
    "Facsimile" = "Facsimile",
    "Other" = "Other",
    "ServicingFile" = "ServicingFile",
    "ServicingFile:BankruptcyNotes" = "ServicingFile:BankruptcyNotes",
    "ServicingFile:BorrowerSuppliedInformation" = "ServicingFile:BorrowerSuppliedInformation",
    "ServicingFile:CollectionNotes" = "ServicingFile:CollectionNotes",
    "ServicingFile:EscrowAnalysisInformation" = "ServicingFile:EscrowAnalysisInformation",
    "ServicingFile:ForeclosureNotes" = "ServicingFile:ForeclosureNotes",
    "ServicingFile:GeneralCustomerServiceNotes" = "ServicingFile:GeneralCustomerServiceNotes",
    "ServicingFile:HomeownersInsuranceInformation" = "ServicingFile:HomeownersInsuranceInformation",
    "ServicingFile:LoanModificationInvestorCriteria" = "ServicingFile:LoanModificationInvestorCriteria",
    "ServicingFile:LossMitigationNotes" = "ServicingFile:LossMitigationNotes",
    "ServicingFile:MortgageInsuranceInformation" = "ServicingFile:MortgageInsuranceInformation",
    "ServicingFile:Other" = "ServicingFile:Other",
    "ServicingFile:PaymentHistory" = "ServicingFile:PaymentHistory",
    "ServicingFile:RealEstateTaxInformation" = "ServicingFile:RealEstateTaxInformation",
    "ServicingFile:ServicerCorrespondence" = "ServicingFile:ServicerCorrespondence",
    "ServicingFile:ServicerStructuredData" = "ServicingFile:ServicerStructuredData",
    "ServicingFile:ThirdPartyStructuredData" = "ServicingFile:ThirdPartyStructuredData",
    "VoiceMailRecording" = "VoiceMailRecording"
}
;
/**
 * Term: Supporting Record Set Purpose Type Definition: A value from a MISMO prescribed list that represents the intended use of a supporting record set.
 */
export enum SupportingRecordSetPurposeBase {
    "Acknowledgement" = "Acknowledgement",
    "FollowUpRequest" = "FollowUpRequest",
    "FollowUpResponse" = "FollowUpResponse",
    "InitiatorCorrespondence" = "InitiatorCorrespondence",
    "Other" = "Other",
    "Research" = "Research",
    "Resolution" = "Resolution"
}
;
/**
 * Term: Swimming Pool Feature Type Definition: A value from a MISMO prescribed list that represents a feature of the swimming pool.
 */
export enum SwimmingPoolFeatureBase {
    "Caged" = "Caged",
    "Heated" = "Heated",
    "Indoor" = "Indoor",
    "Other" = "Other"
}
;
/**
 * Term: Tax Authority Type Definition: Identifies the type of tax to be paid.
 */
export enum TaxAuthorityBase {
    "AnnualCityBondAuthorityTax" = "AnnualCityBondAuthorityTax",
    "AnnualCountyBondAuthorityTax" = "AnnualCountyBondAuthorityTax",
    "AssessmentDistrictTax" = "AssessmentDistrictTax",
    "BondAuthorityTax" = "BondAuthorityTax",
    "BoroughTax" = "BoroughTax",
    "CentralAppraisalTaxingAuthorityTax" = "CentralAppraisalTaxingAuthorityTax",
    "CentralCollectionTaxingAuthorityTax" = "CentralCollectionTaxingAuthorityTax",
    "CityAndSchoolTax" = "CityAndSchoolTax",
    "CityTax" = "CityTax",
    "CombinationCollectionTax" = "CombinationCollectionTax",
    "CondoAssessmentTax" = "CondoAssessmentTax",
    "ConservancyTax" = "ConservancyTax",
    "CountyCollectedByOtherTaxingAuthorityTax" = "CountyCollectedByOtherTaxingAuthorityTax",
    "CountyTax" = "CountyTax",
    "DrainageTax" = "DrainageTax",
    "FireOrPoliceTax" = "FireOrPoliceTax",
    "GroundRentTax" = "GroundRentTax",
    "HomeownersAssociationTax" = "HomeownersAssociationTax",
    "HospitalsTax" = "HospitalsTax",
    "ImprovementTax" = "ImprovementTax",
    "IrrigationTax" = "IrrigationTax",
    "JuniorCollegesTax" = "JuniorCollegesTax",
    "LightingTax" = "LightingTax",
    "MobileHomeAuthorityTax" = "MobileHomeAuthorityTax",
    "MunicipalityTax" = "MunicipalityTax",
    "MunicipalServicesTax" = "MunicipalServicesTax",
    "OccupancyTax" = "OccupancyTax",
    "Other" = "Other",
    "ParishTax" = "ParishTax",
    "PavingTax" = "PavingTax",
    "PUDTax" = "PUDTax",
    "ReclamationDistrictTax" = "ReclamationDistrictTax",
    "RoadBondTax" = "RoadBondTax",
    "RoadsOrBridgesTax" = "RoadsOrBridgesTax",
    "SanitationTax" = "SanitationTax",
    "SchoolDistrictTax" = "SchoolDistrictTax",
    "SemiannualCityBondAuthorityTax" = "SemiannualCityBondAuthorityTax",
    "SemiannualCountyBondAuthorityTax" = "SemiannualCountyBondAuthorityTax",
    "SpecialApplicationsTax" = "SpecialApplicationsTax",
    "SpecialAssessment" = "SpecialAssessment",
    "SpecialDistrictTax" = "SpecialDistrictTax",
    "StateAndCountyTax" = "StateAndCountyTax",
    "StateTaxingAuthorityTax" = "StateTaxingAuthorityTax",
    "StormTax" = "StormTax",
    "SupplementalTax" = "SupplementalTax",
    "TaxBillFee" = "TaxBillFee",
    "TownshipAndCountyTax" = "TownshipAndCountyTax",
    "TownshipTax" = "TownshipTax",
    "TownTax" = "TownTax",
    "UnsecuredCountyTaxes" = "UnsecuredCountyTaxes",
    "UtilityDistrictTax" = "UtilityDistrictTax",
    "VillageTax" = "VillageTax",
    "WaterControlTax" = "WaterControlTax",
    "WaterOrSewerDistrictTax" = "WaterOrSewerDistrictTax"
}
;
/**
 * Term: Taxpayer Identifier Type Definition: A value from a MISMO prescribed list that classifies identification numbers used by the Internal Revenue Service (IRS) in the administration of tax laws. A Social Security number (SSN) is issued by the SSA; all other taxpayer identification numbers are issued by the IRS.
 */
export enum TaxpayerIdentifierBase {
    "EmployerIdentificationNumber" = "EmployerIdentificationNumber",
    "IndividualTaxpayerIdentificationNumber" = "IndividualTaxpayerIdentificationNumber",
    "PreparerTaxpayerIdentificationNumber" = "PreparerTaxpayerIdentificationNumber",
    "SocialSecurityNumber" = "SocialSecurityNumber",
    "TaxpayerIdentificationNumberForPendingUSAdoptions" = "TaxpayerIdentificationNumberForPendingUSAdoptions"
}
;
/**
 * Term: Term Condition Type Definition: A value from a MISMO prescribed list that identifies a condition for a Commitment or Preliminary Title Report as a Requirement or an Exception.
 */
export enum TermConditionBase {
    "Exception" = "Exception",
    "Requirement" = "Requirement"
}
;
/**
 * Term: Thermal Rated Items Type Definition: A value from a MISMO prescribed list that specifies the structural components that have thermal rated insulation.
 */
export enum ThermalRatedItemsBase {
    "Ceilings" = "Ceilings",
    "Floors" = "Floors",
    "Walls" = "Walls"
}
;
/**
 * Term: TIL Payment Summary Item Type Definition: Specifies the type of this Payment Summary Item.
 */
export enum TILPaymentSummaryItemBase {
    "AtFirstAdjustment" = "AtFirstAdjustment",
    "AtSecondAdjustment" = "AtSecondAdjustment",
    "Introductory" = "Introductory",
    "MaximumEver" = "MaximumEver",
    "MaximumFirstFiveYears" = "MaximumFirstFiveYears",
    "Other" = "Other"
}
;
/**
 * Term: TIL Period Duration Type Definition: The type of payment period applicable to the TIL Payment Summary Item as disclosed on the TIL Disclosure document.
 */
export enum TILPeriodDurationBase {
    "Biweekly" = "Biweekly",
    "Monthly" = "Monthly",
    "Yearly" = "Yearly"
}
;
/**
 * Term: Title Agent Validation Reason Type Definition: This is typically referred to as the Reason Code and is the element that further qualifies the validation response received.
 */
export enum TitleAgentValidationReasonBase {
    "AgentAddressInvalid" = "AgentAddressInvalid",
    "AgentIdentifierFormatInvalid" = "AgentIdentifierFormatInvalid",
    "AgentJurisdictionInvalid" = "AgentJurisdictionInvalid",
    "AmountExceedsAuthorizedLimit" = "AmountExceedsAuthorizedLimit",
    "Cancelled" = "Cancelled",
    "ClosingDateInvalid" = "ClosingDateInvalid",
    "NotActive" = "NotActive",
    "Other" = "Other",
    "TitleUnderwriterInvalid" = "TitleUnderwriterInvalid"
}
;
/**
 * Term: Title Association Type Definition: Identifies the national title association.
 */
export enum TitleAssociationBase {
    "ALTA" = "ALTA",
    "CLTA" = "CLTA",
    "Other" = "Other",
    "TLTA" = "TLTA"
}
;
/**
 * Term: Title Endorsement Source Type Definition: The business source of the title endorsement document, this can be a state, association or other document publisher.
 */
export enum TitleEndorsementSourceBase {
    "ALTA" = "ALTA",
    "CLTA" = "CLTA",
    "Other" = "Other",
    "TLTA" = "TLTA"
}
;
/**
 * Term: Title Ownership Type Definition: Specifies how ownership for the Title Insurance Policy document will be held.
 */
export enum TitleOwnershipBase {
    "Combination" = "Combination",
    "Corporation" = "Corporation",
    "Estate" = "Estate",
    "GovernmentEntity" = "GovernmentEntity",
    "Guardianship" = "Guardianship",
    "Individual" = "Individual",
    "JointVenture" = "JointVenture",
    "LimitedLiabilityCompany" = "LimitedLiabilityCompany",
    "LimitedPartnership" = "LimitedPartnership",
    "NonProfitCorporation" = "NonProfitCorporation",
    "Other" = "Other",
    "Partnership" = "Partnership",
    "Trust" = "Trust"
}
;
/**
 * Term: Title Process Type Definition: Specifies the means used to determine that there are no legal claims against the subject property that have a higher priority than the loan.
 */
export enum TitleProcessBase {
    "DeedReport" = "DeedReport",
    "Other" = "Other",
    "TitleSearch" = "TitleSearch"
}
;
/**
 * Term: Title Process Insurance Type Definition: Identifies the level of insurance being requested or delivered for the Title Process Type.
 */
export enum TitleProcessInsuranceBase {
    "Insurance" = "Insurance",
    "LimitedInsurance" = "LimitedInsurance",
    "NonInsurance" = "NonInsurance"
}
;
/**
 * Term: Title Product Type Definition: A value from a MISMO prescribed list that categorizes the type of product being referenced.
 */
export enum TitleProductBase {
    "ClosingProtectionLetter" = "ClosingProtectionLetter",
    "Other" = "Other",
    "TitleCommitment" = "TitleCommitment",
    "TitlePolicy" = "TitlePolicy"
}
;
/**
 * Term: Title Request Action Type Definition: Describes the action requested for a particular title order.
 */
export enum TitleRequestActionBase {
    "Cancellation" = "Cancellation",
    "Change" = "Change",
    "ERemittance" = "ERemittance",
    "GetDocument" = "GetDocument",
    "Original" = "Original",
    "PriceQuote" = "PriceQuote",
    "StatusQuery" = "StatusQuery",
    "Update" = "Update",
    "ValidateAgent" = "ValidateAgent"
}
;
/**
 * Term: Topography Type Definition: A value from a MISMO prescribed list that represents shape and features of land surface.
 */
export enum TopographyBase {
    "Flat" = "Flat",
    "Other" = "Other",
    "Rocky" = "Rocky",
    "Rolling" = "Rolling",
    "Sloping" = "Sloping"
}
;
/**
 * Term: Transfer Of Servicing Disclosure Type Definition: Specifies detail about the party servicing the loan as stated on the Servicing Disclosure Statement document.
 */
export enum TransferOfServicingDisclosureBase {
    "Investor" = "Investor",
    "Lender" = "Lender",
    "New" = "New",
    "Other" = "Other",
    "Present" = "Present"
}
;
/**
 * Term: Transfer Request Type Definition: Specifies the nature or extent of a servicing transfer request.
 */
export enum TransferRequestBase {
    "AllLoans" = "AllLoans",
    "Other" = "Other",
    "SpecificLoans" = "SpecificLoans"
}
;
/**
 * Term: Treasury NPV Loan Amortization Type Definition: The mortgage product of the loan, before the workout, as submitted to Treasury Net Present Value calculator.
 */
export enum TreasuryNPVLoanAmortizationBase {
    "AdjustableRate" = "AdjustableRate",
    "FixedRate" = "FixedRate",
    "Other" = "Other",
    "Step" = "Step"
}
;
/**
 * Term: Trial Plan Unsuccessful Reason Type Definition: The reason that the trial plan was unsuccessful.
 */
export enum TrialPlanUnsuccessfulReasonBase {
    "BorrowerWithdrew" = "BorrowerWithdrew",
    "Other" = "Other",
    "TrialPaymentDefault" = "TrialPaymentDefault"
}
;
/**
 * Term: Trust Classification Type Definition: A value from a MISMO prescribed list that categorizes a trust.
 */
export enum TrustClassificationBase {
    "CommunityLandTrust" = "CommunityLandTrust",
    "IllinoisLandTrust" = "IllinoisLandTrust",
    "LandTrust" = "LandTrust",
    "LivingTrust" = "LivingTrust",
    "NativeAmericanLandTrust" = "NativeAmericanLandTrust",
    "Other" = "Other"
}
;
/**
 * Term: Trustee Type Definition: Specifies the type of trustee associated with the mortgage loan.
 */
export enum TrusteeBase {
    "Other" = "Other",
    "Primary" = "Primary",
    "Secondary" = "Secondary"
}
;
/**
 * Term: Typical Apartment Rent Trend Type Definition: Specifies the current trend in rent prices for the typical apartment in the neighborhood.
 */
export enum TypicalApartmentRentTrendBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Typical Apartment Vacancy Trend Type Definition: Specifies the current trend in vacancy rates for the typical apartment in the neighborhood.
 */
export enum TypicalApartmentVacancyTrendBase {
    "Decreasing" = "Decreasing",
    "Increasing" = "Increasing",
    "Stable" = "Stable"
}
;
/**
 * Term: Undefined Property Type Definition:  A value from a MISMO prescribed list that represents a type of property that does not meet a uniform set of characteristics for defining the components used to classify a property type.
 */
export enum UndefinedPropertyBase {
    "NonDescriptive" = "NonDescriptive",
    "Unavailable" = "Unavailable",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Unique Dwelling Type Definition: A dwelling that does not conform to a conventional building structure type or method.
 */
export enum UniqueDwellingBase {
    "EarthShelterHome" = "EarthShelterHome",
    "GeodesicDome" = "GeodesicDome",
    "Houseboat" = "Houseboat",
    "LogHome" = "LogHome",
    "Other" = "Other"
}
;
/**
 * Term: Unit Below Grade Finish Comparison Type Definition: A value from a MISMO prescribed list that represents the quality of the finish for the below grade area(s) when compared to the above grade living area.
 */
export enum UnitBelowGradeFinishComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Unit Charge Period Type Definition: Specifies the period about which the fees per unit apply.
 */
export enum UnitChargePeriodBase {
    "Annually" = "Annually",
    "Biweekly" = "Biweekly",
    "Daily" = "Daily",
    "Monthly" = "Monthly",
    "OneTime" = "OneTime",
    "Quarterly" = "Quarterly",
    "Semiannually" = "Semiannually",
    "Semimonthly" = "Semimonthly",
    "Weekly" = "Weekly"
}
;
/**
 * Term: Unit Charge Rating Type Definition: Indicates whether unit assessment charges in comparison with other units in comparable projects is high, low or typical.
 */
export enum UnitChargeRatingBase {
    "High" = "High",
    "Low" = "Low",
    "Other" = "Other",
    "Typical" = "Typical"
}
;
/**
 * Term: Unit Charge Utility Type Definition: Specifies a utility included in the unit monthly or annual assessment charges.
 */
export enum UnitChargeUtilityBase {
    "Cooling" = "Cooling",
    "Electricity" = "Electricity",
    "Gas" = "Gas",
    "Heating" = "Heating",
    "None" = "None",
    "Other" = "Other",
    "Sewer" = "Sewer",
    "TelevisionOrInternet" = "TelevisionOrInternet",
    "Trash" = "Trash",
    "Water" = "Water"
}
;
/**
 * Term: Unit Occupancy Type Definition: Specifies the current occupancy status of the specified unit within a property or an individual unit or a group of units within project.
 */
export enum UnitOccupancyBase {
    "OwnerOccupied" = "OwnerOccupied",
    "Tenant" = "Tenant",
    "Unknown" = "Unknown",
    "Vacant" = "Vacant"
}
;
/**
 * Term: Unit Owned By Type Definition: Specifies the type of individual or entity that owns the unit.
 */
export enum UnitOwnedByBase {
    "Developer" = "Developer",
    "Investor" = "Investor",
    "OwnerOccupier" = "OwnerOccupier"
}
;
/**
 * Term: Unit Rent Rate Type Definition: Specifies whether or not the rent rate for the unit is set by market conditions or is regulated.
 */
export enum UnitRentRateBase {
    "Market" = "Market",
    "Regulated" = "Regulated"
}
;
/**
 * Term: Unit Sale Rental Status Type Definition: Specifies the status of the unit with respect to its sale or rental.
 */
export enum UnitSaleRentalStatusBase {
    "ForRent" = "ForRent",
    "ForSale" = "ForSale",
    "Rented" = "Rented",
    "Sold" = "Sold"
}
;
/**
 * Term: Unparsed Legal Description Type Definition: A value from a MISMO prescribed list that represents a type of unparsed legal description as either long or short.
 */
export enum UnparsedLegalDescriptionBase {
    "Long" = "Long",
    "Other" = "Other",
    "Short" = "Short"
}
;
/**
 * Term: Unplatted Land Type Definition: The type of land description system used for unplatted lands, either Government Survey, or metes and bounds, or other (e.g. land grants).
 */
export enum UnplattedLandBase {
    "GovernmentSurvey" = "GovernmentSurvey",
    "LandGrant" = "LandGrant",
    "MetesAndBounds" = "MetesAndBounds",
    "NativeAmericanLand" = "NativeAmericanLand",
    "Other" = "Other",
    "Ranchero" = "Ranchero"
}
;
/**
 * Term: UPB Change Frequency Type Definition: Frequency of changes to the unpaid principal balance.
 */
export enum UPBChangeFrequencyBase {
    "Annually" = "Annually",
    "Biweekly" = "Biweekly",
    "Daily" = "Daily",
    "Monthly" = "Monthly",
    "Quarterly" = "Quarterly",
    "Semiannually" = "Semiannually",
    "Semimonthly" = "Semimonthly",
    "Weekly" = "Weekly"
}
;
/**
 * Term: URLA Status Type Definition: A value from a MISMO prescribed list that categorizes the completion status of the loan application.
 */
export enum URLAStatusBase {
    "Final" = "Final",
    "Interim" = "Interim"
}
;
/**
 * Term: Utility Type Definition: A value from a MISMO prescribed list that represents the type of utility connected.
 */
export enum UtilityBase {
    "AlternativeEnergy" = "AlternativeEnergy",
    "Electricity" = "Electricity",
    "Gas" = "Gas",
    "None" = "None",
    "Other" = "Other",
    "RenewableEnergyBiomass" = "RenewableEnergyBiomass",
    "RenewableEnergyHydropower" = "RenewableEnergyHydropower",
    "RenewableEnergyWind" = "RenewableEnergyWind",
    "SanitarySewer" = "SanitarySewer",
    "StormSewer" = "StormSewer",
    "Water" = "Water"
}
;
/**
 * Term: VA Appraisal Type Definition: Specifies the property appraisal type used, as appears on VA Loan Summary Sheet (VA 26-0286), for example.
 */
export enum VAAppraisalBase {
    "HUDConversion" = "HUDConversion",
    "LenderAppraisal" = "LenderAppraisal",
    "ManufacturedHome" = "ManufacturedHome",
    "MasterCertificateOfReasonableValueCase" = "MasterCertificateOfReasonableValueCase",
    "Other" = "Other",
    "PropertyManagementCase" = "PropertyManagementCase",
    "SingleProperty" = "SingleProperty"
}
;
/**
 * Term: VA Borrower Certification Occupancy Type Definition: VA Borrower Certification type of occupancy. VA Borrower Certification, HUD-92900-A (HUD/VA Addendum to URLA), section 25(2).
 */
export enum VABorrowerCertificationOccupancyBase {
    "A" = "A",
    "B" = "B",
    "C" = "C",
    "D" = "D",
    "E" = "E",
    "F" = "F",
    "Other" = "Other"
}
;
/**
 * Term: VA Funding Fee Exemption Type Definition: The Exemption Status given by the VA Administration  (exemption from VA Funding Fees).
 */
export enum VAFundingFeeExemptionBase {
    "CompletelyExempt" = "CompletelyExempt",
    "NotExempt" = "NotExempt",
    "Other" = "Other",
    "PartiallyExempt" = "PartiallyExempt"
}
;
/**
 * Term: VA Loan Procedure Type Definition: Specifies the procedure used to qualify the borrower(s).
 */
export enum VALoanProcedureBase {
    "Automatic" = "Automatic",
    "AutomaticInterestRateReductionRefinanceLoan" = "AutomaticInterestRateReductionRefinanceLoan",
    "Other" = "Other",
    "VAPriorApproval" = "VAPriorApproval"
}
;
/**
 * Term: VA Loan Program Type Definition: Identifies the type of VA Loan Program established by Title 38 of the US Code.
 */
export enum VALoanProgramBase {
    "Other" = "Other",
    "VADirectHomeLoanProgramForNativeAmericans" = "VADirectHomeLoanProgramForNativeAmericans",
    "VAGuaranteedCondominiumUnit" = "VAGuaranteedCondominiumUnit",
    "VAGuaranteedFarmResidenceConstruction" = "VAGuaranteedFarmResidenceConstruction",
    "VAGuaranteedFarmResidenceEnergyEfficiencyImprovements" = "VAGuaranteedFarmResidenceEnergyEfficiencyImprovements",
    "VAGuaranteedFarmResidencePurchase" = "VAGuaranteedFarmResidencePurchase",
    "VAGuaranteedFarmResidenceRepairAlternationOrImprovement" = "VAGuaranteedFarmResidenceRepairAlternationOrImprovement",
    "VAGuaranteedHomePurchaseOrConstruction" = "VAGuaranteedHomePurchaseOrConstruction",
    "VAGuaranteedHomePurchaseWithEnergyEfficiencyImprovements" = "VAGuaranteedHomePurchaseWithEnergyEfficiencyImprovements",
    "VAGuaranteedHomeRefinanceWithEnergyEfficiencyImprovements" = "VAGuaranteedHomeRefinanceWithEnergyEfficiencyImprovements",
    "VAGuaranteedManufacturedHomeOrLotPurchaseOrRefinance" = "VAGuaranteedManufacturedHomeOrLotPurchaseOrRefinance",
    "VAGuaranteedRefinance" = "VAGuaranteedRefinance",
    "VAGuaranteedRefinanceLiensSecuredByVADwelling" = "VAGuaranteedRefinanceLiensSecuredByVADwelling"
}
;
/**
 * Term: VA Loan Termination Type Definition: The value from a MISMO prescribed list that identifies the reason the VA loan was terminated.
 */
export enum VALoanTerminationBase {
    "AcquiredByVA" = "AcquiredByVA",
    "DebtPlusCost" = "DebtPlusCost",
    "DeedInLieu" = "DeedInLieu",
    "GuarantyCancelled" = "GuarantyCancelled",
    "LiquidatedWithNoClaim" = "LiquidatedWithNoClaim",
    "Matured" = "Matured",
    "Other" = "Other",
    "PaidInFull" = "PaidInFull",
    "PropertyConveyance" = "PropertyConveyance",
    "ShortSale" = "ShortSale"
}
;
/**
 * Term: Valuation Additional Certification Included By Type Definition: A value from a MISMO prescribed list that represents the party that has included the additional certification in the report.
 */
export enum ValuationAdditionalCertificationIncludedByBase {
    "Appraiser" = "Appraiser",
    "AppraiserSupervisor" = "AppraiserSupervisor",
    "Other" = "Other"
}
;
/**
 * Term: Valuation Analysis Category Type Definition: A value from a MISMO prescribed list that represents the categorization of the valuation analysis.
 */
export enum ValuationAnalysisCategoryBase {
    "Assignment" = "Assignment",
    "ComparableRental" = "ComparableRental",
    "ComparablesPriorSalesAndTransferHistory" = "ComparablesPriorSalesAndTransferHistory",
    "DisasterMitigation" = "DisasterMitigation",
    "EnergyEfficientAndGreenFeatures" = "EnergyEfficientAndGreenFeatures",
    "HazardZones" = "HazardZones",
    "HighestAndBestUse" = "HighestAndBestUse",
    "IncompleteProject" = "IncompleteProject",
    "Market" = "Market",
    "Other" = "Other",
    "OverallQualityAndCondition" = "OverallQualityAndCondition",
    "Project" = "Project",
    "ProjectCommercialSpace" = "ProjectCommercialSpace",
    "ProjectConversion" = "ProjectConversion",
    "ProjectDeveloperOrSponsorControlsProjectManagement" = "ProjectDeveloperOrSponsorControlsProjectManagement",
    "ProjectFactors" = "ProjectFactors",
    "ProjectLegalAction" = "ProjectLegalAction",
    "ProjectSpecialAssessmentsAttributedToSubjectProperty" = "ProjectSpecialAssessmentsAttributedToSubjectProperty",
    "PropertyNonResidentialUses" = "PropertyNonResidentialUses",
    "PropertySpecialTaxAssessments" = "PropertySpecialTaxAssessments",
    "PropertyTaxAbatementsOrExemptions" = "PropertyTaxAbatementsOrExemptions",
    "SalesContract" = "SalesContract",
    "SingleEntityGreatestNumberOfSharesOwned" = "SingleEntityGreatestNumberOfSharesOwned",
    "SingleEntityGreatestNumberOfUnitsOwned" = "SingleEntityGreatestNumberOfUnitsOwned",
    "Site" = "Site",
    "SiteFeatures" = "SiteFeatures",
    "SiteInfluences" = "SiteInfluences",
    "SiteViews" = "SiteViews",
    "Sketch" = "Sketch",
    "SubjectListing" = "SubjectListing",
    "SubjectPriorSalesAndTransferHistory" = "SubjectPriorSalesAndTransferHistory",
    "SubjectProperty" = "SubjectProperty",
    "SubjectPropertyAmenities" = "SubjectPropertyAmenities",
    "TransferFeeAttributedToSubjectProperty" = "TransferFeeAttributedToSubjectProperty",
    "VehicleStorage" = "VehicleStorage",
    "WaterFrontages" = "WaterFrontages",
    "ZoningCompliance" = "ZoningCompliance"
}
;
/**
 * Term: Valuation Approach Exclusion Reason Type Definition: A value from a MISMO prescribed list that represents a reason why the specific valuation approach was not developed.
 */
export enum ValuationApproachExclusionReasonBase {
    "DifficultyEstimatingDepreciation" = "DifficultyEstimatingDepreciation",
    "InsufficientData" = "InsufficientData",
    "LackOfLandSales" = "LackOfLandSales",
    "NotNecessaryForCredibleResults" = "NotNecessaryForCredibleResults",
    "Other" = "Other"
}
;
/**
 * Term: Valuation Assignment Type Definition: Specifies the business reason that motivated the order for a valuation.
 */
export enum ValuationAssignmentBase {
    "Construction" = "Construction",
    "DeedInLieu" = "DeedInLieu",
    "EmployeeRelocation" = "EmployeeRelocation",
    "Foreclosure" = "Foreclosure",
    "HomeEquity" = "HomeEquity",
    "JuniorLien" = "JuniorLien",
    "LoanModification" = "LoanModification",
    "LossMitigation" = "LossMitigation",
    "Other" = "Other",
    "PortfolioEvaluation" = "PortfolioEvaluation",
    "Preforeclosure" = "Preforeclosure",
    "Purchase" = "Purchase",
    "QualityControl" = "QualityControl",
    "Refinance" = "Refinance",
    "REO" = "REO",
    "Review" = "Review",
    "ShortSale" = "ShortSale",
    "Validation" = "Validation"
}
;
/**
 * Term: Valuation Intended Use Type Definition: Specific indications of the types of use authorized by the appraiser for a given valuation product.
 */
export enum ValuationIntendedUseBase {
    "EstatePlanning" = "EstatePlanning",
    "Litigation" = "Litigation",
    "MIRemoval" = "MIRemoval",
    "MortgageLossMitigation" = "MortgageLossMitigation",
    "MortgageOrigination" = "MortgageOrigination",
    "Other" = "Other",
    "PrePurchaseConsultationAssistance" = "PrePurchaseConsultationAssistance",
    "PrivateSale" = "PrivateSale",
    "PropertyOwnerAssistanceConsultation" = "PropertyOwnerAssistanceConsultation",
    "SecondaryMarketDueDiligence" = "SecondaryMarketDueDiligence",
    "TaxAppeal" = "TaxAppeal",
    "TaxAssessment" = "TaxAssessment"
}
;
/**
 * Term: Valuation Intended User Type Definition: Specific indications of the types of users authorized by the appraiser for a given valuation product.
 */
export enum ValuationIntendedUserBase {
    "DueDiligenceCompany" = "DueDiligenceCompany",
    "Investor" = "Investor",
    "Lender" = "Lender",
    "Other" = "Other",
    "Regulator" = "Regulator"
}
;
/**
 * Term: Valuation Report Content Type Definition: Used to specify the types of forms or addendum pages that make up a complete valuation report.
 */
export enum ValuationReportContentBase {
    "AppraisalForm" = "AppraisalForm",
    "AppraisalLicense" = "AppraisalLicense",
    "Certification" = "Certification",
    "CommentAddendum" = "CommentAddendum",
    "CoverPage" = "CoverPage",
    "Exhibit" = "Exhibit",
    "ExtraListings" = "ExtraListings",
    "ExtraRentals" = "ExtraRentals",
    "ExtraSales" = "ExtraSales",
    "FloodMap" = "FloodMap",
    "Invoice" = "Invoice",
    "ListingPhotos" = "ListingPhotos",
    "LocationMap" = "LocationMap",
    "Other" = "Other",
    "PlatMap" = "PlatMap",
    "RentalPhotos" = "RentalPhotos",
    "SalePhotos" = "SalePhotos",
    "SalesContract" = "SalesContract",
    "Sketch" = "Sketch",
    "SubjectPhotos" = "SubjectPhotos"
}
;
/**
 * Term: Valuation Report Inspection Certification Type Definition: A value from a MISMO prescribed list that represents the inspection attestation included by the appraiser in the valuation certifications for the assignment.
 */
export enum ValuationReportInspectionCertificationBase {
    "Exterior" = "Exterior",
    "InteriorAndExterior" = "InteriorAndExterior",
    "NoPhysicalInspection" = "NoPhysicalInspection"
}
;
/**
 * Term: Valuation Request Action Type Definition: Defines the valuation service requested.
 */
export enum ValuationRequestActionBase {
    "Cancellation" = "Cancellation",
    "Change" = "Change",
    "Hold" = "Hold",
    "Original" = "Original",
    "Other" = "Other",
    "PriceQuote" = "PriceQuote",
    "Reissue" = "Reissue",
    "Resume" = "Resume",
    "StatusQuery" = "StatusQuery",
    "Update" = "Update",
    "Upgrade" = "Upgrade"
}
;
/**
 * Term: Valuation Request Cascading Return Type Definition: Describes a specific type of valuation group method or valuation product returned to the requesting party based on the user-selected rules.
 */
export enum ValuationRequestCascadingReturnBase {
    "All" = "All",
    "Other" = "Other",
    "Single" = "Single"
}
;
/**
 *
 */
export enum ValuationUseBase {
    "GrossRentMultiplierComparable" = "GrossRentMultiplierComparable",
    "LandComparable" = "LandComparable",
    "PropertyAnalyzedNotUsed" = "PropertyAnalyzedNotUsed",
    "RentalComparable" = "RentalComparable",
    "SalesComparable" = "SalesComparable",
    "SubjectProperty" = "SubjectProperty"
}
;
/**
 * Term: Value Marketability Impact Type Definition: A value from a MISMO prescribed list that represents the type of impact the indicated item has on the value and marketability of the property.
 */
export enum ValueMarketabilityImpactBase {
    "Adverse" = "Adverse",
    "Beneficial" = "Beneficial",
    "Neutral" = "Neutral"
}
;
/**
 * Term: VA Title Vesting Type Definition: The VA specific vesting under which the property is, or will be, held.
 */
export enum VATitleVestingBase {
    "JointTwoOrMoreVeterans" = "JointTwoOrMoreVeterans",
    "JointVeteranAndNonVeteran" = "JointVeteranAndNonVeteran",
    "Other" = "Other",
    "Veteran" = "Veteran",
    "VeteranAndSpouse" = "VeteranAndSpouse"
}
;
/**
 * Term: Vendor Relationship Type Definition: The type of relationship between the valuation professional and the engaging organization.
 */
export enum VendorRelationshipBase {
    "Independent" = "Independent",
    "Other" = "Other",
    "Staff" = "Staff"
}
;
/**
 * Term: Vendor Specialty Type Definition: Special skills or property type knowledge that may be stipulated for the vendor selection in the assignment or request for service.
 */
export enum VendorSpecialtyBase {
    "Agricultural" = "Agricultural",
    "Bilingual" = "Bilingual",
    "ComplexProperties" = "ComplexProperties",
    "HistoricProperties" = "HistoricProperties",
    "LitigationExperience" = "LitigationExperience",
    "Other" = "Other",
    "VacantLand" = "VacantLand"
}
;
/**
 * Term: Verification Method Type Definition: Method used to verify the particular item.
 */
export enum VerificationMethodBase {
    "Other" = "Other",
    "Verbal" = "Verbal",
    "Written" = "Written"
}
;
/**
 * Term: Asset Verification Range Type Definition: Specifies the period or range of time for which the specific type of Asset Document Type is collected.
Term: Employment Verification Range Type Definition: Specifies the period or range of time for which the specific type of Employment Document Type is collected.
Term: Income Verification Range Type Definition: Specifies the period or range of time for which the specific type of Income Document Type is collected.
 */
export enum VerificationRangeBase {
    "MostRecentDays" = "MostRecentDays",
    "MostRecentMonths" = "MostRecentMonths",
    "MostRecentYear" = "MostRecentYear",
    "Other" = "Other",
    "PaymentPeriod" = "PaymentPeriod",
    "StatementPeriod" = "StatementPeriod"
}
;
/**
 * Term: Verification Safe Harbor Guideline Type Definition: A value from a MISMO defined list that identifies the set of underwriting guidelines used by the lender to determine the verification Safe Harbor type.
 */
export enum VerificationSafeHarborGuidelineBase {
    "FHA" = "FHA",
    "FNM" = "FNM",
    "FRE" = "FRE",
    "Mixed" = "Mixed",
    "Other" = "Other",
    "USDA" = "USDA",
    "VA" = "VA"
}
;
/**
 * Term: Verification Status Type Definition: This attribute indicates the status of the verification - verified, not verified, or to be verified.
 */
export enum VerificationStatusBase {
    "NotVerified" = "NotVerified",
    "ToBeVerified" = "ToBeVerified",
    "Verified" = "Verified"
}
;
/**
 * Term: View Type Definition: A value from a MISMO prescribed list that represents the specific view types as observed for valuation purposes by the appraiser that may affect desirability and market value.
 */
export enum ViewBase {
    "Bay" = "Bay",
    "Canal" = "Canal",
    "CityStreet" = "CityStreet",
    "Commercial" = "Commercial",
    "Cove" = "Cove",
    "Creek" = "Creek",
    "GolfCourse" = "GolfCourse",
    "Gulf" = "Gulf",
    "HighDensityResidential" = "HighDensityResidential",
    "HighVoltagePowerLines" = "HighVoltagePowerLines",
    "Highway" = "Highway",
    "Industrial" = "Industrial",
    "Lake" = "Lake",
    "LimitedSight" = "LimitedSight",
    "Marsh" = "Marsh",
    "Mountain" = "Mountain",
    "Ocean" = "Ocean",
    "Other" = "Other",
    "Park" = "Park",
    "ParkingLot" = "ParkingLot",
    "Pastoral" = "Pastoral",
    "Pond" = "Pond",
    "Reservoir" = "Reservoir",
    "Residential" = "Residential",
    "River" = "River",
    "School" = "School",
    "Skyline" = "Skyline",
    "Sound" = "Sound",
    "Traffic" = "Traffic",
    "TrafficWallBarriers" = "TrafficWallBarriers",
    "Valley" = "Valley",
    "Woods" = "Woods"
}
;
/**
 * Term: View Range Type Definition: A value from a MISMO prescribed list that represents the extent of the view.
 */
export enum ViewRangeBase {
    "Full" = "Full",
    "Other" = "Other",
    "Partial" = "Partial",
    "Seasonal" = "Seasonal"
}
;
/**
 * Term: Views Comparison Type Definition: A value from a MISMO prescribed list which represents the overall rating of the differences between the comparable and the subject for all views associated with the rental unit.
 */
export enum ViewsComparisonBase {
    "Inferior" = "Inferior",
    "Similar" = "Similar",
    "Superior" = "Superior"
}
;
/**
 * Term: Volume Type Definition: Volume type of the document referenced in the subject document.
 */
export enum VolumeBase {
    "Deed" = "Deed",
    "Maps" = "Maps",
    "Mortgage" = "Mortgage",
    "Other" = "Other",
    "Plat" = "Plat"
}
;
/**
 *
 */
export enum VolumeUnitOfMeasureBase {
    "CubicFeet" = "CubicFeet",
    "CubicMeters" = "CubicMeters",
    "CubicYards" = "CubicYards"
}
;
/**
 * Term: Water Access Depth Type Definition: A value from a MISMO prescribed list that classifies the water depth for watercraft to access.
 */
export enum WaterAccessDepthBase {
    "DeepWater" = "DeepWater",
    "NonNavigable" = "NonNavigable",
    "Other" = "Other",
    "ShallowWater" = "ShallowWater"
}
;
/**
 * Term: Water Access Right Type Definition: A value from a MISMO prescribed list that represents the property access right to the body of water.
 */
export enum WaterAccessRightBase {
    "Deeded" = "Deeded",
    "Other" = "Other",
    "Permitted" = "Permitted",
    "PrivatelyOwned" = "PrivatelyOwned"
}
;
/**
 * Term: Waterfront Feature Type Definition: A value from a MISMO prescribed list that represents a natural or man-made component that can reside in or along side a body of water.
 */
export enum WaterfrontFeatureBase {
    "Beach" = "Beach",
    "BoatLift" = "BoatLift",
    "BoatRamp" = "BoatRamp",
    "BoatSlip" = "BoatSlip",
    "Dock" = "Dock",
    "None" = "None",
    "Other" = "Other",
    "Pier" = "Pier",
    "Riprap" = "Riprap",
    "SeawallOrBulkhead" = "SeawallOrBulkhead"
}
;
/**
 * Term: Water Heater Type Definition: A collection of values that specify the type of water heating system present in a property.
 */
export enum WaterHeaterBase {
    "Other" = "Other",
    "Solar" = "Solar",
    "StandardTank" = "StandardTank",
    "Tankless" = "Tankless"
}
;
/**
 * Term: Water Source Type Definition: A value from a MISMO prescribed list that represents the source of water for the property. Also used in conjunction with a type of utility ownership.
 */
export enum WaterSourceBase {
    "Cistern" = "Cistern",
    "HauledWaterHoldingTank" = "HauledWaterHoldingTank",
    "LakeOrSpring" = "LakeOrSpring",
    "Other" = "Other",
    "Well" = "Well"
}
;
/**
 * Term: Water Treatment Type Definition: A collection of values that specify the type of water treatment system present in a property.
 */
export enum WaterTreatmentBase {
    "Other" = "Other",
    "Purifier" = "Purifier",
    "Softener" = "Softener"
}
;
/**
 * Term: Wall Material Type Definition: A value from a MISMO prescribed list that represents the type of wall material used for the structure.
 */
export enum WallMaterialBase {
    "Adobe" = "Adobe",
    "Aluminum" = "Aluminum",
    "Asbestos" = "Asbestos",
    "Block" = "Block",
    "Brick" = "Brick",
    "CementBoard" = "CementBoard",
    "ConcreteBlock" = "ConcreteBlock",
    "EngineeredWood" = "EngineeredWood",
    "Flagstone" = "Flagstone",
    "Frame" = "Frame",
    "Glass" = "Glass",
    "Log" = "Log",
    "Other" = "Other",
    "PouredConcrete" = "PouredConcrete",
    "Steel" = "Steel",
    "Stone" = "Stone",
    "Stucco" = "Stucco",
    "Synthetic" = "Synthetic",
    "SyntheticStone" = "SyntheticStone",
    "SyntheticStucco" = "SyntheticStucco",
    "Veneer" = "Veneer",
    "Vinyl" = "Vinyl",
    "Wood" = "Wood"
}
;
/**
 * Term: Water Well Type Definition: A value from a MISMO prescribed list that represents a type of individual water supply well.
 */
export enum WaterWellBase {
    "Artesian" = "Artesian",
    "Drilled" = "Drilled",
    "Dug" = "Dug",
    "Other" = "Other"
}
;
/**
 *
 */
export enum WeightUnitOfMeasureBase {
    "Grams" = "Grams",
    "Kilograms" = "Kilograms",
    "Ounces" = "Ounces",
    "Pounds" = "Pounds",
    "Tons" = "Tons"
}
;
/**
 * Term: Window Type Definition: Specifies the type of windows on the property.
 */
export enum WindowBase {
    "Aluminum" = "Aluminum",
    "Awning" = "Awning",
    "BayWindow" = "BayWindow",
    "BeveledGlass" = "BeveledGlass",
    "BowWindow" = "BowWindow",
    "Casement" = "Casement",
    "CenterPivot" = "CenterPivot",
    "CircleHead" = "CircleHead",
    "Clerestory" = "Clerestory",
    "Combination" = "Combination",
    "CrankOut" = "CrankOut",
    "Decorative" = "Decorative",
    "Dormer" = "Dormer",
    "DoubleHung" = "DoubleHung",
    "DoublePane" = "DoublePane",
    "EtchedGlass" = "EtchedGlass",
    "FixedPane" = "FixedPane",
    "French" = "French",
    "Hopper" = "Hopper",
    "HorizontalSliding" = "HorizontalSliding",
    "Insulated" = "Insulated",
    "Jalousie" = "Jalousie",
    "LeadedGlass" = "LeadedGlass",
    "LowE" = "LowE",
    "Oriel" = "Oriel",
    "Other" = "Other",
    "Palladian" = "Palladian",
    "Picture" = "Picture",
    "SingleHung" = "SingleHung",
    "Sliding" = "Sliding",
    "StainedGlass" = "StainedGlass",
    "Steel" = "Steel",
    "ThermalPane" = "ThermalPane",
    "Thermopane" = "Thermopane",
    "Transom" = "Transom",
    "Transverse" = "Transverse",
    "Vinyl" = "Vinyl",
    "Wood" = "Wood"
}
;
/**
 * Term: Wire Transfer Line Item Section Type Definition: A value from a MISMO prescribed list that represents the title or description of a sub section of the Wire Amount Validation section of the Closing Instruction document.
 */
export enum WireTransferLineItemSectionBase {
    "LenderNetWire" = "LenderNetWire",
    "ReturnedToLender" = "ReturnedToLender",
    "ToBeDisbursed" = "ToBeDisbursed"
}
;
/**
 * Term: Workout Type Definition: A value from a MISMO prescribed list that represents the method used to facilitate the workout or loss mitigation of a loan in default.
 */
export enum WorkoutBase {
    "DeedInLieu" = "DeedInLieu",
    "EscrowRecoupment" = "EscrowRecoupment",
    "Modification" = "Modification",
    "Other" = "Other",
    "PaymentDeferral" = "PaymentDeferral",
    "PaymentForbearance" = "PaymentForbearance",
    "PreclaimedAdvance" = "PreclaimedAdvance",
    "PrincipalForbearance" = "PrincipalForbearance",
    "Refinance" = "Refinance",
    "Reinstatement" = "Reinstatement",
    "RepaymentPlan" = "RepaymentPlan",
    "ShortPayoff" = "ShortPayoff",
    "ShortSale" = "ShortSale",
    "WriteOff" = "WriteOff"
}
;
/**
 * Term: Workout Comment Type Definition: A value from a MISMO prescribed list that describes that specifies the type of comment about the workout.
 */
export enum WorkoutCommentBase {
    "DeedInLieu" = "DeedInLieu",
    "General" = "General",
    "MIDecision" = "MIDecision",
    "Other" = "Other"
}
;
/**
 * Term: Workout Process Status Type Definition: Categorizes the process status of the workout as defined by investor policy guidelines.
 */
export enum WorkoutProcessStatusBase {
    "Active" = "Active",
    "Ceased" = "Ceased",
    "Inactive" = "Inactive"
}
;
/**
 * Term: Workout Qualification Status Type Definition: Specifies the qualification status of the workout.
 */
export enum WorkoutQualificationStatusBase {
    "ConditionallyQualified" = "ConditionallyQualified",
    "NotQualified" = "NotQualified",
    "Other" = "Other",
    "PreQualified" = "PreQualified",
    "Qualified" = "Qualified"
}
;
/**
 * Term: Workout Status Type Definition: A value from a MISMO prescribed list that represents the status of the corresponding Workout Type.
 */
export enum WorkoutStatusBase {
    "AcceptedByBorrower" = "AcceptedByBorrower",
    "Approved" = "Approved",
    "Cancelled" = "Cancelled",
    "Closed" = "Closed",
    "Completed" = "Completed",
    "DeclinedByBorrower" = "DeclinedByBorrower",
    "Denied" = "Denied",
    "Eligible" = "Eligible",
    "Failed" = "Failed",
    "Initiated" = "Initiated",
    "InTrial" = "InTrial",
    "OfferedToBorrower" = "OfferedToBorrower",
    "Other" = "Other",
    "UnderReview" = "UnderReview",
    "Unknown" = "Unknown"
}
;
/**
 * Term: Workout Unsuccessful Reason Type Definition: Specifies the reason that a workout was not successful.
 */
export enum WorkoutUnsuccessfulReasonBase {
    "BankruptcyCourtDeclined" = "BankruptcyCourtDeclined",
    "BorrowerFailedToRespondToSolicitation" = "BorrowerFailedToRespondToSolicitation",
    "DefaultNotImminent" = "DefaultNotImminent",
    "ExcessiveForbearance" = "ExcessiveForbearance",
    "FederallyDeclaredDisasterArea" = "FederallyDeclaredDisasterArea",
    "IncomeDocumentationNotProvided" = "IncomeDocumentationNotProvided",
    "IncomeMisrepresented" = "IncomeMisrepresented",
    "IneligibleBorrower" = "IneligibleBorrower",
    "IneligibleMortgage" = "IneligibleMortgage",
    "IneligibleProperty" = "IneligibleProperty",
    "InvestorGuarantorNotParticipating" = "InvestorGuarantorNotParticipating",
    "LoanPaidOffOrReinstated" = "LoanPaidOffOrReinstated",
    "NegativeNPV" = "NegativeNPV",
    "OfferNotAcceptedByBorrower" = "OfferNotAcceptedByBorrower",
    "Other" = "Other",
    "PreviousOfficialHAMPModificationLastTwelveMonths" = "PreviousOfficialHAMPModificationLastTwelveMonths",
    "PropertyNotOwnerOccupied" = "PropertyNotOwnerOccupied",
    "RequestWithdrawnByBorrower" = "RequestWithdrawnByBorrower",
    "TrialPlanDefault" = "TrialPlanDefault",
    "UnemploymentForbearanceProgram" = "UnemploymentForbearanceProgram",
    "WorkoutRequestIncomplete" = "WorkoutRequestIncomplete"
}
;
/**
 * undefined
 */
export enum MISMOAmount_Base {
}
;
/**
 * undefined
 */
export enum MISMOAreaMeasure_Base {
}
;
/**
 * undefined
 */
export enum MISMOCode_Base {
}
;
/**
 * undefined
 */
export enum MISMOCount_Base {
}
;
/**
 * undefined
 */
export enum MISMODate_Base {
}
;
/**
 * undefined
 */
export enum MISMODate_Union {
    undefined
}
;
/**
 * undefined
 */
export enum MISMODatetime_Base {
}
;
/**
 * undefined
 */
export enum MISMODay_Base {
}
;
/**
 * undefined
 */
export enum MISMOEnum_Base {
}
;
/**
 * undefined
 */
export enum MISMOIdentifier_Base {
}
;
/**
 * undefined
 */
export enum MISMOIndicator_Base {
}
;
/**
 * undefined
 */
export enum MISMOLinearMeasure_Base {
}
;
/**
 * Term: MISMO Logical Data Dictionary Identifier Definition: The MISMO Logical Data Dictionary Identifier is a unique value that represents the version of the MISMO LDD section of the reference model to which the containing XML instance document complies. For detailed information, please see MISMO Engineering Guide 006 – “Versioning and Release Schedule”, at https://www.mismo.org/standards-resources/mismo-product/mismo-engineering-guideline-(meg)-6.
Term: MISMO Logical Data Dictionary Identifier Definition: The MISMO Logical Data Dictionary Identifier is a unique value that represents the version of the MISMO LDD section of the reference model to which the containing XML instance document complies. For detailed information, please see MISMO Engineering Guide 006 – "Versioning and Release Schedule", at https://www.mismo.org/standards-resources/mismo-product/mismo-engineering-guideline-(meg)-6.
 */
export enum MISMOLogicalDataDictionaryIdentifier {
}
;
/**
 * undefined
 */
export enum MISMOMonth_Base {
}
;
/**
 * undefined
 */
export enum MISMONumericString_Base {
}
;
/**
 * undefined
 */
export enum MISMONumeric_Base {
}
;
/**
 * undefined
 */
export enum MISMOPercent_Base {
}
;
/**
 * undefined
 */
export enum MISMORate_Base {
}
;
/**
 * Term: MISMO Reference Model Identifier Definition: The MISMO Reference Model Identifier is a unique value that represents the version of the MISMO reference model to which the containing XML instance document complies. For detailed information, please see MISMO Engineering Guide 006 – “Versioning and Release Schedule”, at https://www.mismo.org/standards-resources/mismo-product/mismo-engineering-guideline-(meg)-6.
Term: MISMO Reference Model Identifier Definition: The MISMO Reference Model Identifier is a unique value that represents the version of the MISMO reference model to which the containing XML instance document complies. For detailed information, please see MISMO Engineering Guide 006 – "Versioning and Release Schedule", at https://www.mismo.org/standards-resources/mismo-product/mismo-engineering-guideline-(meg)-6.
 */
export enum MISMOReferenceModelIdentifier {
}
;
/**
 * undefined
 */
export enum MISMOSequenceNumber_Base {
}
;
/**
 * undefined
 */
export enum MISMOSoundMeasure_Base {
}
;
/**
 * undefined
 */
export enum MISMOString_Base {
}
;
/**
 * undefined
 */
export enum MISMOTime_Base {
}
;
/**
 * undefined
 */
export enum MISMOURI_Base {
}
;
/**
 * undefined
 */
export enum MISMOURL_Base {
}
;
/**
 * undefined
 */
export enum MISMOValue_Base {
}
;
/**
 * undefined
 */
export enum MISMOVolumeMeasure_Base {
}
;
/**
 * undefined
 */
export enum MISMOWeightMeasure_Base {
}
;
/**
 * undefined
 */
export enum MISMOXPath_Base {
}
;
/**
 * undefined
 */
export enum MISMOYear_Base {
}
;
