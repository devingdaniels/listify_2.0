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


// @desc    Add a task to a project
// @route   POST /api/projects/api/projects/:id
// @access  Private (protected)
const addTaskToProject = asyncHandler(async (req, res) => {
    const { id, taskData } = req.body
    
    if (taskData === '') { 
        res.status(400)
        throw new Error('Task needs a title')
    }
    // Ensure valid user
    if (!req.user) { 
        console.log('Invalid user')
        throw new Error('No user found.')
    }
    // Ensure project exists
    const project = await Project.findById(id)

    if (project) {
        // Add taskData to project array 
        project.tasks.push(taskData)
        // Save project
        await project.save()
        // Return new project
        res.status(200).json(project)
    } else { 
        res.status(400)
        throw new Error('Project not found')
    }
    
})

// @desc    Edit an existing task in a project
// @route   PUT /api/projects/api/projects/:id
// @access  Private (protected)
const updateProjectTask = asyncHandler(async (req, res) => { 
    const { id, taskData, oldTask } = req.body
    
    if (taskData === '') { 
        res.status(400)
        throw new Error('Task needs a title')
    }
    // Ensure valid user
    if (!req.user) { 
        console.log('Invalid user')
        throw new Error('No user found.')
    }
    // Ensure project exists
    const project = await Project.findById(id)

    if (project) {
        const newTasks = project.tasks.map(task => { 
            if (task != oldTask) {
                return task
            } else { 
                return taskData
            }
        })        
        
        const updatedProject = await Project.findByIdAndUpdate(
            {
                _id: id,                
            },
            {
                tasks: newTasks
            },
            {new: true}
        )


        console.log(updatedProject)
        res.status(200).json(updatedProject)
    } else { 
        res.status(400)
        throw new Error('Project not found')
    }
})


// @desc    Delete a project
// @route   DELETE /api/projects/api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
    // Find project
    const id = req.params.id
    const project = Project.findById(id)

    try {
        const response = await Project.deleteOne({id})
        res.status(200).json({message: 'Project deleted' })
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
    addTaskToProject,
    updateProjectTask,
    deleteProject
}
