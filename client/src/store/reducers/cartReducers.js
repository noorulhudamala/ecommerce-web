export const cartActionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_FROM_CART: "DELETE_FROM_CART"
}
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            let isItemAlreadyExist = false
            const uniqueCartItems = state?.cartItems?.map((cartItem) => {
                if (cartItem._id === action.payload._id) {
                    isItemAlreadyExist = true
                    cartItem = action.payload
                }
                return cartItem
            })

            return {
                ...state,
                cartItems: !isItemAlreadyExist ? [...uniqueCartItems, action.payload] : [...uniqueCartItems]
            }
        case cartActionTypes.DELETE_FROM_CART:

            const items = state?.cartItems?.filter((cartItem) => cartItem._id !== action.payload)
            return {
                ...state,
                cartItems: [...items]
            }
        default: return state
    }
}

