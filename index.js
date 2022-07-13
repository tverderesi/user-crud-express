import express, { request, response } from "express";
import StatusCodes from "http-status-codes";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
let users = [
  {
    id: 1,
    name: "Thomas",
    age: 28,
  },
  {
    id: 2,
    name: "Rafael",
    age: 31,
  },
];
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  return response.send("<h1> Working with express server.</h1>");
});

app.get("/users", (request, response) => {
  return response.send(users);
});

app.get("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  console.log(userId);
  const user = users.find((user) => {
    return user.id === Number(userId);
  });
  return response.send(user);
});

app.post("/users", (request, response) => {
  const NewUser = request.body;

  users.push(NewUser);

  return response.status(201).send(NewUser);
});

app.put("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  const updatedUser = request.body;

  users = users.map((user) => {
    if (Number(userId) === user.id) {
      return updatedUser;
    }
    return user;
  });
  return response.send(updatedUser);
});

app.delete("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  users = users.filter((user) => user.id !== Number(userId));
  return response.status(StatusCodes.NO_CONTENT).send();
});
