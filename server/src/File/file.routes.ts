import express, {Request, Response} from 'express'
import { postFile } from './file.controller'
import { multer } from '../config'

const router = express.Router()

router.post("/", multer.single("file"), postFile)
    
router.get("/", async (req: Request, res: Response) => {
    return res.status(200).json({"message":"Ok"})
})

export default router