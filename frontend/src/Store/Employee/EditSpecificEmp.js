import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const EditSpecificEmpApi=createAsyncThunk("emp/editSpecificEmp",async({id,data})=>{
    try {
        const response=await axios.put(`/api/v1/admin/edit-specific-emp/${id}`,data,{
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
})

const initialState={
    isUpdated:false,
    isError:false,
    updatedInfo:null
}

export const EditSpecificEmpSlice=createSlice({
    name:"editSpecificEmployee",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(EditSpecificEmpApi.pending,(state)=>{
            state.isUpdated=false
            state.isError=false
            state.updatedInfo=null
        })
        builder.addCase(EditSpecificEmpApi.fulfilled,(state,action)=>{
            state.isUpdated=true
            state.isError=false
            state.updatedInfo=action.payload
        })
        builder.addCase(EditSpecificEmpApi.rejected,(state)=>{
            state.isUpdated=false
            state.isError=true
            state.updatedInfo=null
        })
    }
})