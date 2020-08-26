"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const get_1 = __importDefault(require("lodash/get"));
exports.validateRegister = (options) => {
    const username = get_1.default(options, 'username', '');
    const email = get_1.default(options, 'email', '');
    const password = get_1.default(options, 'password', '');
    if (!email.includes('@')) {
        return [
            {
                field: "email",
                message: "INVALID_EMAIL"
            }
        ];
    }
    if (username.length <= 2) {
        return [
            {
                field: "username",
                message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
            }
        ];
    }
    if (password.length <= 2) {
        return [
            {
                field: "password",
                message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
            }
        ];
    }
    if (username.includes('@')) {
        return [
            {
                field: "username",
                message: "CANNOT_INCLUDE_AN_@"
            }
        ];
    }
    return null;
};
//# sourceMappingURL=validateRegister.js.map