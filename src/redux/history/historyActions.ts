import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {setItemsToHistory} from "./historyReducer";

export const getHistory = createAsyncThunk('history/getHistory',
    async (userId: number, thunkAPI) => {
        const res = await api.getHistory(userId)
        thunkAPI.dispatch(setItemsToHistory(res.data))
        return res.data
    })

export const addDataToHistory = createAsyncThunk('history/addDataToHistory',
    async (userId: number) => {
        const res = await api.addDataToHistory(userId)
        return res.data
    })