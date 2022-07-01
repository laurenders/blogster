/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      title: 'How to Navigate Blogster', 
      content: `Welcome to Blogster! Sign up to write your first blog post. To see all posts on Blogster, simply click the Blogster logo in the 
                header. To view your created posts, click the My Posts button. To create a post, click the New Post button.`, 
      created: new Date(),
      user_id: 2
    },
    {
      title: 'The Continental Army', 
      content: `From wikipedia: The Continental Army was the army of the Thirteen Colonies and the Revolutionary-era United States. It was formed 
                by the Second Continental Congress after the outbreak of the American Revolutionary War, and was established by a resolution of 
                Congress on June 14, 1775. The Continental Army was created to coordinate military efforts of the Colonies in their war for 
                independence against the British, who sought to keep their American lands under control. General George Washington was the 
                commander-in-chief of the army throughout the war. `,
      created: new Date(),
      user_id: 2
    },
    {
      title: 'The Gettysburg Address', 
      content: `Fourscore and seven years ago our fathers brought forth, on this continent, a new nation, conceived in liberty, and dedicated to 
                the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation
                so conceived, and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion 
                of that field, as a final resting-place for those who here gave their lives, that that nation might live. It is altogether fitting 
                and proper that we should do this. But, in a larger sense, we cannot dedicate, we cannot consecrate—we cannot hallow—this ground. 
                The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will 
                little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be 
                dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here 
                dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which 
                they here gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this 
                nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not 
                perish from the earth.`, 
      created: new Date(),
      user_id: 4
    },
    {
      title: 'All About CRUD Apps', 
      content: `From Wikipedia: In computer programming, create, read, update, and delete (CRUD) are the four basic operations of persistent 
                storage.[1] CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing 
                information using computer-based forms and reports. The term was likely first popularized by James Martin in his 1983 book 
                Managing the Data-base environment. `, 
      created: new Date(),
      user_id: 5
    },
    {
      title: 'My Cinnamon Roll Experience', 
      content: `Yesterday I made some cinnamon rolls. They tasted alright. It took me a while to make though. The secret is to use bread flour
                instead of all-purpose flour so that the dough turns out chewier.`, 
      created: new Date(),
      user_id: 3
    },
    {
      title: 'Constitution Preamble', 
      content: `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, 
                provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, 
                do ordain and establish this Constitution for the United States of America.`, 
      created: new Date(),
      user_id: 1
    }
    
  ]);
};
