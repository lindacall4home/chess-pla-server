
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meeting_player').del()
    .then(function () {
      // Inserts seed entries
      return knex('meeting_player').insert([
        {id: 1, meeting_id: 1, player_id: 33, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 2, meeting_id: 1, player_id: 31, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 3, meeting_id: 1, player_id: 56, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 4, meeting_id: 1, player_id: 38, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 5, meeting_id: 1, player_id: 45, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 6, meeting_id: 1, player_id: 8, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 7, meeting_id: 1, player_id: 28, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 8, meeting_id: 1, player_id: 4, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 9, meeting_id: 1, player_id: 49, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 10, meeting_id: 1, player_id: 36, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 11, meeting_id: 1, player_id: 19, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 12, meeting_id: 1, player_id: 18, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 13, meeting_id: 1, player_id: 50, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 14, meeting_id: 1, player_id: 57, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 15, meeting_id: 1, player_id: 47, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 16, meeting_id: 1, player_id: 30, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 17, meeting_id: 1, player_id: 6, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 18, meeting_id: 1, player_id: 17, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 19, meeting_id: 1, player_id: 25, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 20, meeting_id: 1, player_id: 14, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 21, meeting_id: 1, player_id: 53, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 22, meeting_id: 1, player_id: 15, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 23, meeting_id: 1, player_id: 52, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 24, meeting_id: 1, player_id: 9, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 25, meeting_id: 1, player_id: 39, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 26, meeting_id: 1, player_id: 21, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 27, meeting_id: 1, player_id: 58, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 28, meeting_id: 1, player_id: 35, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 29, meeting_id: 1, player_id: 46, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 30, meeting_id: 1, player_id: 51, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 31, meeting_id: 1, player_id: 12, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 32, meeting_id: 1, player_id: 2, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 33, meeting_id: 1, player_id: 37, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 34, meeting_id: 1, player_id: 26, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 35, meeting_id: 1, player_id: 16, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 36, meeting_id: 1, player_id: 59, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 37, meeting_id: 1, player_id: 32, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 38, meeting_id: 1, player_id: 42, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 39, meeting_id: 1, player_id: 40, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 40, meeting_id: 1, player_id: 54, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 41, meeting_id: 1, player_id: 5, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 42, meeting_id: 1, player_id: 13, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 43, meeting_id: 1, player_id: 60, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 44, meeting_id: 1, player_id: 24, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 45, meeting_id: 1, player_id: 1, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 46, meeting_id: 1, player_id: 20, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 47, meeting_id: 1, player_id: 10, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 48, meeting_id: 1, player_id: 43, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 49, meeting_id: 1, player_id: 48, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 50, meeting_id: 1, player_id: 44, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 51, meeting_id: 1, player_id: 23, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 52, meeting_id: 1, player_id: 27, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 53, meeting_id: 1, player_id: 61, challenge_game: true, time_in: '03:30:00', time_out: '05:00:00'},

      ])
      .then(() => {
        return knex.raw("SELECT setval('meeting_player_id_seq', (SELECT MAX(id) FROM meeting_player))");
      });
    });
  };
