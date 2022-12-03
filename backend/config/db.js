// Import dependencies.
const  mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = () => { 
// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB!');
    }
});
}

module.exports = {
    connectDB
}