const { Schema, model } = require('mongoose')
const { validateEmail } = require('../../utils/emailValidator')

// this is a user schema
const userSchema = Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'please fill a valid email address'], //using a validateEmail function as an email validator 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},
    { timestamps: true }
)

const userModel = model('Users', userSchema)
module.exports = { userModel }