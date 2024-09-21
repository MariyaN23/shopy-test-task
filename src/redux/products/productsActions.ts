import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {ProductType} from "./productsReduces";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await api.getProducts()
    return res.data
})

export const addProduct = createAsyncThunk('products/addProduct', async (param: { product: ProductType }) => {
    const res = await api.addProduct(param.product)
    return res.data
})

/*
export const addTodolist = createAsyncThunk('todoLists/addTodolist', async (param: { title: string }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const response = await todolistsApi.createTodolists(param.title)
        if (response.data.resultCode === 0) {
            dispatch(setAppStatus({status: 'succeeded'}))
            return {todolist: response.data.data.item}
        } else {
            if (response.data.messages.length) {
                dispatch(setAppError({error: response.data.messages[0]}))
            } else {
                dispatch(setAppError({error: 'Some error occurred'}))
            }
            dispatch(setAppStatus({status: 'failed'}))
            return rejectWithValue(null)
        }
    } catch (error: any) {
        handleServerNetworkError(dispatch, error.message)
        return rejectWithValue(null)
    }
})*/
