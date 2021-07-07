import { createStore } from "redux";
import { RootReducer } from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(RootReducer, applyMiddleware(thunk));
