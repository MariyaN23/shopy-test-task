import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {ProductWithCount, setInitialItems} from "./cartReducer";

export const fetchCartData = createAsyncThunk('cart/fetchCartData',
    async (userId: number, thunkAPI) => {
        const res = await api.getCartData(userId)
        console.log(res.data)
        thunkAPI.dispatch(setInitialItems(res.data))
        return res.data
    })

export const setDataToCart = createAsyncThunk('cart/setDataToCart',
    async (arg: {userId: number, itemsInCart: ProductWithCount[], totalPrice: number}, thunkAPI) => {
        const res = await api.postDataToCart(arg.userId, arg.itemsInCart, arg.totalPrice)
        console.log(res.data)
        //thunkAPI.dispatch(setInitialItems(res.data))
        return res.data
    })