import React from 'react'
import {useSelector} from 'react-redux'

export default function Navbar() {
    const addToCartState = useSelector(state => state.cartReducer)
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
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
