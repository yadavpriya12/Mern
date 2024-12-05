import mysql from "mysql2";
const pool = mysql.createPool({
    user: "root",
    password: "1234",
    database: "student",
    host: "localhost"
});
pool.getConnection((err,con)=>{
    if(!err)
    {
          console.log("database connected succes....")
    }
    else{
        console.log("error",err)
    }
})
export default pool;