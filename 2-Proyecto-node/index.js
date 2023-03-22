const express = require("express");
const { create } = require("express-handlebars");
const app = express();



const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    const urls = [
        {origin: "www.google.com", shortURL: "gsadga"},
        {origin: "www.google.com1", shortURL: "gsadga"},
        {origin: "www.google.com2", shortURL: "gsadga"},
    ]

  res.render("home", {urls: urls})
});

app.use(express.static(__dirname + "/public"));

app.listen(5000, () => console.log("Servidor andando"));
