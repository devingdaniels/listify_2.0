// This file is for making HTTP requests and sending back, and setting data in local storage 
import axios from 'axios'

const API_URL = '/api/users'

// Register user
const register = async (userData) => { 
    const response = await axios.post(API_URL, userData)
    // Axios automatically puts data object into response
    // Ensure good response
    if (response.data) {
        // Set local storage with user data 
        localStorage.setItem('user', JSON.stringify(response.data))                
    }

    return response.data
}

const authService = {
    register
}

export default authService