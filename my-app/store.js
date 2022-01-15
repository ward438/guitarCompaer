import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { SelectedGuitarsReducer } from "./reducers/guitars";

enableMapSet();

const middleware = [
    ...getDefaultMiddleware(
        {serializableCheck: false        }
    ),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];

const slices = [
    // guitars
    SelectedGuitarsReducer
];

export const store = configureStore({
    reducer: slices.reduce((reducer, slice) => {
        reducer[slice.name] = slice.reducer;
        // reducer[slice.name] = slice.reducer;  
        return reducer;
    }, {}),
    middleware,
});