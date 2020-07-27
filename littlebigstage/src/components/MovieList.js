import React from 'react'
import Movie from './Movie'




export default function MovieList({ ListMovies }) {
    
    return (
        
        <div className="movie_list_container">
            <div className="movie_list">
                {ListMovies && ListMovies.map((movie, i) => (
                    <Movie {...movie} key={movie.id} />
                ))}
            </div>
        </div>
                
    )
}

