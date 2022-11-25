const dotenv = require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const App = express();
const server = http.createServer(App);
const Router = express.Router();
const app = require("./app");
const bodyparser = require("body-parser");


App.listen(port,(()=>{
    console.log(`server listen on ${port}`)
}))
App.use(cors);
App.use(Router);
App.use(app);
App.use(bodyparser.json());
App.use(bodyparser.urlencoded({ extended: false }));


Router.get("/",(req,res)=>{
    res.send("Server is running");
})


