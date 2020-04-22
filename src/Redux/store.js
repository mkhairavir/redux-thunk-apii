import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './Reducer/apiReducer'
import reduceGabung from './Reducer'


export default createStore(reduceGabung, applyMiddleware(thunk))