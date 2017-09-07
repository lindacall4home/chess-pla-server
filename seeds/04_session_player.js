
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session_player').del()
  .then(function () {
    // Inserts seed entries
    return knex('session_player').insert([
      {id: 1, session_id: 2, player_id: 1, grade: 8, current_rank: 7},
      {id: 2, session_id: 2, player_id: 2, grade: 5, current_rank: 5},
      {id: 3, session_id: 2, player_id: 3, grade: 4, current_rank: 6},
      {id: 4, session_id: 2, player_id: 4, grade: 3, current_rank: 4},
      {id: 5, session_id: 2, player_id: 5, grade: 7, current_rank: 15},
      {id: 6, session_id: 2, player_id: 6, grade: 7, current_rank: 16},
      {id: 7, session_id: 2, player_id: 7, grade: 8, current_rank: 21},
      {id: 8, session_id: 2, player_id: 8, grade: 8, current_rank: 8},
      {id: 9, session_id: 2, player_id: 9, grade: 3, current_rank: 14},
      {id: 10, session_id: 2, player_id: 10, grade: 3, current_rank: 13},
      {id: 11, session_id: 2, player_id: 11, grade: 5, current_rank: 3},
      {id: 12, session_id: 2, player_id: 12, grade: 5, current_rank: 9},
      {id: 13, session_id: 2, player_id: 13, grade: 6, current_rank: 17},
      {id: 14, session_id: 2, player_id: 14, grade: 7, current_rank: 18},
      {id: 15, session_id: 2, player_id: 15, grade: 8, current_rank: 2},
      {id: 16, session_id: 2, player_id: 16, grade: 3, current_rank: 10},
      {id: 17, session_id: 2, player_id: 17, grade: 5, current_rank: 12},
      {id: 18, session_id: 2, player_id: 18, grade: 4, current_rank: 19},
      {id: 19, session_id: 2, player_id: 19, grade: 4, current_rank: 11},
      {id: 20, session_id: 2, player_id: 20, grade: 6, current_rank: 20},
      {id: 21, session_id: 2, player_id: 21, grade: 8, current_rank: 1},
    ])
    .then(() => {
      return knex.raw("SELECT setval('session_player_id_seq', (SELECT MAX(id) FROM session_player))");
    });
  });
};
