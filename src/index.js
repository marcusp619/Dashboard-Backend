const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PORT = 4000;
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const store = database;

const ContractAPI = require('./datasources/contract');
const SiteAPI = require('./datasources/site');
const AgreementAPI = require('./datasources/agreement');
const OrderAPI = require('./datasources/order');
const InvoiceAPI = require('./datasources/invoice');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    contractAPI: new ContractAPI(store),
    siteAPI: new SiteAPI(store),
    agreementAPI: new AgreementAPI(store),
    orderAPI: new OrderAPI(store),
    invoiceAPI: new InvoiceAPI(store)
  })
});

server.applyMiddleware({ app });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
