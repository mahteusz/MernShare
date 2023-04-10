import { Request, Response } from 'express'
import FileSchema from './file'
import { ICloudService, CloudinaryService } from '../services/cloudService'
import File from './types'

export const postFile = async (req: Request, res: Response) => {
    try {
        if (!req.file)
            return res.status(400).json({ "message": "No file sent" })

        try {
            const cloudService: ICloudService = new CloudinaryService(req.file.path, "MERNSHARE")
            const uploadedFile = await cloudService.upload()
            const newFile: File = await FileSchema.create({
                name: req.file.originalname,
                url: uploadedFile.secure_url,
                format: uploadedFile.format,
                sizeInBytes: uploadedFile.bytes
            })

            res.status(201).json(newFile)
        } catch (error) {
            console.error("Error saving to cloud")
            return res.status(400).json({ "message": "Cloud error" })
        }

    } catch (error) {
        console.error("General server error on upload")
        res.status(500).json({ "message": "General server error on upload" })
    }
}

export const getFile = async (req: Request, res: Response) => {
    try {
        const file = await FileSchema.findById(req.params.id)
        res.status(200).json(file)
    } catch (error) {
        console.error("General server error on upload")
        res.status(404).json({ "message": "File not found" })
    }
}

export const getMetadata = async (req: Request, res: Response) => {
    try {
        const files = await FileSchema.find()
        const numberOfSentFiles = files.length
        const downloadedFiles = files.reduce((acc, { numberOfDownloads }) => acc + numberOfDownloads, 0)
        const sizeOfSavedData = files.reduce((acc, { sizeInBytes }) => acc + sizeInBytes, 0)
        res.status(200).json({
            numberOfSentFiles,
            downloadedFiles,
            sizeOfSavedData
        })
    } catch (error) {
        console.error("General server error on upload")
        res.status(500).json({ "message": "General server error on get metadata" })
    }
}

export const updateFile = async (req: Request, res: Response) => {
    try {
        const file = await FileSchema.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).json(file)
    } catch (err) {
        res.status(400).json({ message: err });
    }
}