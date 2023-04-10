import mongoose from "mongoose";
import File from "./types";

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
    },
    numberOfDownloads: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export default mongoose.model<File>("File", FileSchema)
