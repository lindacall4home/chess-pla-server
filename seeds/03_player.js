
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
  .then(function () {
    // Inserts seed entries
    return knex('player').insert([
      {id: 1, first_name: 'Paige', last_name: 'Wilcox',  birthday: new Date('2004-11-15 00:00:00 UTC')},
      {id: 2, first_name: 'Hayden', last_name: 'Anderson',  birthday: new Date('2009-02-08 00:00:00 UTC')},
      {id: 3, first_name: 'Andi', last_name: 'Guerrero',  birthday: new Date('2008-05-03 00:00:00 UTC')},
      {id: 4, first_name: 'Tristan', last_name: 'Guyot',  birthday: new Date('2008-11-04 00:00:00 UTC')},
      {id: 5, first_name: 'Landon', last_name: 'Bondurant',  birthday: new Date('2007-07-25 00:00:00 UTC')},
      {id: 6, first_name: 'Savannah', last_name: 'Conlin',  birthday: new Date('2009-02-17 00:00:00 UTC')},
      {id: 7, first_name: 'John', last_name: 'Tinlin',  birthday: new Date('2008-04-12 00:00:00 UTC')},
      {id: 8, first_name: 'Sirui', last_name: 'Wang',  birthday: new Date('2008-05-27 00:00:00 UTC')},
      {id: 9, first_name: 'Quinn', last_name: 'Clyker',  birthday: new Date('2007-09-09 00:00:00 UTC')},
      {id: 10, first_name: 'Rylan', last_name: 'Simecek',  birthday: new Date('2008-04-27 00:00:00 UTC')},
      {id: 11, first_name: 'Benjamin', last_name: 'Carasick',  birthday: new Date('2008-06-17 00:00:00 UTC')},
      {id: 12, first_name: 'Skylar', last_name: 'Howard',  birthday: new Date('2008-11-04 00:00:00 UTC')},
      {id: 13, first_name: 'Connor', last_name: 'Swanson',  birthday: new Date('2006-03-11 00:00:00 UTC')},
      {id: 14, first_name: 'Max', last_name: 'Roberts',  birthday: new Date('2008-08-08 00:00:00 UTC')},
      {id: 15, first_name: 'Joseph', last_name: 'Wang',  birthday: new Date('2008-03-14 00:00:00 UTC')},
      {id: 16, first_name: 'Brek', last_name: 'Hoenninger',  birthday: new Date('2006-11-01 00:00:00 UTC')},
      {id: 17, first_name: 'Juliette', last_name: 'Sciora',  birthday: new Date('2009-06-20 00:00:00 UTC')},
      {id: 18, first_name: 'Isaac', last_name: 'Anderson',  birthday: new Date('2008-08-21 00:00:00 UTC')},
      {id: 19, first_name: 'Katie', last_name: 'Shay',  birthday: new Date('2009-03-11 00:00:00 UTC')},
      {id: 20, first_name: 'Srikar', last_name: 'Kurakila',  birthday: new Date('2009-02-08 00:00:00 UTC')},
      {id: 21, first_name: 'Curtis', last_name: 'Liu',  birthday: new Date('2006-03-16 00:00:00 UTC')},
      {id: 22, first_name: 'Paige', last_name: 'Anderson',  birthday: new Date('2008-08-16 00:00:00 UTC')},
      {id: 23, first_name: 'Josh', last_name: 'Kim',  birthday: new Date('2006-11-30 00:00:00 UTC')},
      {id: 24, first_name: 'Violet', last_name: 'Clyker',  birthday: new Date('2005-06-05 00:00:00 UTC')},
      {id: 25, first_name: 'Soren', last_name: 'Hillestad',  birthday: new Date('2008-12-11 00:00:00 UTC')},
      {id: 26, first_name: 'Marley', last_name: 'Fogarti',  birthday: new Date('2008-08-04 00:00:00 UTC')},
      {id: 27, first_name: 'Preston', last_name: 'Hutchings',  birthday: new Date('2007-04-24 00:00:00 UTC')},
      {id: 28, first_name: 'Dylan', last_name: 'Hall',  birthday: new Date('2008-05-01 00:00:00 UTC')},
      {id: 29, first_name: 'Michael', last_name: 'Zhang',  birthday: new Date('2005-09-27 00:00:00 UTC')},
      {id: 30, first_name: 'Emily', last_name: 'Zhang',  birthday: new Date('2009-03-10 00:00:00 UTC')},
      {id: 31, first_name: 'Finn', last_name: 'Lasker',  birthday: new Date('2009-06-15 00:00:00 UTC')},
      {id: 32, first_name: 'Pasha', last_name: 'Trofimovsky',  birthday: new Date('2008-02-13 00:00:00 UTC')},
      {id: 33, first_name: 'Om', last_name: 'Vegesna',  birthday: new Date('2009-03-15 00:00:00 UTC')},
      {id: 34, first_name: 'Rohit', last_name: 'Das',  birthday: new Date('2006-11-01 00:00:00 UTC')},
      {id: 35, first_name: 'Conor', last_name: 'Gruber',  birthday: new Date('2008-08-09 00:00:00 UTC')},
      {id: 36, first_name: 'Oliver', last_name: 'Hillard',  birthday: new Date('2009-05-15 00:00:00 UTC')},
      {id: 37, first_name: 'Dominic', last_name: 'Cortez',  birthday: new Date('2008-11-05 00:00:00 UTC')},
      {id: 38, first_name: 'John', last_name: 'Bain',  birthday: new Date('2008-04-28 00:00:00 UTC')},
      {id: 39, first_name: 'Mason', last_name: 'Shepherd',  birthday: new Date('2007-01-31 00:00:00 UTC')},
      {id: 40, first_name: 'Abigail', last_name: 'Bielefeldt',  birthday: new Date('2007-10-05 00:00:00 UTC')},
      {id: 41, first_name: 'Catherine', last_name: 'Schultz',  birthday: new Date('2009-06-20 00:00:00 UTC')},
      {id: 42, first_name: 'Luke', last_name: 'Mittelman',  birthday: new Date('2005-07-10 00:00:00 UTC')},
      {id: 43, first_name: 'Martin', last_name: 'Libertun',  birthday: new Date('2005-07-13 00:00:00 UTC')},
      {id: 44, first_name: 'Nimay', last_name: 'Ankireddypalli',  birthday: new Date('2007-05-09 00:00:00 UTC')},
      {id: 45, first_name: 'Xaeden', last_name: 'Espinosa',  birthday: new Date('2008-01-22 00:00:00 UTC')},
      {id: 46, first_name: 'Owen', last_name: 'Regal-Schrag',  birthday: new Date('2005-10-13 00:00:00 UTC')},
      {id: 47, first_name: 'Marco', last_name: 'Gebre-Marian',  birthday: new Date('2008-03-11 00:00:00 UTC')},
      {id: 48, first_name: 'Kai', last_name: "Ahn-O'Connor",  birthday: new Date('2007-04-25 00:00:00 UTC')},
      {id: 49, first_name: 'Davis', last_name: "Baukol",  birthday: new Date('2009-04-21 00:00:00 UTC')},
      {id: 50, first_name: 'Anna Grace', last_name: "Schroer",  birthday: new Date('2007-04-02 00:00:00 UTC')},
      {id: 51, first_name: 'Christopher', last_name: "Windhausen",  birthday: new Date('2006-02-02 00:00:00 UTC')},
      {id: 52, first_name: 'Jonathan', last_name: "Windhausen",  birthday: new Date('2008-02-13 00:00:00 UTC')},
      {id: 53, first_name: 'Hayden', last_name: "McDonald",  birthday: new Date('2007-12-22 00:00:00 UTC')},
      {id: 54, first_name: 'Matthew', last_name: "Marthias",  birthday: new Date('2007-08-28 00:00:00 UTC')},
      {id: 55, first_name: 'Julian', last_name: "Kozubal",  birthday: new Date('2008-02-26 00:00:00 UTC')},
      {id: 56, first_name: 'Jerry', last_name: "L",  birthday: new Date('2008-06-06 00:00:00 UTC')},
      {id: 57, first_name: 'Bobby', last_name: "Thompson",  birthday: new Date('2004-01-15 00:00:00 UTC')},
      {id: 58, first_name: 'Nick', last_name: "Deloite",  birthday: new Date('2008-08-20 00:00:00 UTC')},
      {id: 59, first_name: 'Torin', last_name: "Lieber",  birthday: new Date('2007-07-31 00:00:00 UTC')},
      {id: 60, first_name: 'Charlie', last_name: "Meyer",  birthday: new Date('2005-08-03 00:00:00 UTC')},
      {id: 61, first_name: 'Seth', last_name: "Ferrin",  birthday: new Date('2004-10-05 00:00:00 UTC')}
    ])
    .then(() => {
      return knex.raw("SELECT setval('player_id_seq', (SELECT MAX(id) FROM player))");
    });
  });
};
