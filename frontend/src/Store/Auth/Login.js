import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const LoginApi = createAsyncThunk("user/Login", async (data) => {
    try {
        const response = await axios.post("/api/v1/user/login", data);
        return response.data
    } catch (error) {
        throw error;
    }
})

const initialState = {
    isUserExist: false,
    isError: false,
    userInfo: null
}


export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        clearLoginUserInfoFromLocalStorage:()=>{
            localStorage.clear()
       }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginApi.rejected, (state) => {
            state.isUserExist = false
            state.isError = true
            state.userInfo = null
        })
        builder.addCase(LoginApi.fulfilled, (state, action) => {
            state.isUserExist = true
            state.isError = false
            state.userInfo = action.payload
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("role",action.payload.data.role);
            localStorage.setItem("username",action.payload.data.username);

        })
        builder.addCase(LoginApi.pending, (state, action) => {
            state.isUserExist = false
            state.isError = false
            state.userInfo = null
        })
    }
})