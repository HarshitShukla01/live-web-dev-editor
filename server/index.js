const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const USER = require("./models/userModel");
const CODEDATA = require("./models/dataModel");
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
      filename: req.body.userName,
      uniqueid: req.body.userEmail
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

app.get("/api/profile", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "123qwewqe");
    const emailID = decoded.email;
    const user = await USER.findOne({ email: emailID });
    return res.json({ status: "ok", filename: user.filename, uniqueid:user.uniqueid });
  } catch (err) {
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




app.post("/api/filldata", async (req, res) => {
  try {
    
    await CODEDATA.create({
      uniqueid: req.body.uniqueid,
      name: req.body.projname,
      htmlfile: req.body.htmlfile,
      cssfile: req.body.cssfile,
      jsfile: req.body.jsfile,
    });
    res.json({ status: "ok" });
  } catch (e) {
    res.json({ status: e.message });
  }
})

app.get("/api/totaldata", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const totaldata = await CODEDATA.find({uniqueid : token});
    return res.json({ status: "ok" ,totaldata: totaldata});
  } catch (err) {
    res.json({ status: "error" });
  }
});

app.get("/api/uniquedata", async (req, res) => {
  const uniqueid = req.headers["x-access-token"];
  const projname = req.headers["projname"];
  try {
    const totaldata = await CODEDATA.find({uniqueid : uniqueid, name : projname});
    return res.json({ status: "ok" ,totaldata: totaldata});
  } catch (err) {
    res.json({ status: "error" });
  }
});

app.post("/api/deletedataval", async (req, res) => {
  
  try {
    await CODEDATA.deleteOne({
      uniqueid : req.body.uniqueid, 
      name : req.body.projname
    });
     res.json({ status: "ok" });
  } 
  catch (e) {
     res.json({ status: e.message });
  }
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + " is running");
});
