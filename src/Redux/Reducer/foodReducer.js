import {GET_FOOD_SUCCESS, GET_FOOD_FAILED} from '../Action/foodAction'

const stateAwal = {
    data: [],
    error: null
}

const foodReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case GET_FOOD_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_FOOD_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default foodReducer;