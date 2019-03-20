exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_orders')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('service_orders').insert([
        {
          term_length: 3,
          non_recurring_cost: 3485.0,
          non_recurring_cost_description:
            'Configuration and Testing of Equipment',
          recurring_cost: 275.0,
          recurring_cost_description: 'Remote Site VPN'
        }
      ]);
    });
};
