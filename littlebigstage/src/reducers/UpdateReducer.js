// import React from 'react'
// // import { SearchMoviesContext } from '../App'


// //const { ExistingMovies } = React.useContext(SearchMoviesContext)
// const UpdateMovieReducer = (state = null, action) => {
//     switch (action.type) {
//         case 'UPDATE_REVIEW': {
//             const newState = [...state, ...action.ExistingMovies]
//             const nextReview = {
//                 Date: Date.now(),
//                 rating: action.rating,
//                 why: action.why,
//                 email: action.email
//             }
//             // const foundMovie = newState.find(movie => movie.id === action.id)
//             // const nextReviewIndex = foundMovie.reviews.length
//             // foundMovie.reviews[nextReviewIndex] = nextReview;

// const foundMovie = newState.map(movie => {
//     if (movie.id === action.id){
//         movie.reviews.push(nextReview)
//     }
// })



//             /* const newFoundMovieReviews = [...foundMovie.reviews, ...nextReview]
//             const updatedFoundMovie = [...foundMovie, ...updatedFoundMovieReviews]
//             */

//             return [...newState, ...foundMovie]


//         }

//         default:
//             return state;
//     }

// }

// export default UpdateMovieReducer;