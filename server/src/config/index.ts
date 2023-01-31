import { default as initDB } from './db'
import { default as initCloudService } from './cloud'
import dotenv from 'dotenv'
import multerInstace from './multer'

const init = () => {
    dotenv.config()
    initDB()
    initCloudService()
}

export { multerInstace as multer, init as default}
