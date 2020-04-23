import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reduceGabung from './Reducer'


export default createStore(reduceGabung, applyMiddleware(thunk, logger))