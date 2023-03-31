import multer from 'multer'

const storage = multer.diskStorage({})
const multerInstance = multer({
    storage,
    limits: {
        fileSize: 32 * 1024 * 1024 //32MB
    }
})

export default multerInstance