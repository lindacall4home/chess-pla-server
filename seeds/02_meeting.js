
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meeting').del()
  .then(function () {
    // Inserts seed entries
    return knex('meeting').insert([
      {id: 1, date: '09-25-2017', session_id: 2},
      {id: 2, date: '10-02-2017', session_id: 2},
      {id: 3, date: '10-09-2017', session_id: 2},
      {id: 4, date: '10-16-2017', session_id: 2},
      {id: 5, date: '10-30-2017', session_id: 2},
      {id: 6, date: '11-06-2017', session_id: 2},
      {id: 7, date: '11-13-2017', session_id: 2},
      {id: 8, date: '11-27-2017', session_id: 2},
      {id: 9, date: '12-04-2017', session_id: 2},
      {id: 10, date: '12-11-2017', session_id: 2},
      {id: 11, date: '12-18-2017', session_id: 2},
      {id: 12, date: '01-22-2018', session_id: 2},
      {id: 13, date: '01-29-2018', session_id: 2},
      {id: 14, date: '02-05-2018', session_id: 2},
      {id: 15, date: '02-12-2018', session_id: 2},
    ])
    .then(() => {
      return knex.raw("SELECT setval('meeting_id_seq', (SELECT MAX(id) FROM meeting))");
    });
  });
};
