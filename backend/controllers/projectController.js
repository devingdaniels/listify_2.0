// Imports
const asyncHandler = require('express-async-handler')

// Database
const Project = require('../models/projectModel')

// @desc    Get a project
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => { 
    const projects = await Project.find()
    res.status(200).json(projects)
})

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject =asyncHandler(async (req, res) => { 
    if (!RegExp.body.text) {
        res.status(400)
        throw new Error('Missing text field from req')
    }       
})


// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject =asyncHandler(async (req, res) => { 
    res.status(200).json({message: `Update project ${req.params.id}`})
})


// @desc    Delete a project
// @route   DELETE /api/projects/api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async(req, res) => { 
    res.status(200).json({message: `Delete project ${req.params.id}`})
})


module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}