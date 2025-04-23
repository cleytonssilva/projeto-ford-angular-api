const express = require("express");
const { connectDB } = require("../../database");

const router = express.Router();

router.get("/tables", async (req, res) => {
  try {
    const db = await connectDB();
    const tables = await db.all("SELECT name FROM sqlite_master WHERE type='table'");
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar tabelas" });
  }
});

// Rota GET /table/:tableName
// Esta rota consulta uma tabela específica e retorna seus dados
// O nome da tabela é passado como parâmetro na URL
// Exemplo: GET /table/usuarios
// O nome da tabela deve ser validado para evitar SQL Injection
// e garantir que apenas tabelas permitidas sejam acessadas
// Aqui, não estamos fazendo validação de segurança, mas isso deve ser considerado em produção
// O ideal é usar uma lista de tabelas permitidas e verificar se o nome da tabela está nessa lista
// Isso é importante para evitar SQL Injection e garantir a segurança da aplicação
// Exemplo de validação simples (não é seguro, apenas ilustrativo)
// const allowedTables = ["usuarios", "produtos"];
// if (!allowedTables.includes(tableName)) {
//   return res.status(400).json({ error: "Tabela não permitida" });
// }
router.get("/table/:tableName", async (req, res) => {
  const { tableName } = req.params; // Nome da tabela vindo da URL
  try {
    const db = await connectDB();
    const rows = await db.all(`SELECT * FROM ${tableName}`); // Consulta todos os dados da tabela
    res.json(rows); // Retorna os dados da tabela
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar a tabela" });
  }
});


// Rota GET /sobre
router.get("/sobre", (req, res) => {
  res.send("Página Sobre");
});

// Rota GET /usuarios (retorna lista fictícia)
router.get("/usuarios", (req, res) => {
  const usuarios = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 }
  ];
  res.json(usuarios); // Envia JSON
});

// Rota POST /usuarios (recebe dados)
router.post("/usuarios", (req, res) => {
  console.log("Dados recebidos:", req.body); // Exibe no terminal
  res.json({ 
    success: true,
    data: req.body 
  });
});

// Rota POST /dados (exemplo alternativo)
router.post("/dados", (req, res) => {
  const { nome, idade } = req.body; // Extrai do corpo da requisição
  console.log("Nome:", nome, "Idade:", idade); // Exibe corretamente
  res.json({ 
    mensagem: "Dados recebidos com sucesso!",
    nome,
    idade
  });
});

router.get("/dados", (req, res) => {
    res.send("Esta é a página de dados (acessível via GET)");
  });

module.exports = router;