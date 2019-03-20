const { DataSource } = require('apollo-datasource');

class InvoiceAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  async getInvoices() {
    const invoices = await this.store('invoices').select();
    return invoices;
  }
}

module.exports = InvoiceAPI;
