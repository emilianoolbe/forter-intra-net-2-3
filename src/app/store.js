import { configureStore } from '@reduxjs/toolkit'

//Reducers
import userReducer from '../reducer/user/userSlice';
import noticiasReducer from '../reducer/noticias/noticiasSlice';
export const store = configureStore({

    reducer: {
      user: userReducer,
      news: noticiasReducer
    },
});