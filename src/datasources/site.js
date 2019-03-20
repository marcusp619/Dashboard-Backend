const { DataSource } = require('apollo-datasource');

class SiteAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  async getSites(contract_id) {
    const sites = await this.store('site')
      .where('contract_id', contract_id)
      .select();
    return sites;
  }
}

module.exports = SiteAPI;
