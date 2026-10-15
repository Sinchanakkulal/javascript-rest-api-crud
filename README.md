# javascript-rest-api-crud
Beginner-friendly project demonstrating REST API CRUD operations using HTML, JavaScript Fetch API, JSON, and JSONPlaceholder. Includes GET, POST, PUT, and DELETE requests, asynchronous programming, and error handling.


# JavaScript REST API CRUD Operations

A beginner-friendly project to learn and practice REST API operations using HTML, JavaScript, the Fetch API, and JSONPlaceholder. This project demonstrates how a frontend application sends HTTP requests and handles API responses.

## Project Overview

This project provides a simple webpage to perform CRUD operations using a public demo REST API. It helps beginners understand API communication, asynchronous JavaScript, HTTP methods, JSON data, and error handling.

**Note:** JSONPlaceholder is a fake online REST API for testing and learning. POST, PUT, and DELETE requests simulate changes; data is not permanently stored.

## Features

- **GET:** Fetch and display users.
- **POST:** Send a request to create a new user.
- **PUT:** Send a request to update a user's information.
- **DELETE:** Send a request to delete a user.
- Display API responses in a readable format.
- Validate user inputs before sending requests.
- Handle errors using `try...catch`.
- Use asynchronous JavaScript with `async/await`.

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Fetch API
- JSON
- REST API
- JSONPlaceholder
- Git and GitHub

## Project Structure

```text
javascript-rest-api-crud/
├── index.html
├── script.js
└── README.md
```

## API Information

**Base URL:**

```text
https://jsonplaceholder.typicode.com/users
```

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Read users | GET | `/users` |
| Create user | POST | `/users` |
| Update user | PUT | `/users/1` |
| Delete user | DELETE | `/users/1` |

## Setup and Run

### Prerequisites

- A web browser such as Google Chrome
- Visual Studio Code or another text editor
- An internet connection

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/javascript-rest-api-crud.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Open the project folder

```bash
cd javascript-rest-api-crud
```

### Step 3: Run the application

Open `index.html` directly in your browser, or open the folder in Visual Studio Code and use the Live Server extension.

No backend server or database setup is required.

## How to Use

1. Open the webpage in your browser.
2. Click **Get Users** to retrieve user data.
3. Enter a name and email, then click **Create User**.
4. Enter a user ID and a new name, then click **Update User**.
5. Enter a user ID and click **Delete User**.
6. View the API response in the output section.

## JavaScript Concepts Learned

- Variables, functions, and objects
- DOM manipulation
- Event handling
- `fetch()` for HTTP requests
- `async` and `await`
- `JSON.stringify()` and `response.json()`
- HTTP methods and status codes
- Request headers and request bodies
- Input validation
- Error handling with `try...catch`

## What I Learned

- How REST APIs enable communication between frontend applications and servers.
- How to send GET, POST, PUT, and DELETE requests.
- How to send and receive JSON data.
- How to handle asynchronous API responses.
- How to validate inputs and handle request errors.
- How to inspect API requests and responses using browser developer tools.

## Future Improvements

- Add PATCH requests to update individual fields.
- Improve the user interface with CSS.
- Display users in an HTML table.
- Add loading indicators and better error messages.
- Practise with other public demo APIs.

## Author

**Sinchana Kulal**

GitHub: https://github.com/Sinchanakkulal

---

This project was developed for learning and practising JavaScript REST API concepts.
