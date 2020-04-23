import React from 'react'
import { FaStar } from 'react-icons/fa'


export const StarRating = ({rating,setRating}) => {
   // const [rating, setRating] = React.useState(null)
    const [hover, setHover] = React.useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const rateValue = i + 1
                return (
                    <label>
                        <input type="radio" name="radio" value={i} onClick={() => setRating(rateValue)} className="fastarRadio"
                        />
                        <FaStar className="fastar" size={30} color={rateValue <= (hover || rating) ? "#038C5A" : "grey"} onMouseEnter={() => setHover(rateValue)}
                            onMouseLeave={() => setHover(null)} />
                        
                    </label>
                )

            })}
        </div>
    )
}
