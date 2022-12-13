const express = require("express");
// const cors = require("cors");
const connect = require("./src/config/db");
require("dotenv").config();
const userRoute = require("./src/users/user.router");

const app = express();
app.use(express.json());
// app.use(cors);

app.use("/users", userRoute);
app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, async() => {
  await connect();
  console.log(`listening on port http://localhost:8080`);
});
