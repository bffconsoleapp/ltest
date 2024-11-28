*/
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
/*

export default resolvers;