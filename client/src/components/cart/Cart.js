import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, deletFromCart} from '../../store/actions/cartActions'

export default function Cart() {
    const dispatch = useDispatch();
    const addToCartState = useSelector(state => state.cartReducer)
    const { cartItems } = addToCartState;

    const onProductQuantityChange = (e, product) => {
        dispatch(addToCart(product, e.target.value))
    }
    const onItemDeleteHandler = (productId) => {
        dispatch(deletFromCart(productId))
    }
    var subTotal = cartItems?.length && cartItems.reduce((sum, item) => sum+ (item?.quantity * item?.price), 0)
    return (
        <div>
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8 card text-center">
                    <h1 className="text-center m-5">My Cart</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems?.length ? cartItems.map(cartItem =>
                                <tr>
                                    <th>{cartItem.name}</th>
                                    <th>{cartItem.price}</th>
                                    <th><select value={cartItem.quantity} onChange={(e)=> onProductQuantityChange(e, cartItem)}>
                                        {[...Array(cartItem.countInStock)].map((_, i)=>(
                                        <option value={i+1}>{i+1} </option>
                                    ))}</select></th>
                                    <th>{cartItem.quantity * cartItem.price}</th>
                                    <th><span onClick={() => onItemDeleteHandler(cartItem._id)}><i class="far fa-trash-alt"></i></span></th>
                                </tr>
                            ) : <tr>
                                    <div className="text-center">
                                    No Item added
                                        </div>
                            
                            
                        </tr>}
                        </tbody>
                    </table>

                    <hr />
                    <h2 className="text-center">Sub Total: Rs: {subTotal}</h2>
                    <hr/>
                    <div className="text-center p-3">
                    <button className="btn"> Pay Now</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
