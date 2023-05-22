const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
connectDB()


const port = process.env.PORT
app.listen(port, () => console.log(`server running on ${process.env.NODE_ENV} mode in http://localhost:${port}...`))