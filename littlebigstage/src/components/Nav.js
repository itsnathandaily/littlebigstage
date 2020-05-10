import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchMovie from './SearchMovie'

 function Nav({ ExistingMovies, setListMovies }) {


    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <h1>Little Big Stage</h1>
            <Link style={navStyle} to="/" onClick={()=>setListMovies(ExistingMovies)}><p>Listing</p></Link>
            <div className="searchmovie_div"><SearchMovie  setListMovies={setListMovies} /></div>
            {/* <Link style={navStyle} to="/addcontent"><p>Add Content</p></Link> */}
            <p>Total Reviewed {ExistingMovies.length}</p>
        </nav>
    )
}

export default React.memo(Nav)