import React, { useState, useContext, useEffect } from 'react'
import Movie from './Movie'
import { MovieContext } from '../contexts/MovieContext'
import { Provider, useSelector, useDispatch } from 'react-redux'


export default function MovieList() {
    const [movies, setMovies] = useContext(MovieContext)
    //const ExistingMovies = useSelector(state => state.existingMovies)

    //const [movies, setMovies] = useState(ExistingMovies)
    // const [search, setSearch] = useState("");
    //const [query, setQuery] = useState("")



    return (

        <div>
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </div>

    )
}

