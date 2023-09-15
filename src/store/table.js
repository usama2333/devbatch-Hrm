
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : 'dashboard',
    check : false
    
}

const tableSlice = createSlice ({
    name : 'table',
    initialState : initialState,
    reducers : {
        setShow(state ,action) {
          state.show = action.payload;
        },
        setCheck(state ,action) {
            state.check = !state.check;
          },
    
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;