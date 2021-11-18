import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducers";
import { addToCartReducer } from "./reducers/cartReducers";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    addToCartReducer: addToCartReducer
})

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(finalReducer,
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
)


export default store;