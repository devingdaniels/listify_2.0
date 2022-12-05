const express = require('express')
const router = express.Router()
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController')


const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getProjects)
router.post('/', protect, createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)


module.exports = router;