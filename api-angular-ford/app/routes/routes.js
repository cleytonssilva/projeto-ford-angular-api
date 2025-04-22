const express = require("express");
const { connectDB } = require("./config/database");

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

module.exports = router;