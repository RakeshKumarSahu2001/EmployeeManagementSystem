import jwt from "jsonwebtoken";
import ApiErrorHandler from "../utils/ApiErrorHandler.js";

async function TokenValidation(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        throw new ApiErrorHandler({ statusCode: 401, errors: ["Unauthorized request"], message: "Unauthorized request" });
    }
    try {
        const decode = await jwt.verify(token, process.env.JWTSECRETE);
        req.user = {
            username: decode.username,
            role: decode.role
        }
        next();
    } catch (error) {
        next(new ApiErrorHandler({
            statusCode: 401,
            message: error.message,
            errors: [error]
        }))
    }

}

export default TokenValidation