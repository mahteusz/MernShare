import { Request, Response } from 'express'
import File from './file'
import { ICloudService, CloudinaryService } from '../services/cloudService'
import { IFile } from './types'

export const postFile = async (req: Request, res: Response) => {
    try {
        if(!req.file)
            return res.status(400).json({"message":"No file sent"})
        
            try {
                const cloudService: ICloudService = new CloudinaryService(req.file.path, "MERNSHARE")
                const uploadedFile = await cloudService.upload()
                const newFile: IFile = await File.create({
                    fileName: req.file.originalname,
                    url: uploadedFile.secure_url, 
                    format: uploadedFile.format,
                    sizeInBytes: uploadedFile.bytes
                })

                res.status(201).json(newFile)
            } catch(error) {
                console.error("Error saving to cloud")
                return res.status(400).json({"message":"Cloud error"})
            }
                
    } catch(error) {
        console.error("General server error on upload")
        res.status(500).json({"message":"General server error on upload"})
    }
}

export const getFile = async (req: Request, res: Response) => {
    try {
        const file = await File.findById(req.params.id)
        res.status(200).json(file)
    } catch(error) {
        res.status(404).json({"message":"File not found"})
    }
}