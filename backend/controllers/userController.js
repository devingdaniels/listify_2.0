const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register a new user
// @route   POST /api/users
// @access  public
const registerUser = (req, res) => { 
    res.json({
        message: 'Register a user'
    })
}


// @desc    Authenticate a new user
// @route   POST /api/users/login
// @access  public
const loginUser = (req, res) => { 
    res.json({
        message: 'Login a user'
    })
}


// @desc    Get a user's data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => { 
    res.json({
        message: 'Get the current user'
    })
}



module.exports = {
    registerUser,
    getMe,
    loginUser
}