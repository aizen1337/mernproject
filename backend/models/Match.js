const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const matchSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rounds: {
        type: Number,
        required: true
    },
    boxer: {
        type: String,
        required: true
    },
    boxer1: {
        type: String,
        required: true
    },
},
    {timestamps:true})

module.exports = mongoose.model('Match', matchSchema)