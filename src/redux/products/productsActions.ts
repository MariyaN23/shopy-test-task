import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export type newProductType = {
    name: string
    price: number
    image: string
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await api.getProducts()
    return res.data
})

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct: newProductType ) => {
    const res = await api.addProduct(newProduct)
    return res.data
})
