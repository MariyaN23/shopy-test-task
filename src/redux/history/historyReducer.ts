import {createSlice} from "@reduxjs/toolkit";

export type ProductInHistoryType = {
    productId: number
    name: string
    price: number
    dateOfBuy: string
    image: string
}

type InitialStateType = {
    itemsInHistory: ProductInHistoryType[]
}

const initialState: InitialStateType = {
    itemsInHistory: []
}

export const slice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setItemsToHistory: (state, action) => {
            state.itemsInHistory = action.payload.itemsInHistory
        },
    },
})

export const {setItemsToHistory} = slice.actions