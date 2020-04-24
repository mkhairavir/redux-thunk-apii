import axios from 'axios'

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

export const getDataBegin = () => {
    return {
        type: GET_DATA_BEGIN
    }
}

export const getDataSuccess = (result) => {
    return {
        type: GET_DATA_SUCCESS,
            result
    }
}

export const getDataError = (error) => {
    return {
        type: GET_DATA_ERROR,
            error
    }
}

export const getListApi = () => {
    return function(dispatch) {
        dispatch(getDataBegin())

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(result => {dispatch(getDataSuccess(result.data))})
        .catch(error => {dispatch(getDataError(error))})

    }
}

export const getListApiByOne = (id) => {
    return function(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
}