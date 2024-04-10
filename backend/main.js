const express = require('express');
const cors = require('cors');
const db = require('./database/database');

require('dotenv').config();

const PORT = 3029;

const app = express();

const usersRoute = require('./routes/users');
const reviewsRoute = require('./routes/reviews');
const summerDestinationRoute = require('./routes/summerDestination');
const winterDestinationRoute = require('./routes/winterDestination');
const allSeasonsDestinationRoute = require('./routes/allSeasonsDestination');
const loginRoute = require('./routes/login');

app.use(express.json());
app.use(cors());

app.use('/', usersRoute);
app.use('/', reviewsRoute);
app.use('/', summerDestinationRoute);
app.use('/', winterDestinationRoute);
app.use('/', allSeasonsDestinationRoute);
app.use('/', loginRoute);

// ! Database connection
db()

app.listen(PORT, () => console.log(`Server connected on port: ${PORT}`));