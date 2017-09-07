
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
  .then(function () {
    // Inserts seed entries
    return knex('player').insert([
      {id: 1, first_name: 'Adam', last_name: 'Smith', alias: 'awesome-adam', birthday: new Date('2004-06-26 00:00:00 UTC')},
      {id: 2, first_name: 'Arlo', last_name: 'Shefte-Jacobs', alias: 'amazing-arlo', birthday: new Date('2006-12-15 00:00:00 UTC')},
      {id: 3, first_name: 'Brennen', last_name: 'Bull', alias: 'bodacious-brennen', birthday: new Date('2007-03-03 00:00:00 UTC')},
      {id: 4, first_name: 'David', last_name: 'Leonhardt', alias: 'daring-david', birthday: new Date('2008-10-17 00:00:00 UTC')},
      {id: 5, first_name: 'Elizabeth', last_name: 'Flournoy', alias: 'elusive-elizabeth', birthday: new Date('2009-02-28 00:00:00 UTC')},
      {id: 6, first_name: 'GP', last_name: 'Ciancio', alias: 'grinning-gp', birthday: new Date('1996-11-17 00:00:00 UTC')},
      {id: 7, first_name: 'Jeff', last_name: 'Kerpan', alias: 'jumping-jeff', birthday: new Date('1991-06-10 00:00:00 UTC')},
      {id: 8, first_name: 'Jodie', last_name: 'Rigali', alias: 'jock-jams-jodi', birthday: new Date('2001-10-11 00:00:00 UTC')},
      {id: 9, first_name: 'Jonathan', last_name: 'Lindell', alias: 'jester-jon', birthday: new Date('2003-08-02 00:00:00 UTC')},
      {id: 10, first_name: 'Jordan', last_name: 'Klaers', alias: 'jazzy-jordan', birthday: new Date('1999-01-11 00:00:00 UTC')},
      {id: 11, first_name: 'Matthew', last_name: 'Hummer', alias: 'mega-matt', birthday: new Date('2002-05-05 00:00:00 UTC')},
      {id: 12, first_name: 'Nick', last_name: 'Lawrence', alias: 'nice-nick', birthday: new Date('2002-09-20 00:00:00 UTC')},
      {id: 13, first_name: 'Shelby', last_name: 'Valdes', alias: 'smart-shelby', birthday: new Date('2006-04-14 00:00:00 UTC')},
      {id: 14, first_name: 'Sean', last_name: 'Eichenberger', alias: 'circuitous-sean', birthday: new Date('2006-12-27 00:00:00 UTC')},
      {id: 15, first_name: 'Shannon', last_name: 'Rivers', alias: 'shody-shannon', birthday: new Date('1998-03-07 00:00:00 UTC')},
      {id: 16, first_name: 'Sol', last_name: 'Laudon', alias: 'shocking-sol', birthday: new Date('2097-11-01 00:00:00 UTC')},
      {id: 17, first_name: 'Tas', last_name: 'Drake', alias: 'tricky-tas', birthday: new Date('1990-04-30 00:00:00 UTC')},
      {id: 18, first_name: 'Tucker', last_name: 'Triggs', alias: 'tangential-tucker', birthday: new Date('2005-02-12 00:00:00 UTC')},
      {id: 19, first_name: 'Zachary', last_name: 'Passarelli', alias: 'zesty-zach', birthday: new Date('2008-05-09 00:00:00 UTC')},
      {id: 20, first_name: 'Katie', last_name: 'Jenkins', alias: 'kool-katie', birthday: new Date('1993-01-31 00:00:00 UTC')},
      {id: 21, first_name: 'Teddi', last_name: 'Maull', alias: 'terrifying-teddi', birthday: new Date('1994-09-15 00:00:00 UTC')},
    ])
    .then(() => {
      return knex.raw("SELECT setval('player_id_seq', (SELECT MAX(id) FROM player))");
    });
  });
};
