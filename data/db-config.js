require('dotenv').config()
const knex = require('knex')


const db_config = require('../knexfile')
const env = process.env.DB_ENV || 'development'


module.exports = knex(db_config[env])


