const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const connectDB = async () => {
  return open({
    filename: "./data2.db",
    driver: sqlite3.Database,
  });
};

module.exports = { connectDB };