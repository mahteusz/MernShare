import ICloudService from "./types";
import {v2 as cloudinary } from 'cloudinary'

export default class CloudinaryService implements ICloudService {
    
    file: string
    folder: string

    constructor(file: string, folder: string) {
        this.file = file
        this.folder = folder
    }

    upload(): Promise<any> {
        return (
            cloudinary.uploader.upload(this.file, {
                folder:this.folder,
                resource_type:"auto"
            })
        )
    }
}