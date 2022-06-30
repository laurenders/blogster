/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del() // do I need this?
  await knex('users').del()
  await knex('users').insert([
    {fname: 'Thomas', lname: 'Jefferson', username: 'tommyj3', hashedpw: 'jf39u4fnd'},
    {fname: 'George', lname: 'Washington', username: 'gwash1', hashedpw: 'ckg03jfvb'},
    {fname: 'John', lname: 'Adams', username: 'jqa5', hashedpw: '24jifhidus'},
    {fname: 'Abraham', lname: 'Lincoln', username: 'honestabe16', hashedpw: '8vhfuth3o9uvf'},
    {fname: 'James', lname: 'Madison', username: 'jmads4', hashedpw: 'oxcnagoin450'}
  ]);
};
