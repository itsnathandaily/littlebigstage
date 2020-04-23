import React, { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SearchMovie from './SearchMovie'

export default function Nav({ ExistingMovies, query, setQuery, searchForMovies, search, setSearch, movies, setMovies }) {
    //const [movies, setMovies] = useContext(MovieContext)
    //const ExistingMovies = useSelector(state => state.existingMovies)

    function getMovieListing() {
        setMovies(ExistingMovies)
    }

    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <h1>Little Big Stage</h1>
            <Link style={navStyle} to="/" onClick={getMovieListing}><p>Listing</p></Link>
            <div className="searchmovie_div"><SearchMovie ExistingMovies={ExistingMovies} query={query} setQuery={setQuery} searchForMovies={searchForMovies} search={search} setSearch={setSearch} movies={movies} setMovies={setMovies} /></div>
            <Link style={navStyle} to="/addcontent"><p>Add Content</p></Link>
            <p>Total Reviewed {movies.length}</p>
        </nav>
    )
}
