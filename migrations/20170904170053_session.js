
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('session', function (table) {
    table.dropColumn('isCurrent');
    table.boolean('is_current').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('session', function (table) {
    table.dropColumn('is-current');
    table.boolean('isCurrent').notNullable();
  });
};
