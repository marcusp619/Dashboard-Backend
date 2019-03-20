exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_agreements', table => {
      table.dropColumn('start_date');
      table.decimal('hourly_rate');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_agreements', table => {
      table.date('start_date');
      table.dropColumn('hourly_rate');
    })
  ]);
};
