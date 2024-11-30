import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const EmpRegApi = createAsyncThunk("emp/registration", async (data) => {
    try {
        const response = await axios.post("/api/v1/admin/emp-registration", data,{
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
})

const initialState = {
    isEmpReg: false,
    isError: false,
    empdata: null
}

export const EmpRegSlice = createSlice({
    name: "EmpRegistration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EmpRegApi.rejected, (state) => {
            state.isEmpReg = false
            state.isError = true
            state.empdata = null
        })
        builder.addCase(EmpRegApi.pending, (state) => {
            state.isEmpReg = false
            state.isError = false
            state.empdata = null
        })
        builder.addCase(EmpRegApi.fulfilled, (state, action) => {
            state.isEmpReg = true
            state.isError = false
            state.empdata = action.payload
        })
    }
})