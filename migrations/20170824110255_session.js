
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session', (table) => {
    table.increments();
    table.boolean('isCurrent').notNullable();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('session');
};
