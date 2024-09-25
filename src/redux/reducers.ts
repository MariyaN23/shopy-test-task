import {combineReducers} from "@reduxjs/toolkit";
import {productsReduces} from "./products";
import {loginReducer} from "./login";
import {cartReducer} from "./cart";

export const rootReducer = combineReducers({
    products: productsReduces,
    login: loginReducer,
    cart: cartReducer,
})