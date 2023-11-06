import {  configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import tableReducers from './table';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key : "root",
    version : 1,
    storage
}

const reducer = combineReducers({
    table : tableReducers 
})

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer : persistedReducer
});

export default store;