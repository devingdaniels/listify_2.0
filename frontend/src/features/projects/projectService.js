import axios from "axios";

const API_URL = 'api/projects/'


// Create project
const createProject = async (project, token) => { 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.post(API_URL, project, config)
    
    return response.data
}


// Create project
const getAllProjects = async (token) => { 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.get(API_URL, config)

    return response.data
}


// Create project
const deleteProject = async (id, token) => { 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.delete(API_URL + id, config)

    return response.data
}

// Add task to existing project
const addTaskToProject = async (data, token) => {    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        },        
    }    
    // Send request with project data and bearer token    
    const response = await axios.post(API_URL + 'task/' + data.id, data, config)
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
    const response = await axios.put(API_URL + 'task/' + data.id, data, config)
    // Return project with updated task
    return response.data
}


// Delete existing task from a project
const deleteTask = async (data, token) => {    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        },        
    }    
    // Send request with project data and bearer token
    console.log(data)
    console.log(token)
    const response = await axios.delete(API_URL + 'task/' + data.id, data, config)
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