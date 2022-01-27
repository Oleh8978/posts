import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootSaga } from "./controllers";

// history api 
import history from "./historyAPI";

const sagaMiddleWare = createSagaMiddleware();
let middleWares = applyMiddleware(routerMiddleware(history), sagaMiddleWare);

if (process.env.NODE_ENV === 'development') {
    middleWares = composeWithDevTools(
        applyMiddleware(sagaMiddleWare)
    )
}

const store = createStore(rootReducer(), middleWares);

sagaMiddleWare.run(rootSaga);

export default store;

