const mongoose = require("mongoose");

const database = () => {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Database connection error!"));
  db.once("open", () => {
    console.log('Database successfully connected"');
  });
};

module.exports = database;
