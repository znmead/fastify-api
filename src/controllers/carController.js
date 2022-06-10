// External dependencies
const boom = require('boom')

// Get Data Models
const Car = require('../models/car')

// Get all cars
exports.getCars = async (req, reply) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get a single car
exports.getCar = async (req, reply) => {
    try {
        const car = await Car.findById(req.params.id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new car
exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body)
        await car.save()
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update a car
exports.updateCar = async (req, reply) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
    try {
        const car = await Car.findByIdAndRemove(req.params.id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}




