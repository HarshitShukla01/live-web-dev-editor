const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const USER = require("./models/userModel");
const CODEDATA = require("./models/dataModel");
const { getMaxListeners } = require("./models/userModel");

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

  

const chk = async () =>{

    const uniqueid = req.headers["x-access-token"];
    const projname = req.headers["projname"];
    try {
      await CODEDATA.deleteOne({uniqueid : uniqueid, name : projname});
      return res.json({ status: "ok" });
    } catch (err) {
      return res.json({ status: err.message });
    }

}

chk();