import multer from 'multer'

const storage = multer.diskStorage({})
const multerInstance = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 //5MB
    }
})

export default multerInstance