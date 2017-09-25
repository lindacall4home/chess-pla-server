
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('session_player', (table) => {
    table.renameColumn('t-shirt_size', 'shirt_size')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('session_player', (table) => {
    table.renameColumn('shirt_size', 't-shirt_size')
  });
};
