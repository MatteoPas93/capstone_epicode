const mongoose = require("mongoose");


const database = () => {
  mongoose.connect(process.env.MONGODB_URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Database connection error!"));
  db.once("open", () => {
    console.log('Database successfully connected"');
  });
};

module.exports = database;
