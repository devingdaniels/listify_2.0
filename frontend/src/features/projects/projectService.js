import axios from "axios";

const API_URL = 'api/projects/'


// Create project
const createProject = async (project, token) => { 
    const config = {
        headers: {
            authorization: `Bearer ${token}`
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
            authorization: `Bearer ${token}`
        }
    }
    // Send request with project data and bearer token
    const response = await axios.get(API_URL, config)

    return response.data
}




const projectService = {
    createProject,
    getAllProjects
} 
 
export default projectService