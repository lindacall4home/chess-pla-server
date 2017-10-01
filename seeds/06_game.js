
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, black_player_id: 44, black_player_rank: 42, white_player_id: 27, white_player_rank: 44, game_result: 'Draw', meeting_id: 1, board_num: 1},
        {id: 2, black_player_id: 5, black_player_rank: 41, white_player_id: 54, white_player_rank: 39, game_result: 'Draw', meeting_id: 1, board_num: 2},
        {id: 3, black_player_id: 16, black_player_rank: 48, white_player_id: 48, white_player_rank: 43, game_result: 'Black', meeting_id: 1, board_num: 3},
        {id: 4, black_player_id: 24, black_player_rank: 58, white_player_id: 60, white_player_rank: 55, game_result: 'Draw', meeting_id: 1, board_num: 4},
        {id: 5, black_player_id: 28, black_player_rank: 26, white_player_id: 8, white_player_rank: 24, game_result: 'Draw', meeting_id: 1, board_num: 5},
        {id: 6, black_player_id: 40, black_player_rank: 37, white_player_id: 59, white_player_rank: 40, game_result: 'Draw', meeting_id: 1, board_num: 6},
        {id: 7, black_player_id: 53, black_player_rank: 36, white_player_id: 50, white_player_rank: 45, game_result: 'White', meeting_id: 1, board_num: 7},

        {id: 8, black_player_id: 23, black_player_rank: 47, white_player_id: 39, white_player_rank: 46, game_result: 'Black', meeting_id: 1, board_num: 8},
        {id: 9, black_player_id: 4, black_player_rank: 14, white_player_id: 20, white_player_rank: 10, game_result: 'Black', meeting_id: 1, board_num: 9},
        {id: 10, black_player_id: 45, black_player_rank: 35, white_player_id: 18, white_player_rank: 16, game_result: 'Draw', meeting_id: 1, board_num: 10},
        {id: 11, black_player_id: 61, black_player_rank: 60, white_player_id: 32, white_player_rank: 34, game_result: 'Draw', meeting_id: 1, board_num: 11},
        {id: 12, black_player_id: 37, black_player_rank: 13, white_player_id: 36, white_player_rank: 4, game_result: 'White', meeting_id: 1, board_num: 12},
        {id: 13, black_player_id: 8, black_player_rank: 24, white_player_id: 28, white_player_rank: 26, game_result: 'Black', meeting_id: 1, board_num: 13},
        {id: 14, black_player_id: 46, black_player_rank: 53, white_player_id: 21, white_player_rank: 50, game_result: 'White', meeting_id: 1, board_num: 14},
        {id: 15, black_player_id: 57, black_player_rank: 61, white_player_id: 43, white_player_rank: 56, game_result: 'White', meeting_id: 1, board_num: 15},
        {id: 16, black_player_id: 13, black_player_rank: 51, white_player_id: 42, white_player_rank: 57, game_result: 'Black', meeting_id: 1, board_num: 16},
        {id: 17, black_player_id: 38, black_player_rank: 27, white_player_id: 14, white_player_rank: 20, game_result: 'White', meeting_id: 1, board_num: 17},
        {id: 18, black_player_id: 31, black_player_rank: 3, white_player_id: 25, white_player_rank: 12, game_result: 'White', meeting_id: 1, board_num: 18},
        {id: 19, black_player_id: 52, black_player_rank: 33, white_player_id: 15, white_player_rank: 30, game_result: 'White', meeting_id: 1, board_num: 19},
        {id: 20, black_player_id: 51, black_player_rank: 52, white_player_id: 58, white_player_rank: 17, game_result: 'White', meeting_id: 1, board_num: 20},

      ])
      .then(() => {
        return knex.raw("SELECT setval('game_id_seq', (SELECT MAX(id) FROM game))");
      });
    });
  };
