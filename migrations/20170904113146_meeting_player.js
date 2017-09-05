
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meeting_player', (table) => {
    table.increments();
    table.integer("meeting_id").references("id").inTable("meeting").onDelete('CASCADE');
    table.integer("player_id").references("id").inTable("player").onDelete('CASCADE');
    table.boolean("challenge_game").notNullable().defaultTo(true);
    table.time("time_in");
    table.time("time_out");

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meeting_player');
};
