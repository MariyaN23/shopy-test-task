import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginFormSending} from "./loginActions";

const initialState = {
    isAuthorised: true
}

export const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsAuthorised(state, action: PayloadAction<{ value: boolean }>) {
            state.isAuthorised = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(loginFormSending.fulfilled, (state) => {
            state.isAuthorised = true
        })
    }
})

export const {setIsAuthorised} = slice.actions