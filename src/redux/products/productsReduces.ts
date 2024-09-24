import {createSlice} from "@reduxjs/toolkit";
import {getAllUsersProducts, getProducts} from "./productsActions";

export type ProductType = {
    id?: number
    name: string
    price: number
    image?: string
    date?: string
    status?: 'On sale' | 'Sold'
}

type InitialStateType = {
    products: ProductType[]
    allUsersProducts: ProductType[]
    total: number
}

const initialState: InitialStateType = {
    products: [],
    allUsersProducts: [],
    total: 0
}

export const slice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            //return action.payload
            return { ...state, products: action.payload.products, total: action.payload.total }
        })
            .addCase(getAllUsersProducts.fulfilled, (state, action) => {
                //state.unshift(action.payload)
                return { ...state, allUsersProducts: action.payload }
            })
    }
})

//export const {} = slice.actions