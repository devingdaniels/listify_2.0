const express = require('express')
const router = express.Router()
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController')


router.get('/', getProjects)
router.post('/', createProject)
router.put('/', updateProject)
router.delete('/', deleteProject)




module.exports = router;