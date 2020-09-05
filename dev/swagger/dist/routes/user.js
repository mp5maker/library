"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
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
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map