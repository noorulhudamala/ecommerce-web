import axios from "axios"

import { productEndpoints } from "../endpoints/productsEndpoints"
import { productActionTypes } from "../reducers/productReducers"

export const getAllProducts = () => dispatch => {
    dispatch({ type: productActionTypes.GET_PRODUCTS_REQUEST })

    axios.get(productEndpoints.GET.getAllProducts())
        .then(res => {
            dispatch({ type: productActionTypes.GET_PRODUCTS_SUCCESS, payload: res?.data?.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: productActionTypes.GET_PRODUCTS_FAILED, payload: err })
        })
}

export const getProductById = (productId) => dispatch => {
    dispatch({ type: productActionTypes.GET_PRODUCTBYID_REQUEST })

    axios.post(productEndpoints.GET.getProductById(), {productId})
        .then(res => {
            dispatch({ type: productActionTypes.GET_PRODUCTBYID_SUCCESS, payload: res?.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: productActionTypes.GET_PRODUCTBYID_FAILED, payload: err })
        })
}