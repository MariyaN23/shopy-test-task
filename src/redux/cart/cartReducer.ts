import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../products/productsReduces";

export type ProductWithCount = ProductType & { count: number };

type InitialStateType = {
    itemsInCart: ProductWithCount[]
    totalPrice: number
}

const initialState: InitialStateType = {
    itemsInCart: [],
    totalPrice: 0
}

export const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push({...action.payload, count: 1})
            state.totalPrice = state.itemsInCart.reduce((total, item) => total + item.price*item.count, 0)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((item)=> item.productId !== action.payload)
            state.totalPrice = state.itemsInCart.reduce((total, item) => total + item.price*item.count, 0)
        },
        increaseItemsCount: (state, action) => {
            state.itemsInCart = state.itemsInCart.map((item)=> item.productId === action.payload ? {...item, count: item.count+1} : item)
            state.totalPrice = state.itemsInCart.reduce((total, item) => total + item.price*item.count, 0)
        },
        decreaseItemsCount: (state, action) => {
            state.itemsInCart = state.itemsInCart.map((item)=> item.productId === action.payload ?{...item, count: item.count-1} : item).filter(item=>item.count!==0)
            state.totalPrice = state.itemsInCart.reduce((total, item) => total + item.price*item.count, 0)
        },
        setInitialItems: (state, action) => {
            state.itemsInCart = action.payload.itemsInCart
            state.totalPrice = action.payload.totalPrice
        },
    },
})

export const {setItemInCart, deleteItemFromCart, increaseItemsCount, decreaseItemsCount, setInitialItems} = slice.actions