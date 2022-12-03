const mongoose = require('mongoose')

// Define schema
const projectSchema = mongoose.Schema({
    title: String,
    tasks: []
})

module.exports = mongoose.model('Project', projectSchema)