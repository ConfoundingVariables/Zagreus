import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer.js";

export const middlewares = [thunk];

const store = configureStore(rootReducer, applyMiddleware(...middlewares));

export default store;
