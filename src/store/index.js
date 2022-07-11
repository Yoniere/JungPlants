import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    plantModule: plantReduce,
    userModule: userReducer
})

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

window.myStore = store