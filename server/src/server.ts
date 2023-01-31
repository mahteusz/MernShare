import express from 'express'
import init from './config'
import { default as apiRouter } from './routes'

init()
const app = express()

app.use("/api", apiRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`)
})