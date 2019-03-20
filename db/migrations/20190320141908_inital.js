exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contracts', table => {
      table.increments('id').primary();
      table.string('service');
      table.integer('term_length');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('service_agreements', table => {
      table.increments('id').primary();
      table.string('project_summary');
      table.string('scope_of_work');
      table.date('start_date');
      table.date('end_date');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('service_orders', table => {
      table.increments('id').primary();
      table.string('contract_description');
      table.decimal('non_recurring_cost');
      table.string('non_recurring_cost_description');
      table.decimal('recurring_cost');
      table.string('recurring_cost_description');
      table.boolean('paid');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('invoices', table => {
      table.increments('id').primary();
      table.date('start_date');
      table.boolean('paid');
      table.date('paid_date');
      table.decimal('amount');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('site', table => {
      table.increments('id').primary();
      table.string('name');
      table.decimal('monthly_cost');
      table.integer('contract_id').unsigned();
      table.foreign('contract_id').references('contracts.id');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('invoices'),
    knex.schema.dropTable('service_orders'),
    knex.schema.dropTable('service_agreements'),
    knex.schema.dropTable('site'),
    knex.schema.dropTable('contracts')
  ]);
};
