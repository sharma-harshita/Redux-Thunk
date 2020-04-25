import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import Thunk from "redux-thunk"

export default function configureStore(initialState){
    const composeEnhancers = compose
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(Thunk)))
}