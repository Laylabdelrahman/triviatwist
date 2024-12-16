require('dotenv').config();

const mongoose = require("mongoose");

// Get the MongoDB URI from the .env file
const uri = process.env.MONGO_URI;

mongoose.connect(uri,)

.then(() => {
        console.log("DB Connected");
})
.catch((err) => console.log('Error connecting to MongoDB: ', err));
