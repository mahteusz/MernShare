import express, {Request, Response} from 'express'
import { postFile, getFile } from './file.controller'
import { multer } from '../config'

const router = express.Router()

router.post("/", multer.single("file"), postFile)
    
router.get("/:id", getFile)

export default router