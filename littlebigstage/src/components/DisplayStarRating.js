import React from 'react';
import { IoIosStar } from 'react-icons/io';

export default function DisplayStarRating({ rating, id, size }) {
  // const starcolor = rating >= 3 ? '#038C5A' : '#FC5A56';

  const starcolor = (rating) => {
    if (rating < 3) return '#FC5A56';
    if (rating === 3) return '#FCAD56';
    if (rating > 3) return '#038C5A';
  };
  // rating = 3 ->  ***#fcad56
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starNumber = index + 1;
        return (
          <>
            <input type="radio" name="radio" value={index} className="fastarRadio" key={index} />
            <IoIosStar className="fastar" size={size} color={starNumber <= rating ? starcolor(rating) : 'grey'} key={starNumber} />
          </>
        );
      })}
    </div>
  );
}
