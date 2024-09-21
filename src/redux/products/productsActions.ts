import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await api.getProducts()
    return res.data
})