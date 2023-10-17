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
  reset: false,
  allusers: [],
  nav:[],
  del: '',
  otp: [],
  count : 0,
  checkin:[],
  checktime:''
  
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
    setallUsers(state, action) {
      state.allusers = action.payload;
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
    setNav(state, action) {
      state.nav = action.payload;
    },
    setDel(state, action) {
      state.del = action.payload;
    },
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setReset(state, action) {
      state.reset = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
    setCheckin(state, action) {
      state.checkin = action.payload;
    },
    setChecktime(state, action) {
      state.checktime = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
