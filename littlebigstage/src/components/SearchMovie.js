import React, { useState, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MovieContext } from '../contexts/MovieContext'
const LOCAL_STORAGE_KEY = "Original.Movies";


export default function SearchMovie() {
    const ExistingMovies = useSelector(state => state.existingMovies)
    //console.log('Existing Movies are', ExistingMovies)

    const [movies, setMovies] = useContext(MovieContext)
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")

    /* const getOrginalMoviesFromLocalStorage = () => {
        const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (recipeJson != null) {
            setMovies(JSON.parse(recipeJson));
        }
    };

    useEffect(() => {
        //console.log("Rendered");
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
    }, []);
 */
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

    const searchForMovies = () => {
        //console.log('query is ', query)
        //console.log('movies is ', movies)
        //const [...result] = movies.filter(movie => movie.title === query);
        const [...result] = ExistingMovies.filter(movie => movie.title === query);
        console.log('result is ', result)
        //query === '' ? getOrginalMoviesFromLocalStorage() : setMovies(result)
        query === '' ? setMovies(ExistingMovies) : setMovies(result)
    }



    useEffect(() => {
        searchForMovies();
    }, [query])


    return (
        <div className="search-div">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-input" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}
