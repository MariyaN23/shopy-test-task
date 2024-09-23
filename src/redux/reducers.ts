import {combineReducers} from "@reduxjs/toolkit";
import {productsReduces} from "./products";
import {loginReducer} from "./login";

export const rootReducer = combineReducers({
    products: productsReduces,
    login: loginReducer
})