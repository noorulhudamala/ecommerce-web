import React, { useState } from 'react'

import ProductItem from './ProductItem'

export default function productsList({products}) {
    
    
    return (
        <>
            {products.length ? products?.map(product => (
                <ProductItem product={product} />
            )) : null}
        </>
    )
}
