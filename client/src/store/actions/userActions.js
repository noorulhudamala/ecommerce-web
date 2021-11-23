import axios from 'axios'
import { UserEndpoints } from '../endpoints/userEndpoints'
import { UserActionTypes } from '../reducers/userReducer'


export const registerUser = (user) => dispatch => {
    dispatch({ type: UserActionTypes.USER_REGISTER_REQUEST })
    axios.post(UserEndpoints.POST.registerUser(), user)
        .then((res) => {
            console.log(res)
            dispatch({ type: UserActionTypes.USER_REGISTER_SUCCESS })
            window.location.href = "/"
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UserActionTypes.USER_REGISTER_FAILED })
        })
}

export const loginUser = (user) => dispatch => {
    dispatch({ type: UserActionTypes.USER_LOGIN_REQUEST })
    axios.post(UserEndpoints.POST.loginUser(), user)
        .then((res) => {
            console.log(res)
            dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS })
            localStorage.setItem("currentUser", JSON.stringify(res?.data))
            window.location.href = "/"
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UserActionTypes.USER_LOGIN_FAILED })
        })
}

export const loginOutUser = () => dispatch => {
    dispatch({ type: UserActionTypes.USER_LOGOUT })
    localStorage.removeItem("currentUser")
    localStorage.removeItem("cartItems")
    window.location.href = "/login"
}