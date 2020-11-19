import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./rootReducer"
import logger from "redux-logger"

const middlewares = [logger]

// const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer, applyMiddleware(...middlewares))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store