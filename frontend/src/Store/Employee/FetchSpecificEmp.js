import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchSpecificEmpApi = createAsyncThunk("emp/fetchSpecificEmp", async (id) => {
    try {
        const response = await axios.get(`/api/v1/admin/fetch-specific-emp/${id}`, {
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        });
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
})

const initialState = {
    isEmpInfoFetched: false,
    isEmpFetchErrorOccure: false,
    emp: null
}

export const FetchSpecificEmpSlice = createSlice({
    name: "fetchSpecificEmp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchSpecificEmpApi.pending, (state) => {
            state.isEmpInfoFetched = false
            state.isEmpFetchErrorOccure = false
            state.emp = null
        })

        builder.addCase(FetchSpecificEmpApi.rejected, (state) => {
            state.isEmpInfoFetched = false
            state.isEmpFetchErrorOccure = true
            state.emp = null
        })

        builder.addCase(FetchSpecificEmpApi.fulfilled, (state, action) => {
            state.isEmpInfoFetched = true
            state.isEmpFetchErrorOccure = false
            state.emp = action.payload
        })
    }
})