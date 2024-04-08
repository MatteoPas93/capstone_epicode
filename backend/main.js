const express = require('express');
const cors = require('cors');
const db = require('./database/database');

require('dotenv').config();

const PORT = 3028;

const app = express();

app.use(express.json());
app.use(cors());

// ! Database connection
db()

app.listen(PORT, () => console.log(`Server connected on port: ${PORT}`));