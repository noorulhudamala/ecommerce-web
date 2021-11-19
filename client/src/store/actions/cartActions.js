import { cartActionTypes } from "../reducers/cartReducers";

export const addToCart = (product, quantity) => (dispatch, getState) => {
    const { _id, name, price, countInStock } = product;

    const cartItem = {
        _id,
        name,
        price,
        countInStock,
        quantity
    }
    dispatch({ type: cartActionTypes.ADD_TO_CART, payload: cartItem })
    localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
}

export const deletFromCart = (productId) => (dispatch, getState) => {

    dispatch({ type: cartActionTypes.DELETE_FROM_CART, payload: productId })
    localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
}