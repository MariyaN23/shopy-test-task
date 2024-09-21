import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "./productsActions";

export type ProductType = {
    id: number
    name: string
    price: number
    image?: string
    date: string
    status: 'On sale' | 'Sold'
}

const initialState: ProductType[] = []

export const slice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

//export const {} = slice.actions