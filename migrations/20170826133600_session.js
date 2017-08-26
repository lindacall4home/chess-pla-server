
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('session', function (table) {
    table.string("session_name", 255).notNullable().defaultTo('');
    table.dropColumn('start_date');
    table.dropColumn('end_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('session', function(table) {
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.dropColumn('session_name');
  });

};
