import React from 'react'
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";
import { FaMehBlank } from "react-icons/fa"
import { AiFillFire, AiFillMeh, AiOutlineMeh } from "react-icons/ai"


export default function RatingIcons({ rate }) {
    return (
        <div>
            {rate <= 2 ? <h3>Sucked!<IoIosThumbsDown color={"#D93B3B"} size={"2em"} /></h3> : rate === 3 ? <h3>Meh! Was Ok.<AiFillMeh color={"#BF785E"} size={"2em"} /></h3> : <h3>Great! Must see it!<IoIosThumbsUp color={'#038C5A'} size={"2em"} /></h3>}
        </div>
    )
}
