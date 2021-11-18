import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDescriptionPage from './pages/ProductDescriptionPage'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductDescriptionPage/>}/>
            </Routes>
        </Router>
    )
}
