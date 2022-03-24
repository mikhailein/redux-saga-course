import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)