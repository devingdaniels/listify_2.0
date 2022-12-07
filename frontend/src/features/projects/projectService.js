import axios from "axios";

const API_URL = 'api/projects/'


// Create project
const createProject = async (project, token) => { 
    const config = {
        headers: {
            authorization: `Bearer ${token} `
        }
    }

    // Send request with project data and bearer token
    const response = await axios.post(API_URL, project, config)
    
    
    console.log(response.data)

    return response.data
}


const goalService = {
    createProject
} 
 
export default goalService