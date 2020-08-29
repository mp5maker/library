"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeAdmin1598717445045 = void 0;
class FakeAdmin1598717445045 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.query(`
            insert into public.user ("username", "email", "password")
            values ('ben', 'ben@gmail.com', 'ben');
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.FakeAdmin1598717445045 = FakeAdmin1598717445045;
//# sourceMappingURL=1598717445045-FakeAdmin.js.map