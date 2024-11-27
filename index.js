const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
let arr = [{ no1: 1 }, { no2: 2 }, { no3: 3 }];

app.get("/test", (req, res) => {
    console.log("get request found");
    res.send(arr);
})

app.post("/test", (req, res) => {
    const obj = req.body
    arr.push(obj)
    res.send(obj);
    console.log("post request found")
})

app.listen(port, () => {
    console.log("started");
})