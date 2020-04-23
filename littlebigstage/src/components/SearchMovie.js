import React, { useState, useContext, useEffect } from 'react'



export default function SearchMovie({ ExistingMovies, query, setQuery, searchForMovies, search, setSearch, movies, setMovies }) {


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
        query === '' ? setMovies(ExistingMovies) : setMovies(result)
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
