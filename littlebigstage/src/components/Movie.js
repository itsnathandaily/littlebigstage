import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import DisplayStarRating from './DisplayStarRating';
import { CalculateStarRatingAverage } from '../helpers';
import RatingIcons from './displayIcons/RatingIcons';
import { StoreMovieTitle, selectedMovie } from '../actions';
import api from '../apis';

function Movie({ id, coverImage, title, reviews }) {
  const dispatch = useDispatch();
  let history = useHistory();

  /* const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;
   */

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <section>
      <section class="sectionmoviediv">
        <div class="moviediv">
          <div class="movieimagediv">
            <h3 class="movieimage">Image</h3>
          </div>
        </div>
        <div class="moviediv">
          <h1 class="movietitle">{title}</h1>
        </div>
        <div class="moviediv">
          <h3 class="movierating"></h3>
          {/* <RatingIcons rate={CalculateStarRatingAverage(reviews)} /> */}
          <DisplayStarRating rating={CalculateStarRatingAverage(reviews)} id={id} size={30} />
        </div>
        <div class="moviediv">
          <h3>
            {/* <a href="#" class="btn">
              Reviews
            </a> */}
            <Link
              className="btn"
              onClick={() => {
                // first get movie from db and put it in redux state
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
                history.push('/reviewdetails');
              }}
            >
              See Reviews
            </Link>
          </h3>
        </div>
      </section>
      <section className="movieContainer">
        <div className="movie">
          {/* <div className="movie_image">
            {coverImage && (
              <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(coverImage)} alt="Post cover" />
            )}
          </div> */}
          {/* <div className="movie_title">
            <h3>{title}</h3>
          </div> */}
        </div>
      </section>
    </section>
    // <! -- section wrapper ends -- >
  );
}

export default withRouter(Movie);
