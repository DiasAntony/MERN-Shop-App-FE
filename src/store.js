import { createStore, combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";


const reducer=combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
})

// when application loads its check if cart exist on localstorage it take to redux redu store and update state
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
// why set cart now because when application loads the user need to whatever we added or order item we planned thats why 
// sometimes user order some product after long days later thats while we need to store or save those products.that why we use localstorage and initial it!!
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;