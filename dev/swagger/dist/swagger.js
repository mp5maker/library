"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const router = express_1.Router();
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
};
const swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
exports.default = router;
//# sourceMappingURL=swagger.js.map