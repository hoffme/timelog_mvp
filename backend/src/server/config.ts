import {Router} from "express";

interface ServerConfig {
    port: string
    router: Router
}

export type {
    ServerConfig
}