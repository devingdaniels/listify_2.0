const mongoose = require('mongoose')

// Define schema
const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)