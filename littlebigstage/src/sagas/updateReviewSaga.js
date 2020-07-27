import { select } from 'redux-saga/effects'

export function* updateMovieSaga({ payload: { index } }) {
  // const  { existingMovies:[index]  } = yield select()
  try {
    const { existingMovies } = yield select()
    let theCurrentMovieState = existingMovies[index]

    console.log(' the current movie state is', theCurrentMovieState)
  } catch (error) {
    console.log('saga error is', error.message)
  }
  // const response = yield call(api.posts('http://localhost:5000/movies').getSingleMovie, movie.id)
  // console.log('response is', response)
  /*  const index = state.findIndex(movie => movie.id === id)
              state[index].reviews.unshift({
                  Date: Date.now(),
                  rating: rating,
                  why: why,
                  email: email
              })
  console.log('new state is', state) */
}


export function* watchReviewMethods() {
  yield takeLatest(GET_UPDATE_MOVIE, updateMovieSaga)
}