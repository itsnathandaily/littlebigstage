import { takeEvery, put, delay } from 'redux-saga/effects'

function* storeMovieSaga(newMovie) {
    yield delay(10000);
    yield put({ type: 'STOREMOVIEASYNC', newMovie })
}

export function* watchStoreMovie() {
    yield takeEvery('STOREMOVIE', storeMovieSaga)
}