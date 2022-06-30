const express = require('express');
const knex = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV || 'development'])  
const router = express.Router();
const bcrypt = require('bcrypt')

//-----------------------------------------------------------------------------------------------------
// GET
//----------------------------------------------------------------------------------------------------- 

router.get('/', (req, res) => {
  // const msg = process.env.CUSTOM_MESSAGE || 'No custom message specified.'
  // res.status(200).send(`<h3>${msg} API is up and running!</h3>`)
  console.log('Getting users...')
   knex
    .select('*')
    .from('users')
    .then(data => res.status(200).json(data))

    .catch(err => {
      console.log(err)
      res.status(404).json({
        message:
          'No users could be found.'
      })
    })

})

//-----------------------------------------------------------------------------------------------------
// POST
//----------------------------------------------------------------------------------------------------- 

// when a user signs up, autogenerate salt and hash
router.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userToAdd = { // fields need to match users table
      fname: req.body.firstname,
      lname: req.body.lastname,
      username: req.body.username, 
      hashedpw: hashedPassword }
    let newlyAddedUser = await knex('users')
      .insert(userToAdd)
      .returning('*')
      .catch(err => console.log(err))
    res.status(201).send(newlyAddedUser[0])
  } catch {
    res.status(500).send()
  }
})

router.post('/login', async (req, res) => {
  let userMatch = await knex('users')
    .select('*')
    .where('username', req.body.username)
    .catch(err => console.log(err))
  
  if (userMatch.length > 0) {
    bcrypt.compare(req.body.password, userMatch[0].hashedpw, function(err, result) {
      if (result) {
        res.send(userMatch[0])
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(401)
  }
})


module.exports = router