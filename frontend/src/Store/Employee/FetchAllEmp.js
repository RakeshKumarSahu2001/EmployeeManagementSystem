import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllEmpApi = createAsyncThunk("emp/fetchAllEmp", async () => {
    try {
        const response = await axios.get("/api/v1/admin/fetch-all-emp",{
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        });
        return response.data.data
    } catch (error) {
        console.error(error)
    }
})

const initialState = {
    isFetched: false,
    isError: false,
    allEmp: null
}


export const fetchAllEmpSlice = createSlice({
    name: "fetchAllEmployee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllEmpApi.pending, (state) => {
            state.isFetched = false
            state.isError = false
            state.allEmp = null
        })
        builder.addCase(fetchAllEmpApi.fulfilled, (state,action) => {
            state.isFetched = true
            state.isError = false
            state.allEmp = action.payload
        })
        builder.addCase(fetchAllEmpApi.rejected, (state) => {
            state.isFetched = false
            state.isError = true
            state.allEmp = null
        })
    }
})