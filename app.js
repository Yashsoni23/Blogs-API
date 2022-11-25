const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./api/Blog");
const cors = require("cors");
const connectionString = process.env.DBSTRING;
mongoose.connect(connectionString).then((result => console.log("connected to mongoDB"))).catch(err => console.log(err))
const router = express.Router();

router.use(cors);
router.use("/blogs", Blog);

module.exports = router;