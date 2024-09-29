import {combineReducers} from "@reduxjs/toolkit";
import {productsReduces} from "./products";
import {loginReducer} from "./login";
import {cartReducer} from "./cart";
import {historyReducer} from "./history";

export const rootReducer = combineReducers({
    products: productsReduces,
    login: loginReducer,
    cart: cartReducer,
    history: historyReducer,
})