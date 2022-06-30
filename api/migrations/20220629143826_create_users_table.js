/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('fname', 250);
    table.string('lname', 250);
    table.string('hashedpw', 250).notNullable();
    table.string('username', 250).unique().notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
