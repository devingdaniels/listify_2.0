// Imports
const asyncHandler = require('express-async-handler')

// Database model 
const Project = require('../models/projectModel')


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
    console.log("Called")
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
        res.status(200).json(updatedProject)
    } else { 
        res.status(400)
        throw new Error('Project not found')
    }
})


const deleteTask = asyncHandler(async (req, res) => { 

    console.log("Called deleteTask in backend")
    const { id, task } = req.body

    console.log(task)

    res.status(200).json({message: 'Updated me'})    


})


module.exports = {
    addTaskToProject, 
    updateProjectTask,
    deleteTask
}
