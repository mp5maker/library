"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    description: String
});
//# sourceMappingURL=index.js.map