import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectedMovie, reviewState } from '../actions';
import { SearchMoviesContext } from '../App';
import DisplayStarRating from './DisplayStarRating';

import { CalculateStarRatingAverage } from '../helpers';

import Review from './Review';
import api from '../apis';

// export default function MovieReviewDetails({ match }) {
export default function MovieReviewDetails() {
  let history = useHistory();
  // const testmovie = useSelector((state) => state.existingMovies.filter((movie) => movie.title === match.params.title));
  const SelectedMovie = useSelector((state) => state.SelectedMovie);
  // console.log('MovieReview Details SelectedMovie is', SelectedMovie);
  const { NewReviewUpdated } = useSelector((state) => state);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const { dispatch } = React.useContext(SearchMoviesContext);
  const [newReview, setNewReview] = React.useState(false);

  React.useEffect(() => {
    if (SelectedMovie) {
      // api
      //   .posts()
      //   .getSingleMovie(testmovie[0].id)
      //   .then((movie) => {
      //     dispatch(
      //       selectedMovie({
      //         id: movie.data._id,
      //         title: movie.data.title,
      //         category: movie.data.category,
      //         image: movie.data.image,
      //         reviews: movie.data.reviews,
      //       })
      //     );
      //  });
    }
    return () => {
      //  console.log('clean up task');
      dispatch(reviewState(false));
    };
  }, [SelectedMovie, dispatch]);

  // put this in a useCallback?? or memo?
  function handleAddNewReview() {
    history.push('/addreview');
  }

  return (
    <>
      {SelectedMovie && (
        <div className="Details_container">
          <div className="Details_image">
            {/* {searchForMoviesOnMatchMemo.image && (
                    <img
                        src={URL.createObjectURL(searchForMoviesOnMatchMemo.coverImage)}
                        style={{ objectFit: 'cover' }}
                    />
                )} */}
          </div>

          <div className="Details_title_rating_why">
            <div className="Details_title">
              <h1>{SelectedMovie.title} </h1>
            </div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!newReview && (
              <button className="btn" onClick={handleAddNewReview}>
                {' '}
                <h3>{!newReview ? 'Rate it' : null}</h3>
              </button>
            )}

            <div className="Details_rating">
              {!newReview ? (
                <h2>
                  <DisplayStarRating rating={CalculateStarRatingAverage(SelectedMovie.reviews)} id={SelectedMovie.id} size={30} />
                </h2>
              ) : (
                <h2>{/* <AddReview id={testmovie[0].id} setNewReview={setNewReview} setDisplayMessage={setDisplayMessage} /> */}</h2>
              )}
            </div>

            <div className="Details_displayMessage">{NewReviewUpdated && <h3>Thank you for your review and rating</h3>}</div>

            {!newReview && (
              <div className="Details_why">
                <label>
                  {' '}
                  <h3>Reviews</h3>
                </label>
                {SelectedMovie.reviews.map(
                  (review, i) => (
                    <Review {...review} key={i} />
                  )
                  //console.log('test review', review)
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );

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
