import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const RegisterApi = createAsyncThunk("auth/Register", async (data) => {
    try {
        const response = await axios.post("/api/v1/user/register", data)
        return response.data
    } catch (error) {
        throw error;
    }
})

const initialState = {
    isReister: false,
    isError: false,
    userInfo: null
}

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RegisterApi.fulfilled, (state, action) => {
            state.isError = false
            state.isReister = true
            state.userInfo = action.payload
        })
        builder.addCase(RegisterApi.rejected, (state) => {
            state.isError = true
            state.isReister = false
            state.userInfo = null
        })
        builder.addCase(RegisterApi.pending, (state, action) => {
            state.isError = false
            state.isReister = false
            state.userInfo = null
        })
    }
})