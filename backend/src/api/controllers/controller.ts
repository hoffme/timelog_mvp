import {Router} from "express";

abstract class Controller {

    public readonly path: string;
    public readonly router: Router;

    protected constructor(path: string) {
        this.path = path;
        this.router = Router();

        this.setup();
    }

    protected abstract setup(): void
}

export default Controller;