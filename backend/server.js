/* 
For HOSTING, ensure to npm install cors and add function
*/

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

// Instance of express
const app = express()

// Import database connect & connect
const { connectDB } = require('./config/db')
connectDB()

// Custom middleware error handler
const { errorHandler } = require('./middleware/errorMiddleware')

// express.json() and express.urlencoded are middleware functions that help handle PUT and POST requests as these types have data in the body. Inform express that it is a JSON Object
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/projects', require('./routes/projectRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Error middleware needs to be last .use()
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Express listening on port: ${port}`);
});