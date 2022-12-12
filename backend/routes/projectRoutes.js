const express = require('express')
const router = express.Router()
const { getProjects, createProject, deleteProject  } = require('../controllers/projectController')


const { protect } = require('../middleware/authMiddleware')

// Project routes
router.get('/', protect, getProjects)
router.post('/', protect, createProject)
router.delete('/:id', protect, deleteProject)

module.exports = router;