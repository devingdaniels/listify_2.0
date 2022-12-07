// Imports
const asyncHandler = require('express-async-handler')

// Database model 
const Project = require('../models/projectModel')

// @desc    Get a project
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => { 
    // Return goals assigned to current user in req object
    const projects = await Project.find({user: req.user.id})
    res.status(200).json(projects)
})

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {    
    if (!req.body.title) {
        res.status(400)
        throw new Error('Project needs a title')
    }      
    // Create a new project linked to current user
    const project = await Project.create({
        user: req.user.id,
        title: req.body.title,
        tasks: []
    })
    // Ensure successful project creation in DB
    if (!project) { 
        res.status(400).json({ message: "Error creating new project" })
        throw new Error('Error creating new project')
    }

    res.status(200).json({project})


})


// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => { 
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