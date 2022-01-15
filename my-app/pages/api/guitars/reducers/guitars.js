import { createSlice } from "@reduxjs/toolkit";
import guitarAssets from "../index";
import { v4 as uuid_v4 } from "uuid";

export const selectedGuitars = createSlice({
  name: "guitars",
  initialState: {
    value: {
        selectedGuitars: guitarAssets,
        selected: new Array(guitarAssets.length).fill(null),
        timestamp: null,
        id: null
    },
    allSelectedGuitars: {
      selectedGuitars: []
    }
  },
  reducers: {
      // These are the action functions
    start: (state, action) => {
        // Keep existing properties and updating new id and timestamp
        state.value = {...state.value, id: uuid_v4(), timestamp: new Date().toString()}
      },
    
    setReadOnly: (state, action) => {
      state.value = action.payload;
    },
    setAllQuestions: (state, action) => {
      state.allSelectedGuitars.selectedGuitars = action.payload;
    }
  },
});