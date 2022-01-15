import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { guitars } from "./api/guitars/reducers/guitars";


const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];
  
const slices = [    
    guitars
];

export const store = configureStore({
    reducer: slices.reduce((reducer, slice) => {
        reducer[slice.name] = slice.reducer;  
        return reducer;
    }, {}),
    middleware,
});