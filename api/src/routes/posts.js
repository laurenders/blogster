const express = require('express');
const knex = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV || 'development'])  
const router = express.Router();


//-----------------------------------------------------------------------------------------------------
// GET
//----------------------------------------------------------------------------------------------------- 

// get ALL posts
router.get('/', (req, res) => {
   knex('posts')
    .join('users', 'posts.user_id', '=', 'users.id')
    .select('posts.id as id',
      'posts.title as title',
      'posts.content as content',
      'posts.created as created',
      'posts.user_id as user_id',
      'users.username as username'
    )
    .then(data => res.status(200).json(data))

    .catch(err => {
      console.log(err)
      res.status(404).json({
        message:
          'No posts to display.'
      })
    })
})

// get post specified by ID
router.get('/:id',  (req, res) => {  
  knex
    .select('*')
    .from('posts')
    .where('id', '=', parseInt(req.params.id))  // may remove parsint
    .then(data => res.status(200).json(data[0]))

    .catch(err => {
      console.log(err)
      res.status(404).json({
        message:
          'There was a problem getting this post.'
      })
    })
})

//-----------------------------------------------------------------------------------------------------
// POST
//----------------------------------------------------------------------------------------------------- 

router.post('/', async (req, res) => {
  let postToAdd = { // fields on left must match posts table
    title: req.body.title, 
    content: req.body.content,
    created: req.body.created,
    user_id: req.body.user_id
  }
  let newlyAddedPost = await knex('posts')
    .insert(postToAdd)
    .returning('*')
    .catch(err => console.log(err))

  res.status(201).send(newlyAddedPost[0])
})

//-----------------------------------------------------------------------------------------------------
// PATCH
//----------------------------------------------------------------------------------------------------- 

router.patch('/', async (req, res) => {
  let edits = {
    title: req.body.title, 
    content: req.body.content,
    created: req.body.created,
    user_id: req.body.user_id
  }  
  let editedPost = await knex('posts')
    .where('id', req.body.id)
    .update(edits)
    .returning('*')
    .catch(err => console.log(err))

  res.status(200).send(editedPost[0])
})

//-----------------------------------------------------------------------------------------------------
// DELETE
//----------------------------------------------------------------------------------------------------- 

router.delete('/', async (req, res) => {
  let postToDel = {
    title: req.body.title, 
    content: req.body.content,
    created: req.body.created,
    user_id: req.body.user_id
  }
  await knex('posts')
    .where('id', req.body.id)
    .delete()
    .catch(err => console.log(err))

  res.status(200).send(postToDel);
})

module.exports = router;