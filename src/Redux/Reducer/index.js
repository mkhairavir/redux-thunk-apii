import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './apiReducer'
import mockReducer from './mockReducer'
import foodReducer from './foodReducer'

const reduceGabung = combineReducers({
    apiReducer,
    mockReducer,
    foodReducer
})

export default reduceGabung