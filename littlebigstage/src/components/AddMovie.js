import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovieContext } from '../contexts/MovieContext'
import uuidv4 from "uuid/v4";
import { storeMovie } from '../actions';

export default function AddMovie() {


    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')
    const [why, setWhy] = useState('')
    const [movies, setMovies] = useContext(MovieContext)





    const addTitle = e => {
        setTitle(e.target.value)
    }

    const addCategory = e => {
        setCategory(e.target.value)
    }
    const addImage = e => {
        setImage(e.target.value)
    }

    const addRating = e => {
        setRating(e.target.value)
    }

    const addWhy = e => {
        setWhy(e.target.value)
    }

    const addContent = e => {
        setId(uuidv4());
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { id: id, title: title, category: category, image: image, rating: rating, why: why }])
        dispatch(storeMovie([{ id: id, title: title, category: category, image: image, rating: rating, why: why }]))
    }

    return (
        <div className="addMovie">
            <h1>Add Content</h1>
            <form onSubmit={addContent}>
                <label>Title</label><input type="text" name="title" value={title} onChange={addTitle} /><br />
                <label>Category</label><input type="text" name="category" value={category} onChange={addCategory} /><br />
                <label>Image</label><input type="text" name="image" value={image} onChange={addImage} /><br />
                <label>Rating</label><input type="text" name="rating" value={rating} onChange={addRating} /><br />
                <label>Why</label><textarea type="text" name="why" value={why} onChange={addWhy} />
                <button>Add Content</button>
            </form>
        </div>
    )
}
