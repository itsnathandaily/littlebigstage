import React from 'react'
import { FaStar } from 'react-icons/fa'


export default function DisplayStarRating({ rating, id, size }) {
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const starNumber = index + 1
                return (
                    <>

                        <input type="radio" name="radio" value={index} className="fastarRadio"
                        />
                        <FaStar className="fastar" size={size} color={starNumber <= rating ? "#038C5A" : "grey"}
                        />

                    </>
                )

            })}
        </div>
    )
}
