
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meeting', (table) => {
    table.increments();
    table.date('date').notNullable();
    table.integer("session_id").references("id").inTable("session");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meeting');
};
