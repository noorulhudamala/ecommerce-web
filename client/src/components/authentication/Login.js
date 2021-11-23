import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../store/actions/userActions'
import Error from '../shared/Error'
import Loader from '../shared/Loader'

export default function Login() {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const loginState = useSelector(state=> state.loginUserReducer)
    const { error, loading } = loginState;
    const onChangeValueHandler = (e) => {
        setUserDetails(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const onLoginHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(userDetails))
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-2 card p-3" style={{ marginTop: "150px" }}>
                    <div className="div">
                        <h2 className="text-center m-2">Login</h2>
                        {error && <Error error={error} />}
                        {loading && <Loader/>}
                        <form onSubmit={onLoginHandler}>
                            <input type="text" name="email" className="form-control" value={userDetails?.email} required onChange={(onChangeValueHandler)} placeholder="Email" />
                            <input type="text" name="password" className="form-control" value={userDetails?.password} required onChange={(onChangeValueHandler)} placeholder="Password" />
                            <button type="submit" className="btn mt-3">LOGIN</button>
                            <div className="mt-2">Click here to <a href="/register">Register</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
