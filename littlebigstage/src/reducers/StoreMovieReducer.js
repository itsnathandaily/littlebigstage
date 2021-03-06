

const storeMovieReducer = (state = [
    /* {
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
            },
            {
                Date: Date.now(),
                rating: 1,
                why: "Hated it!",
                email: "Joe@gmail.com"
            }
        ]

    },
    {
        id: 2,
        title: "Level Up",
        category: "play",
        image: null,
        reviews: [
            {
                Date: Date.now(),
                rating: 3,
                why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes",
                email: "email address"
            },
            {
                Date: Date.now(),
                rating: 2,
                why: "Hated it!",
                email: "Joe@gmail.com"
            }
        ]

    }
    ,
    {
        id: 3,
        title: "Pass Over",
        category: "play",
        image: null,
        reviews: [
            {
                Date: Date.now(),
                rating: 5,
                why: "Loved It",
                email: "email address"
            }
            , {
                Date: Date.now(),
                rating: 4,
                why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes",
                email: "email address"
            }
        ]
    }
 */

]
    , action) => {
    switch (action.type) {
        case 'STOREMOVIE':
            return [...state, ...action.newMovie]
        case 'UPDATE_REVIEW': {
            const index = state.findIndex(movie => movie.id === action.id)
            state[index].reviews.unshift({
                Date: Date.now(),
                rating: action.rating,
                why: action.why,
                email: action.email
            })
            return state;

        }
        case 'UPDATEMOVIE': {
           // const index = state.findIndex(movie => movie.id === action.movie.id)
           const newState = state.map(movie => movie.id !== action.movie.id ? movie : action.movie)  
            // const newMovie = [foundMovie, ...action.movie.reviews]
           // console.log('newMovie is', newMovie)
           return newState
        }

        default:
            return state;
    }



}

export default storeMovieReducer;