const http = require("http");
const app = require("./config/express");

const PORT = process.env.PORT || 3000; // Porta configurável

const server = http.createServer(app);

server.listen(PORT, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    return; // Encerra a execução em caso de erro
  }
  console.log(`Servidor escutando na porta: ${PORT}`); // Template string
});

// const express = require("express");
// const cors = require("cors");
// const routes = require("../routes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Rotas
// app.use("/api", routes);

// module.exports = app;