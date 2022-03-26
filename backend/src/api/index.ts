import { Router } from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import { APIConfig } from './config';

import Controller from "./controllers/controller";
import TimeLogController from "./controllers/time_log";

class API {

    public readonly config: APIConfig;
    public readonly controllers: Controller[];

    constructor(config: APIConfig) {
        this.config = config;
        this.controllers = [
            new TimeLogController(config.stores.time_log)
        ]
    }

    public get router(): Router {
        const router = Router();

        router.use(bodyParser.urlencoded({ extended: false }))
        router.use(bodyParser.json())
        router.use(cors())

        for (const controller of this.controllers) {
            router.use(controller.path, controller.router);
        }

        return router;
    }

}

export default API;