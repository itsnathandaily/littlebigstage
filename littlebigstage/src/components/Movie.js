import React from 'react'
import { Link } from 'react-router-dom'
import DisplayStarRating from './DisplayStarRating'
import { CalculateStarRatingAverage } from '../helpers'
import RatingIcons from './displayIcons/RatingIcons'


export default function Movie({ id, image, title, reviews }) {

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
                    {<>
                        {/* <DisplayStarRating rating={CalculateStarRatingAverage(reviews)} id={id} />   */}
                        <RatingIcons rate={CalculateStarRatingAverage(reviews)} />
                        <Link to={`/reviewdetails/${title}`} >See Reviews</Link>
                    </>
                    }
                </div>
              
            </div>
            {/* <hr /> */}
        </div>
    )
}
