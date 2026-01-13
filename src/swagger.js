const swaggerSpec = {
    openapi: '3.0.0',
    info: {
        title: 'API - Usuarios y Productos',
        version: '1.0.0',
        description: 'Documentación OpenAPI para la aplicación de usuarios y productos',
    },
    servers: [
        {
        url: 'http://localhost:3000',
        },
    ],
    components: {
        schemas: {
        User: {
            type: 'object',
            properties: {
            _id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            },
        },
        Product: {
            type: 'object',
            properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            price: { type: 'number' },
            description: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            },
        },
        },
        securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
        },
    },
    security: [{ bearerAuth: [] }],
    paths: {
        '/products': {
        get: {
            tags: ['Products'],
            summary: 'Obtener todos los productos',
            responses: {
            '200': {
                description: 'Lista de productos',
                content: {
                'application/json': {
                    schema: { type: 'object' },
                },
                },
            },
            },
        },
        post: {
            tags: ['Products'],
            summary: 'Crear un producto',
            requestBody: {
            required: true,
            content: {
                'application/json': {
                schema: { $ref: '#/components/schemas/Product' },
                },
            },
            },
            responses: {
            '201': { description: 'Producto creado' },
            },
        },
        },
        '/products/{id}': {
        get: {
            tags: ['Products'],
            summary: 'Obtener producto por ID',
            parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Producto encontrado' }, '404': { description: 'No encontrado' } },
        },
        put: {
            tags: ['Products'],
            summary: 'Actualizar producto por ID',
            parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
            requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Product' } } } },
            responses: { '200': { description: 'Producto actualizado' } },
        },
        delete: {
            tags: ['Products'],
            summary: 'Eliminar producto por ID',
            parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Producto eliminado' }, '404': { description: 'No encontrado' } },
        },
        },
        '/users/register': {
        post: {
            tags: ['Users'],
            summary: 'Registrar usuario',
            requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/User' } } } },
            responses: { '201': { description: 'Usuario creado' } },
        },
        },
        '/users/login': {
        post: {
            tags: ['Users'],
            summary: 'Login',
            requestBody: { required: true, content: { 'application/json': { schema: { type: 'object' } } } },
            responses: { '200': { description: 'Token' }, '400': { description: 'Credenciales inválidas' } },
        },
        },
        '/users/verify-user': {
        get: {
            tags: ['Users'],
            summary: 'Verificar usuario (obtener datos del usuario autenticado)',
            security: [{ bearerAuth: [] }],
            responses: {
            '200': {
                description: 'Usuario verificado',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/User' } } },
            },
            '401': { description: 'No autorizado' },
            },
        },
        },
        '/users/update': {
        put: {
            tags: ['Users'],
            summary: 'Actualizar usuario autenticado',
            security: [{ bearerAuth: [] }],
            requestBody: {
            required: true,
            content: {
                'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                    username: { type: 'string' },
                    email: { type: 'string' },
                    password: { type: 'string' },
                    },
                },
                },
            },
            },
            responses: { '200': { description: 'Usuario actualizado' }, '401': { description: 'No autorizado' } },
        },
        },
    },
};

module.exports = swaggerSpec;
