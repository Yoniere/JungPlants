import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { plantReducer } from './reducers/plantReducer'

const rootReducer = combineReducers({
    plantModule: plantReducer,
    // userModule: userReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

window.myStore = store