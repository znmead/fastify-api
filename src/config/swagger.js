export const options = {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify, and Swagger. Fast as fuuuuuck, boi!',
            version: '1.0.1'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
};
//# sourceMappingURL=swagger.js.map
