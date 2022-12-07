import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authService from './authService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

// Initial global state
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''    
}


// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => { 
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        // Reject and send error message as the payload
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout 
export const logout = createAsyncThunk('auth/logout', async () => { 
    await authService.logout()
})

// Reducers are not async (not Thunk Functions)
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    // Handle pending and fulfilled state during registration since it is async funk function
    extraReducers: (builder) => { 
        builder

        // Login Cases
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => { 
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => { 
                state.isLoading = false
                state.isError = true
                // action.payload comes from register function, thunkAPI.rejectWithValue in register function
                state.message = action.payload
                // Something went wrong during registration
                state.user = null
            })
        // Register Cases
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => { 
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => { 
                state.isLoading = false
                state.isError = true
                // action.payload comes from register function, thunkAPI.rejectWithValue in register function
                state.message = action.payload
                // Something went wrong during registration
                state.user = null
            })
            // Logout Cases
            .addCase(logout.fulfilled, (state) => { 
                state.user = null
            })
    }
})

// Need this line to export reset
export const { reset } = authSlice.actions
export default authSlice.reducer