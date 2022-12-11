const express = require('express')
const router = express.Router()
const { getProjects, createProject, addTaskToProject, deleteProject } = require('../controllers/projectController')


const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getProjects)
router.post('/', protect, createProject)
router.put('/:id', protect, addTaskToProject)
router.delete('/:id', protect, deleteProject)


module.exports = router;