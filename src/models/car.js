// External dependencies:
import { 
    Schema, 
    model as _model 
} from 'mongoose'

const carSchema = new Schema({
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

export default _model('Car', carSchema)
