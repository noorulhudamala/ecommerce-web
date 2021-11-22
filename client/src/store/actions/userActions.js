import axios from 'axios'
import { UserEndpoints } from '../endpoints/userEndpoints'
import { UserActionTypes } from '../reducers/userReducer'


export const registerUser = (user) => dispatch => {
    dispatch({ type: UserActionTypes.USER_REGISTER_REQUEST })
    axios.post(UserEndpoints.POST.registerUser(), user)
        .then((res) => {
            console.log(res)
            dispatch({ type: UserActionTypes.USER_REGISTER_SUCCESS })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UserActionTypes.USER_REGISTER_FAILED })
        })
}