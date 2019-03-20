module.exports = {
  Query: {
    contract: async (_, __, { dataSources }) =>
      dataSources.contractAPI.getContract(),
    agreement: async (_, __, { dataSources }) =>
      dataSources.agreementAPI.getAgreement(),
    order: async (_, __, { dataSources }) => dataSources.orderAPI.getOrder(),
    invoices: async (_, __, { dataSources }) =>
      dataSources.invoiceAPI.getInvoices()
  },
  Contract: {
    sites: async (parent, __, { dataSources }) =>
      dataSources.siteAPI.getSites(parent.id)
  }
};
