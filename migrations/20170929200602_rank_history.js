
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rank_history', (table) => {
    table.increments();
    table.integer("session_id").references("id").inTable("session").onDelete('CASCADE');
    table.date('date').notNullable();
    table.integer('rank').notNullable();
    table.integer("player_id").references("id").inTable("player").onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rank_history');
};
