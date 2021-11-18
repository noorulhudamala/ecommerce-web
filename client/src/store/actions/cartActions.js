import { cartActionTypes } from "../reducers/cartReducers";

export const addToCart = (product, quantity) => dispatch => {
    const { _id, name, price, countInStock } = product;

    const cartItem = {
        _id,
        name,
        price,
        countInStock,
        quantity
    }
    dispatch({type: cartActionTypes.ADD_TO_CART, payload: cartItem})
}