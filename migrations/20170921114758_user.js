exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.string('google_id', 255).notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
