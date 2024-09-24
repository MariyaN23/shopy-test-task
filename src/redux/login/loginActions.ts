import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export type newLoginType = {
    email: string
    password: string
}

export const loginFormSending = createAsyncThunk('login/loginFormSending',
    async (data: newLoginType) => {
        await api.login(data.email, data.password)
    })

export const registrationFormSending = createAsyncThunk('login/registrationFormSending',
    async (data: newLoginType) => {
        await api.registration(data.email, data.password)
    })

export const logout = createAsyncThunk('login/logout',
    async (arg, {dispatch, rejectWithValue}) => {
        await api.logout()
    })