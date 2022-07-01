const express = require('express')
const cors = require('cors')
const app = express()
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development'])  
const postRoutes = require('./routes/posts.js')
const userRoutes =require('./routes/users.js')

app.use(express.json())
app.use(cors())
app.options('*', cors())

const migrateAndSeed = async () => {
  console.log('Starting database migration and seeding')
  await knex.migrate.rollback()
  await knex.migrate.latest()
  await knex.seed.run()
  console.log('Database setup complete!')
}
migrateAndSeed()

// check that our API is up and running
app.get('/', async (req, res) => {
  res.status(200).json({msg:'Blog API is reachable'})
})

app.get('/api', async (req, res) => {
  res.status(200).json({msg:'Blog API is reachable'})
})

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

module.exports = app;