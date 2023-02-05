import axios from "axios"
const url = process.env.REACT_APP_HOST

const getAllUserRequest = () => { return { type: 'GET_ALL_USER_REQUEST' } }
const getAllUserSuccess = (data) => { return { type: 'GET_ALL_USER_SUCCESS', payload: data } }
const getAllUserFail = (err) => { return { type: 'GET_ALL_USER_FAIL', payload: err } }

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch(getAllUserRequest())
        return axios.get(`${url}/api/users/`)
            .then((res) => {
                dispatch(getAllUserSuccess(res.data))
            }).catch((err) => {
                dispatch(getAllUserFail(err.response.data))
            })
    }
}
