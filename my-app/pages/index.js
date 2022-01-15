import React, { useState, useEffect } from 'react';
import TopPanel from '../components/topNav';
import { Provider } from 'react-redux'
import { store } from '../store';



export default function Home() {

  return (
    <>
      <Provider store={store}>
        <TopPanel />
      </Provider>,

    </>
  )
}
