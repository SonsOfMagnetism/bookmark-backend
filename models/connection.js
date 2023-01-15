// Import Dependencies
require("dotenv").config()
const { DATABASE_URL } = process.env
const mongoose = require("mongoose")


// Database Connection
mongoose.set('strictQuery', false)
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error))


// Export the Connection
module.exports = mongoose