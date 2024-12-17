require('dotenv').config();

//mongodb
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require("./api/User");

//for accepting post from data
const bodyParser = require("express").json;
app.use(bodyParser());

app.use(express.json());

 // cors accesss to enable application on different hosts to send request
const cors = require("cors");
app.use(cors());

app.use('/user', UserRouter)

// Root route to avoid 404 errors
app.get("/", (req, res) => {
    res.send("Welcome to TriviaTwist API!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})