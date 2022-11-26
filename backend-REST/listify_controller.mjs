import 'dotenv/config';
import express, { response } from 'express';
import * as mongoMethods from './listify_model.mjs';

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();

// Middleware function to parse PUT and POST requests 
app.use(express.json());

// For hosting, ensure to npm install cors and add function


/* CREATE NEW USER ENDPOINT */
app.post('/api/register_user', async (req, res) => {
    // Store data from client (should validate....)    
    const { fName, lName, email, password } = req.body
    // Create a new user in ListiFy database, in the user_login_info collection
    try {
        const response = await mongoMethods.createUser( fName, lName, email, password )
        console.log(response)
        res.status(201).json({status: 'User added successfully'})
    }
    catch (err) { 
        console.log(err)        
        res.status(400).json({error: 'Error adding user in /api/register_user'})
    }    
})














app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});



