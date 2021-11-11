import React from 'react'
import products from '../data/products'
export default function HomePage() {
    return (
        <div>
            <div className="row justify-content-center">
                {products.map(product => (
                    <div className="col-md-3 m-5 card p-2">
                        <img src={product.image} className="img-fluid" />
                        <h1>{product.name}</h1>                        
                        <h1>Rating: {product.rating}</h1>
                        <h1>Price: {product.price}</h1>

                    </div>
                ))}
           </div>
        </div>
    )
}
