const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register a new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    const { fname, lname, email, password } = req.body
    // Verify data from client
    if (!fname || !lname || !email || !password) {
        res.status(400)
        throw new Error('Missing field')
    }
    // Verify if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) { 
        res.status(400)
        throw new Error('User already exists')
    }
    // Hash user password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
    // Create user
    const user = await User.create({
        fname,
        lname,
        email,
        password: hashedPass
    })
    // Ensure user was created
    if (user){
        res.status(201).json({
            _id: user._id,
            name: `${user.fname} ${user.lname}`,
            email: user.email,
            token: generateToken(user._id)            
        })
    } else { 
        res.status(400)
        throw new Error('Invalid user data')
    }    
})


// @desc    Authenticate a new user
// @route   POST /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {    
    const { email, password } = req.body
    // Check if user exists
    const user = await User.findOne({ email })
        
    if (user && await bcrypt.compare(password, user.password,)) {
        res.status(200)
        res.json({
            _id: user._id,
            name: `${user.fname} ${user.lname}`,
            email: user.email,
            token: generateToken(user._id),
            message: 'Login successful!'
        })
    } else { 
        res.status(400)
        throw new Error('Invalid user credentials')
    }    
})


// @desc    Get a user's data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json( req.user )
})


// Methods
const generateToken = (id) => { 
    // Payload (id), secret 
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d'})
}


module.exports = {
    registerUser,
    getMe,
    loginUser
}