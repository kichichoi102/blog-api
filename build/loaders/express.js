"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("@/api"));
const config_1 = __importDefault(require("@/config"));
exports.default = ({ app }) => {
    // server vibe checkers
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });
    app.use(body_parser_1.default.json());
    // jsonify req.body-> json
    app.use(express_1.default.json());
    // load api routes
    app.use(config_1.default.api.prefix, (0, api_1.default)());
    // expected common error handling
    // Endpoint not found handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    // Unauthorized Handler
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    // Catch All server error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json();
    });
};
//# sourceMappingURL=express.js.map