import React from 'react'
import { useDispatch } from 'react-redux'
import { StarRating } from './StarRating'
import { updateReview } from '../actions';

export default function AddRating({ id }) {
    const dispatch = useDispatch()
    console.log('id1 is', id)

    const [rating, setRating] = React.useState(null)
    const [why, setWhy] = React.useState('')
    const [email, setEmail] = React.useState('')

    function addNewRating(e) {
        e.preventDefault();
        console.log('id2 is', id, rating, why, email)
        dispatch(updateReview({ id, rating, why, email }))
        //setWhy('');
        //setRating('');
        //setEmail('');
    }

    return (
        <div>
            <h1>Add Rating</h1>
            <form onSubmit={addNewRating}>
                <label>Email</label><input type="text" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Rating</label><input type="text" name="rating" value={rating} onChange={e => setRating(rating)} className="fastarRadio" /><StarRating rating={rating} setRating={setRating} /><br />
                <label>Why</label><textarea type="text" name="why" onChange={(e) => setWhy(e.target.value)} />
                <button>Add Rating</button>
            </form>
        </div>
    )
}
