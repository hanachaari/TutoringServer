const express = require("express");
const mysql = require('mysql2');
const studentRoute = require("./routes/studentRoute");
const app = express();
const cors= require("cors")
const dotenv = require("dotenv");
dotenv.config();
const {connectDb,con} = require("./configuration/db")
const port = process.env.PORT;
app.listen(port, (er) => {
    if (er) {
    console.log("here",err);
    } else {
    console.log(`server is running on port ${port}`);
    }
});
app.use(express.json())
connectDb();
app.use(cors());
app.use("/api", studentRoute);
