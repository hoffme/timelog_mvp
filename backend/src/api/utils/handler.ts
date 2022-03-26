import {NextFunction, Request, Response} from "express";

import {errorResponse, successResponse} from "./response";

type AHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>

const asyncHandler = (handler: AHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        handler(req, res, next)
            .then(result => successResponse(res, 200, result))
            .catch((err: Error) => errorResponse(res, 500, err))
    }
}

export {
    asyncHandler
}