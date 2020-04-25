import React, { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SearchMovie from './SearchMovie'

export default function Nav({ ExistingMovies, query, setQuery, search, setSearch, ListMovies, setListMovies }) {
    //const [movies, setMovies] = useContext(MovieContext)
    //const ExistingMovies = useSelector(state => state.existingMovies)

    // function getMovieListing() {
    //     setListMovies(ExistingMovies)
    // }

    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <h1>Little Big Stage</h1>
            <Link style={navStyle} to="/" onClick={()=>setListMovies(ExistingMovies)}><p>Listing</p></Link>
            <div className="searchmovie_div"><SearchMovie  query={query} setQuery={setQuery}  search={search} setSearch={setSearch} ListMovies={ListMovies} setListMovies={setListMovies} /></div>
            <Link style={navStyle} to="/addcontent"><p>Add Content</p></Link>
            <p>Total Reviewed {ExistingMovies.length}</p>
        </nav>
    )
}
