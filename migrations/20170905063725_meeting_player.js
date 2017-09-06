
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('meeting_player', function (table) {
    table.boolean("challenge_game").alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('meeting_player', function (table) {
    table.boolean("challenge_game").notNullable().defaultTo(true).alter();
  });
};
