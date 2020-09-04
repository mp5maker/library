"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_1 = __importDefault(require("@myapp/swagger"));
const user_1 = __importDefault(require("@myapp/routes/user"));
const PORT = 4000;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(`${__dirname}/static`));
app.use(swagger_1.default);
app.use(user_1.default);
app.get('/', (_req, res) => res.send('Where all the api lives'));
const server = http_1.default.createServer(app);
server.listen(PORT, () => console.log(`You are connected to: ${PORT}`));
//# sourceMappingURL=index.js.map