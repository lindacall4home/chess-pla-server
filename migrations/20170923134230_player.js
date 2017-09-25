
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('player', (table) => {
    table.string('alias', 255).alter();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('player', (table) => {
    table.string('alias', 255).notNullable().alter();

  });
};
