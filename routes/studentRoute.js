const express = require("express");
const studentRoute = express.Router();
const {
getStudents
/*postUser,
putUser,
deleteUser,
getOneUserById,
getOneUserByName*/
} = require("../controllers/studentController");
studentRoute.get("/students", getStudents);
/*userRoute.get("/user", getOneUserByName);
userRoute.get("/user/:id", getOneUserById);
userRoute.post("/user", postUser);
userRoute.put("/user/:id", putUser);
userRoute.delete("/user/:id", deleteUser);*/
module.exports = studentRoute;
