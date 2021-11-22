import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { getAllProducts } from '../../store/actions/productActions'

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
                loading ? <h1>Loading...</h1> : error ? <h1>Something wentwrong...</h1> :
                    products.length ? products?.map(product => (
                        <ProductItem product={product} />
                    )) : null
            }

        </>
    )
}

export default ProductsList;
