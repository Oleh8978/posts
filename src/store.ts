import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootSaga } from "./controllers";

const sagaMiddleWare = createSagaMiddleware();
let middleWares = applyMiddleware(sagaMiddleWare);

if (process.env.NODE_ENV === 'development') {
    middleWares = composeWithDevTools(
        applyMiddleware(sagaMiddleWare)
    )
}

const store = createStore(rootReducer(), middleWares);

sagaMiddleWare.run(rootSaga);

export default store;

