import React from 'react'
import { SearchMoviesContext } from '../App';


function SearchMovie({ setListMovies }) {

    const { searchForMovies } = React.useContext(SearchMoviesContext)
    const [search, setSearch] = React.useState('')
    const [query, setQuery] = React.useState(null);

    React.useEffect(() => {
        const [...result] = searchForMovies(search);
        setListMovies(result)
    }, [search])

    // React.useEffect(() => {
    //     // event.preventDefault();
    //     const [...result] = searchForMovies(query);
    //     setListMovies(result)
    // }, [query])

    return (
        <div className="search-div">
            <form onSubmit={event => setQuery(event.target.value)} className="search-form">
                <input className="search-input" type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />
                {/* <button>Submit</button> */}
            </form>
        </div>
    )
}

export default React.memo(SearchMovie)