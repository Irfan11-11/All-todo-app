import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reduxSlice";

const reducers = combineReducers({
    todoReducer : reducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store