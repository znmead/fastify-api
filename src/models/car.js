// External dependencies:
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    price: Number,
    image: String,
    description: String,
    services: {
        oilChange: Boolean,
        tireRotation: Boolean,
        carWash: Boolean,
        carDetail: Boolean,
        type: Map, 
        of: String
    }
})

module.exports = mongoose.model('Car', carSchema)
