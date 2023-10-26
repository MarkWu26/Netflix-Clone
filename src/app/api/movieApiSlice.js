import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const movieUrlKey = 'https://api.themoviedb.org/3';
const apiKey = '7b41ef279cc2f1cee28ddd50bfbc6975';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjQxZWYyNzljYzJmMWNlZTI4ZGRkNTBiZmJjNjk3NSIsInN1YiI6IjY1MzM4MGM2ZjkwYjE5MDBhZDI1MTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72VhB50uXz7Sv_DApwG5b6tsFQD697B1iQjvJJ_kX7o'


const baseQuery = fetchBaseQuery({
    baseUrl: movieUrlKey,
    headers: {
        Authorization: `Bearer ${bearerToken}` 
    }
})

export const movieApiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => '/movie/popular'
        }),
        getTopRated: builder.query({
            query: () => '/movie/top_rated'
        }),
        getUpcoming: builder.query({
            query: () => '/movie/upcoming'
        })
    }),
   
})

export const {
    useGetPopularMoviesQuery, useGetTopRatedQuery, useGetUpcomingQuery
} = movieApiSlice

export const { reducer } = movieApiSlice;