
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Display data or messages on the webpage
function showOutput(data) {
    document.getElementById("output").textContent =
        typeof data === "string"
            ? data
            : JSON.stringify(data, null, 2);
}

// GET - Read all users
async function getUsers() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        showOutput(data);

    } catch (error) {
        showOutput("Error: " + error.message);
    }
}

//Get -by user id 

async function getUsersById() {
    try {
        
        const id = document.getElementById("getId").value;
        
        if (!id || Number(id) < 1) {
            showOutput("Enter a valid user ID");
            return;
        }
        const response = await fetch(`${API_URL}/${id}`,
            {
                method:'GET'
            }
        );

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        showOutput(data);

    } catch (error) {
        showOutput("Error: " + error.message);
    }
}

// POST - Create a user
async function createUser() {
    try {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            showOutput("Please enter both name and email.");
            return;
        }

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        showOutput(data);

    } catch (error) {
        showOutput("Error: " + error.message);
    }
}

// PUT - Update a user
async function updateUser() {
    try {
        const id = document.getElementById("updateId").value;
        const name = document.getElementById("updateName").value.trim();

        if (!id || Number(id) < 1 || !name) {
            showOutput("Enter a valid user ID and new name.");
            return;
        }

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        });

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        showOutput(data);

    } catch (error) {
        showOutput("Error: " + error.message);
    }
}

// DELETE - Delete a user
async function deleteUser() {
    try {
        const id = document.getElementById("deleteId").value;

        if (!id || Number(id) < 1) {
            showOutput("Enter a valid user ID.");
            return;
        }

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        showOutput("Delete request successful. HTTP status: " +
            response.status);

    } catch (error) {
        showOutput("Error: " + error.message);
    }
}
