import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


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

// Register user


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
    extraReducers: () => { }
})


// Need this line to export reset
export const { reset } = authSlice.actions
export default authSlice.reducer