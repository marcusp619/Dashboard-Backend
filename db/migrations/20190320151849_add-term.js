exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.integer('term_length');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_orders', table => {
      table.dropColumn('term_length');
    })
  ]);
};
