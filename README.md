# Bookmark'd Backend

This is a API/Backend system using MongoDB to store the information of the title and URL of any site for an application that will allow the user to bookmark their favorite sites.

### Dependencies
- Dotenv
- MongoDB
- Express
- Mongoose
- CORS
- Morgan

### Models
- BookmarkSchema

### Backend Route Table
| Route Name |     URL       | HTTP Verb |          Description           |
|------------|---------------|-----------|--------------------------------|
|    Index   | /bookmark     |    GET    | Display list of bookmarks      |
|    Create  | /bookmark     |    POST   | Add new bookmark to database   |          
|    Update  | /bookmark/:id |    PUT    | Update a specific bookmark     |
|    Delete  | /bookmark/:id |   DELETE  | Delete a specific bookmark     |
|    Show    | /bookmark/:id |    GET    | Show info on specific bookmark |
### Trello Board
[Link](https://trello.com/invite/b/kVjMn2Lp/ATTIb21fdc50e0e44ba2aa82678e41a1a8feE36D8614/bookmarkd-app)

### API
[Link](https://bookmark-backend-dev.onrender.com/bookmark)