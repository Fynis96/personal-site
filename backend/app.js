const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
// const middleware = require('./utils/middleware')
// const loginRouter = require('./controllers/login')
// const blogRouter = require('./controllers/blog')
// const usersRouter = require('./controllers/users')
// const logger = require('./utils/logger')

//Connect to Postgres


app.use(cors())
app.use(express.json())
// app.use(middleware.tokenExtractor)
// app.use('/api/blogs', blogRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/login', loginRouter)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app