import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../../store/actions/userActions'
import { UserActionTypes } from '../../store/reducers/userReducer'


export default function Register() {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeValueHandler = (e) => {
        setUserDetails(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const registerUserHandler = (e) => {
        e.preventDefault();

        if (userDetails?.password === userDetails?.confirmPassword) {
            // dispatch(registerUser())
        }
        else {
            
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 card p-3" style={{ margin: "150px" }}>
                    <div className="div">
                        <h2 className="text-center">Register</h2>
                        <form onSubmit={registerUserHandler}>
                            <input type="text" name="name" className="form-control" required value={userDetails?.name} onChange={(onChangeValueHandler)} placeholder="Username" />
                            <input type="text" name="email" className="form-control" required value={userDetails?.email} onChange={(onChangeValueHandler)} placeholder="Email" />
                            <input type="text" name="password" className="form-control" required value={userDetails?.password} onChange={(onChangeValueHandler)} placeholder="Password" />
                            <input type="text" name="confirmPassword" className="form-control" required value={userDetails?.confirmPassword} onChange={(onChangeValueHandler)} placeholder="Confirm Password" />
                            <button type="submit" className="btn mt-3">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
