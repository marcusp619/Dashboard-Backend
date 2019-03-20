exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.dropColumn('contract_description');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.string('contract_description');
    })
  ]);
};
