// Import Dependencies
const mongoose = require("./connection")


// Models
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model("Bookmark", BookmarkSchema)


// Export Model
module.exports = Bookmark