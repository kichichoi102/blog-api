"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./loaders/logger"));
async function startServer() {
    const app = (0, express_1.default)();
    await require('./loaders').default({ expressApp: app });
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    const port = config_1.default.port;
    app
        .listen(port, () => {
        logger_1.default.info(`
      ##############################
      Server listening on port: ${config_1.default.port} 
      ##############################
      `);
    })
        .on('error', err => {
        logger_1.default.error(err);
        process.exit(1);
    });
}
startServer();
//# sourceMappingURL=app.js.map