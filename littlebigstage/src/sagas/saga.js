
function* storeMovieSaga(newMovie) {
 //   yield delay(10000);
 //   yield put({ type: 'STOREMOVIEASYNC', newMovie })
}

export function* watchStoreMovie() {
   // yield take('STOREMOVIE', storeMovieSaga)
    console.log('started saga')
}