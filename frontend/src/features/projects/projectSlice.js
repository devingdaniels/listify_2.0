// Import Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import projectService from './projectService'

// Global state for storing projects and status of operations
const initialState = {    
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Create a new project
export const createProject = createAsyncThunk('project/create', async (project, thunkAPI) => {
  try {
    // Project routes are protected, use thunkAPI to get token from user object in local storage
    const token = thunkAPI.getState().auth.user.token
    return await projectService.createProject(project, token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Retrieve projects 
export const getAllProjects = createAsyncThunk('projects/getAll', async (_, thunkAPI) => { 
    try {
        // GET in DB is protect, need token
        const token = thunkAPI.getState().auth.user.token
    return await projectService.getAllProjects(token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})


// Retrieve projects 
export const deleteProject = createAsyncThunk('projects/deleteOne', async (id, thunkAPI) => { 
    try {
        // DELETE project route in DB is protected, need token
        const token = thunkAPI.getState().auth.user.token
    return await projectService.deleteProject(id, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})


// Add a task to a given project 
export const addTaskToProject = createAsyncThunk('projects/task/addTask', async (data, thunkAPI) => { 
    // data = {id, taskData}
    try {
        // PUT project route in DB is protected, need token
        const token = thunkAPI.getState().auth.user.token
    return await projectService.addTaskToProject(data, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)  
    }
})

export const updateProjectTask = createAsyncThunk(
    'projects/task/updateTask',
    async (data, thunkAPI) => { 
    // data = {id, taskData}
    try {
        // PUT project route in DB is protected, need token
        const token = thunkAPI.getState().auth.user.token
    return await projectService.updateProjectTask(data, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)  
    }
    })

export const deleteTask = createAsyncThunk(
    'projects/task/deleteTask',
    async (data, thunkAPI) => { 
    // data = {id, task}
    try {
        // DELETE project route in DB is protected, need token
        const token = thunkAPI.getState().auth.user.token
    return await projectService.deleteTask(data, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)  
    }
})


export const projectSlice = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {        
        reset: (state) => initialState
    },
    extraReducers: (builder) => { 
        builder
            .addCase(createProject.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(createProject.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.projects.push(action.payload)
            })
            .addCase(createProject.rejected, (state, action) => { 
                state.isLoading = false                
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(getAllProjects.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(getAllProjects.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.projects = action.payload
            })
            .addCase(getAllProjects.rejected, (state, action) => { 
                state.isLoading = false                
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteProject.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(deleteProject.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.isError = false
                // Getting an ID of deleted project from backend API
                // Filter out deleted goal from state so UI updates correctly
                state.projects = state.projects.filter((project) => project._id !== action.payload.id)
                state.message = action.payload.message
            })
            .addCase(deleteProject.rejected, (state, action) => { 
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addTaskToProject.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(addTaskToProject.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.isError = false
                // Getting an ID of deleted project from backend API                
                state.projects = state.projects.filter(project => {
                    if (project._id !== action.payload._id) {
                        return project
                    } else { 
                        return action.payload
                    }
                })
                state.message = action.payload.message
            })
            .addCase(addTaskToProject.rejected, (state, action) => { 
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateProjectTask.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(updateProjectTask.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.isError = false
                // Getting an ID of deleted project from backend API
                state.projects = state.projects.filter(project => {
                    if (project._id !== action.payload._id) {
                        return project
                    } else { 
                        return action.payload
                    }
                })
                state.message = action.payload.message
            })
            .addCase(updateProjectTask.rejected, (state, action) => { 
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteTask.pending, (state) => { 
            state.isLoading = true            
            })
            .addCase(deleteTask.fulfilled, (state, action) => { 
                state.isLoading = false            
                state.isSuccess = true
                state.isError = false
                // Getting an ID of updated project from backend API
                state.projects = state.projects.filter(project => {
                    if (project._id !== action.payload._id) {
                        return project
                    } else { 
                        return action.payload
                    }
                })
                state.message = action.payload.message
            })
            .addCase(deleteTask.rejected, (state, action) => { 
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = projectSlice.actions
export default projectSlice.reducer