import express from "express";
import cors from "cors"
import ApiErrorHandler from "./utils/ApiErrorHandler.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//user routes
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user", userRoute);

//admin routes
import adminRoute from "./routes/admin.route.js";
app.use("/api/v1/admin", adminRoute);


app.use((err, req, res, next) => {
    if (err instanceof ApiErrorHandler) {
        return res.status(err.statusCode)
            .json({
                success: err.success,
                message: err.message,
                errors: err.errors
            });
    }
    res.status(500)
        .json({
            success: false,
            message: "Internal server error.",
            errors: err
        })
})


export default app;