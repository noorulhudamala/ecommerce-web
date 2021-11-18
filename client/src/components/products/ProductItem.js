import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


export default function ProductItem({ product }) {
    return (
        <div className="col-md-3 m-3 card p-2 text-left card" key= {product?._id}>
            <Link to={`/product/${product._id}`}>
                <img src={product.image} className="img-fluid" />
                <h1>{product.name}</h1>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    isHalf
                    value={product.rating}
                    edit={false}
                />,
                <h1>Price: {product.price}</h1>
            </Link>
        </div>

    )
}
