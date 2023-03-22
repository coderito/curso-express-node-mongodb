const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send('Hello')
})

app.get("/juan", (req, res) => {
    res.end("Hello juan")
})

app.listen(PORT, () => {
    console.log(`Example in http://localhost:${PORT}`)
})