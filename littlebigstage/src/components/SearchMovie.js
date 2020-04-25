import React from 'react'
import { SearchMoviesContext } from '../App';
import App from '../App';


export default function SearchMovie({ query, setQuery, search, setSearch, ListMovies, setListMovies }) {

    const { searchForMovies, ExistingMovies } = React.useContext(SearchMoviesContext)

    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    React.useEffect(() => {
        const [...result] = searchForMovies(query);
        // const [...result] = ExistingMovies.filter(movie => movie.title === query)
        console.log('result is ', result)
        query === '' ? setListMovies(ExistingMovies) : setListMovies(result)
    }, [query])


    return (
        <div className="search-div">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-input" type="text" value={search} placeholder="Search" onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}
