const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const USER = require("./models/userModel");
const jwt = require("jsonwebtoken");
const { eventNames } = require("./models/userModel");
require('dotenv').config()
// require('events').EventEmitter.defaultMaxListeners = 25;
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mongoguide:mongodevguide@cluster0.ssjuu.mongodb.net/merndatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("unscucseefull connect");
  });
//mongoguide
//mongodevguide

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.post("/api/register", async (req, res) => {
  try {
    await USER.create({
      name: req.body.userName,
      email: req.body.userEmail,
      password: req.body.userPassword,
      product: req.body.userName,
    });
    res.json({ status: "ok" });
  } catch (e) {
    res.json({ status: e.message });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await USER.findOne({
    email: req.body.userEmail,
    password: req.body.userPassword,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "123qwewqe"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "not ok", user: false });
  }
});

app.get("/api/product", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    // console.log("working fine")
    const decoded = jwt.verify(token, "123qwewqe");
    const emailID = decoded.email;
    const user = await USER.findOne({ email: emailID });
    // console.log(user)
    return res.json({ status: "ok", product: user.product });
  } catch (err) {
    // console.log(err.message)
    res.json({ status: "error", error: "invalid Token" });
  }
});

app.get("/api/authchk", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "123qwewqe");
    const emailID = decoded.email;
    const user = await USER.findOne({ email: emailID });
    return res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + " is running");
});
