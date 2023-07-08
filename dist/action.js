"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./lib/add");
async function action() {
    return (0, add_1.add)(1, 2);
}
exports.default = action;
