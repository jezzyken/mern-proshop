import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    //'mongodb://127.0.0.1:2701/proshop
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/proshop', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`error ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
