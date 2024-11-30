import ApiErrorHandler from "../utils/ApiErrorHandler.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import { Employee } from "../models/Employee/Employee.model.js";


export const empRegController = AsyncHandler(async (req, res) => {
    const body = req.body;
    try {
        const isEmpExist = await Employee.findOne({ email: body?.email })
        if (isEmpExist) {
            throw new ApiErrorHandler({
                statusCode: 400,
                message: "Employee already exist.",
                errors: ["Employee already exist."]
            })
        }
        const newEmp = new Employee({
            name: body?.name,
            email: body?.email,
            contactNo: body?.contactNo,
            designation: body?.designation,
            gender: body?.gender,
            course: body?.course
        })

        const saveEmp = await newEmp.save();
        return res.status(200)
            .json({
                success: true,
                message: "register successfully."
            })
    } catch (error) {
        throw new ApiErrorHandler({
            statusCode: 500,
            errors: [error],
            message: error.message
        })
    }
})

export const fetchAllEmpController = AsyncHandler(async (req, res) => {
    try {
        const records = await Employee.find();

        return res.status(200)
            .json({
                success: true,
                message: "Employee records fetched successfully.",
                data: records
            })
    } catch (error) {
        throw new ApiErrorHandler({
            statusCode: 404,
            message: "No record found.",
            errors: [error]
        })
    }
})

export const fetchSpecificEmpController = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            throw new ApiErrorHandler({
                statusCode: 401,
                message: "Params not found.",
                errors: ["Params not found."]
            })
        }

        const EmpInfo = await Employee.findById({ _id: id });
        if (!EmpInfo) {
            throw new ApiErrorHandler({
                statusCode: 404,
                errors: ["Employee not found."],
                message: "Employee not found."
            })
        }

        return res.status(200)
            .json({
                message: "Successfully updated the data",
                success: true,
                data: EmpInfo
            })
    } catch (error) {
        throw new ApiErrorHandler({
            statusCode: 500,
            errors: [error],
            message: error.message
        })
    }
})

export const editSpecificEmpController = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        if (!id) {
            throw new ApiErrorHandler({
                statusCode: 401,
                message: "Params not found.",
                errors: ["Params not found."]
            })
        }

        const updatedEmpInfo = await Employee.findOneAndUpdate({ _id: id }, { ...body });

        return res.status(200)
            .json({
                message: "Successfully updated the data",
                success: true,
                data: updatedEmpInfo
            })
    } catch (error) {
        throw new ApiErrorHandler({
            statusCode: 500,
            errors: [error],
            message: error.message
        })
    }
})

export const delSpecificEmpController = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new ApiErrorHandler({
            statusCode: 401,
            message: "Params not found.",
            errors: ["Params not found."]
        })
    }

    try {
        const checkEmpExist = await Employee.findById({ _id: id });

        if (!checkEmpExist) {
            throw new ApiErrorHandler({
                statusCode: 404,
                message: "Employee records not found.",
                errors: ["Employee records not found."]
            })
        }
        await Employee.findByIdAndDelete({ _id: id });
        const empRecord = await Employee.findById({ _id: id });

        return res.status(200)
            .json({
                message: "Employee record deleted successfully.",
                success: true,
                data: empRecord
            })

    } catch (error) {
        throw new ApiErrorHandler({
            statusCode: 500,
            errors: [error],
            message: error.message
        })
    }
})