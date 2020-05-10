import React from 'react'
import { StarRating } from './StarRating'
import { updateReview } from '../actions';
import { SearchMoviesContext } from '../App';

export default function AddReview({ id, setNewReview, setDisplayMessage }) {
    const { dispatch } = React.useContext(SearchMoviesContext)
    const [rating, setRating] = React.useState(null)
    const [why, setWhy] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [EmailError, setEmailError] = React.useState(null)
    const [RatingError, setRatingError] = React.useState(null)

    const validateForms = React.useCallback(() => {

        if (email !== '') {
            setEmailError(null)
        }

        else if (email == '') {
            setEmailError('required')
            return false
        }

        if (rating !== null) {
            setRatingError(null)
        }

        else if (rating == null) {
            setRatingError("required")
            return false
        }

        return true
    }, [email, rating])

    function handle_New_Review_Rating(e) {
        e.preventDefault();
        // console.log('validate forms is', validateForms())
        // console.log('Email Error is ', EmailError)
        // console.log('Rating Error is ', RatingError)
        if (validateForms()) {
            dispatch(updateReview({ id, rating, why, email }))
            setWhy('');
            setRating('');
            setEmail('');
            setEmailError(null)
            setRatingError(null)
            setNewReview(false)
            setDisplayMessage(true);
        }

    }
    setDisplayMessage(false)
    return (
        <div>

            <form onSubmit={handle_New_Review_Rating}>

                <div className="error_message">{EmailError == null ? <h3 >{EmailError}</h3> : <h3>{EmailError}</h3>}</div>
                <label htmlFor="email">Email*</label><br />
                <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />


                <div className="AddRating_rating_star">
                    <br />
                    <div className="error_message"> {RatingError == null ? <h3>{RatingError}</h3> : <h3>{RatingError}</h3>}</div>
                    <label htmlFor="rating">Rating*</label>
                    <StarRating rating={rating} setRating={setRating} key={id} />
                    <input type="text" name="rating" id="rating" value={rating} onChange={e => setRating(rating)} className="fastarRadio" />
                    <br />
                    <br />
                </div>


                <label htmlFor="why">Review</label><br />
                <textarea type="text" name="why" id="why" onChange={(e) => setWhy(e.target.value)} />
                <br />

                <button type="submit">Add Review</button>
            </form>
        </div>
    )

}
