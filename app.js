import express from "express";     
import bodyParser from "body-parser";
import router from "./routes/admin.route.js";
import ProductRouter from "./routes/product.routes.js"

const app =express();

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/admin",router);
app.use("/product",ProductRouter);

app.listen(3000,()=>{
    console.log("Server Started.....")
})