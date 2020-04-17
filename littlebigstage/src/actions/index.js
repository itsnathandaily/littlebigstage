export const storeMovie = (newMovie) => {
    return {
        type: 'STOREMOVIE',
        newMovie

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
