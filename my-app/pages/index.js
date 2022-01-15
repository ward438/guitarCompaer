import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import TopPanel from '../components/topNav';
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { guitars } from "./api/guitars/reducers/guitars";



export default function Home() {


  const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];
  
const slices = [    
    guitars
];

const store = configureStore({
    reducer: slices.reduce((reducer, slice) => {
      
        reducer[slice?.name] = slice?.reducer;  
        return reducer;
    }, {}),
    middleware,
});


  return (
    <>
      <Provider store={store}>
        <TopPanel />
      </Provider>,

    </>
  )
}
