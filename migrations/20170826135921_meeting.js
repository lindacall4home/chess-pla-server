
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('meeting', function (table) {
    table.dropForeign("session_id");
    table.foreign("session_id").references("id").inTable("session").onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('meeting', function (table) {
    table.dropForeign("session_id");
    table.foreign("session_id").references("id").inTable("session");
  });
};
