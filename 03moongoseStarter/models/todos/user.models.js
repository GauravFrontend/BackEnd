import mongoose from "mongoose"

const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
}, { timestamps: true }
)

export const User = mongoose.model("User", userScheme)