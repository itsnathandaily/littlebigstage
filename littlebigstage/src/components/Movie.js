import React from 'react'
import { Link } from 'react-router-dom'
import StarRatingRender from './StarRatingRender'

export default function Movie({ image, title, reviews }) {
    return (
        <div className="movieContainer">
            <div className="movie">
                <div className="movie_image">
                    {image && (
                        <img
                            style={{ height: 100, width: 200, objectFit: 'cover' }}
                            src={URL.createObjectURL(image)}
                            alt="Post cover"
                        />
                    )}
                </div>
                <div className="movie_title">
                    <h3>{title}</h3>
                </div>

                <div className="movie_rating">
                    <p><StarRatingRender rating={reviews[0].rating} /> <Link to={`/reviewdetails/${title}`}>Review</Link></p>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    )
}
