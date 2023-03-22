const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Leer reques.body de un form

// app.get("/formulario", (req, res) => {
//   const { nombre } = req.query;
//   res.send(`Formulario enviado ${nombre} `);
// });

app.post("/formulario", (req, res) => {
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) return res.redirect("/error.html");

  fs.writeFile(`archivos/${nombre}.txt`, apellido, (error) => {
    if (error) return res.send("Fallo el archivo");

    res.send("Se creo el archivo")
  });

  res.send("Formulario enviado");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/juan", (req, res) => {
  res.end("Hello juan");
});

app.listen(PORT, () => {
  console.log(`Example in http://localhost:${PORT}`);
});
