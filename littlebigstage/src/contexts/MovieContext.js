import React, { useState, createContext } from 'react'
import uuidv4 from "uuid/v4";

export const MovieContext = createContext();



export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            id: uuidv4(),
            title: "Come Away Show",
            category: "play",
            image: "",
            rating: "6/10",
            why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes"
        },
        {
            id: uuidv4(),
            title: "Pass Over",
            category: "play",
            image: "",
            rating: "6/10",
            why: "Although it's a slow start, it's drags you in eventually.  It's quite emotional.  But I almost walked out during the first 20 minutes"
        }

    ])


    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
