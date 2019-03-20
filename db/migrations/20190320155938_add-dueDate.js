exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invoices', table => {
      table.dropColumn('start_date');
      table.date('due_date');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invoices', table => {
      table.date('start_date');
      table.dropColumn('due_date');
    })
  ]);
};
