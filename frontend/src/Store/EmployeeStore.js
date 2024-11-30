import { configureStore } from "@reduxjs/toolkit";
import { RegisterSlice } from "./Auth/Register.js";
import { LoginSlice } from "./Auth/Login.js";
import { EmpRegSlice } from "./Employee/EmpReg.js";
import { fetchAllEmpSlice } from "./Employee/FetchAllEmp.js";
import { EditSpecificEmpSlice } from "./Employee/EditSpecificEmp.js";
import { delSpecificEmpSlice } from "./Employee/DelSpecificEmp.js";
import { FetchSpecificEmpSlice } from "./Employee/FetchSpecificEmp.js"

const EmployeeStore = configureStore({
    reducer: {
        register: RegisterSlice.reducer,
        login: LoginSlice.reducer,

        empRegistration: EmpRegSlice.reducer,
        fetchAllEmp: fetchAllEmpSlice.reducer,
        editSpecificEmp: EditSpecificEmpSlice.reducer,
        deleteSpecificEmp: delSpecificEmpSlice.reducer,
        fetchSpecificEmp: FetchSpecificEmpSlice.reducer
    },
});

export default EmployeeStore;
