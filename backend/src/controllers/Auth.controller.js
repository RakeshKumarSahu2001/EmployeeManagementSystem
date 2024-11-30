import AsyncHandler from "../utils/AsyncHandler.js";
import { Auth } from "../models/user/Auth.model.js"
import ApiErrorHandler from "../utils/ApiErrorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerController = AsyncHandler(async (req, res) => {
    const { username, password } = req.body;
    try {
        const isUSerExist = await Auth.findOne({ username })
        if (isUSerExist) {
            throw new ApiErrorHandler({
                statusCode: 400,
                message: "User already exist.",
                errors: ["User already exist."]
            })
        }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS));
        const newUser = new Auth({ username, role: "user", password: hashedPassword });
        const savedUser = await newUser.save();
        return res.status(200)
            .json({
                message: "Registered Successfully.",
                success: true
            })
    } catch (err) {
        next(new ApiErrorHandler({
            statusCode: 500,
            errors: [err],
            message: err.message
        }))
    }
})

export const loginController = AsyncHandler(async (req, res) => {
    const { username, password } = req.body;

    try {
        const isUserExist = await Auth.findOne({ username });
        if (!isUserExist) {
            throw new ApiErrorHandler({
                statusCode: 404,
                errors: ["user does not exist."],
                message: "user does not exist."
            })
        }

        const isSame = await bcrypt.compare(password, isUserExist.password);
        if (!isSame) {
            throw new ApiErrorHandler({
                statusCode: 401,
                message: "Unautherized user",
                errors: ["Unautherized user"]
            })
        }

        const token = await jwt.sign({ username: isUserExist.username, role: isUserExist.role }, process.env.JWTSECRETE, {
            expiresIn: process.env.TOKENEXP,
            algorithm: process.env.ALGO
        })
        const isUser = { ...isUserExist._doc, password: undefined }
        return res
            .status(200)
            .json({
                success: true,
                message: "user logged in successfully.",
                token: token,
                data:isUser
            })

    } catch (err) {
        throw new ApiErrorHandler({
            statusCode: 500,
            errors: [err],
            message: err.message
        })
    }
})