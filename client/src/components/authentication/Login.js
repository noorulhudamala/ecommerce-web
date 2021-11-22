import React, { useState } from 'react'

export default function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const onChangeValueHandler = (e) => {
        setUserDetails(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const onLoginHandler = () => {
        
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
                    <div className="div">
                        <h2 className="text-center m-2">Login</h2>
                        <form onSubmit={onLoginHandler}>
                            <input type="text" name="email" className="form-control" value={userDetails?.email} onChange={(onChangeValueHandler)} placeholder="Email" />
                            <input type="text" name="password" className="form-control" value={userDetails?.password} onChange={(onChangeValueHandler)} placeholder="Password" />
                            <button type="submit" className="btn mt-3">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
