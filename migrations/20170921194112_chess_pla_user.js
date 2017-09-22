
exports.up = function(knex, Promise) {
  return knex.schema.renameTable('user', 'chess_pla_user');
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('chess_pla_user', 'user');
};
