
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session').del()
  .then(function () {
    // Inserts seed entries
    return knex('session').insert([
      {id: 1, isCurrent: false, start_date: '09-01-2016', end_date: '05-31-2017'},
      {id: 2, isCurrent: true, start_date: '09-01-2017', end_date: '05-31-2018'}
    ])
    .then(() => {
      return knex.raw("SELECT setval('session_id_seq', (SELECT MAX(id) FROM session))");
    });
  });
};
