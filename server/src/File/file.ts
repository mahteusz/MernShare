import mongoose from "mongoose";
import { IFile } from "./types";

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    sizeInBytes: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model<IFile>("File", FileSchema)
