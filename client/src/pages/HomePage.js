import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProductsList from '../components/products/ProductsList'


export default function HomePage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get("/api/products/getAllProducts")
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="row justify-content-center">
                <ProductsList products={products}/>
           </div>
        </div>
    )
}
