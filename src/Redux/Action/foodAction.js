import axios from 'axios'

export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS';
export const GET_FOOD_FAILED = 'GET_FOOD_FAILED';

export const getFoodSuccess = (result) => {
    return {
        type : GET_FOOD_SUCCESS,
        result
    }
}

export const getFoodFailed = (error) => {
    return {
        type : GET_FOOD_FAILED,
        error
    }
}

export const getDataFood = () => {
    return function(dispatch) {
        axios.get('https://5ea0385811b078001679d857.mockapi.io/foodapi')
        .then(result => dispatch(getFoodSuccess(result.data)))
        .catch(error => dispatch(getFoodFailed(error.message)))
    }

    
}

export const postDataFood = (obj) => {
    return function(dispatch){
        axios.post('https://5ea0385811b078001679d857.mockapi.io/foodapi', obj)
        .then(() => dispatch(getDataFood()))
        .catch(error => dispatch(getFoodFailed(error.message)))
    }
}

export const deleteDataFood = (id) => {
    return function(dispatch){
        axios.delete(`https://5ea0385811b078001679d857.mockapi.io/foodapi/${id}`)
        .then(() => dispatch(getDataFood()))
        .catch((error) => dispatch(getFoodFailed(error.message)))
    }
}

export const editDataFood = (id,data) => {
    return function(dispatch){
        axios.put(`https://5ea0385811b078001679d857.mockapi.io/foodapi/${id}`, data)
        .then(() => dispatch(getDataFood()))
        .catch((error) => dispatch(getFoodFailed(error.message)))
    }
}
