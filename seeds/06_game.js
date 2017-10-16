
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, black_player_id: 44, black_player_rank: 20, white_player_id: 27, white_player_rank: 18, game_result: 'Draw', meeting_id: 1, board_num: 9},
        {id: 2, black_player_id: 5, black_player_rank: 21, white_player_id: 54, white_player_rank: 23, game_result: 'Draw', meeting_id: 1, board_num: 10},
        {id: 3, black_player_id: 16, black_player_rank: 14, white_player_id: 48, white_player_rank: 19, game_result: 'Black', meeting_id: 1, board_num: 7},
        {id: 4, black_player_id: 24, black_player_rank: 4, white_player_id: 60, white_player_rank: 7, game_result: 'Draw', meeting_id: 1, board_num: 3},
        {id: 5, black_player_id: 28, black_player_rank: 36, white_player_id: 8, white_player_rank: 38, game_result: 'Draw', meeting_id: 1, board_num: 16},
        {id: 6, black_player_id: 40, black_player_rank: 25, white_player_id: 59, white_player_rank: 22, game_result: 'Draw', meeting_id: 1, board_num: 11},
        {id: 7, black_player_id: 53, black_player_rank: 26, white_player_id: 50, white_player_rank: 17, game_result: 'White', meeting_id: 1, board_num: 12},
        {id: 8, black_player_id: 23, black_player_rank: 15, white_player_id: 39, white_player_rank: 16, game_result: 'Black', meeting_id: 1, board_num: 8},
        {id: 9, black_player_id: 4, black_player_rank: 48, white_player_id: 20, white_player_rank: 52, game_result: 'Black', meeting_id: 1, board_num: 18},
        {id: 10, black_player_id: 45, black_player_rank: 27, white_player_id: 18, white_player_rank: 46, game_result: 'Draw', meeting_id: 1, board_num: 13},
        {id: 11, black_player_id: 61, black_player_rank: 2, white_player_id: 32, white_player_rank: 28, game_result: 'Draw', meeting_id: 1, board_num: 2},
        {id: 12, black_player_id: 37, black_player_rank: 49, white_player_id: 36, white_player_rank: 58, game_result: 'White', meeting_id: 1, board_num: 19},
        {id: 13, black_player_id: 8, black_player_rank: 38, white_player_id: 28, white_player_rank: 36, game_result: 'Black', meeting_id: 1, board_num: 17},
        {id: 14, black_player_id: 46, black_player_rank: 9, white_player_id: 21, white_player_rank: 12, game_result: 'White', meeting_id: 1, board_num: 4},
        {id: 15, black_player_id: 57, black_player_rank: 1, white_player_id: 43, white_player_rank: 6, game_result: 'White', meeting_id: 1, board_num: 1},
        {id: 16, black_player_id: 13, black_player_rank: 11, white_player_id: 42, white_player_rank: 5, game_result: 'Black', meeting_id: 1, board_num: 6},
        {id: 17, black_player_id: 38, black_player_rank: 35, white_player_id: 14, white_player_rank: 42, game_result: 'White', meeting_id: 1, board_num: 15},
        {id: 18, black_player_id: 31, black_player_rank: 59, white_player_id: 25, white_player_rank: 50, game_result: 'White', meeting_id: 1, board_num: 20},
        {id: 19, black_player_id: 52, black_player_rank: 29, white_player_id: 15, white_player_rank: 32, game_result: 'White', meeting_id: 1, board_num: 14},
        {id: 20, black_player_id: 51, black_player_rank: 10, white_player_id: 58, white_player_rank: 45, game_result: 'White', meeting_id: 1, board_num: 5},

        {id: 21, black_player_id: 57, black_player_rank: 2, white_player_id: 43, white_player_rank: 1, game_result: 'White', meeting_id: 2, board_num: 1},
        {id: 22, black_player_id: 61, black_player_rank: 3, white_player_id: 32, white_player_rank: 4, game_result: 'White', meeting_id: 2, board_num: 2},
        {id: 23, black_player_id: 60, black_player_rank: 7, white_player_id: 1, white_player_rank: 5, game_result: 'Black', meeting_id: 2, board_num: 3},
        {id: 24, black_player_id: 8, black_player_rank: 8, white_player_id: 29, white_player_rank: 10, game_result: 'Black', meeting_id: 2, board_num: 4},
        {id: 25, black_player_id: 21, black_player_rank: 11, white_player_id: 29, white_player_rank: 12, game_result: 'Black', meeting_id: 2, board_num: 5},
        {id: 26, black_player_id: 51, black_player_rank: 14, white_player_id: 34, white_player_rank: 15, game_result: 'White', meeting_id: 2, board_num: 6},
        {id: 27, black_player_id: 23, black_player_rank: 17, white_player_id: 39, white_player_rank: 18, game_result: 'Black', meeting_id: 2, board_num: 7},
        {id: 28, black_player_id: 27, black_player_rank: 20, white_player_id: 50, white_player_rank: 19, game_result: 'Black', meeting_id: 2, board_num: 8},
        {id: 29, black_player_id: 44, black_player_rank: 21, white_player_id: 48, white_player_rank: 22, game_result: 'Draw', meeting_id: 2, board_num: 9},
        {id: 30, black_player_id: 54, black_player_rank: 24, white_player_id: 5, white_player_rank: 23, game_result: 'White', meeting_id: 2, board_num: 10},
        {id: 31, black_player_id: 45, black_player_rank: 29, white_player_id: 18, white_player_rank: 30, game_result: 'Draw', meeting_id: 2, board_num: 12},
        {id: 32, black_player_id: 15, black_player_rank: 31, white_player_id: 52, white_player_rank: 32, game_result: 'Black', meeting_id: 2, board_num: 13},
        {id: 33, black_player_id: 38, black_player_rank: 38, white_player_id: 10, white_player_rank: 36, game_result: 'Black', meeting_id: 2, board_num: 15},
        {id: 34, black_player_id: 8, black_player_rank: 39, white_player_id: 3, white_player_rank: 41, game_result: 'White', meeting_id: 2, board_num: 16},
        {id: 35, black_player_id: 35, black_player_rank: 45, white_player_id: 4, white_player_rank: 48, game_result: 'White', meeting_id: 2, board_num: 17},
        {id: 36, black_player_id: 36, black_player_rank: 49, white_player_id: 37, white_player_rank: 50, game_result: 'Black', meeting_id: 2, board_num: 18},
        {id: 37, black_player_id: 20, black_player_rank: 53, white_player_id: 25, white_player_rank: 51, game_result: 'Draw', meeting_id: 2, board_num: 19},
        {id: 38, black_player_id: 63, black_player_rank: 63, white_player_id: 49, white_player_rank: 58, game_result: 'Draw', meeting_id: 2, board_num: 20},
        {id: 39, black_player_id: 66, black_player_rank: 65, white_player_id: 64, white_player_rank: 64, game_result: 'White', meeting_id: 2, board_num: 21},

        {id: 40, black_player_id: 9, black_player_rank: 27, white_player_id: 53, white_player_rank: 28,  meeting_id: 2, board_num: 11},
        {id: 41, black_player_id: 47, black_player_rank: 34, white_player_id: 7, white_player_rank: 35,  meeting_id: 2, board_num: 14},

        {id: 42, black_player_id: 7, black_player_rank: 35, white_player_id: 53, white_player_rank: 28, game_result: 'Draw',  meeting_id: 2},
        {id: 43, black_player_id: 28, black_player_rank: 40, white_player_id: 9, white_player_rank: 27, game_result: 'Draw',  meeting_id: 2},
        {id: 44, black_player_id: 52, black_player_rank: 32, white_player_id: 21, white_player_rank: 11, game_result: 'Draw',  meeting_id: 2},
        {id: 45, black_player_id: 41, black_player_rank: 60, white_player_id: 12, white_player_rank: 47, game_result: 'White',  meeting_id: 2},
        {id: 46, black_player_id: 22, black_player_rank: 46, white_player_id: 31, white_player_rank: 59, game_result: 'Black',  meeting_id: 2},
        {id: 47, black_player_id: 30, black_player_rank: 56, white_player_id: 19, white_player_rank: 55, game_result: 'White',  meeting_id: 2},
        {id: 48, black_player_id: 40, black_player_rank: 26, white_player_id: 65, white_player_rank: 65, game_result: 'Black',  meeting_id: 2},
        {id: 49, black_player_id: 33, black_player_rank: 12, white_player_id: 2, white_player_rank: 52, game_result: 'Black',  meeting_id: 2},

        {id: 50, black_player_id: 67, black_player_rank: 67, white_player_id: 51, white_player_rank: 16, game_result: 'Black',  meeting_id: 3},
        {id: 51, black_player_id: 50, black_player_rank: 21, white_player_id: 73, white_player_rank: 73, game_result: 'Black',  meeting_id: 3},
        {id: 52, black_player_id: 65, black_player_rank: 65, white_player_id: 69, white_player_rank: 69, game_result: 'Black',  meeting_id: 3},
        {id: 53, black_player_id: 17, black_player_rank: 62, white_player_id: 19, white_player_rank: 55, game_result: 'White',  meeting_id: 3},
        {id: 54, black_player_id: 20, black_player_rank: 52, white_player_id: 33, white_player_rank: 57, game_result: 'Black',  meeting_id: 3},
        {id: 55, black_player_id: 42, black_player_rank: 9, white_player_id: 58, white_player_rank: 14, game_result: 'White',  meeting_id: 3},
        {id: 56, black_player_id: 35, black_player_rank: 46, white_player_id: 56, white_player_rank: 42, game_result: 'Draw',  meeting_id: 3},
        {id: 57, black_player_id: 40, black_player_rank: 27, white_player_id: 39, white_player_rank: 19, game_result: 'Black',  meeting_id: 3},
        {id: 58, black_player_id: 57, black_player_rank: 2, white_player_id:46, white_player_rank: 13, game_result: 'Draw',  meeting_id: 3},
        {id: 59, black_player_id: 60, black_player_rank: 5, white_player_id: 34, white_player_rank: 15, game_result: 'White',  meeting_id: 3},
        {id: 60, black_player_id: 66, black_player_rank: 66, white_player_id: 72, white_player_rank: 72, game_result: 'Black',  meeting_id: 3},
        {id: 61, black_player_id: 32, black_player_rank: 3, white_player_id: 5, white_player_rank: 24, game_result: 'Black',  meeting_id: 3},
        {id: 62, black_player_id: 8, black_player_rank: 41, white_player_id: 28, white_player_rank: 29, game_result: 'Draw',  meeting_id: 3},
        {id: 63, black_player_id: 11, black_player_rank: 43, white_player_id: 14, white_player_rank: 39, game_result: 'White',  meeting_id: 3},
        {id: 64, black_player_id: 57, black_player_rank: 2, white_player_id: 67, white_player_rank: 67, game_result: 'Black',  meeting_id: 3},
        {id: 65, black_player_id: 67, black_player_rank: 67, white_player_id: 51, white_player_rank: 16, game_result: 'Black',  meeting_id: 3},
        {id: 66, black_player_id: 29, black_player_rank: 10, white_player_id: 21, white_player_rank: 11, game_result: 'White',  meeting_id: 3},
        {id: 67, black_player_id: 6, black_player_rank: 54, white_player_id: 30, white_player_rank: 56, game_result: 'Black',  meeting_id: 3},
        {id: 68, black_player_id: 8, black_player_rank: 41, white_player_id: 28, white_player_rank: 29, game_result: 'Draw',  meeting_id: 3},
        {id: 69, black_player_id: 18, black_player_rank: 33, white_player_id: 62, white_player_rank: 63, game_result: 'Draw',  meeting_id: 3},
        {id: 70, black_player_id: 15, black_player_rank: 12, white_player_id: 52, white_player_rank: 34, game_result: 'Black',  meeting_id: 3},
        {id: 71, black_player_id: 68, black_player_rank: 68, white_player_id: 37, white_player_rank: 50, game_result: 'White',  meeting_id: 3},
        {id: 72, black_player_id: 47, black_player_rank: 36, white_player_id: 3, white_player_rank: 40, game_result: 'White',  meeting_id: 3},
        {id: 73, black_player_id: 33, black_player_rank: 57, white_player_id: 66, white_player_rank: 66, game_result: 'White',  meeting_id: 3},
        {id: 74, black_player_id: 55, black_player_rank: 35, white_player_id: 9, white_player_rank: 28, game_result: 'Black',  meeting_id: 3},
        {id: 75, black_player_id: 49, black_player_rank: 58, white_player_id: 36, white_player_rank: 49, game_result: 'White',  meeting_id: 3},
        {id: 76, black_player_id: 54, black_player_rank: 25, white_player_id: 48, white_player_rank: 23, game_result: 'White',  meeting_id: 3},
        {id: 77, black_player_id: 63, black_player_rank: 59, white_player_id: 26, white_player_rank: 44, game_result: 'Black',  meeting_id: 3},
        {id: 78, black_player_id: 23, black_player_rank: 18, white_player_id: 64, white_player_rank: 64, game_result: 'White',  meeting_id: 3},
        {id: 79, black_player_id: 13, black_player_rank: 8, white_player_id: 70, white_player_rank: 70, game_result: 'Black',  meeting_id: 3},
        {id: 80, black_player_id: 12, black_player_rank: 48, white_player_id: 2, white_player_rank: 53, game_result: 'Black',  meeting_id: 3}

      ])
      .then(() => {
        return knex.raw("SELECT setval('game_id_seq', (SELECT MAX(id) FROM game))");
      });
    });
  };
