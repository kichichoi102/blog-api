import express from "express";

async function startServer() {
    const app = express();

    app.listen(4000, () => {
        console.log('Listening on port: 4000');
    }).on('error', err => {
        console.log(err);
        process.exit(1);
    });
}

startServer()