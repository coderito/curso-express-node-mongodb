const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config()
require("./database/db")
const app = express();

const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.urlencoded({extended: true})) // Habilitando formularios
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));
app.use(express.static(__dirname + "/public")); // Tiene que estar al final

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Servidor andando"));
