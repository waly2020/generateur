const express = require("express");
const ejs = require("ejs");
const app = express();
const routes = require("./routes");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", "public");
app.set("view engine", "ejs");


app.use("/", routes);

app.listen(4000, () => {
    console.log("port 4000 ouver");
})