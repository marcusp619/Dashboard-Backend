const { DataSource } = require('apollo-datasource');

class OrderAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  async getOrder() {
    const order = await this.store('service_orders').select();
    return order[0];
  }
}

module.exports = OrderAPI;
