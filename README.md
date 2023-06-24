# Recipe App
 
This is a MERN (MongoDB, Express, React, Node.js) stack recipe app that allows users to explore and save various food recipes. Users can register, login, and create their own recipes. Authenticated users can save recipes and view their saved recipe collection.

## Features

- User authentication: Users can register, login, and logout.
- Token-based authentication: Token-based authentication is implemented for secure user authentication and authorization.
- Recipe management: Authenticated users can create and save recipes.
- Save functionality: Users can save recipes to their collection, and the app ensures that duplicate saves are not allowed.
- Demo recipes: The home page displays a collection of demo recipes for users to explore.
- Responsive design: The app is designed to be responsive and compatible with various screen sizes.

## Technologies Used

### Client

- React
- React Router DOM
- React-cookie
- Axios
- Bootstrap 4
- WOW.js CSS animate

### Server

- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Nodemon (for development)

## Installation

### Client

1. Clone the repository.
2. Navigate to the client directory: `cd client`.
3. Install dependencies: `npm install`.
4. Start the client: `npm start`.

### Server

1. Navigate to the server directory: `cd server`.
2. Install dependencies: `npm install`.
3. Configure MongoDB connection: Update the MongoDB connection URL in `server/index.js`.
4. Start the server: `npm start`.

## API Routes

### User Routes

- `POST /api/user/register`: Register a new user.
- `POST /api/user/login`: Login with username and password.

### Recipe Routes

- `GET /api/recipes`: Get all recipes.
- `POST /api/recipes`: Create a new recipe (requires authentication).
- `PUT /api/recipes`: Save a recipe to the user's collection (requires authentication).
- `GET /api/recipes/savedRecipes/ids/:userId`: Get saved recipes by user ID.
- `GET /api/recipes/savedRecipes/:userId`: Get saved recipes details by user ID.

## Folder Structure

The project folder structure is as follows:

```
MERN-Recipe-App/
  |- client/
  |   |- src/
  |   |   |- components/
  |   |   |- pages/
  |   |   |- App.js
  |   |   |- index.js
  |- server/
  |   |- controllers/
  |   |- models/
  |   |- routes/
  |   |- index.js
  |- package.json
  |- README.md
```

## License

This project is licensed under the MIT License. Feel free to use and modify the code as per your requirements.

## Author

This project was developed by [Riaj Hasan Pranto](https://github.com/Coder-pranto).

---