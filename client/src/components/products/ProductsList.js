import React from 'react'
import ProductItem from './ProductItem'
import products from '../../data/products'

export default function productsList() {
    return (
        <>
            {products.map(product => (
                <ProductItem product={product} />
            ))}
        </>
    )
}
