import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

const router = Router()

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Swagger API',
            version: '1.0.0',
            description: 'A Sample API',
            contact: {
                name: "Photon Khan"
            },
            servers: ["http://localhost:4000"]
        },
        swagger: "2.0",
        host: 'localhost:4000',
        basePath: '/',
    },
    apis: [
        `${__dirname}/routes/**/*.ts`,
        `${__dirname}/index.ts`,
    ],
}

const swaggerDocs = swaggerJSdoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default router