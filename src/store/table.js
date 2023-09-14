
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : 'dashboard',
    
}

const tableSlice = createSlice ({
    name : 'table',
    initialState : initialState,
    reducers : {
        setShow(state ,action) {
          state.show = action.payload;
        },
    
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;