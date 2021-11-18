import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function Navbar() {
    const dispatch = useDispatch();
    const addToCartState = useSelector(state => state.addToCartReducer)
    const { cartItems } = addToCartState
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Fabric4Us</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
