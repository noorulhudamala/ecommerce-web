import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer
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