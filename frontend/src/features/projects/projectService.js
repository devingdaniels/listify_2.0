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

// Create project
const updateProject = async (data, token) => {    
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        },        
    }    
    // Send request with project data and bearer token
    const response = await axios.put(API_URL + data.id, data, config)

    return response.data
}

const projectService = {
    createProject,
    getAllProjects,
    deleteProject,
    updateProject
} 
 
export default projectService