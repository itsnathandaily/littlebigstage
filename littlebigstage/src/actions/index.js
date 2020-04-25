




export const storeMovie = (newMovie) => {
    return {
        type: 'STOREMOVIE',
        newMovie

    }
}

export const updateReview = ({ id, rating, why, email }) => {
    console.log('inside updateReview Action')
    return {
        type: 'UPDATE_REVIEW',
        id: id,
        rating: rating,
        why: why,
        email: email
    }
}

export const searchMovie = (title) => {
    return {
        type: 'SEARCH',
        title: title
    }
}

export const listMovie = () => {
    return {
        type: 'LIST'

    }
}

export const addMovie = (newMovie) => {
    return {
        type: 'ADD_MOVIE',
        newMovie

    }
}
