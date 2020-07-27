import React from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { StarRating } from './StarRating';
import { SearchMoviesContext } from '../App';
import { updateReview } from '../actions';
import axios from 'axios';
import RegisterLoginContainer from '../containers/RegisterLoginContainer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function AddReview({ id, setNewReview, setDisplayMessage }) {
  var subtitle;
  const { dispatch } = React.useContext(SearchMoviesContext);
  console.log('dispatch in context) is', dispatch);
  const { USERLOGGEDIN } = React.useContext(SearchMoviesContext);
  const [rating, setRating] = React.useState(null);
  const [why, setWhy] = React.useState('');
  const [email, setEmail] = React.useState(null);
  const [EmailError, setEmailError] = React.useState(null);
  const [RatingError, setRatingError] = React.useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [updateComplete, setUpdateComplete] = React.useState(null);
  const [reviewCompleted, setReviewCompleted] = React.useState(false);

  // return <button onClick={showModal}>Show modal</button>;

  React.useEffect(() => {
    //if user logs in set username
    setEmail(USERLOGGEDIN);
  }, [USERLOGGEDIN]);

  React.useEffect(() => {
    //close modal if user logs in
    if (email) {
      setIsOpen(false);
    }
  }, [email]);

  function openModal() {
    // showModal();
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  // validations for rating and username/email
  const validateForms = React.useCallback(() => {
    if (rating !== null) {
      setRatingError(null);
    }

    if (rating == null) {
      setRatingError('required');
      return false;
    } else if (!email) {
      openModal();
      return false;
    }

    return true;
  }, [email, rating]);

  const handle_New_Review_Rating = (e) => {
    e.preventDefault();

    if (validateForms()) {
      const reviewUpdate = {
        reviews: [
          {
            rating,
            why,
            username: email,
          },
        ],
      };
      axios
        .put(`http://localhost:5000/movies/update/${id}`, reviewUpdate)
        .then((res) => {
          setUpdateComplete(true);
          if (res.data) {
            console.log(res.data);
          } else {
            setUpdateComplete(null);
            console.log('cant update movie');
          }
        })
        .catch((error) => {
          setUpdateComplete(null);
          console.log('error is ', error);
        });
      setWhy('');
      setRating('');
      setEmail('');
      setEmailError(null);
      setRatingError(null);

      setReviewCompleted(true);
      if (updateComplete) {
        dispatch(updateReview((id, rating, why, email)));
      }
      setDisplayMessage(true);
      setNewReview(false);
    }
  };
  setDisplayMessage(false);
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Please Login</h2>
        <button onClick={closeModal}>X</button>
        <RegisterLoginContainer />
      </Modal>
      <form onSubmit={handle_New_Review_Rating}>
        <div className="error_message">{EmailError == null ? <h3>{EmailError}</h3> : <h3>{EmailError}</h3>}</div>
        <label htmlFor="email">Email*</label>
        <br />
        <input type="text" name="email" id="email" value={USERLOGGEDIN} />

        <div className="AddRating_rating_star">
          <br />
          <div className="error_message"> {RatingError == null ? <h3>{RatingError}</h3> : <h3>{RatingError}</h3>}</div>
          <label htmlFor="rating">Rating*</label>
          <StarRating rating={rating} setRating={setRating} key={id} />
          <input type="text" name="rating" id="rating" value={rating} onChange={(e) => setRating(rating)} className="fastarRadio" />
          <br />
          <br />
        </div>

        <label htmlFor="why">Review</label>
        <br />
        <textarea type="text" name="why" id="why" onChange={(e) => setWhy(e.target.value)} />
        <br />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}
