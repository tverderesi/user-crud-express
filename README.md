# 18-21-get-put-delete-## Express Server with CRUD Operations

This is a simple Express server that demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing user data.

### Prerequisites

Before running the server, make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

To start the server, run the following command:

```bash
npm start
```

The server will start running on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

### Endpoints

- **GET /users**: Retrieves all users.

- **GET /users/:userId**: Retrieves a user with the specified `userId`.

- **POST /users**: Creates a new user. The user details should be provided in the request body.

- **PUT /users/:userId**: Updates a user with the specified `userId`. The updated user details should be provided in the request body.

- **DELETE /users/:userId**: Deletes a user with the specified `userId`.

### Example Requests

1. Retrieve all users:

   ```http
   GET /users
   ```

2. Retrieve a user with `userId` 1:

   ```http
   GET /users/1
   ```

3. Create a new user:

   ```http
   POST /users
   
   {
     "id": 3,
     "name": "John",
     "age": 35
   }
   ```

4. Update user with `userId` 2:

   ```http
   PUT /users/2
   
   {
     "id": 2,
     "name": "Updated Name",
     "age": 32
   }
   ```

5. Delete user with `userId` 1:

   ```http
   DELETE /users/1
   ```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE).
