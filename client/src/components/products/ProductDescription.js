import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/actions/productActions';


export default function ProductDescription() {
    const params = useParams();
    const dispatch = useDispatch();
    const getProductByIdState = useSelector(state => state.getProductByIdReducer);
    const { loading, product, error } = getProductByIdState
    useEffect(() => {
        dispatch(getProductById(params?.id))
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : error ? <h1>Something went wrong</h1> :
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-2 m-2" >
                            <h1>{product.name}</h1>
                            <img src={product.image} className="img-fluid m-3 bigimg" />
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-left">
                        <div className="m-2">
                            <h1>Price: {product.price}</h1>
                            <hr />
                            {
                                product.countInStock ?
                                    <>
                                        <h1>Select Quantity</h1>

                                        <select>
                                            {[...Array(product.countInStock).keys()].map((_, idx) => <option value={idx + 1}>{idx + 1}</option>)}
                                        </select>
                                        <hr />
                                        <button className="btn btn-dark"> ADD TO CART</button>
                                    </>
                                    : <h1>Out of Stock</h1>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
