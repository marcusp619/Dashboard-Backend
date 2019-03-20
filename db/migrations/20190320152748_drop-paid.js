exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.dropColumn('paid');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.string('paid');
    })
  ]);
};
