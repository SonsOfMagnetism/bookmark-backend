// Dependencies
require("dotenv").config()
const { PORT = 3000, DATABASE_URL } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

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

// Models
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model("Bookmark", BookmarkSchema)

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.get("/", (req,res) => {
    res.send("hello world")
})

// index route
app.get("/bookmark", async (req, res) => {
    try{
        res.json(await Bookmark.find({}) )
    }
    catch(error){
        res.status(400).json(error)
    }
})

// create route
app.post("/bookmark", async (req, res) => {
    try{
        res.json(await Bookmark.create(req.body))
    }catch(error) {
        res.status(400).json(error)
    }
})

// update route
app.put("/bookmark/:id", async (req, res) =>  {
    try{
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    }catch(error) {
        res.status(400).json(error)
    }
})


// delete route
app.delete("/bookmark/:id", async (req, res) => {
    try{
        res.json(await Bookmark.findByIdAndRemove(req.params.id))
    }catch(error) {
        res.status(400).json(error)
    }   
})


// show route
app.get("/bookmark/:id", async (req, res) => {
    try{
        res.json(await Bookmark.findById(req.params.id))
    }catch(error) {
        res.status(400).json(error)
    }   
})




// Listener
app.listen(PORT, () => console.log(`You are now on Port: ${PORT}`))