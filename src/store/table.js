
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : 'dashboard',
    check : false,
    data : []
    
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
          setData(state ,action) {
            state.data = action.payload;
          },
    
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;