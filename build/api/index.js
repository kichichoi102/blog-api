"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./routes/user"));
const post_1 = __importDefault(require("./routes/post"));
const comment_1 = __importDefault(require("./routes/comment"));
exports.default = () => {
    const router = (0, express_1.Router)();
    (0, user_1.default)(router);
    (0, post_1.default)(router);
    (0, comment_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map