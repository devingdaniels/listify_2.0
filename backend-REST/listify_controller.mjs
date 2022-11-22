import 'dotenv/config';
import express, { response } from 'express';
import * as tasks from './listify_model.mjs';

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();

// Middleware function to parse PUT and POST requests 
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


// CREATE endpoint for DB
app.post('/test', (req, res) => {   
    
    let test = req.body.text
    test +=  '.POST'

    res.status(201).json(test)
})




