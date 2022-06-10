//Import our controllers
import { 
    getCars, 
    getCar, 
    addCar, 
    updateCar, 
    deleteCar 
} from '../controllers/carController'

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: getCar
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: addCar,
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
        url: '/api/cars/:id',
        handler: updateCar,
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
        url: '/api/cars/:id',
        handler: deleteCar
    }
]

export default routes