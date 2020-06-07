import React from 'react'
import { SearchMoviesContext } from '../App'
import DisplayStarRating from './DisplayStarRating'
import { CalculateStarRatingAverage } from '../helpers'
import AddReview from './AddReview'
import Review from './Review'


export default function MovieReviewDetails({ match }) {

    const { searchForMovies } = React.useContext(SearchMoviesContext)
    const [newReview, setNewReview] = React.useState(false)
    const [displayMessage, setDisplayMessage] = React.useState(false)

    const searchForMoviesOnMatchMemo = React.useMemo(() => {
        return searchForMovies(match.params.title)[0]
    }, [match])


    return (
        <div className="Details_container">

            <div className="Details_image">
                {searchForMoviesOnMatchMemo.image && (
                    <img
                        src={URL.createObjectURL(searchForMoviesOnMatchMemo.coverImage)}
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </div>

            <div className="Details_title_rating_why">
                <div className="Details_title">
                    <h1>{match.params.title} </h1>
                </div>

                {!newReview && <button onClick={() => setNewReview(true)}> {!newReview ? 'Rate it' : null}</button>}

                <div className="Details_rating">
                    {!newReview ? <h2><DisplayStarRating rating={CalculateStarRatingAverage(searchForMoviesOnMatchMemo.reviews)} key={searchForMoviesOnMatchMemo.id} size={30} /></h2> : <h2><AddReview id={searchForMoviesOnMatchMemo.id} setNewReview={setNewReview} setDisplayMessage={setDisplayMessage} /></h2>}
                </div>

                <div className="Details_displayMessage">
                    {displayMessage && <h3>Thank you for your review and rating</h3>}
                </div>

                {!newReview && <div className="Details_why">
                    <label> <h3>Reviews</h3></label>
                    {searchForMoviesOnMatchMemo.reviews.map((review, i) => (
                        <Review {...review} key={review.Date} />
                    ))}
                </div>}
            </div>
        </div>
    )



    // TO DO
    // return (


    //     <div className="detailsContainer">
    //         <div className="detailsImage">

    //             {searchForMoviesOnMatchMemo.image && (
    //                 <img
    //                     src={URL.createObjectURL(searchForMoviesOnMatchMemo.image)}
    //                     style={{ objectFit: 'cover' }}
    //                 />
    //             )}

    //         </div>
    //         <div className="detailsMain">
    //             {displayMessage && <h3>Thank you for your review and rating</h3>}

    //             <div className="detailsTitle">
    //                 <h1>{match.params.title} </h1>
    //             </div>
    //             {!newReview ?
    //                 <div className="detailsRatingWhy">
    //                     <button onClick={() => setNewReview(true)}> Rate it</button>

    //                     <div className="detailsRating">
    //                         <h2>
    //                             <DisplayStarRating
    //                                 rating={CalculateStarRatingAverage(searchForMoviesOnMatchMemo.reviews)}
    //                                 key={searchForMoviesOnMatchMemo.id} size={30}
    //                             />
    //                         </h2>
    //                     </div>

    //                     <div className="detailsWhy">
    //                         <label> <h3>Reviews</h3></label>
    //                         {searchForMoviesOnMatchMemo.reviews.map((review, i) => (
    //                             <Review {...review} key={review.Date} />
    //                         ))}
    //                     </div>

    //                 </div>
    //                 :
    //                  <div className="addReview">
    //                  <h2>
    //                     <AddReview
    //                         id={searchForMoviesOnMatchMemo.id}
    //                         setNewReview={setNewReview}
    //                         setDisplayMessage={setDisplayMessage}
    //                     />
    //                  </h2>
    //                   </div>
    //             }
    //         </div>

    //     </div>

    // )

}
