import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [

    ]
}

export const Tracker = createContext(initialState);


function reducer(state:number , action:string) {
    
}