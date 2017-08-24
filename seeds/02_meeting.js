
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meeting').del()
  .then(function () {
    // Inserts seed entries
    return knex('meeting').insert([
      {id: 1, date: '09-05-2016', session_id: 1},
      {id: 2, date: '09-12-2016', session_id: 1},
      {id: 3, date: '09-19-2016', session_id: 1},
      {id: 4, date: '09-18-2017', session_id: 2},
      {id: 5, date: '09-25-2017', session_id: 2},
      {id: 6, date: '10-02-2017', session_id: 2},
    ])
    .then(() => {
      return knex.raw("SELECT setval('meeting_id_seq', (SELECT MAX(id) FROM meeting))");
    });
  });
};
