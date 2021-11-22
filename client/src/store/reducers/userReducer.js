export const UserActionTypes = {
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAILED: "USER_REGISTER_FAILED"
}

const initialState = {

}
export const registerUserReducer = (state = initialState, action) => {

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
                error: true
            }
        default:
            return state
    }
}