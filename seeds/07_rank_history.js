
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rank_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('rank_history').insert([
        {id: 1, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 61, player_id: 17},
        {id: 2, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 60, player_id: 41},
        {id: 3, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 59, player_id: 31},
        {id: 4, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 58, player_id: 36},
        {id: 5, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 57, player_id: 49},
        {id: 6, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 56, player_id: 33},
        {id: 7, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 55, player_id: 19},
        {id: 8, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 54, player_id: 30},
        {id: 9, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 53, player_id: 6},
        {id: 10, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 52, player_id: 20},
        {id: 11, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 51, player_id: 2},
        {id: 12, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 50, player_id: 25},
        {id: 13, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 49, player_id: 37},
        {id: 14, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 48, player_id: 4},
        {id: 15, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 47, player_id: 12},
        {id: 16, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 46, player_id: 18},
        {id: 17, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 45, player_id: 58},
        {id: 18, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 44, player_id: 22},
        {id: 19, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 43, player_id: 35},
        {id: 20, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 42, player_id: 14},
        {id: 21, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 41, player_id: 26},
        {id: 22, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 40, player_id: 11},
        {id: 23, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 39, player_id: 56},
        {id: 24, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 38, player_id: 8},
        {id: 25, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 37, player_id: 3},
        {id: 26, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 36, player_id: 28},
        {id: 27, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 35, player_id: 38},
        {id: 28, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 34, player_id: 10},
        {id: 29, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 33, player_id: 7},
        {id: 30, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 32, player_id: 15},
        {id: 31, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 31, player_id: 47},
        {id: 32, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 30, player_id: 55},
        {id: 33, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 29, player_id: 52},
        {id: 34, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 28, player_id: 32},
        {id: 35, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 27, player_id: 45},
        {id: 36, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 26, player_id: 53},
        {id: 37, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 25, player_id: 40},
        {id: 38, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 24, player_id: 9},
        {id: 39, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 23, player_id: 54},
        {id: 40, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 22, player_id: 59},
        {id: 41, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 21, player_id: 5},
        {id: 42, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 20, player_id: 44},
        {id: 43, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 19, player_id: 48},
        {id: 44, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 18, player_id: 27},
        {id: 45, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 17, player_id: 50},
        {id: 46, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 16, player_id: 39},
        {id: 47, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 15, player_id: 23},
        {id: 48, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 14, player_id: 16},
        {id: 49, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 13, player_id: 34},
        {id: 50, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 12, player_id: 21},
        {id: 51, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 11, player_id: 13},
        {id: 52, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 10, player_id: 51},
        {id: 53, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 9, player_id: 46},
        {id: 54, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 8, player_id: 29},
        {id: 55, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 7, player_id: 60},
        {id: 56, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 6, player_id: 43},
        {id: 57, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 5, player_id: 42},
        {id: 58, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 4, player_id: 24},
        {id: 59, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 3, player_id: 1},
        {id: 60, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 2, player_id: 61},
        {id: 61, session_id: 2, date: new Date('2017-09-18 00:00:00 UTC'), rank: 1, player_id: 57},
        {id: 62, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 1, player_id: 43},
        {id: 63, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 2, player_id: 57},
        {id: 64, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 3, player_id: 61},
        {id: 65, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 4, player_id: 32},
        {id: 66, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 5, player_id: 1},
        {id: 67, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 6, player_id: 24},
        {id: 68, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 7, player_id: 60},
        {id: 69, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 8, player_id: 13},
        {id: 70, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 9, player_id: 42},
        {id: 71, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 10, player_id: 29},
        {id: 72, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 11, player_id: 21},
        {id: 73, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 12, player_id: 46},
        {id: 74, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 13, player_id: 58},
        {id: 75, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 14, player_id: 51},
        {id: 76, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 15, player_id: 34},
        {id: 77, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 16, player_id: 16},
        {id: 78, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 17, player_id: 23},
        {id: 79, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 18, player_id: 39},
        {id: 80, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 19, player_id: 50},
        {id: 81, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 20, player_id: 27},
        {id: 82, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 21, player_id: 44},
        {id: 83, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 22, player_id: 48},
        {id: 84, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 23, player_id: 5},
        {id: 85, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 24, player_id: 54},
        {id: 86, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 25, player_id: 59},
        {id: 87, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 26, player_id: 40},
        {id: 88, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 27, player_id: 9},
        {id: 89, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 28, player_id: 53},
        {id: 90, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 29, player_id: 45},
        {id: 91, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 30, player_id: 18},
        {id: 92, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 31, player_id: 15},
        {id: 93, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 32, player_id: 52},
        {id: 94, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 33, player_id: 55},
        {id: 95, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 34, player_id: 47},
        {id: 96, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 35, player_id: 7},
        {id: 97, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 36, player_id: 10},
        {id: 98, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 37, player_id: 14},
        {id: 99, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 38, player_id: 38},
        {id: 100, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 39, player_id: 8},
        {id: 101, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 40, player_id: 28},
        {id: 102, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 41, player_id: 3},
        {id: 103, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 42, player_id: 56},
        {id: 104, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 43, player_id: 11},
        {id: 105, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 44, player_id: 26},
        {id: 106, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 45, player_id: 35},
        {id: 107, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 46, player_id: 22},
        {id: 108, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 47, player_id: 12},
        {id: 109, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 48, player_id: 4},
        {id: 110, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 49, player_id: 36},
        {id: 111, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 50, player_id: 37},
        {id: 112, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 51, player_id: 25},
        {id: 113, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 52, player_id: 2},
        {id: 114, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 53, player_id: 20},
        {id: 115, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 54, player_id: 6},
        {id: 116, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 55, player_id: 30},
        {id: 117, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 56, player_id: 19},
        {id: 118, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 57, player_id: 33},
        {id: 119, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 58, player_id: 49},
        {id: 120, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 59, player_id: 31},
        {id: 121, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 60, player_id: 41},
        {id: 122, session_id: 2, date: new Date('2017-09-25 00:00:00 UTC'), rank: 61, player_id: 17},

        {id: 123, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 1, player_id: 43},
        {id: 124, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 2, player_id: 57},
        {id: 125, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 3, player_id: 61},
        {id: 126, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 4, player_id: 32},
        {id: 127, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 5, player_id: 1},
        {id: 128, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 6, player_id: 24},
        {id: 129, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 7, player_id: 60},
        {id: 130, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 8, player_id: 13},
        {id: 131, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 9, player_id: 42},
        {id: 132, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 10, player_id: 29},
        {id: 133, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 11, player_id: 21},
        {id: 134, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 12, player_id: 46},
        {id: 135, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 13, player_id: 58},
        {id: 136, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 14, player_id: 51},
        {id: 137, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 15, player_id: 34},
        {id: 138, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 16, player_id: 16},
        {id: 139, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 17, player_id: 23},
        {id: 140, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 18, player_id: 39},
        {id: 141, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 19, player_id: 50},
        {id: 142, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 20, player_id: 27},
        {id: 143, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 21, player_id: 44},
        {id: 144, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 22, player_id: 48},
        {id: 145, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 23, player_id: 5},
        {id: 146, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 24, player_id: 54},
        {id: 147, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 25, player_id: 59},
        {id: 148, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 26, player_id: 40},
        {id: 149, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 27, player_id: 9},
        {id: 150, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 28, player_id: 53},
        {id: 151, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 29, player_id: 45},
        {id: 152, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 30, player_id: 18},
        {id: 153, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 31, player_id: 15},
        {id: 154, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 32, player_id: 52},
        {id: 155, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 33, player_id: 55},
        {id: 156, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 34, player_id: 47},
        {id: 157, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 35, player_id: 7},
        {id: 158, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 36, player_id: 10},
        {id: 159, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 37, player_id: 14},
        {id: 160, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 38, player_id: 38},
        {id: 161, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 39, player_id: 8},
        {id: 162, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 40, player_id: 28},
        {id: 163, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 41, player_id: 3},
        {id: 164, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 42, player_id: 56},
        {id: 165, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 43, player_id: 11},
        {id: 166, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 44, player_id: 26},
        {id: 167, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 45, player_id: 35},
        {id: 168, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 46, player_id: 22},
        {id: 169, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 47, player_id: 12},
        {id: 170, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 48, player_id: 4},
        {id: 171, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 49, player_id: 36},
        {id: 172, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 50, player_id: 37},
        {id: 173, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 51, player_id: 25},
        {id: 174, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 52, player_id: 2},
        {id: 175, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 53, player_id: 20},
        {id: 176, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 54, player_id: 6},
        {id: 177, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 55, player_id: 30},
        {id: 178, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 56, player_id: 19},
        {id: 179, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 57, player_id: 33},
        {id: 180, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 58, player_id: 49},
        {id: 181, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 59, player_id: 31},
        {id: 182, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 60, player_id: 41},
        {id: 183, session_id: 2, date: new Date('2017-10-02 00:00:00 UTC'), rank: 61, player_id: 17}

        {id: 184, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 1, player_id: 43},
        {id: 185, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 2, player_id: 57},
        {id: 186, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 3, player_id: 61},
        {id: 187, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 4, player_id: 32},
        {id: 188, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 5, player_id: 1},
        {id: 189, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 6, player_id: 24},
        {id: 190, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 7, player_id: 60},
        {id: 191, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 8, player_id: 13},
        {id: 192, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 9, player_id: 42},
        {id: 193, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 10, player_id: 29},
        {id: 194, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 11, player_id: 21},
        {id: 195, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 12, player_id: 46},
        {id: 196, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 13, player_id: 58},
        {id: 197, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 14, player_id: 51},
        {id: 198, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 15, player_id: 34},
        {id: 199, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 16, player_id: 16},
        {id: 200, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 17, player_id: 23},
        {id: 201, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 18, player_id: 39},
        {id: 202, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 19, player_id: 50},
        {id: 203, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 20, player_id: 27},
        {id: 204, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 21, player_id: 44},
        {id: 205, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 22, player_id: 48},
        {id: 206, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 23, player_id: 5},
        {id: 207, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 24, player_id: 54},
        {id: 208, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 25, player_id: 59},
        {id: 209, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 26, player_id: 40},
        {id: 210, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 27, player_id: 9},
        {id: 211, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 28, player_id: 53},
        {id: 212, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 29, player_id: 45},
        {id: 213, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 30, player_id: 18},
        {id: 214, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 31, player_id: 15},
        {id: 215, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 32, player_id: 52},
        {id: 216, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 33, player_id: 55},
        {id: 217, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 34, player_id: 47},
        {id: 218, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 35, player_id: 7},
        {id: 219, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 36, player_id: 10},
        {id: 220, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 37, player_id: 14},
        {id: 221, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 38, player_id: 38},
        {id: 222, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 39, player_id: 8},
        {id: 223, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 40, player_id: 28},
        {id: 224, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 41, player_id: 3},
        {id: 225, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 42, player_id: 56},
        {id: 226, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 43, player_id: 11},
        {id: 227, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 44, player_id: 26},
        {id: 228, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 45, player_id: 35},
        {id: 229, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 46, player_id: 22},
        {id: 230, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 47, player_id: 12},
        {id: 231, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 48, player_id: 4},
        {id: 232, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 49, player_id: 36},
        {id: 233, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 50, player_id: 37},
        {id: 234, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 51, player_id: 25},
        {id: 235, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 52, player_id: 2},
        {id: 236, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 53, player_id: 20},
        {id: 237, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 54, player_id: 6},
        {id: 238, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 55, player_id: 30},
        {id: 239, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 56, player_id: 19},
        {id: 240, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 57, player_id: 33},
        {id: 241, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 58, player_id: 49},
        {id: 242, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 59, player_id: 31},
        {id: 243, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 60, player_id: 41},
        {id: 244, session_id: 2, date: new Date('2017-10-09 00:00:00 UTC'), rank: 61, player_id: 17}

     ]
    )
      .then(() => {
        return knex.raw("SELECT setval('rank_history_id_seq', (SELECT MAX(id) FROM rank_history))");
      });
    });
};
