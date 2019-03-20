exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_agreements', table => {
      table.dropColumn('end_date');
      table.integer('term_length');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('service_agreements', table => {
      table.date('end_date');
      table.dropColumn('term_length');
    })
  ]);
};
