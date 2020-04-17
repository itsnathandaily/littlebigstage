import React from 'react'
import { useSelector } from 'react-redux'

export default function MovieReviewDetails({ match }) {
    const ExistingMovies = useSelector(state => state.existingMovies)

    const searchForMovies = (title) => {
        //console.log('title is ', title)
        const [...result] = ExistingMovies.filter(movie => movie.title === title);
        console.log('result is ', result)
        return result

    }
    console.log('match is', match)
    searchForMovies(match.params.title)
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
                <div className="Details_title">
                    <h1>{match.params.title} </h1>
                </div>
                <div className="Details_rating">
                    <h2>{searchForMovies(match.params.title)[0].rating} </h2>
                </div>
                <div className="Details_why">
                    <h3>{searchForMovies(match.params.title)[0].why}</h3>
                </div>
            </div>


        </div>
    )
}