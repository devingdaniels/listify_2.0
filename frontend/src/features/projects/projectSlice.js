// Import Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import projectService from './projectService'

// Create initial global project state
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
    }
})


export const { reset } = projectSlice.actions
export default projectSlice.reducer