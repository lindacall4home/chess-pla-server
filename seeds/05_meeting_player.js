
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meeting_player').del()
    .then(function () {
      // Inserts seed entries
      return knex('meeting_player').insert([
        {id: 1, meeting_id: 1, player_id: 18, challenge_game: true, time_in: '03:25:00', time_out: '04:50:00'},
        {id: 2, meeting_id: 1, player_id: 1, challenge_game: true, time_in: '03:25:00', time_out: '04:50:00'},
        {id: 3, meeting_id: 1, player_id: 7, challenge_game: false, time_in: '03:25:00', time_out: '05:03:00'},
        {id: 4, meeting_id: 1, player_id: 15, challenge_game: true, time_in: '03:26:00', time_out: '04:51:00'},
        {id: 5, meeting_id: 1, player_id: 2, challenge_game: true, time_in: '03:26:00', time_out: '04:57:00'},
        {id: 6, meeting_id: 1, player_id: 3, challenge_game: true, time_in: '03:27:00', time_out: '04:59:00'},
        {id: 7, meeting_id: 1, player_id: 16, challenge_game: true, time_in: '03:28:00', time_out: '04:57:00'},
        {id: 8, meeting_id: 1, player_id: 9, challenge_game: true, time_in: '03:29:00', time_out: '04:56:00'},
        {id: 9, meeting_id: 1, player_id: 20, challenge_game: true, time_in: '03:30:00', time_out: '05:07:00'},
        {id: 10, meeting_id: 1, player_id: 17, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 11, meeting_id: 1, player_id: 6, challenge_game: true, time_in: '03:31:00', time_out: '04:59:00'},
        {id: 12, meeting_id: 1, player_id: 8, challenge_game: true, time_in: '03:32:00', time_out: '04:56:00'},
        {id: 13, meeting_id: 1, player_id: 11, challenge_game: true, time_in: '03:33:00', time_out: '04:58:00'},
        {id: 14, meeting_id: 2, player_id: 18, challenge_game: true, time_in: '03:25:00', time_out: '04:50:00'},
        {id: 15, meeting_id: 2, player_id: 1, challenge_game: true, time_in: '03:25:00', time_out: '04:50:00'},
        {id: 16, meeting_id: 2, player_id: 7, challenge_game: false, time_in: '03:25:00', time_out: '05:03:00'},
        {id: 17, meeting_id: 2, player_id: 15, challenge_game: true, time_in: '03:26:00', time_out: '04:51:00'},
        {id: 18, meeting_id: 2, player_id: 2, challenge_game: true, time_in: '03:26:00', time_out: '04:57:00'},
        {id: 19, meeting_id: 2, player_id: 3, challenge_game: true, time_in: '03:27:00', time_out: '04:59:00'},
        {id: 20, meeting_id: 2, player_id: 16, challenge_game: true, time_in: '03:28:00', time_out: '04:57:00'},
        {id: 21, meeting_id: 2, player_id: 9, challenge_game: true, time_in: '03:29:00', time_out: '04:56:00'},
        {id: 22, meeting_id: 2, player_id: 20, challenge_game: true, time_in: '03:30:00', time_out: '05:07:00'},
        {id: 23, meeting_id: 2, player_id: 17, challenge_game: false, time_in: '03:30:00', time_out: '05:00:00'},
        {id: 24, meeting_id: 2, player_id: 6, challenge_game: true, time_in: '03:31:00', time_out: '04:59:00'},
        {id: 25, meeting_id: 2, player_id: 8, challenge_game: true, time_in: '03:32:00', time_out: '04:56:00'},
        {id: 26, meeting_id: 2, player_id: 11, challenge_game: true, time_in: '03:33:00', time_out: '04:58:00'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('meeting_player_id_seq', (SELECT MAX(id) FROM meeting_player))");
      });
    });
  };
