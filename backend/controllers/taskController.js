// Middleware 
const asyncHandler = require('express-async-handler')
// Database model 
const Project = require('../models/projectModel')
// Lodash
const  lodash = require('lodash') 

// @desc    Add a task to a project
// @route   POST /api/projects/task/:id
// @access  Private (protected)
const addTaskToProject = asyncHandler(async (req, res) => {    
    // Ensure valid user
    if (!req.user) {
        console.log('Invalid user')
        throw new Error('No user found.')
    }
    // Get the data 
    const { title, id } = req.body
    
     if (title === '') { 
        res.status(400)
        throw new Error('Task needs a title')
     }
    
    // Get project in DB, perform checks
    const project = await Project.findById(id)
    
    // Ensure there is not an existing task with same title
    if (project.tasks.some(task => task.title === title)) { 
        res.status(400)
        throw new Error(`Task "${taskData}" already exists.`)
    }

    if (project) {
        // Add taskData to project array 
        project.tasks.push(req.body)
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
// @route   PUT /api/projects/:id
// @access  Private (protected)
const updateProjectTask = asyncHandler(async (req, res) => { 
    const { oldTask, newTask } = req.body
    // Ensure valid user
    if (!req.user) { 
        console.log('Invalid user')
        throw new Error('No user found.')
    }
    // Ensure project exists
    const project = await Project.findById(oldTask.id)
    if (project) {
        const newTasks = project.tasks.map(task => { 
            if ( lodash.isEqual(task, oldTask) ) {
                return newTask
            }
            // Keep prev tasks as they were
            return task
        })        

        const updatedProject = await Project.findByIdAndUpdate(
            {
                _id: oldTask.id,                
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


// @desc    Delete an existing task in a project
// @route   DELETE /api/projects/task/:id
// @access  Private (protected)
const deleteTask = asyncHandler(async (req, res) => {
    const  data  = req.body
    // Ensure valid user
    if (!req.user) { 
        console.log('Invalid user')
        throw new Error('No user found.')
    }
    // Ensure project exists
    const project = await Project.findById(data.id)
    if (project) {
        const updatedTasks = project.tasks.filter(el => { 
            if ( !lodash.isEqual(el, data)) { 
                return el
            }
        })

         const updatedProject = await Project.findByIdAndUpdate(
            {
                _id: data.id,
            },
            {
                tasks: updatedTasks
            },
            {new: true}
        )    
        res.status(200).json(updatedProject)
    } else { 
        res.status(400)
        throw new Error('Project not found')
    }
})


module.exports = {
    addTaskToProject, 
    updateProjectTask,
    deleteTask
}
