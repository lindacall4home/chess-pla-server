
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session_player').del()
  .then(function () {
    // Inserts seed entries
    return knex('session_player').insert([
      {id: 1, session_id: 2, player_id: 1, grade: 7, permission_form: true, paid: true, shirt_size: 'L', current_rank: 1},
      {id: 2, session_id: 2, player_id: 2, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 2},
      {id: 3, session_id: 2, player_id: 3, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 3},
      {id: 4, session_id: 2, player_id: 4, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 4},
      {id: 5, session_id: 2, player_id: 5, grade: 5, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 5},
      {id: 6, session_id: 2, player_id: 6, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 6},
      {id: 7, session_id: 2, player_id: 7, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 7},
      {id: 8, session_id: 2, player_id: 8, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 8},
      {id: 9, session_id: 2, player_id: 9, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 9},
      {id: 10, session_id: 2, player_id: 10, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 10},
      {id: 11, session_id: 2, player_id: 11, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 11},
      {id: 12, session_id: 2, player_id: 12, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 12},
      {id: 13, session_id: 2, player_id: 13, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 13},
      {id: 14, session_id: 2, player_id: 14, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 14},
      {id: 15, session_id: 2, player_id: 15, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 15},
      {id: 16, session_id: 2, player_id: 16, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 16},
      {id: 17, session_id: 2, player_id: 17, grade: 3, permission_form: true, paid: true, shirt_size: '', current_rank: 17},
      {id: 18, session_id: 2, player_id: 18, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 18},
      {id: 19, session_id: 2, player_id: 19, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 19},
      {id: 20, session_id: 2, player_id: 20, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 20},
      {id: 21, session_id: 2, player_id: 21, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 21},
      {id: 22, session_id: 2, player_id: 22, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 22},
      {id: 23, session_id: 2, player_id: 23, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 23},
      {id: 24, session_id: 2, player_id: 24, grade: 7, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 24},
      {id: 25, session_id: 2, player_id: 25, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 25},
      {id: 26, session_id: 2, player_id: 26, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 26},
      {id: 27, session_id: 2, player_id: 27, grade: 5, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 27},
      {id: 28, session_id: 2, player_id: 28, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 28},
      {id: 29, session_id: 2, player_id: 29, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 29},
      {id: 30, session_id: 2, player_id: 30, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 30},
      {id: 31, session_id: 2, player_id: 31, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 31},
      {id: 32, session_id: 2, player_id: 32, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 32},
      {id: 33, session_id: 2, player_id: 33, grade: 3, permission_form: true, paid: true, shirt_size: 'S', current_rank: 33},
      {id: 34, session_id: 2, player_id: 34, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 34},
      {id: 35, session_id: 2, player_id: 35, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 35},
      {id: 36, session_id: 2, player_id: 36, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 36},
      {id: 37, session_id: 2, player_id: 37, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 37},
      {id: 38, session_id: 2, player_id: 38, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 38},
      {id: 39, session_id: 2, player_id: 39, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 39},
      {id: 40, session_id: 2, player_id: 40, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 40},
    ])
    .then(() => {
      return knex.raw("SELECT setval('session_player_id_seq', (SELECT MAX(id) FROM session_player))");
    });
  });
};
