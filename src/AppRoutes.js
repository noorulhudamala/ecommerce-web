import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDescription from './components/products/ProductDescription'


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductDescription/>}/>
            </Routes>
        </Router>
    )
}
