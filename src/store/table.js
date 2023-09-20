import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: "dashboard",
  check: false,
  data: [],
  view: [],
  name: [],
  edit: [],
  signup : [],
  login : false,
};

const tableSlice = createSlice({
  name: "table",
  initialState: initialState,
  reducers: {
    setShow(state, action) {
      state.show = action.payload;
    },
    setCheck(state, action) {
      state.check = !state.check;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setView(state, action) {
      state.view = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEdit(state, action) {
      state.edit = action.payload;
    },
    setSignup(state, action) {
      state.signup = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
