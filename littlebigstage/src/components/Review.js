import React from 'react';
import DisplayStarRating from './DisplayStarRating';

function Review({ Date, rating, why, username }) {
  return (
    <div className="reviewContainer">
      {/* <div className="review_date">{Date}</div> */}
      <div className="review_rating">
        <DisplayStarRating rating={rating} />
      </div>
      <div className="review_details">{why}</div>
      <div className="review_email">{username}</div>
      <br />
    </div>
  );
}

export default Review;
