import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { reviewState } from "../actions";
import { SearchMoviesContext } from "../App";
import DisplayStarRating from "./DisplayStarRating";

import { CalculateStarRatingAverage } from "../helpers";

import Review from "./Review";
import Axios from "axios";

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
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    if (SelectedMovie) {

      Axios("/movies/" + SelectedMovie.id + "/image").then((res) => {
        setImage(res.data);
      });
    }
    return () => {
      //  console.log('clean up task');
      dispatch(reviewState(false));
    };
  }, [SelectedMovie, dispatch]);

  // put this in a useCallback?? or memo?
  function handleAddNewReview() {
    history.push("/addreview");
  }

  return (
    <>
      {SelectedMovie && (
        <div className="Details_container">
          <div className="Details_image">
            {image && (
              <img
                // src={URL.createObjectURL(image)}
                src={`http://localhost:5000/movies/${SelectedMovie.id}/image`}
                // style={{ objectFit: "cover" }}
              />
            )}
          </div>

          <div className="Details_title_rating_why">
            <div className="Details_title">
              <h1>{SelectedMovie.title}</h1>
            </div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!newReview && (
              <button className="btn" onClick={handleAddNewReview}>
                {" "}
                <h3>{!newReview ? "Rate it" : null}</h3>
              </button>
            )}

            <div className="Details_rating">
              {!newReview
                ? (
                  <h2>
                    <DisplayStarRating
                      rating={CalculateStarRatingAverage(SelectedMovie.reviews)}
                      id={SelectedMovie.id}
                      size={30}
                    />
                  </h2>
                )
                : (
                  <h2>
                    {/* <AddReview id={testmovie[0].id} setNewReview={setNewReview} setDisplayMessage={setDisplayMessage} /> */}
                  </h2>
                )}
            </div>

            <div className="Details_displayMessage">
              {NewReviewUpdated &&
                <h3>Thank you for your review and rating</h3>}
            </div>

            {!newReview && (
              <div className="Details_why">
                <label>
                  {" "}
                  <h3>Reviews</h3>
                </label>
                {SelectedMovie.reviews.map((review, i) => (
                  <Review {...review} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
