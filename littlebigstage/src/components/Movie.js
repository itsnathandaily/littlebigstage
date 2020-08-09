import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import DisplayStarRating from "./DisplayStarRating";
import { CalculateStarRatingAverage } from "../helpers";
import { useImageHook } from "../hooks";
import RatingIcons from "./displayIcons/RatingIcons";
import { StoreMovieTitle, selectedMovie } from "../actions";
import api from "../apis";

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
      <section className="sectionmoviediv">
        <div className="moviediv">
          <div className="movieimagediv">
            {/* useImageHook(id)  && */ <img
              // src={URL.createObjectURL(image)}
              src={`http://localhost:5000/movies/${id}/image`}
              style={{ objectFit: "cover", height: 100, width: 200 }}
            />}
            {/* <h3 className="movieimage">Image</h3> */}
          </div>
        </div>
        <div className="moviediv">
          <h1 className="movietitle">{title}</h1>
        </div>
          <div className="moviediv">
            <h3 className="movierating"></h3>
            {/* <RatingIcons rate={CalculateStarRatingAverage(reviews)} /> */}
            <DisplayStarRating
              rating={CalculateStarRatingAverage(reviews)}
              id={id}
              size={30}
            />
          </div>
        <div className="moviediv" id="seereviewsdiv">
          {/* <a href="#" class="btn">
              Reviews
            </a> */}
          <h3>
            {" "}
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
                      }),
                    );
                  });
                history.push("/reviewdetails");
              }}
            >
              See Reviews
            </Link>
          </h3>
        </div>
      </section>
    </section>
    // <! -- section wrapper ends -- >
  );
}

export default withRouter(Movie);
