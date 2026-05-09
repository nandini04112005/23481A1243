const express = require("express");

const Log = require("./middleware/logger");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "handler",
    "Root route accessed"
  );

  res.send("Home Route");
});

app.get("/users", async (req, res) => {

  await Log(
    "backend",
    "info",
    "controller",
    "Users fetched successfully"
  );

  res.json([
    {
      id: 1,
      name: "Nandini"
    }
  ]);
});

app.get("/error", async (req, res) => {

  await Log(
    "backend",
    "error",
    "db",
    "Database connection failed"
  );

  res.status(500).send("Error Route");
});

app.listen(3000, () => {
  console.log("Server Started");
});