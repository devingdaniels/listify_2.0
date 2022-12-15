// Imports
import axios from "axios";
// API url
const API_PROJ_URL = `http://localhost:3000/api/projects/`
const API_TASK_URL = `http://localhost:3000/api/projects/task/`

// Create project
const createProject = async (project, token) => { 
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.post(API_PROJ_URL, project, config)
    return response.data
}

// Create project
const getAllProjects = async (token) => { 
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.get(API_PROJ_URL, config)
    return response.data
}


// Create project
const deleteProject = async (id, token) => { 
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }    
    // Send request with project data and bearer token
    const response = await axios.delete(API_PROJ_URL + id, config)

    return response.data
}

// Add task to existing project
const addTaskToProject = async (taskData, token) => {    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        },        
    }    
    // Send request with project data and bearer token
    const url = API_TASK_URL + taskData.id
    const response = await axios.post(url, taskData, config)
    // Return project with updated task
    return response.data
}


// Update a task in existing project
const updateProjectTask = async (data, token) => {    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }  
    }    
    // Send request with project data and bearer token 
    const url = API_TASK_URL + data.id
    const response = await axios.put(url, data, config)
    // Return project with updated task
    return response.data
}


// Delete existing task from a project
const deleteTask = async (task, token) => {
    // With axios, .delete has to be sent like below, with payload in request body along with headers
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        },
        data: task
    }    
    // Send request with project data and bearer token 
    const url = API_TASK_URL + task.id
    const response = await axios.delete(url, config)
    // Return project with updated task
    return response.data
}


const projectService = {
    createProject,
    getAllProjects,
    deleteProject,
    addTaskToProject,
    updateProjectTask,
    deleteTask
} 
 
export default projectService