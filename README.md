```
const typeDefs = `
  type Credit_Union {
    id: ID!
    contractNumber: String!
    creditUnionName: String!
    premiumReports: [Premium_Report!]!
    premiumAdjustments: [Premium_Adjustment!]!
    singlePremiumCertificateReturns: [Single_Premium_Certificate_Return!]!
  }

  type Premium_Report {
    id: ID!
    product_name: String!
    report_period: String!
    status: String!
    last_update: String!
    period_ending: String!
    adjustment_type_to_the_credit_union: String!
    comment: String!
    total_borrower_fees: Float!
    cu_retail_rate: Float!
    protected_loan_amount: Float!
    pay_rate: Float!
    premium_due: Float!
    total_amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    product_name: String!
    report_period: String!
    status: String!
    last_update: String!
    period_ending: String!
    adjustment_type_to_the_credit_union: String!
    comment: String!
    total_borrower_fees: Float!
    cu_retail_rate: Float!
    protected_loan_amount: Float!
    pay_rate: Float!
    premium_due: Float!
    total_amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    # Add fields accordingly if required
  }

  input CreditUnionInput {
    id: ID!
    contractNumber: String!
    creditUnionName: String!
  }

  input PremiumReportInput {
    id: ID!
    product_name: String!
    report_period: String!
    status: String!
    last_update: String!
    period_ending: String!
    adjustment_type_to_the_credit_union: String!
    comment: String!
    total_borrower_fees: Float!
    cu_retail_rate: Float!
    protected_loan_amount: Float!
    pay_rate: Float!
    premium_due: Float!
    total_amount: Float!
  }

  type Query {
    getCreditUnions: [Credit_Union!]!
    getPremiumReports: [Premium_Report!]!
    getPremiumAdjustments: [Premium_Adjustment!]!
    getSinglePremiumCertificateReturns: [Single_Premium_Certificate_Return!]!
  }

  type Mutation {
    addCreditUnion(input: CreditUnionInput!): Credit_Union!
    addPremiumReport(input: PremiumReportInput!): Premium_Report!
  }
`;
```

```
/* codegen-start-resolver */
const resolvers = {
  Query: {
    getCreditUnions: () => [
      {
        id: "1",
        contractNumber: "12345",
        creditUnionName: "ABC Credit Union",
        premiumReports: [],
        premiumAdjustments: [],
        singlePremiumCertificateReturns: []
      }
    ],
    getPremiumReports: () => [
      {
        id: "1",
        product_name: "Product A",
        report_period: "Q1",
        status: "Completed",
        last_update: "2023-01-01",
        period_ending: "2023-03-31",
        adjustment_type_to_the_credit_union: "Type A",
        comment: "All good",
        total_borrower_fees: 100.0,
        cu_retail_rate: 5.0,
        protected_loan_amount: 1000.0,
        pay_rate: 6.0,
        premium_due: 60.0,
        total_amount: 1160.0
      }
    ],
    getPremiumAdjustments: () => [],
    getSinglePremiumCertificateReturns: () => []
  },
  Mutation: {
    addCreditUnion: (_, { input }) => ({
      ...input,
      premiumReports: [],
      premiumAdjustments: [],
      singlePremiumCertificateReturns: []
    }),
    addPremiumReport: (_, { input }) => ({
      ...input
    })
  }
};
/* codegen-end-resolver */
```