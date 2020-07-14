import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DisplayStarRating from './DisplayStarRating';
import { CalculateStarRatingAverage } from '../helpers';
import RatingIcons from './displayIcons/RatingIcons';
import { StoreMovieTitle, selectedMovie } from '../actions';
import api from '../apis';

function Movie({ id, coverImage, title, reviews }) {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className="movieContainer">
      <div className="movie">
        <div className="movie_image">
          {coverImage && (
            <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(coverImage)} alt="Post cover" />
          )}
        </div>
        <div className="movie_title">
          <h3>{title}</h3>
        </div>

        <div className="movie_rating">
          {
            <>
              {/* <DisplayStarRating rating={CalculateStarRatingAverage(reviews)} id={id} />   */}
              <RatingIcons rate={CalculateStarRatingAverage(reviews)} />
              <Link to={`/reviewdetails/${title}`}>See Reviews</Link>
              <span
                onClick={() => {
                  // console.log('props is',this.props)
                  // withdraw movie from db
                  api
                    .posts()
                    .getSingleMovie(id)
                    .then((movie) => {
                      dispatch(
                        selectedMovie({
                          id: movie.data._id,
                          title: movie.data.title,
                          category: movie.data.category,
                          image: movie.data.image,
                          reviews: movie.data.reviews,
                        })
                      );
                    });
                  //insert title into the state
                  // dispatch(StoreMovieTitle(title))
                  history.push('/reviewdetails');
                }}
              >
                See Reviews
              </span>
            </>
          }
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default withRouter(Movie);
