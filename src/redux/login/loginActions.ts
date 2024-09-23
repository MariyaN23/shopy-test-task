import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export type newLoginType = {
    email: string
    password: string
}

export const loginFormSending = createAsyncThunk('login/loginFormSending',
    async (data: newLoginType) => {
        const response = await api.login(data.email, data.password)
        if (response.status === 200) {
            //window.location.href = path.userProducts
        }
    })