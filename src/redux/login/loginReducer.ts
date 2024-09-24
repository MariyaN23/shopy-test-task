import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginFormSending, logout, registrationFormSending} from "./loginActions";

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
            .addCase(registrationFormSending.fulfilled, (state) => {
                state.isAuthorised = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuthorised = false
            })
    }
})

export const {setIsAuthorised} = slice.actions