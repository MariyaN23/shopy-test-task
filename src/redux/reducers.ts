import {combineReducers} from "@reduxjs/toolkit";
import {productsReduces} from "./products";

export const rootReducer = combineReducers({
    products: productsReduces
})