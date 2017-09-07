
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', (table) => {
    table.increments();
    table.integer("black_player_id").references("id").inTable("player").onDelete('CASCADE');
    table.integer("black_player_rank");
    table.integer("white_player_id").references("id").inTable("player").onDelete('CASCADE');
    table.integer("white_player_rank");
    table.string('game_result', 5);
    table.integer("meeting_id").references("id").inTable("meeting").onDelete('CASCADE');
    table.integer("board_num");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
};
