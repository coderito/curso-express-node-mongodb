const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Este es la respuesta");
});

server.listen(PORT, () => {
  console.log("Funcionanading");
});
