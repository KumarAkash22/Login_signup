const express = require("express");
const cors = require("cors");
const app = express();

const SignupController = require("./Controllers/signUpController")

app.use(express.json())
app.use(cors())
app.use("/",SignupController)

module.exports =app;