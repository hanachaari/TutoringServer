const mysql= require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const con= mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB

})

const connectDb = async()=>{
    console.log(process.env.HOST)

    try{
        const connection = await con.connect();
        console.log("db connected !")
    }
    catch(error){
        console.log("connection failed !!!");
    }
};
module.exports={connectDb,con}
