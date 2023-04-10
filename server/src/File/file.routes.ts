import express, { Request, Response } from 'express'
import { postFile, getFile, getMetadata, updateFile } from './file.controller'
import { multer } from '../config'

const router = express.Router()

router.post("/", multer.single("file"), postFile)

router.get("/metadata", getMetadata)

router.get("/:id", getFile)

router.put("/:id", updateFile)

export default router