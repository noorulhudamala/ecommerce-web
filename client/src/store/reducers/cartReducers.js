export const cartActionTypes = {
    ADD_TO_CART: "ADD_TO_CART"
}
const initialState = {
    cartItems: []
}

export const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default: return state
    }
}