import React from 'react'

export default function TopFilter() {
    return (
        <div>
            <div className="row">
                <div className="col-m-2">
                    <input type="text" placeholder="Search.." />
                </div>
                <div className="col-m-2">
                    <select>
                        <option value="">Popular</option>
                        <option value="">High to Low</option>
                        <option value="">Low to High</option>
                    </select>
                </div>
                <div className="col-m-2">
                    <select>
                        <option value="">All</option>
                        <option value="">Electronics</option>
                        <option value="">Fashion</option>
                        <option value="">Mobile</option>
                        <option value="">Games</option>
                    </select>
                </div>
                <div className="col-m-2">
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}
