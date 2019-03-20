const { DataSource } = require('apollo-datasource');

class ContractAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  async getContract() {
    const contract = await this.store('contracts').select();
    return contract[0];
  }
}

module.exports = ContractAPI;
