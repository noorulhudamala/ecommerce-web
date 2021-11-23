import React from 'react'
import ProductsList from '../components/products/ProductsList'
import TopFilter from '../components/TopFilter'

export default function HomePage() {

    return (
        <div>
            <div className="row justify-content-center">
                <TopFilter />
                <ProductsList />
            </div>
        </div>
    )
}
