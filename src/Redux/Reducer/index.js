import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './apiReducer'
import mockReducer from './mockReducer'

const reduceGabung = combineReducers({
    apiReducer,
    mockReducer
})

export default reduceGabung