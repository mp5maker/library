"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
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