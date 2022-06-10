// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
import { connect } from 'mongoose'

// Import Routes
import { forEach } from './routes'

// Import Swagger Options
import { options } from './config/swagger'

// Register Swagger
fastify.register(require('fastify-swagger'), options)

// Connect to DB
connect('mongodb://localhost/garage')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Iterate over routes
forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
async function start() {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`FAF server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

// Hello, world!
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

start()

