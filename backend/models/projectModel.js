const mongoose = require('mongoose')

// Define schema
const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: String,
    tasks: []
})

module.exports = mongoose.model('Project', projectSchema)