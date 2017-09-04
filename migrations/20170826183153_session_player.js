
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session_player', (table) => {
    table.increments();
    table.integer("session_id").references("id").inTable("session").onDelete('CASCADE');
    table.integer("player_id").references("id").inTable("player").onDelete('CASCADE');
    table.integer("grade");
    table.boolean("permission_form").notNullable().defaultTo(false);
    table.boolean("paid").notNullable().defaultTo(false);
    table.string("t-shirt_size");
    table.integer("current_rank");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('session_player');
};
