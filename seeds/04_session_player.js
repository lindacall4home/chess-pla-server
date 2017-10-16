
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session_player').del()
  .then(function () {
    // Inserts seed entries
    return knex('session_player').insert([
      {id: 1, session_id: 2, player_id: 1, grade: 7, permission_form: true, paid: true, shirt_size: 'L', current_rank: 8},
      {id: 2, session_id: 2, player_id: 2, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 57},
      {id: 3, session_id: 2, player_id: 3, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 40},
      {id: 4, session_id: 2, player_id: 4, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 50},
      {id: 5, session_id: 2, player_id: 5, grade: 5, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 27},
      {id: 6, session_id: 2, player_id: 6, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 58},
      {id: 7, session_id: 2, player_id: 7, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 35},
      {id: 8, session_id: 2, player_id: 8, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 33},
      {id: 9, session_id: 2, player_id: 9, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 31},
      {id: 10, session_id: 2, player_id: 10, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 43},
      {id: 11, session_id: 2, player_id: 11, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 47},
      {id: 12, session_id: 2, player_id: 12, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 52},
      {id: 13, session_id: 2, player_id: 13, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 10},
      {id: 14, session_id: 2, player_id: 14, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 44},
      {id: 15, session_id: 2, player_id: 15, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 15},
      {id: 16, session_id: 2, player_id: 16, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 18},
      {id: 17, session_id: 2, player_id: 17, grade: 3, permission_form: true, paid: true, shirt_size: '', current_rank: 66},
      {id: 18, session_id: 2, player_id: 18, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 37},
      {id: 19, session_id: 2, player_id: 19, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 59},
      {id: 20, session_id: 2, player_id: 20, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 56},
      {id: 21, session_id: 2, player_id: 21, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 13},
      {id: 22, session_id: 2, player_id: 22, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 51},
      {id: 23, session_id: 2, player_id: 23, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 20},
      {id: 24, session_id: 2, player_id: 24, grade: 7, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 9},
      {id: 25, session_id: 2, player_id: 25, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 55},
      {id: 26, session_id: 2, player_id: 26, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 49},
      {id: 27, session_id: 2, player_id: 27, grade: 5, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 23},
      {id: 28, session_id: 2, player_id: 28, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 32},
      {id: 29, session_id: 2, player_id: 29, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 14},
      {id: 30, session_id: 2, player_id: 30, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 60},
      {id: 31, session_id: 2, player_id: 31, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 64},
      {id: 32, session_id: 2, player_id: 32, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 4},
      {id: 33, session_id: 2, player_id: 33, grade: 3, permission_form: true, paid: true, shirt_size: 'S', current_rank: 62},
      {id: 34, session_id: 2, player_id: 34, grade: 5, permission_form: true, paid: true, shirt_size: 'S', current_rank: 6},
      {id: 35, session_id: 2, player_id: 35, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 46},
      {id: 36, session_id: 2, player_id: 36, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 53},
      {id: 37, session_id: 2, player_id: 37, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 54},
      {id: 38, session_id: 2, player_id: 38, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 42},
      {id: 39, session_id: 2, player_id: 39, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 22},
      {id: 40, session_id: 2, player_id: 40, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 21},
      {id: 41, session_id: 2, player_id: 41, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 65},
      {id: 42, session_id: 2, player_id: 42, grade: 6, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 12},
      {id: 43, session_id: 2, player_id: 43, grade: 7, permission_form: true, paid: true, shirt_size: 'S', current_rank: 1},
      {id: 44, session_id: 2, player_id: 44, grade: 5, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 25},
      {id: 45, session_id: 2, player_id: 45, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 36},
      {id: 46, session_id: 2, player_id: 46, grade: 6, permission_form: true, paid: true, shirt_size: 'YXL', current_rank: 3},
      {id: 47, session_id: 2, player_id: 47, grade: 4, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 41},
      {id: 48, session_id: 2, player_id: 48, grade: 5, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 26},
      {id: 49, session_id: 2, player_id: 49, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 63},
      {id: 50, session_id: 2, player_id: 50, grade: 5, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 24},
      {id: 51, session_id: 2, player_id: 51, grade: 6, permission_form: true, paid: true, shirt_size: '', current_rank: 17},
      {id: 52, session_id: 2, player_id: 52, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 39},
      {id: 53, session_id: 2, player_id: 53, grade: 4, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 34},
      {id: 54, session_id: 2, player_id: 54, grade: 5, permission_form: true, paid: true, shirt_size: 'YL', current_rank: 28},
      {id: 55, session_id: 2, player_id: 55, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 30},
      {id: 56, session_id: 2, player_id: 56, grade: 4, permission_form: true, paid: true, shirt_size: '', current_rank: 45},
      {id: 57, session_id: 2, player_id: 57, grade: 8, permission_form: true, paid: true, shirt_size: '', current_rank: 2},
      {id: 58, session_id: 2, player_id: 58, grade: 6, permission_form: true, paid: true, shirt_size: '', current_rank: 11},
      {id: 59, session_id: 2, player_id: 59, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 29},
      {id: 60, session_id: 2, player_id: 60, grade: 7, permission_form: true, paid: true, shirt_size: '', current_rank: 7},
      {id: 61, session_id: 2, player_id: 61, grade: 7, permission_form: true, paid: true, shirt_size: '', current_rank: 5},
      {id: 62, session_id: 2, player_id: 62, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 38},
      {id: 63, session_id: 2, player_id: 63, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 48},
      {id: 64, session_id: 2, player_id: 64, grade: 6, permission_form: true, paid: true, shirt_size: 'M', current_rank: 19},
      {id: 65, session_id: 2, player_id: 65, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 67},
      {id: 66, session_id: 2, player_id: 66, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 61},
      {id: 67, session_id: 2, player_id: 67, grade: 6, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 16},
      {id: 68, session_id: 2, player_id: 68, grade: 3, permission_form: true, paid: true, shirt_size: '', current_rank: 68},
      {id: 69, session_id: 2, player_id: 69, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 69},
      {id: 70, session_id: 2, player_id: 70, grade: 3, permission_form: true, paid: true, shirt_size: '', current_rank: 70},
      {id: 71, session_id: 2, player_id: 71, grade: 6, permission_form: true, paid: true, shirt_size: 'L', current_rank: 71},
      {id: 72, session_id: 2, player_id: 72, grade: 3, permission_form: true, paid: true, shirt_size: 'YM', current_rank: 72},
      {id: 73, session_id: 2, player_id: 73, grade: 5, permission_form: true, paid: true, shirt_size: '', current_rank: 73}

    ])
    .then(() => {
      return knex.raw("SELECT setval('session_player_id_seq', (SELECT MAX(id) FROM session_player))");
    });
  });
};
