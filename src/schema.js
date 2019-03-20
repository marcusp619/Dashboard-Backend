const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    contract: Contract!
    invoices: [Invoice]!
    agreement: Agreement!
    order: Order!
  }

  # "ContractType"
  # put service on invoice!
  type Contract {
    id: ID
    service: String
    term_length: Int
    sites: [Site]
  }

  # "InvoiceType"
  type Invoice {
    id: ID
    paid: Boolean
    paid_date: String
    amount: Float
    due_date: String
  }

  # "AgreementType"
  type Agreement {
    id: ID
    project_summary: String
    scope_of_work: String
    term_length: Int
    hourly_rate: Float
  }

  # "OrderType"
  type Order {
    id: ID
    non_recurring_cost: Float
    non_recurring_cost_description: String
    recurring_cost: Float
    recurring_cost_description: String
    term_length: Int
  }

  # "SiteType"
  type Site {
    id: ID
    name: String
    monthly_cost: Float
    contract_id: ID
  }
`;

module.exports = typeDefs;
