import { createSlice } from "@reduxjs/toolkit";
// import guitarAssets from "../pages/api/guitars/index";
import { v4 as uuid_v4 } from "uuid";

export const SelectedGuitarsReducer = createSlice({
  name: "guitars",
  initialState: {
    value: {
        selected: [],
        // a set() is a unique array that allow very fast response of action ie, filter
        selectedIds: new Set()
    },
  },
  reducers: {
      // These are the action functions
    // start: (state, action) => {
    //     // Keep existing properties and updating new id and timestamp
    //     state.value = {...state.value, id: uuid_v4(), timestamp: new Date().toString()}
    //   },
    // save: (state, action) => {
    //   state.value.selected = action.payload;
    //   selectedGuitars.push(state.value)
    // },
    // setReadOnly: (state, action) => {
    //   state.value = action.payload;

    // },
    // setAllGuitars: (state, action) => {
    //   state.allSelectedGuitars.selectedGuitars = action.payload;
    // }
      select: (state, action) => {
         const inputGuitar = action.payload;
         if(!state.value.selectedIds.has(inputGuitar.id)){
          state.value.selected.push(inputGuitar);
          state.value.selectedIds.add(inputGuitar.id);
         }
         
      },
      deselect: (state, action) => {
         const inputGuitar = action.payload;
         if(state.value.selectedIds.has(inputGuitar.id)){
            // omit the guitar that is currently in the selected guitars.
            state.value.selected = state.value.selected.filter(guitar=>guitar.id != inputGuitar.id)
            state.value.selectedIds.delete(inputGuitar.id);
         }
         
      }
  },
});