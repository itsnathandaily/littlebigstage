import React, { useState, useContext, useEffect } from 'react'
import Movie from './Movie'



export default function MovieList({ ListMovies }) {
   
    console.log('movies are ', ListMovies)

   



    return (

        <div className="movie_list_container">
            <div className="movie_list">
                {ListMovies.map((movie,i) => (
                    <Movie {...movie} key={movie.id} />
                ))}
            </div>
        </div>

    )
}

