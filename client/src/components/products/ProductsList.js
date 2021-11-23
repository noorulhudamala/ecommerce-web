import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { getAllProducts } from '../../store/actions/productActions'
import Loader from '../shared/Loader'
import Error from '../shared/Error'

const ProductsList = () => {
    const dispatch = useDispatch();
    const getAllProductsState = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getAllProductsState;

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        dispatch(getAllProducts())
    }

    return (
        <>
            {
                loading ? <Loader /> : error ? <Error error={"Something went wrong..."}/> :
                    products.length ? products?.map(product => (
                        <ProductItem product={product} />
                    )) : null
            }

        </>
    )
}

export default ProductsList;
