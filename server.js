require('dotenv').config();

// mongodb
require('./config/db');

const express = require('express'); // Add this line to require express
const app = express();
const port = process.env.PORT || 3000;

const UserRouter = require("./api/User");

// Body parser middleware is already built into express, so you can directly use express.json()
app.use(express.json()); // Use express.json() directly instead of bodyParser

// CORS to enable application on different hosts to send requests
const cors = require("cors");
app.use(cors());

app.use('/user', UserRouter);

// Root route to avoid 404 errors
app.get("/", (req, res) => {
    res.send("Welcome to TriviaTwist API!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
