export const UserActionTypes = {
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAILED: "USER_REGISTER_FAILED",
    USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAILED: "USER_LOGIN_FAILED",
    USER_LOGOUT: "USER_LOGOUT"
}

export const registerUserReducer = (state = {}, action) => {

    switch (action.type) {
        case UserActionTypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case UserActionTypes.USER_REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                error: "User already exist"
            }
        default:
            return state
    }
}
const initialState = {
    currentUser : localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
}
export const loginUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case UserActionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case UserActionTypes.USER_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: "Invalid Credentials"
            }
        case UserActionTypes.USER_LOGOUT:
            return {
                ...state
            }
        default:
            return state
    }
}