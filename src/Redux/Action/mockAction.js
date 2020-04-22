import axios from 'axios'

export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAILED = "GET_FAILED"

export function getDataSuccess(result) {
    return {
        type: GET_SUCCESS,
        result
    }
}

export function getDataFailed(error) {
    return {
        type: GET_FAILED,
        error
    }
}

export function getDataGame() {
    return function(dispatch){
        axios.get('https://5ea0385811b078001679d857.mockapi.io/game')
        // .then((result) => {console.log("result action",result)})
        .then((result) => dispatch(getDataSuccess(result.data)))
        .catch(error => dispatch(getDataFailed(error.message)))
    }
}

export function postDataGame(postObjectGame) {
    return function(dispatch){
        axios.post('https://5ea0385811b078001679d857.mockapi.io/game', postObjectGame)
        .then(() => dispatch(getDataSuccess()))
        .then(error => dispatch(getDataFailed(error.message)))
    }
}