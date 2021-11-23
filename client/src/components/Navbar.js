import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginOutUser } from '../store/actions/userActions';

export default function Navbar() {
    const dispatch = useDispatch()
    const addToCartState = useSelector(state => state.cartReducer)
    const { cartItems } = addToCartState;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Fabric4Us</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav ml-auto">
                        {currentUser ?
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser?.name}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Orders</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={()=> dispatch(loginOutUser())}>Logout</a></li>
                                </ul>
                            </div> :
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        }
                            <li className="nav-item">
                                <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}
