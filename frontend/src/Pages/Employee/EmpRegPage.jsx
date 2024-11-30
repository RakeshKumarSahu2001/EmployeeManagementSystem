import React from 'react'
import EmpRegForm from '../../Components/Employee/EmpRegForm.jsx';
import {useDispatch} from "react-redux";
import { EmpRegApi } from '../../Store/Employee/EmpReg.js';
import { useNavigate } from 'react-router-dom';

function EmpRegPage() {
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleFormSubmit = (data) => {
        dispatch(EmpRegApi(data))
        navigate("/employee/all-employee")
    }
    return (
        <>
            <EmpRegForm
                handleFormSubmit={handleFormSubmit}
            />
        </>
    )
}

export default EmpRegPage