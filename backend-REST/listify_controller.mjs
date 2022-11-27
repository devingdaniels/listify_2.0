import 'dotenv/config';
import express, { response } from 'express';
import * as mongoMethods from './listify_model.mjs';

// Password hashing library
import bcrypt from 'bcrypt'

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();


app.listen(PORT, () => {
    console.log(`Express server live and listening on port ${PORT}...`);
});

// Middleware function to parse PUT and POST requests 
app.use(express.json());

// For HOSTING, ensure to npm install cors and add function


/* REGISTER NEW USER ROUTE */
app.post('/api/register_user', async (req, res) => {
    // Store data from client (should validate....)    
    const { fName, lName, email, password } = req.body
    // Encrypt the user password
    const encryptedPassword = await bcrypt.hash(password, 10)
     // Ensure email is not already in DB
    const existingUser = await mongoMethods.findByEmail({ email: email })      
    if (existingUser) {
       return res.send({ status: 'User already exists.' })            
    }
    else {
        // Create a new user in ListiFy database, in the user_login_info collection
        try {
            const response = await mongoMethods.createUser(fName, lName, email, encryptedPassword)            
            res.status(201).json({ status: 'User added successfully' })
        }
        catch (err) {
            console.log(err)
            res.status(400).json({ status: 'Error adding user in /api/register_user' })
        }
    }
})

/* LOGIN EXISTING USER ROUTE */
app.post('/api/login_user', async (req, res) => {
    const { email, password } = req.body
    // Check for user email
    const user = await mongoMethods.findByEmail({ email: email })
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            return res.json({
                status: 'User login success', data: {
                    name: user.fName,
                    email: user.email
            } })
        } else { 
            return res.send({status: 'Passwords do not match'})
        }                
    } else {
        return res.send({status: 'User not found'})
    }
})