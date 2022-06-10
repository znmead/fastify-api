//Import our controllers
const carController = require('../controllers/carController')

const routes = [
    {
        method: 'GET',
        url: '/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/cars/:id',
        handler: carController.getCar
    },
    {
        method: 'POST',
        url: '/cars',
        handler: carController.addCar,
        schema: [{
            body: {
                make: { type: 'string', required: true },
                model: { type: 'string', required: true },
                year: { type: 'number', required: true },
                color: { type: 'string', required: true },
                price: { type: 'number', required: true },
                image: { type: 'string', required: true },
                description: { type: 'string', required: true },
                services: {
                    oilChange: { type: 'boolean', required: true },
                    tireRotation: { type: 'boolean', required: true },
                    carWash: { type: 'boolean', required: true },
                    carDetail: { type: 'boolean', required: true },
                    type: { type: 'string', required: true },
                    of: { type: 'string', required: true }
                }
            }
        }]
    },
    {
        method: 'PUT',
        url: '/cars/:id',
        handler: carController.updateCar,
        schema: [{
            body: {
                make: { type: 'string', required: true },
                model: { type: 'string', required: true },
                year: { type: 'number', required: true },
                color: { type: 'string', required: true },
                price: { type: 'number', required: true },
                image: { type: 'string', required: true },
                description: { type: 'string', required: true },
                services: {
                    oilChange: { type: 'boolean', required: true },
                    tireRotation: { type: 'boolean', required: true },
                    carWash: { type: 'boolean', required: true },
                    carDetail: { type: 'boolean', required: true },
                    type: { type: 'string', required: true },
                    of: { type: 'string', required: true }
                }
            }
        }]
    },
    {
        method: 'DELETE',
        url: '/cars/:id',
        handler: carController.deleteCar
    }
]

module.exports = routes