import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { slice } from "./slice";

// const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: slice.reducer,
})