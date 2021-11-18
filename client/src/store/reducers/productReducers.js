import { initialState } from "../store"

export const productActionTypes = {
    GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
    GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILED: "GET_PRODUCTS_FAILED"
}

export const getAllProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true
            }
        case productActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false
            }
        case productActionTypes.GET_PRODUCTS_FAILED:
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}