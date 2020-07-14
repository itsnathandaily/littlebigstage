import { all, fork } from 'redux-saga/effects'

import { watchReviewMethods } from './updateReviewSaga'

export {watchReviewMethods}

export default function* root() {
    yield all([
      fork(watchReviewMethods),
    ])
  }