// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
mongoose.connect('mongodb://localhost/garage')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Iterate over routes
routes.forEach((route, index) => {
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

