import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

const options = {
    swaggerDefinition: {
        info: {
            title: 'Swagger Test Bro',
            version: '1.0.0',
            description: 'A Practice API',
        },
        swagger: "2.0",
        host: 'localhost',
        basePath: '/',
    },
    apis: [
        `${__dirname}/routes/*.ts`
    ],
}

const specs = swaggerJSdoc(options);

const router = Router()
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

export default router