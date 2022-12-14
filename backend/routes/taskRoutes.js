const express = require('express')
const router = express.Router()
const { addTaskToProject, updateProjectTask, deleteTask } = require('../controllers/taskController')


const { protect } = require('../middleware/authMiddleware')

// API/projects/task/
router.post('/:id', protect, addTaskToProject)
router.put('/:id', protect, updateProjectTask)
router.delete('/:id', protect, deleteTask)

module.exports = router;