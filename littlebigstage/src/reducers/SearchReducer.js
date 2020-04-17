import React from 'react';
import { ExistingMovieContext } from '../contexts/ExistingMovieContext'

 const SearchReducer = (state, action) => {

    switch (action.type) {
        case 'SEARCH': {
            //const existingState = [...state, ...ExistingMovies]
            const foundMovie = state.find(movie => movie.title === action.title)
            return foundMovie;
        }
        case 'LIST': {
           // const existingState = [...state, ...ExistingMovies]
            return state;
        }
        case 'ADD_MOVIE':
            const newState = [...state,...action.newMovie]
            return newState;
      
        default:
            return state;
    }
}

export default SearchReducer;