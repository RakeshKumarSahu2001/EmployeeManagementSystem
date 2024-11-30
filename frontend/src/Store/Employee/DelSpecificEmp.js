import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const DelSpecificEmpApi = createAsyncThunk("emp/delSpecificEmp", async (id) => {
    try {
        const response = await axios.delete(`/api/v1/admin/del-specific-emp/${id}`,{
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        });
        return response.data.data;
    } catch (error) {
        console.error(error)
    }
})

const initialState = {
    isDeleted: false,
    isError: false,
    deleteInfo: null
}

export const delSpecificEmpSlice = createSlice({
    name: "deleteSpecificEmployee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DelSpecificEmpApi.pending, (state) => {
            state.isDeleted = false
            state.isError = false
            state.deleteInfo = null
        })
        builder.addCase(DelSpecificEmpApi.fulfilled, (state, action) => {
            state.isDeleted = true
            state.isError = false
            state.deleteInfo = action.payload
        })
        builder.addCase(DelSpecificEmpApi.rejected, (state) => {
            state.isDeleted = false
            state.isError = true
            state.deleteInfo = null
        })
    }
})