import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../../store/actions/userActions'
import { UserActionTypes } from '../../store/reducers/userReducer'
import Error from '../shared/Error'
import Loader from '../shared/Loader'


export default function Register() {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const registerState = useSelector(state=> state.registerUserReducer)
    const { error, loading } = registerState;

    const onChangeValueHandler = (e) => {
        setUserDetails(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const registerUserHandler = (e) => {
        e.preventDefault();

        if (userDetails?.password === userDetails?.confirmPassword) {
            let user = {
                name: userDetails?.name,
                email: userDetails?.email,
                password: userDetails?.password
            }
            dispatch(registerUser(user))

        }
        else {
            
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-2 card p-3" style={{ margin: "150px" }}>
                    <div className="div">
                        <h2 className="text-center">Register</h2>
                        {error && <Error error={error} />}
                        {loading && <Loader/>}
                        <form onSubmit={registerUserHandler}>
                            <input type="text" name="name" className="form-control" required value={userDetails?.name} onChange={(onChangeValueHandler)} placeholder="Username" />
                            <input type="text" name="email" className="form-control" required value={userDetails?.email} onChange={(onChangeValueHandler)} placeholder="Email" />
                            <input type="text" name="password" className="form-control" required value={userDetails?.password} onChange={(onChangeValueHandler)} placeholder="Password" />
                            <input type="text" name="confirmPassword" className="form-control" required value={userDetails?.confirmPassword} onChange={(onChangeValueHandler)} placeholder="Confirm Password" />
                            <button type="submit" className="btn mt-3">REGISTER</button>
                            
                            <div className="mt-2">Already have an account? <a href="/login">Login</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
