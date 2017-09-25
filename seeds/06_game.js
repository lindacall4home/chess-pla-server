
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        // {id: 1, black_player_id: 15, black_player_rank: 2, white_player_id: 11, white_player_rank: 3, game_result: 'Black', meeting_id: 4, board_num: 1},
        // {id: 2, black_player_id: 2, black_player_rank: 5, white_player_id: 3, white_player_rank: 6, game_result: 'Draw', meeting_id: 4, board_num: 2},
        // {id: 3, black_player_id: 1, black_player_rank: 7, white_player_id: 16, white_player_rank: 10, game_result: null, meeting_id: 4, board_num: 3},
        // {id: 4, black_player_id: 9, black_player_rank: 14, white_player_id: 6, white_player_rank: 16, game_result: null, meeting_id: 4, board_num: 4},
        // {id: 5, black_player_id: 18, black_player_rank: 19, white_player_id: 20, white_player_rank: 20, game_result: 'White', meeting_id: 4, board_num: 5},
        // {id: 6, black_player_id: 15, black_player_rank: 2, white_player_id: 11, white_player_rank: 3, game_result: 'Black', meeting_id: 5, board_num: 1},
        // {id: 7, black_player_id: 2, black_player_rank: 5, white_player_id: 3, white_player_rank: 6, game_result: null, meeting_id: 5, board_num: 2},
        // {id: 8, black_player_id: 1, black_player_rank: 7, white_player_id: 16, white_player_rank: 10, game_result: null, meeting_id: 5, board_num: 3},
        // {id: 9, black_player_id: 9, black_player_rank: 14, white_player_id: 6, white_player_rank: 16, game_result: 'White', meeting_id: 5, board_num: 4},
        // {id: 10, black_player_id: 18, black_player_rank: 19, white_player_id: 20, white_player_rank: 20, game_result: 'Black', meeting_id: 5, board_num: 5}
      ])
      .then(() => {
        return knex.raw("SELECT setval('game_id_seq', (SELECT MAX(id) FROM game))");
      });
    });
  };
