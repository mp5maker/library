"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
    apis: ['user.ts'],
};
const specs = swagger_jsdoc_1.default(options);
const router = express_1.Router();
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = router;
//# sourceMappingURL=swagger.js.map