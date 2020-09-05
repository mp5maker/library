import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerOptions from '@myapp/api/swagger.json'

const router = Router()

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions))
export default router