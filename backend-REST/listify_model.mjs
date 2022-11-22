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
const projectSchema = new Schema({
    title: String,
    tasks: [{ title: String, date: Date, comment: String, isComplete: Boolean }]
});

// To use our schema definition, we need to convert our projectSchema into a Model we can work with.
const Project = mongoose.model('Project', projectSchema);


const createProject = async (title, tasks) => { 
    const project = new Project({
        title: title, 
        tasks: tasks
    })
    return project.save()
}





export { createProject}