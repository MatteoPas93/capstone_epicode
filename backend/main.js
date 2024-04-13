const express = require('express');
const cors = require('cors');
const db = require('./database/database');

require('dotenv').config();

const PORT = 3029;

const app = express();

const usersRoute = require('./routes/users');
const reviewsRoute = require('./routes/reviews');
const loginRoute = require('./routes/login');
const destinationRoute = require('./routes/destination')

app.use(express.json());
app.use(cors());

app.use('/', usersRoute);
app.use('/', reviewsRoute);
app.use('/', destinationRoute);
app.use('/', loginRoute);

// ! Database connection
db()

app.listen(PORT, () => console.log(`Server connected on port: ${PORT}`));