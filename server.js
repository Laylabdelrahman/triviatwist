//mongodb
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require("./api/User");

//for accepting post from data
const bodyParser = require("express").json;
app.use(bodyParser());

 // cors accesss to enable application on different hosts to send request
    const cors = require("cors");
    app.use(cors());

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})