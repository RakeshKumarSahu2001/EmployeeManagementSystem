import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmpApi } from "../../Store/Employee/FetchAllEmp";
import { useNavigate } from "react-router-dom";
import { DelSpecificEmpApi } from "../../Store/Employee/DelSpecificEmp";

function AllEmp() {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    // Access state with the correct key
    const empInfo = useSelector((state) => state.fetchAllEmp.allEmp);
    const isFetched = useSelector((state) => state.fetchAllEmp.isFetched);
    const isError = useSelector((state) => state.fetchAllEmp.isError);
    const isDeleted = useSelector((state) => state.deleteSpecificEmp.isDeleted);
    const role = localStorage.getItem("role");

    useEffect(() => {
        dispatch(fetchAllEmpApi());
    }, [dispatch,isDeleted]);

    const handleEditEmp=(id)=>{
        navigate(`/employee/edit-employee/${id}`)
    }

    const handleDeleteEmp=(id)=>{
        dispatch(DelSpecificEmpApi(id))
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">All Employees</h1>

            {isError && <p className="text-red-500">Failed to fetch employees. Please try again later.</p>}
            {!isFetched && <p>Loading...</p>}

            {isFetched && empInfo?.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 px-4 py-2">ID</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Email</th>
                            <th className="border border-gray-400 px-4 py-2">Mobile</th>
                            <th className="border border-gray-400 px-4 py-2">Designation</th>
                            <th className="border border-gray-400 px-4 py-2">Gender</th>
                            <th className="border border-gray-400 px-4 py-2">Course</th>
                            <th className="border border-gray-400 px-4 py-2">Create Date</th>
                            { role==="admin" &&<th className="border border-gray-400 px-4 py-2">Edit or Delete</th>}

                        </tr>
                    </thead>
                    <tbody>
                        {empInfo.map((emp) => (
                            <tr key={emp._id} className="hover:bg-gray-100">
                                <td className="border border-gray-400 px-4 py-2">{emp._id}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.name}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.email}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.contactNo}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.designation}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.gender}</td>
                                <td className="border border-gray-400 px-4 py-2">{emp.course.join(", ")}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {new Date(emp.createdAt).toLocaleDateString()}
                                </td>
                             { role==="admin" &&  <td>
                                    <div className="flex flex-row gap-3">
                                        <button
                                        onClick={()=>handleEditEmp(emp._id)}
                                            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            >Edit</button>
                                        <button
                                        onClick={()=>handleDeleteEmp(emp._id)}
                                         className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button">Delete</button>
                                    </div>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                isFetched && <p>No employees found.</p>
            )}
        </div>
    );
}

export default AllEmp;
