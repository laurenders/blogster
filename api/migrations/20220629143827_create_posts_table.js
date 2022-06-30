/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.text('title');
    table.text('content');
    table.datetime('created');
    table.integer('user_id', 250);
    table.foreign('user_id').references('users.id').deferrable('deferred')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('posts', table => {
    table.dropForeign('user_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('posts');
  })
};
