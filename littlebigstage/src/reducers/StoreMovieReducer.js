import React from 'react'

const storeMovieReducer = (state = [
    {
        id: 1,
        title: "Come Away Show",
        category: "play",
        image: null,
        rating: 3,
        why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes"
    },
    {
        id: 2,
        title: "Pass Over",
        category: "play",
        image: null,
        rating: 4,
        why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes"
    }


]
    , action) => {
    switch (action.type) {
        case 'STOREMOVIE':
            return [...state, ...action.newMovie]
        default:
            return state;
    }

}

export default storeMovieReducer;