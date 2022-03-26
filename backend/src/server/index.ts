import express, {Express} from "express";
import {Server as HTTPServer} from "http";

import {ServerConfig} from "./config";

class Server {

    public readonly config: ServerConfig;
    private readonly app: Express;
    private server?: HTTPServer;

    constructor(config: ServerConfig) {
        this.config = config;
        this.app = express();

        this.app.use(this.config.router);
    }

    public start() {
        this.server = this.app.listen(this.config.port, () => {
            console.log(`server running on http://localhost:${this.config.port}`)
        })
    }

    public close() {
        this.server?.close((err?: Error) => {
            console.log(`server http://localhost:${this.config.port} closed`);
            if (err) console.error(err);
        })
    }
}

export default Server;