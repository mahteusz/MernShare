import mongoose, { ConnectOptions } from 'mongoose'

const connectToDB = async () => {
    try {
        mongoose.connect(process.env.DB_URI!, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        } as ConnectOptions)
    } catch(error) {
        console.error(`Connection failed`)
    }

    const connection = mongoose.connection
    if(connection.readyState >= 1){
        console.log("Connected to DB!")
        return
    }
}

export default connectToDB