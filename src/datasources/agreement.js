const { DataSource } = require('apollo-datasource');

class AgreementAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  async getAgreement() {
    const agreement = await this.store('service_agreements').select();
    return agreement[0];
  }
}

module.exports = AgreementAPI;
