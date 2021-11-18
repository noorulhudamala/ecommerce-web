export const productActionTypes = {
    GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
    GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILED: "GET_PRODUCTS_FAILED",
    GET_PRODUCTBYID_REQUEST:"GET_PRODUCTBYID_REQUEST",
    GET_PRODUCTBYID_FAILED: "GET_PRODUCTBYID_FAILED",
    GET_PRODUCTBYID_SUCCESS: "GET_PRODUCTBYID_SUCCESS",

}
export const initialState = {
    loading: false,
    products: [],
    product: {},
    error: {}
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

export const getProductByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCTBYID_REQUEST:
            return {
                loading: true
            }
        case productActionTypes.GET_PRODUCTBYID_SUCCESS:
            return {
                product: action.payload,
                loading: false
            }
        case productActionTypes.GET_PRODUCTBYID_FAILED:
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}