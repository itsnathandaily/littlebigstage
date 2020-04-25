import React from 'react'

const storeMovieReducer = (state = [
    {
        id: 1,
        title: "Come Away Show",
        category: "play",
        image: null,
        reviews: [
            {
                Date: Date.now(),
                rating: 3,
                why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes",
                email: "email address"
            }
        ]

    },
    {
        id: 2,
        title: "Pass Over",
        category: "play",
        image: null,
        reviews: [
            {
                Date: Date.now(),
                rating: 4,
                why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes",
                email: "email address"
            }
        ]
    }


]
    , action) => {
    switch (action.type) {
        case 'STOREMOVIE':
            return [...state, ...action.newMovie]
        case 'UPDATE_REVIEW': {      
            const index = state.findIndex(movie => movie.id === action.id)
            state[index].reviews.push({
                Date: Date.now(),
                rating: action.rating,
                why: action.why,
                email: action.email
            })
            return state;

        }
        default:
            return state;
    }



}

export default storeMovieReducer;