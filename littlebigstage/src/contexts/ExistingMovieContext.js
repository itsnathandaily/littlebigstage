import React from 'react'
import {useSelector} from 'react-redux'
import SearchReducer from '../reducers/SearchReducer'
export const ExistingMovieContext = React.createContext();



export const ExistingMovieProvider = (props) => {
    const ExistingMovies = React.useSelector(state => state.existingMovies)
    const [state, dispatch] = React.useReducer(SearchReducer, ExistingMovies);
    //const ExistingMovies = React.useSelector(state => state.existingMovies)
    //export const ExistingMovieContext = React.createContext(ExistingMovies);
    //const [Movies, setMovies] = React.useState(ExistingMovies)


    return (
        <ExistingMovieContext.Provider value={[state,dispatch]}>
            {props.children}
        </ExistingMovieContext.Provider>
    );
}
