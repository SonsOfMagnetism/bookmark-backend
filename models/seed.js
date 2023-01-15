// Import Dependencies
const mongoose = require("/connection")
const Bookmark = require("./connection")

// Seed Code
mongoose.connection.on("open", () => {
    const startBookmarks = [
        {
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/"
        },
        {
            title: "NPM",
            url: "https://www.npmjs.com/"
        },
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/"
        },
        {
            title: "Github",
            url: "https://github.com/"
        },
        {
            title: "Stack Overflow",
            url: "https://stackoverflow.com/"
        }
    ]

    // Delete all bookmarks
    Bookmark.remove({}, (err, data) => {
        // Seed starter bookmarks
        Bookmark.create(startBookmarks, (err, bookmarks) => {
            // log created bookmarks to confirm
            console.log("--------BOOKMARKS CREATED--------")
            console.log(bookmarks)
            console.log("--------BOOKMARKS CREATED--------")

            // close the DB connection
            mongoose.connection.close()
        })
    })
})