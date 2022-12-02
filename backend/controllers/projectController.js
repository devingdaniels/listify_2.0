

// @desc    Get project
// @route   GET /api/projects
// @access  Private
const getProjects = (req, res) => { 
    res.status(200).json({message: 'Get projects'})
}


// @desc    Create a project
// @route    POST /api/projects
// @access  Private
const createProject = (req, res) => { 
    res.status(200).json({message: 'Create new project projects'})
}


// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = (req, res) => { 
    res.status(200).json({message: `Update project ${req.params.id}`})
}


// @desc    Delete a project
// @route   DELETE /api/projects/api/projects/:id
// @access  Private
const deleteProject = (req, res) => { 
    res.status(200).json({message: `Delete project ${req.params.id}`})
}


module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}