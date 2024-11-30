import React from 'react'
import { useForm } from 'react-hook-form'

function EmpRegForm({ handleFormSubmit }) {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

    const options = ["HR", "Manager", "Sales"]
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create Employee
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-3" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                placeholder="Name address"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                placeholder="Enter Email"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}

                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="contactNo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                ContactNo
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                {...register("contactNo", {
                                    required: "ContactNo is required",
                                })}
                                placeholder="Enter ContactNo"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.contactNo && <p className="text-red-500">{`${errors.contactNo.message}`}</p>}

                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Designation
                            </label>

                        </div>
                        <div className="mt-2">
                            <select {...register("designation", {
                                required: "Designation is required."
                            })}>
                                {options.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {errors.designation && <p className="text-red-500">{`${errors.designation.message}`}</p>}

                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Gender
                        </label>
                        <div className="mt-2">
                            <input
                                type="radio"
                                value={"male"}
                                {...register("gender", {
                                    required: "Gender is required"
                                })}
                            />Male <br />
                            <input
                                type="radio"
                                value={"female"}
                                {...register("gender", {
                                    required: "Gender is required"
                                })}
                            />Female
                        </div>
                        {errors.gender && <p className="text-red-500">{`${errors.gender.message}`}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="course"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Course
                        </label>
                        <div className="mt-2">
                            <input
                                type="checkbox"
                                value={"MCA"}
                                {...register("course", {
                                    required: "Course is required"
                                })}
                            />MCA <br />
                            <input
                                type="checkbox"
                                value={"BCA"}
                                {...register("course", {
                                    required: "Course is required"
                                })}
                            />BCA <br />
                            <input
                                type="checkbox"
                                value={"BSC"}
                                {...register("course", {
                                    required: "Course is required"
                                })}
                            />BSC
                        </div>
                        {errors.course && <p className="text-red-500">{`${errors.course.message}`}</p>}
                    </div>

                    <div>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmpRegForm