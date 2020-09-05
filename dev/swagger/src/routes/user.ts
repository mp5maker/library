import { Router } from 'express'

const router = Router()

/**
 * @swagger
 * /users:
 *    get:
 *      tags:
 *          - Users
 *      summary: This should give list of users.
 *      description: User with name and id.
 *      responses:
 *        200:
 *          description: Returns users.
 */
router.get('/users', function (_request, response) {
    return response.json({
        data: [
            { id: 1, name: "John Wick" },
            { id: 2, name: "John Lennon" },
        ],
    })
})

export default router