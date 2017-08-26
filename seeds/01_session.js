
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session').del()
  .then(function () {
    // Inserts seed entries
    return knex('session').insert([
      {id: 1, isCurrent: false, session_name: 'Eldorado K-8 2016-2017'},
      {id: 2, isCurrent: true, session_name: 'Eldorado K-8 2017-2018'}
    ])
    .then(() => {
      return knex.raw("SELECT setval('session_id_seq', (SELECT MAX(id) FROM session))");
    });
  });
};
