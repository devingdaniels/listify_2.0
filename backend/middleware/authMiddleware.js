const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Check for authorization header attribute
// Ensure Bearer token exists 
// Save the token, decode, and get user from payload(id in token)
// If problem or no token, no auth
const protect = asyncHandler(async (req, res, next) => {     
    let token
    // Check auth headers for Bearer 'exampleToken'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {         
        try {
            // Save token from header            
            token = req.headers.authorization.split(' ')[1] // [Bearer, token]
            // Next, verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get user from the token, and set the current user
            req.user = await User.findById(decoded.id).select('-password')            
            // Call next piece of middleware
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token) { 
        res.status(401)
        throw new Error('Not authorized, no token found')
    }
})

module.exports = {protect}