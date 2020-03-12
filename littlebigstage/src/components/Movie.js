import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({ movie }) {
    return (
        <div className="movieContainer">
            <div className="movie">
                <div className="movie_image">
                    <img src={movie.image} />
                </div>
                <div className="movie_title">
                    <h3>{movie.title}</h3>
                </div>

                <div className="movie_rating">
                    <p>{movie.rating} <Link to={`/reviewdetails/${movie.title}`}>Details</Link></p>
                </div>
            </div>
            <hr />
        </div>
    )
}
