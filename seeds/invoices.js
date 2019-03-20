exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('invoices').insert([
        { paid: true, paid_date: '1-28-2016', amount: 275.0 },
        { paid: true, paid_date: '12-30-2015', amount: 51155.0 },
        { paid: true, paid_date: '11-26-2015', amount: 51155.0 },
        { paid: true, paid_date: '11-25-2015', amount: 51155.0 },
        { paid: true, paid_date: '10-27-2015', amount: 51155.0 },
        { paid: true, paid_date: '7-28-2015', amount: 51155.0 },
        { paid: true, paid_date: '6-24-2015', amount: 51155.0 },
        { paid: false, due_date: '3-19-2019', amount: 51155.0 },
        { paid: false, due_date: '3-20-2019', amount: 275.0 }
      ]);
    });
};
