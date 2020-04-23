import React from 'react'
import { FaStar } from 'react-icons/fa'


export default function StarRatingRender({rating}) {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const starNumber = i + 1
                return (
                    <label>
                        {/* <input type="radio" name="radio" value={i} onClick={() => setRating(rateValue)} className="fastarRadio"
                        /> */}
                        <FaStar className="fastar" size={30} color={starNumber <= rating ? "#038C5A" : "grey"} 
                            />

                    </label>
                )

            })}
        </div>
    )
}
