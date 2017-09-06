
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session_player').del()
  .then(function () {
    // Inserts seed entries
    return knex('session_player').insert([
      {id: 1, session_id: 2, player_id: 2, grade: 8, current_rank: 1},
      {id: 2, session_id: 2, player_id: 3, grade: 5, current_rank: 2},
      {id: 3, session_id: 2, player_id: 4, grade: 3, current_rank: 3}
    ])
    .then(() => {
      return knex.raw("SELECT setval('session_player_id_seq', (SELECT MAX(id) FROM session_player))");
    });
  });
};
