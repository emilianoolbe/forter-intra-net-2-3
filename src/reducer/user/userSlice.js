import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    error: ''
};

export const userSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers:{
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.error = action.payload.error;
        },
        logout: (state) => {
            state.username = '';
            state.password = '';
            state.error = '';
        },
        loginError: (state, action) =>{
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.error = action.payload.error;
        }
    }
});

export const { login, logout, loginError } = userSlice.actions;
export default userSlice.reducer;