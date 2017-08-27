
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
  .then(function () {
    // Inserts seed entries
    return knex('player').insert([
      {id: 1, first_name: 'Taylor', last_name: 'Jones', alias: 'blue-whale', birthday: new Date('2004-06-26 00:00:00 UTC')},
      {id: 2, first_name: 'Hunter', last_name: 'Smith', alias: 'red-elephant', birthday: new Date('2006-12-15 00:00:00 UTC')},
      {id: 3, first_name: 'Jordan', last_name: 'Young', alias: 'green-tiger', birthday: new Date('2007-03-03 00:00:00 UTC')},
      {id: 4, first_name: 'Emma', last_name: 'Brown', alias: 'purple-sloth', birthday: new Date('2008-10-17 00:00:00 UTC')}
    ])
    .then(() => {
      return knex.raw("SELECT setval('player_id_seq', (SELECT MAX(id) FROM player))");
    });
  });
};
