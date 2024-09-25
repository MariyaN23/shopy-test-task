import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export type newProductType = {
    name: string
    price: number
    userId: number
    image: string
}

export const getProducts = createAsyncThunk('products/getProducts',async (arg: {min: string, max: string, name: string, page: number, order: 'asc' | 'desc'}) => {
    const res = await api.getProducts(arg.min, arg.max, arg.name, arg.page, arg.order)
    return res.data
})

export const getAllUsersProducts = createAsyncThunk('products/getAllUsersProducts',async (arg: {userId: number}, thunkAPI) => {
    const res = await api.getAllUsersProducts(arg.userId)
    return res.data
})

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct: newProductType ) => {
    const res = await api.addProduct(newProduct)
    return res.data
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: number ) => {
  await api.deleteUserProduct(productId)
})