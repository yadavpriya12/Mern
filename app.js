
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

app.use(express.static(path.join(__dirname, "public")));


app.get("/Home", (req, res, next) => {
  res.render("Home");
});

app.get("/About", (req, res, next) => {
  res.render("About");
});

app.get("/Contact", (req, res, next) => {
  res.render("Contact");
});

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
