import {GET_SUCCESS, GET_FAILED} from "../Action/mockAction"

const stateAwal = {
    data: [],
    error: null,
}

const mockReducer = (state = stateAwal, action) => {
    switch (action.type) {
        case GET_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default mockReducer;