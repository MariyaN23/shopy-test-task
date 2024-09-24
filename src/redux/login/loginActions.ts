import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {setIsAuthorised, setUserId} from "./loginReducer";

export type newLoginType = {
    email: string
    password: string
}

export const loginFormSending = createAsyncThunk('login/loginFormSending',
    async (data: newLoginType, thunkAPI) => {
        const res = await api.login(data.email, data.password)
        thunkAPI.dispatch(setIsAuthorised(true))
        thunkAPI.dispatch(setUserId(res.data.userId))
        return res.data
    })

export const registrationFormSending = createAsyncThunk('login/registrationFormSending',
    async (data: newLoginType, thunkAPI) => {
        await api.registration(data.email, data.password)
    })

export const logout = createAsyncThunk('login/logout',
    async (arg, thunkAPI) => {
        await api.logout()
    })