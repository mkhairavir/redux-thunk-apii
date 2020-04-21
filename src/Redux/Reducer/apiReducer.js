import {GET_DATA_BEGIN,GET_DATA_SUCCESS,GET_DATA_ERROR} from '../Action/apiAction'

const stateAwal = {
    data: [],
    error: null
}

const apiReducer = (state=stateAwal, action) => {
    switch(action.type) {
        case GET_DATA_BEGIN:
            return {
                ...state
            }

        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        
        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
        
    }
}

export default apiReducer;