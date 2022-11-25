const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./api/Blog");
const connectionString = process.env.DBSTRING;
mongoose.connect(connectionString).then((result => console.log("connected to mongoDB"))).catch(err => console.log(err))
const app = express.Router();

app.use("/blogs", Blog);

module.exports = app;
