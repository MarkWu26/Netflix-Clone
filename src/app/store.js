import {configureStore} from '@reduxjs/toolkit'
import {movieApiSlice} from './api/movieApiSlice'
import genreReducer from './genres/genreSlice'

export const store = configureStore({
    reducer:{
        [movieApiSlice.reducerPath]: movieApiSlice.reducer,
        genres: genreReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApiSlice.middleware),
    devTools: true
})

