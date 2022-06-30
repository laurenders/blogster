/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      title: 'How I feel about becoming prez', 
      content: `Lorem ipsum dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
      created: new Date(),
      user_id: 2
    },
    {
      title: 'The Continental Army', 
      content: `Something ipsum dolor sit amet, consectetur magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
      created: new Date(),
      user_id: 2
    },
    {
      title: 'Emancipation Proclamation Draft', 
      content: `Blah blah ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
      created: new Date(),
      user_id: 4
    },
    {
      title: 'How to Create a Full Stack Web Application', 
      content: `Ipsum ipsum dolor sit amet, consectetur magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
      created: new Date(),
      user_id: 5
    }
    
  ]);
};
