import React from 'react'
import { useSelector } from 'react-redux'
import { SearchMoviesContext } from '../App'
import StarRatingRender from './StarRatingRender'
import { StarRating } from './StarRating'
import NewRating from './AddRating'

export default function MovieReviewDetails({ match }) {
    let newRating = true;
    const { searchForMovies } = React.useContext(SearchMoviesContext)

    return (

        <div className="Details_container">
            <div className="Details_image">

                {searchForMovies(match.params.title)[0].image && (

                    <img
                        src={URL.createObjectURL(searchForMovies(match.params.title)[0].image)}
                    />
                )}

            </div>

            <div className="Details_title_rating_why">
                <button>Rate This</button>
                <div className="Details_title">
                    <h1>{match.params.title} </h1>
                </div>

                <div className="Details_rating">
                    {console.log('newRating is ', newRating)}
                    {!newRating ? <h2><StarRatingRender rating={searchForMovies(match.params.title)[0].reviews[0].rating} /></h2> : <h2><NewRating id={searchForMovies(match.params.title)[0].id} /></h2>}
                </div>
                <div className="Details_why">
                    {/* <h3>{searchForMovies(match.params.title)[0].why}</h3> */}

                </div>
            </div>


        </div>
    )
}
