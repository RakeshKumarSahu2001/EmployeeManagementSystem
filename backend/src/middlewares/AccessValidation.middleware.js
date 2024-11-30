import ApiErrorHandler from "../utils/ApiErrorHandler.js";

const AccessValidation = async (req, res, next) => {
    const user = req.user;
    try {
        if (user.role !== "admin") {
            throw new ApiErrorHandler({
                statusCode: 401,
                errors: ["User can't access this route."],
                message: "User can't access this route."
            })
        }
        next();
    } catch (error) {
        next(new ApiErrorHandler({
            statusCode: 500,
            errors: [error],
            message: error.message
        }))
    }
}

export default AccessValidation;