exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_agreements')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('service_agreements').insert([
        {
          term_length: 1,
          hourly_rate: 125.0,
          project_summary:
            'This SOW covers the discovery and documentation of ABC health Corporations (ABCHC) wired and wireless local area networks (LANs)',
          scope_of_work: 'Document and evaluate IP Address allcation and usage.'
        }
      ]);
    });
};
