# OAuth Authentication Application

This is a Node Express application that demonstrates OAuth authentication using Passport.js with Google OAuth2 strategy.

## Overview

This application provides OAuth authentication functionality using the Google OAuth2 strategy. Users can sign in to the application using their Google accounts and access protected routes.

## Features

- OAuth authentication using Google OAuth2 strategy
- User Creation/Registration 
- Dashboard page for authenticated users
- Logout functionality
- Error handling

## Setup

1. Clone the repository: 

```bash
git clone https://github.com/auraticabhi/Authentication-System.git
```
2. Install dependencies: 

```bash
npm install
```

3. Configure .env file: 

Rename the .env.example file to .env and fill the respective values in environment variables.

4. Start the server: 

```bash
node app.js
```

5. Visit http://localhost:5000/pages/login in your web browser to access the application 's Login Page.

## How to Use

- To authenticate with Google OAuth, click on the "Sign in with Google" button on the Login Page. (If the user does not exist in the database, it will get created and will be logged in. Else, if the user already exist in the database then it will get simply logged in).

- After successful authentication, users will be redirected to the dashboard page (`/pages/dashboard`). (User's name and email will be displayed here).

- Users can log out by simply clicking on the "Logout" button on the Dashboard.

- Admin can see all the registered users by going to the `/all/users` route.

## Routes

- `/pages/login`: Login page
- `/pages/dashboard`: Dashboard Page for authenticated users
- `/auth/google`: OAuth authentication with Google
- `/auth/google/callback`: Callback route for Google OAuth
- `/auth/logout`: Logout route
- `/all/users`: To get all registered/created users.

## Dependencies

express: Web framework for Node.js
passport: Authentication middleware for Node.js
passport-google-oauth20: Google OAuth2 strategy for Passport.js
mongoose: MongoDB object modeling tool for Node.js
express-session: Session middleware for Express
ejs: for server-side rendering
dotenv: Module to load environment variables from a .env file

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
