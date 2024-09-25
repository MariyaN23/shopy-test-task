import {createSlice} from "@reduxjs/toolkit";
import {deleteProduct, getAllUsersProducts, getProducts} from "./productsActions";

/*export type ProductType = {
    id?: number
    name: string
    price: number
    image?: string
    date?: string
    status?: 'On sale' | 'Sold'
}*/

export type ProductType = {
    productId: number
    name: string
    price: number
    date: string
    status: 'On sale' | 'Sold'
    image: string
    userId: number
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
            return { ...state, products: action.payload.products, total: action.payload.total }
        })
            .addCase(getAllUsersProducts.fulfilled, (state, action) => {
                return { ...state, allUsersProducts: action.payload }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                const deletedProductId = action.meta.arg
                state.allUsersProducts = state.allUsersProducts.filter(product => product.productId !== deletedProductId)
            })
    }
})

//export const {} = slice.actions