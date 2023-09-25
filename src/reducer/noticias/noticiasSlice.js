import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noticiasList: [],
    noticiasDeInteres: []
};

export const noticiasSlice = createSlice({
    name: 'noticias',
    initialState,
    reducers:{
        setNoticias: (state, action) => {
            state.noticiasList = [...action.payload]
        },
        setNoticiasDeInteres: (state, action) => {
            state.noticiasDeInteres = [...action.payload]
        }
    }
});

export const { setNoticias, setNoticiasDeInteres } = noticiasSlice.actions;
export default noticiasSlice.reducer;