import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "Manager"],
        default: "user"
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


export const Auth = mongoose.model("auth", AuthSchema);