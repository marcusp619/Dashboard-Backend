exports.seed = function(knex, Promise) {
  return knex('site')
    .del()
    .then(() => knex('contracts').del())

    .then(() => {
      return Promise.all([
        knex('contracts')
          .insert(
            {
              service: '100 Mbps MPLS',
              term_length: 2
            },
            'id'
          )
          .then(contract => {
            return knex('site').insert([
              {
                name: 'site 1',
                monthly_cost: 7422.0,
                contract_id: contract[0]
              },
              { name: 'site 2', monthly_cost: 245.0, contract_id: contract[0] },
              {
                name: 'site 3',
                monthly_cost: 3325.0,
                contract_id: contract[0]
              },
              {
                name: 'site 4',
                monthly_cost: 3618.0,
                contract_id: contract[0]
              },
              { name: 'site 5', monthly_cost: 4093.0, contract_id: contract[0] }
            ]);
          })
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]).catch(error => console.log(`Error seeding data: ${error}`));
    });
};
