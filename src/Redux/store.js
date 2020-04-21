import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './Reducer/apiReducer'


export default createStore(apiReducer, applyMiddleware(thunk))