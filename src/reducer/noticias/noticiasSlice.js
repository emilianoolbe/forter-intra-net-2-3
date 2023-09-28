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
        },
        clearNews: (state) => {
            state.noticiasList = [];
            state.noticiasDeInteres = [];
        }
    }
});

export const { setNoticias, setNoticiasDeInteres, clearNews } = noticiasSlice.actions;
export default noticiasSlice.reducer;