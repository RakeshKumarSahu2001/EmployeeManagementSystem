import ApiErrorHandler from "../utils/ApiErrorHandler.js";

function ZodValidator(schema) {
    return async (req, res, next) => {
        try {
            const parsedReq = await schema.parseAsync(req.body);
            req.body = parsedReq;
            next();
        } catch (err) {
            next(new ApiErrorHandler({
                statusCode: 400,
                message: "Request failed.",
                errors: ["Request failed."]
            }))
        }
    }
}

export default ZodValidator;

