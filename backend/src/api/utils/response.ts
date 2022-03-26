import {Response} from "express";

const successResponse = (res: Response, status: number, result: any) => {
    res
        .status(status)
        .json({ result })
}

const errorResponse = (res: Response, status: number, error: Error) => {
    console.error(error);

    res
        .status(status)
        .json({ error: error.message })
}

export {
    successResponse,
    errorResponse
}