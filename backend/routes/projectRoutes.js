const express = require('express')
const router = express.Router()
const { getProjects, createProject, addTaskToProject, updateProjectTask,  deleteProject } = require('../controllers/projectController')


const { protect } = require('../middleware/authMiddleware')

// Project routes
router.get('/', protect, getProjects)
router.post('/', protect, createProject)
router.delete('/:id', protect, deleteProject)
// Project + task routes
router.post('/:id', protect, addTaskToProject)
router.put('/:id', protect, updateProjectTask)



module.exports = router;