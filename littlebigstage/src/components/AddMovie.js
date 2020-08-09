import React, { useState } from 'react';
import { SearchMoviesContext } from '../App';
import { StarRating } from './StarRating';
import axios from 'axios';
import Axios from 'axios';

export default function AddMovie() {
  const { ExistingMovies, dispatch } = React.useContext(SearchMoviesContext);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState();
  const [rating, setRating] = useState(null);
  const [why, setWhy] = useState('');
  const [email, setEmail] = useState('');
  /* const imageInputRef = React.useRef(); */
  const [ListMovies, setListMovies] = useState(ExistingMovies);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addCategory = (e) => {
    setCategory(e.target.value);
  };
  const addFile = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
    /* imageInputRef.current.value = ''; */
    !file ? console.log('image is there') : console.log('image is not there');
  };

  const addRating = (e) => {
    setRating(e.target.value);
  };

  const addWhy = (e) => {
    setWhy(e.target.value);
  };

  const addContent = async (e) => {
    setId(Date.now());
    e.preventDefault();

    setListMovies((prevMovies) => [
      ...prevMovies,
      {
        id: Date.now(),
        title: title,
        category: category,
        image: file,
        reviews: [{ Date: Date.now(), rating: rating, why: why, email: email }],
      },
    ]);
    const newMovie = {
      title,
      category,
      image: file,
      reviews: [
        {
          date: Date.now,
          rating,
          why,
          username: email,
        },
      ],
    };
    const reviews = [
      {
        date: Date.now,
        rating,
        why,
        username: email,
      },
    ];

    //console.log('new movie content to be added is ', newMovie);

    const data = new FormData();
    data.append('title', title);
    data.append('category', category);
    data.append('rating', rating);
    data.append('why', why);
    data.append('username', email);
    data.append('file', file);

    console.log('formData values  is ', data.values())

    Axios.post('http://localhost:5000/movies/add', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // try {
    //   await axios({
    //     method: 'post',
    //     url: 'http://localhost:5000/movies/add',
    //     data: formData,
    //     headers: {
    //       /* content-type: 'multipart/form-data', */
    //       accept: 'image/jpg',
    //     },
    //   }).then((res) => console.log(res));
    // } catch (err) {
    //   console.log('err is', err);
    // }

    setTitle('');
    setWhy('');
   // setRating('');
    setCategory('');
    /*  imageInputRef.current.value = '' */
  };

  // function handleSubmit(event) {
  //     event.preventDefault();
  //     const post = { id: Date.now(), title, category, image, rating, why }
  //     console.log('post is ', post)
  // }

  return (
    <div className="addMovie">
      <h1>Add Content</h1>
      <form onSubmit={addContent} /* enctype="multipart/form-data" */>
        {/* <form onSubmit = {addContent}> */}
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={addTitle} />
        <br />
        <label>Category</label>
        <input type="text" name="category" value={category} onChange={addCategory} />
        <br />
        <label>Image</label>
        <input type="file" name="file" id="file" onChange={(event) => addFile(event)} /* ref={imageInputRef} */ />
        <br />
        {/* <label>Image2</label><input type="file" name="file"  class = "filepond"/><br /> */}
        <label>Rating</label>
        <input type="text" name="rating" value={rating} onChange={addRating} className="fastarRadio" />
        <StarRating rating={rating} setRating={setRating} key={id} />
        <br />
        <label>Why</label>
        <textarea type="text" name="why" value={why} onChange={addWhy} />
        <button>Add Content</button>
      </form>
    </div>
  );
}
