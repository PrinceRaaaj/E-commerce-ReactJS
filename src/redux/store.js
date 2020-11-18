import { createStore, applyMiddleware } from "redux"
import reducer from "./rootReducer"
import logger from "redux-logger"

// const store = createStore(reducer, applyMiddleware(logger))

const middlewares = [logger]
const store = createStore(reducer, applyMiddleware(...middlewares))

export default store