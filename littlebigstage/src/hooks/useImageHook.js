import React from 'react'
import Axios from 'axios'

function useImageHook(id) {
 
React.useEffect(()=>{

    Axios("/movies/" + id + "/image").then((res) => {
        return (res.data);
      });
    
},[id])

    
}

export default useImageHook
