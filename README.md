# MERN Frontend
This is the frontend for a full-stack MERN (MongoDB, Express, React, Node.js) web application. This frontend is built using React, and it provides the user interface for interacting with the backend API.

## Getting Started
To get started with this project, you'll need to have Node.js installed on your computer. You can download Node.js from the official website [node](https://nodejs.org/).

Once you have Node.js installed, you can clone this repository to your local machine:

```
git clone https://github.com/ObedRav/MERN-fronted.git
```

After cloning the repository, navigate to the MERN-fronted directory:

```
cd MERN-fronted
```

Install the required packages:

```
npm install
```

Modify the `src/config.js` file in the root of the `MERN-fronted` directory and add the following environment variables:

```
export const API = <the URL of your backend API>
```

Finally, start the development server:

```
npm start
```

The frontend should now be running on `http://localhost:3000/` and communicating with your backend API.

## Features
This frontend provides the following features:

* View a list of all categories.
* View a list of all video games.
* View the details of a single video game, including its photo.
* Add a new category to the database.
* Add a new video game to the database.
* Delete a category from the database.
* Delete a video game from the database.
* Sign up for a new user account.
* Sign in to an existing user account.
* Sign out of the user account.

## Dependencies
This frontend relies on the following dependencies:

* `react`: A JavaScript library for building user interfaces.
* `react-dom`: A package that provides DOM-specific methods for working with React.
* `react-router-dom`: A package that provides routing functionality for React applications.
* `axios`: A package that provides a simple way to make HTTP requests from the browser.
* `jwt-decode`: A package that provides a simple way to decode JSON Web Tokens (JWTs).
* `react-bootstrap`: A package that provides Bootstrap components as React components.
* `react-icons`: A package that provides a collection of popular icons as React components.











