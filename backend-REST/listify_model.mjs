// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

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


// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const { Schema } = mongoose;

// Schema for a user of the app
const UserSchema = new mongoose.Schema({
    fName: String, 
    lName: String,
    email:  {
            type: String, 
            unique: true
        },
    password: String
})

// Models are fancy constructors compiled from
// Schema definitions. An instance of a model is called a
// document. Models are responsible for creating and
// reading documents from the underlying MongoDB database.

// ('nameOfModel', model, 'nameOfCollection)
const User = mongoose.model('UserInfo', UserSchema, 'user_login_info')

// CREATE model *****************************************
const createUser = async (fName, lName, email, password) => {
    const user = new User({ 
        fName: fName, 
        lName: lName, 
        email: email,
        password: password,        
    });
    return user.save();
}




/*  FIND METHODS*/
const findByEmail = async (email) => { 
    const query = User.findOne(email);
    return query.exec();
}




export { createUser, findByEmail }