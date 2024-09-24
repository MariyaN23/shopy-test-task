import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginFormSending, logout, registrationFormSending} from "./loginActions";

type InitialStateType = {
    isAuthorised: boolean
    userId: number | null
}

const initialState: InitialStateType = {
    isAuthorised: false,
    //isAuthorised: true,
    userId: null
}

export const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsAuthorised(state, action: PayloadAction<boolean>) {
            state.isAuthorised = action.payload
        },
        setUserId(state, action: PayloadAction<number>) {
            state.userId = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loginFormSending.fulfilled, (state, action) => {
            state.isAuthorised = true
            state.userId = action.payload.userId
        })
            .addCase(registrationFormSending.fulfilled, (state) => {
                state.isAuthorised = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuthorised = false
            })
    }
})

export const {setIsAuthorised, setUserId} = slice.actions