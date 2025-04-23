const http = require("http");
const express = require("express");
const cors = require("cors");
const routes = require("./app/routes/routes"); // Caminho correto para as rotas

const app = express();
const PORT = process.env.PORT || 3000; // Porta configurável

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", routes); // As rotas estarão disponíveis em /api

// Criação do servidor HTTP
const server = http.createServer(app);

// Inicia o servidor
server.listen(PORT, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    return; // Encerra a execução em caso de erro
  }
  console.log(`Servidor escutando muito bem na porta: ${PORT}`); // Template string
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


// const http = require("http");
// const app = require("./config/express");
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser"); // Importa o body-parser
// const path = require("path"); // Importa o path módulo
// const fs = require("fs"); // Importa o fs módulo    

// const { connectDB } = require("database"); // Importa a função connectDB


// app.use("/", routes); // Registra as rotas no servidor
// app.get("/routes", (req, res) => {
//   const routes = [];
//   app._router.stack.forEach((middleware) => {
//     if (middleware.route) {
//       // Rota registrada diretamente
//       routes.push(middleware.route.path);
//     } else if (middleware.name === "router") {
//       // Rotas registradas em um router
//       middleware.handle.stack.forEach((handler) => {
//         if (handler.route) {
//           routes.push(handler.route.path);
//         }
//       });
//     }
//   });
//   res.json({ routes });
// });

// // Middleware
// app.use(cors());

// server.listen(PORT, (error) => {
//   if (error) {
//     console.error("Erro ao iniciar o servidor:", error);
//     return; // Encerra a execução em caso de erro
//   }
//   console.log(`Servidor escutando muito bem na porta: ${PORT}`); // Template string
// });

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