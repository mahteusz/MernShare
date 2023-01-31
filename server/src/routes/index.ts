import express from 'express'
import { default as filesRoutes } from '../File'

const router = express.Router()

router.use('/files', filesRoutes)

export default router