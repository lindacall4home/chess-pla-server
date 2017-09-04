
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('alias', 255).notNullable();
    table.unique('alias');
    table.date('birthday').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
