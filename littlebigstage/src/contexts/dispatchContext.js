import React from 'react';

export const DispatchContext = React.createContext()

export const DispatchProvider = (props)=>{

    const dispatch1 = React.useDispatch();

    return (
        <DispatchContext.Provider value = {dispatch1}>

        </DispatchContext.Provider>
    )
}