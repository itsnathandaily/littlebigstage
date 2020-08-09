import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/* from https://github.com/mpontus/react-modal-hook */
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

import Axios from "axios";
import api from "../apis";

import { updateReview, reviewState, UpdateSelectedMovie } from "../actions";

import RegisterLoginContainer from "../containers/RegisterLoginContainer";
import { StarRating } from "./StarRating";

function AddReview2(props) {
  const { user, SelectedMovie, NewReviewUpdated } = useSelector((state) =>
    state
  );

  const [EmailError, setEmailError] = React.useState(null);
  const [RatingError, setRatingError] = React.useState(null);

  const [rating, setRating] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [why, setWhy] = React.useState("");
  const dispatch = useDispatch();

  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen style={customModalStyles}>
      <div className ="modalDivCloseButton">
        <button className="btn" onClick={hideModal}><h3>X</h3></button>
      </div>
      <RegisterLoginContainer
        dispatch={dispatch}
        hideModal={hideModal}
      />
    </ReactModal>
  ));

  React.useEffect(() => {
    setEmail(user.username);
    //close modal if user logs in
    if (email) {
      hideModal();
    }
  }, [user, hideModal, email]);

  const openModal = React.useCallback(() => {
    showModal();
  });

  React.useEffect(() => {
    /* If there is a new review and movie has been updated in the store,
       redirect to review details page */
    if (NewReviewUpdated) {
      setWhy("");
      setRating("");
      setEmail("");
      setEmailError(null);
      setRatingError(null);
      props.history.push("/reviewdetails");
    }
  }, [NewReviewUpdated, SelectedMovie, props]);

  // validations for rating and username/email
  const validateForms = React.useCallback(() => {
    if (rating !== null) {
      setRatingError(null);
    }

    if (rating == null) {
      setRatingError("required");
      return false;
    } else if (!email) {
      openModal();
      return false;
    }

    return true;
  }, [email, rating, openModal]);

  const handleNewReviewRating = (e) => {
    e.preventDefault();

    if (validateForms()) {
      const reviewUpdate = {
        reviews: [
          {
            rating,
            why,
            username: email,
          },
        ],
      };
      console.log("reviewUpdate is ", reviewUpdate);
      console.log("SelectedMovie.id is ", SelectedMovie.id);
      //  api.posts().updateMovie(id,reviewUpdate).then(movie => {
      Axios.put(
        `http://localhost:5000/movies/update/${SelectedMovie.id}`,
        reviewUpdate,
      )
        //   api
        //     .posts()
        //     .updateMovie(SelectedMovie.id, reviewUpdate)
        .then((res) => {
          if (res.data) {
            console.log("updateReview email is", email);
            dispatch(
              updateReview({ id: SelectedMovie.id, rating, why, email }),
            );
            dispatch(
              UpdateSelectedMovie(
                {
                  id: SelectedMovie.id,
                  rating: rating,
                  why: why,
                  username: email,
                },
              ),
            );
            dispatch(reviewState(true));
            console.log(res.data);
          } else {
            console.log("cant update movie");
          }
        })
        .catch((error) => {
          console.log("error is ", error);
        });
    }
  };

  return (
    <div>
      {SelectedMovie && (
        <form onSubmit={handleNewReviewRating}>
          <h1>{SelectedMovie.title}</h1>

          {/* Delete this section soon */}
          {/* <div className="error_message">{EmailError == null ? <h3>{EmailError}</h3> : <h3>{EmailError}</h3>}</div>
          <label htmlFor="email">Email*</label>
          <br />
          <input type="text" name="email" id="email" value={user.username} /> */}

          <div className="AddRating_rating_star">
            <br />
            <div className="error_message">
              {RatingError == null
                ? <h3>{RatingError}</h3>
                : <h3>{RatingError}</h3>}
            </div>
            <label htmlFor="rating">Rating*</label>
            <StarRating
              rating={rating}
              setRating={setRating}
              id={SelectedMovie.id}
            />

            <input
              type="text"
              name="rating"
              id="rating"
              value={rating}
              onChange={(e) => setRating(rating)}
              className="fastarRadio"
            />
            <br />
            <br />
          </div>

          <label htmlFor="why">Review</label>
          <br />
          <textarea
            type="text"
            name="why"
            id="why"
            onChange={(e) => setWhy(e.target.value)}
          />
          <br />

          <button className="btn" type="submit">
            <h3>Add Review</h3>
          </button>
        </form>
      )}
    </div>
  );
}

export default withRouter(AddReview2);
