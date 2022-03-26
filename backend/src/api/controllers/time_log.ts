import {Request} from "express";
import { v4 as UUIDv4 } from "uuid";

import {TimeLog, TimeLogSearchFilter, TimeLogStore} from "../../models/time_log";

import { asyncHandler } from "../utils/handler";

import Controller from "./controller";

class TimeLogController extends Controller {

    private readonly timeLogs: TimeLogStore;

    constructor(timeLogs: TimeLogStore) {
        super('/time_logs');

        this.timeLogs = timeLogs;
    }

    protected setup(): void {
        this.router.get('/:id', asyncHandler((req) => this.find(req)))
        this.router.post('/search', asyncHandler((req) => this.search(req)))
        this.router.post('/', asyncHandler((req) => this.create(req)))
        this.router.delete('/:id', asyncHandler((req) => this.delete(req)))
    }

    private async find(req: Request) {
        const id = req.params.id;
        return await this.timeLogs.find(id);
    }

    private async search(req: Request) {
        const filter: TimeLogSearchFilter = req.body;
        return await this.timeLogs.search(filter);
    }

    private async create(req: Request) {
        const time_log: TimeLog = req.body;
        time_log.id = UUIDv4();
        const success = await this.timeLogs.create(time_log);
        return { time_log, success };
    }

    private async delete(req: Request) {
        const id = req.params.id;
        return await this.timeLogs.delete(id);
    }

}

export default TimeLogController;