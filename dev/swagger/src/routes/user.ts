import { Router } from 'express'

const router = Router()

router.get('/users', function (_request, response) {
    return response.json({
        data: [
            { id: 1, name: "John Wick" },
            { id: 2, name: "John Lennon" },
        ],
    })
})

export default router