const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

// Instance of express
const app = express()

// Import database connect
const { connectDB } = require('./config/db')
connectDB()

// Error handler
const { errorHandler } = require('./middleware/errorMiddleware')


// Middleware
// express.json() and express.urlencoded are middleware functions that help handle PUT and POST requests as these types have data in the body. Inform express that it is a JSON Object
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
// Routes
app.use('/api/projects', require('./routes/projectRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Express listening on port: ${port}`);
});



// // Password hashing library
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'

// // Express server running on port 3000
// const PORT = process.env.PORT; 
// const app = express();




// // Middleware function to parse PUT and POST requests 
// app.use(express.json());

// // For HOSTING, ensure to npm install cors and add function


// /* REGISTER NEW USER ROUTE */
// app.post('/api/register_user', asyncHandler( async (req, res) => {
//     // Store data from client (should validate....)    
//     const { fName, lName, email, password } = req.body
//     // Encrypt the user password
//     const salt = await bcrypt.genSalt(10)
//     const encryptedPassword = await bcrypt.hash(password, salt)
//      // Ensure email is not already in DB
//     const existingUser = await mongoMethods.findByEmail({ email: email })      
//     if (existingUser) {
//         res.status(400).json({ status: 'User already exists.' })
//         throw new Error('User already exists')    
//     }
//     else {
//         // Create a new user in ListiFy database, in the user_login_info collection
//         try {
//             const response = await mongoMethods.createUser(fName, lName, email, encryptedPassword)            
//             res.status(201).json({ status: 'User added successfully', token: generateToken(response._id) })
//         }
//         catch (err) {            
//             res.status(400).json({ status: 'Registration error occurred. Please try again' })
//             throw new Error('Something went wrong in /api/register_user ')
//         }
//     }
// }))

// /* LOGIN EXISTING USER ROUTE */
// app.post('/api/login_user', asyncHandler(async (req, res) => {
//     const { email, password } = req.body
//     // Check for user email
//     const user = await mongoMethods.findByEmail({ email: email })
//     if (user) {
//         if(await bcrypt.compare(password, user.password)) {
//              res.json({
//                 status: 'User login success', token: generateToken(user._id), user: {
//                     name: user.fName,
//                     email: user.email
//             } })
//         } else { 
//             res.status(400)
//             res.send({ status: 'Passwords do not match' })
//             throw new Error('Passwords do not match')
//         }                
//     } else {
//         res.status(400)
//         res.send({ status: 'User not found' })
//         throw new Error('User not found')
//     }
// }))



// /*  METHODS */
// const generateToken = (id) => { 
//     // Pass payload (id), and the secret
//     return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '7d'})
// }
