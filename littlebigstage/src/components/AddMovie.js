import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovieContext } from '../contexts/MovieContext'
import uuidv4 from "uuid/v4";
import { storeMovie } from '../actions';
import { StarRating } from './StarRating'

export default function AddMovie() {


    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const [rating, setRating] = useState(null)
    const [why, setWhy] = useState('')
    const [movies, setMovies] = useContext(MovieContext)
    const imageInputRef = React.useRef()




    const addTitle = e => {
        setTitle(e.target.value)
    }

    const addCategory = e => {
        setCategory(e.target.value)
    }
    const addImage = e => {
        e.preventDefault();
        setImage(e.target.files[0])
        //imageInputRef.current.value = '';
    }

    const addRating = e => {
        setRating(e.target.value)
    }

    const addWhy = e => {
        setWhy(e.target.value)
    }

    const addContent = e => {
        //setId(uuidv4());
        setId(Date.now())
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { id: id, title: title, category: category, image: image, rating: rating, why: why }])
        dispatch(storeMovie([{ id: Date.now(), title: title, category: category, image: image, rating: rating, why: why }]))
        setTitle('')
        setWhy('')
        setRating('')
        setCategory('')
        imageInputRef.current.value = '';
    }

    function handleSubmit(event) {
        event.preventDefault();
        const post = { id: Date.now(), title, category, image, rating, why }
        console.log('post is ', post)
    }

    return (
        <div className="addMovie">
            <h1>Add Content</h1>
            <form onSubmit={addContent}>
                <label>Title</label><input type="text" name="title" value={title} onChange={addTitle} /><br />
                <label>Category</label><input type="text" name="category" value={category} onChange={addCategory} /><br />
                <label>Image</label><input type="file" name="image" onChange={event => addImage(event)} ref={imageInputRef} /><br />
                <label>Rating</label><input type="text" name="rating" value={rating} onChange={addRating} className="fastarRadio" /><StarRating rating={rating} setRating={setRating} /><br />
                <label>Why</label><textarea type="text" name="why" value={why} onChange={addWhy} />
                <button>Add Content</button>
            </form>
        </div>
    )
}
