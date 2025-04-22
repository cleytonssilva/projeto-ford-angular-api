// // config/express.js
// const express = require("express");
// const app = express();

// app.use(express.json()); // Permite receber dados no formato JSON

// // Configuração básica do Express
// app.get("/", (req, res) => {
//   res.send("Servidor funcionando!");
// });

// // Exporta a aplicação para ser usada no server.js
// module.exports = app;


// app.get("/sobre", (req, res) => {
//     res.send("Página Sobre");
//   });

// app.post("/usuarios", (req, res) => {
//   console.log(req.body); // Dados enviados em JSON
//   res.send("Dados recebidos!");
// });

// app.post("/dados", (req, res) => {
//     const { nome, idade } = req.body; // Extrai os dados do JSON
//     console.log(nome = 'Maria', idade = 25); // "Maria", 25
//     res.json({ mensagem: "Dados recebidos com sucesso!" });
//   });
  
// // Rota GET (para navegador)
// app.get("/usuarios", (req, res) => {
//     res.send("Lista de usuários");
//     res.send(nome, idade);
//   });
  
//   // Rota POST (para enviar dados via API)
//   app.post("/usuarios", (req, res) => {
//     console.log(req.body);
//     res.json({ success: true });
//   });



// config/express.js

// const express = require("express");
// const app = express();

// app.use(express.json()); // Middleware para JSON

// // Rota GET raiz
// app.get("/", (req, res) => {
//   res.send("Servidor funcionando!");
// });

// // Rota GET /sobre
// app.get("/sobre", (req, res) => {
//   res.send("Página Sobre");
// });

// // Rota GET /usuarios (retorna lista fictícia)
// app.get("/usuarios", (req, res) => {
//   const usuarios = [
//     { nome: "Maria", idade: 25 },
//     { nome: "João", idade: 30 }
//   ];
//   res.json(usuarios); // Envia JSON
// });

// // Rota POST /usuarios (recebe dados)
// app.post("/usuarios", (req, res) => {
//   console.log("Dados recebidos:", req.body); // Exibe no terminal
//   res.json({ 
//     success: true,
//     data: req.body 
//   });
// });

// Rota POST /dados (exemplo alternativo)
// app.post("/dados", (req, res) => {
//   const { nome, idade } = req.body; // Extrai do corpo da requisição
//   console.log("Nome:", nome, "Idade:", idade); // Exibe corretamente
//   res.json({ 
//     mensagem: "Dados recebidos com sucesso!",
//     nome,
//     idade
//   });
// });

// app.get("/dados", (req, res) => {
//     res.send("Página de dados (GET)");
//   });
  
//   // Rota POST /dados (para API)
//   app.post("/dados", (req, res) => {
//     const { nome, idade } = req.body;
//     console.log("Dados recebidos:", nome, idade);
//     res.json({ mensagem: "Dados recebidos com sucesso!", nome, idade });
//   });




// module.exports = app;

// config/express.js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware para JSON

// Rota GET raiz
app.get("/", (req, res) => {
  res.send("Realmente está funcionando!");
  console.log("Requisição recebida na rota raiz");
});

// Rota GET /sobre
app.get("/sobre", (req, res) => {
  res.send("Página Sobre");
});

// Rota GET /usuarios (retorna lista fictícia)
app.get("/usuarios", (req, res) => {
  const usuarios = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 }
  ];
  res.json(usuarios); // Envia JSON
});

// Rota POST /usuarios (recebe dados)
app.post("/usuarios", (req, res) => {
  console.log("Dados recebidos:", req.body); // Exibe no terminal
  res.json({ 
    success: true,
    data: req.body 
  });
});

// Rota POST /dados (exemplo alternativo)
app.post("/dados", (req, res) => {
  const { nome, idade } = req.body; // Extrai do corpo da requisição
  console.log("Nome:", nome, "Idade:", idade); // Exibe corretamente
  res.json({ 
    mensagem: "Dados recebidos com sucesso!",
    nome,
    idade
  });
});

app.get("/dados", (req, res) => {
    res.send("Esta é a página de dados (acessível via GET)");
  });



module.exports = app;