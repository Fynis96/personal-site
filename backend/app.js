const config = require('./utils/config')
const express = require('express')
// const { Sequelize } = require('sequelize')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
// const loginRouter = require('./controllers/login')
// const blogRouter = require('./controllers/blog')
// const usersRouter = require('./controllers/users')
// const logger = require('./utils/logger')

//Connect to Postgres
//      These are two seperate options for connecting to the Postgres DB, just need to settle on which is needed.
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

//Test DB Connection
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

app.use(cors())
app.use(express.json())
// app.use(middleware.tokenExtractor)
// app.use('/api/blogs', blogRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app