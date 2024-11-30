import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FetchSpecificEmpApi } from "../../Store/Employee/FetchSpecificEmp";
import { EditSpecificEmpApi } from "../../Store/Employee/EditSpecificEmp";

function EditEmp() {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const dispatch = useDispatch();
    const { id } = useParams();
    const options = ["HR", "Manager", "Sales"];
    const empInfo = useSelector((state) => state.fetchSpecificEmp.emp);
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(FetchSpecificEmpApi(id));
    }, [dispatch, id]);

    // Populate form fields when empInfo is available
    useEffect(() => {
        if (empInfo) {
            setValue("name", empInfo.name || "");
            setValue("email", empInfo.email || "");
            setValue("contactNo", empInfo.contactNo || "");
            setValue("designation", empInfo.designation || options[0]);
            setValue("gender", empInfo.gender || "male");
            setValue("course", empInfo.course || []);
        }
    }, [empInfo, setValue, options]);

    const isUpdated=useSelector((state)=>state.editSpecificEmp.isUpdated)
    const onSubmit = (data) => {
        dispatch(EditSpecificEmpApi({ id, data }));
    };

    useEffect(() => {
        if (isUpdated) {
            navigate("/employee/all-employee");
        }
    }, [isUpdated, navigate]);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Edit Employee
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Enter name"
                            className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter email"
                            className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="contactNo" className="block text-sm font-medium text-gray-900">
                            Contact No
                        </label>
                        <input
                            type="text"
                            {...register("contactNo", { required: "Contact number is required" })}
                            placeholder="Enter contact number"
                            className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900"
                        />
                        {errors.contactNo && <p className="text-red-500">{errors.contactNo.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="designation" className="block text-sm font-medium text-gray-900">
                            Designation
                        </label>
                        <select
                            {...register("designation", { required: "Designation is required" })}
                            className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900"
                        >
                            {options.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        {errors.designation && <p className="text-red-500">{errors.designation.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">
                            Gender
                        </label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="male"
                                    {...register("gender", { required: "Gender is required" })}
                                />{" "}
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    {...register("gender", { required: "Gender is required" })}
                                />{" "}
                                Female
                            </label>
                        </div>
                        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">
                            Course
                        </label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="MCA"
                                    {...register("course")}
                                />{" "}
                                MCA
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="BCA"
                                    {...register("course")}
                                />{" "}
                                BCA
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="BSC"
                                    {...register("course")}
                                />{" "}
                                BSC
                            </label>
                        </div>
                        {errors.course && <p className="text-red-500">{errors.course.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-indigo-600 py-1.5 text-white"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditEmp;
