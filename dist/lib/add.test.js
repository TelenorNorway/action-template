"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
describe("add function", () => {
    it("adds 1 + 2 to equal 3", () => {
        expect((0, add_1.add)(1, 2)).toBe(3);
    });
});
