import React, { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SearchMovie from './SearchMovie'

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
    const ExistingMovies = useSelector(state => state.existingMovies)


    const navStyle = {
        color: 'white'
    }
    return (
        <nav className="nav">
            <h1>Little Big Stage</h1>
            <Link style={navStyle} to="/"><p>Listing</p></Link>
            <div className="searchmovie_div"><SearchMovie /></div>
            <Link style={navStyle} to="/addcontent"><p>{/* Add Content */}</p></Link>
            <p>Total Reviewed {ExistingMovies.length}</p>
        </nav>
    )
}
