import { createStore } from "redux";
import { RootReducer } from "./reducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
