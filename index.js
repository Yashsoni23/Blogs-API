const dotenv = require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = require("./app");
const port = process.env.PORT || 3000;
const router = express();
const server = http.createServer(router);
const bodyparser = require("body-parser");
const route = express.Router();
router.use(route);
router.listen(port, () => {
    console.log(`server listen on ${port}`)
})
route.get("/", (req, res) => {
    res.send("Server is running");
})
route.use(app);
route.use(cors);
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({ extended: false }));
