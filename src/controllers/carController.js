// External dependencies
import { boomify } from '@hapi/boom'

// Get Data Models
import Car from '../models/car'

// Get all cars
export async function getCars(req, reply) {
    try {
        const cars = await Car.find()
        return cars
    } catch (err) {
        throw boomify(err)
    }
}

// Get a single car
export async function getCar(req, reply) {
    try {
        const car = await Car.findById(req.params.id)
        return car
    } catch (err) {
        throw boomify(err)
    }
}

// Add a new car
export async function addCar(req, reply) {
    try {
        const car = new Car(req.body)
        await car.save()
        return car
    } catch (err) {
        throw boomify(err)
    }
}

// Update a car
export async function updateCar(req, reply) {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return car
    } catch (err) {
        throw boomify(err)
    }
}

// Delete a car
export async function deleteCar(req, reply) {
    try {
        const car = await Car.findByIdAndRemove(req.params.id)
        return car
    } catch (err) {
        throw boomify(err)
    }
}




