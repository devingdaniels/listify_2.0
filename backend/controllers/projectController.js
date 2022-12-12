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
        // User id is not needed, is coming from req set in middleware
        user: req.user.id,
        title: req.body.title,
        tasks: []
    })
    // Ensure successful project creation in DB
    if (!project) { 
        res.status(400).json({ message: "Error creating new project" })
        throw new Error('Error creating new project')
    }

    // Send new project to frontend
    res.status(200).json(project)
})

// @desc    Delete a project
// @route   DELETE /api/projects/api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
    // Find project
    const id = req.params.id
    const project = await Project.findById(id)


    try {
        const isRemoved = project.remove()
        // Send back id so projectSlice reducer can remove it from state 
        if (isRemoved) {
            res.status(200).json(id)
        } else { 
            res.status(400).json({ message: 'Error removing project' })
            throw new Error('Failed to delete project')
        }        
    } catch (error) {
        console.log(error)
        res.status(400)
        // This message is what gets returned in action.payload in projectSlice
        throw new Error('Project delete failed')
    }
})


module.exports = {
    getProjects,
    createProject,        
    deleteProject    
}
