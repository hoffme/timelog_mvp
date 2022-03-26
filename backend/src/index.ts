import 'dotenv/config';

import Server from "./server";
import API from "./api";
import KnexStorage from "./storage/knex";

const PORT = process.env.PORT || '4000';
const POSTGRES_URI = process.env.POSTGRES_URI || '';
const ARGS = process.argv.slice(2);

(async () => {
    const storage = new KnexStorage({
        connection: { type: 'pg', uri: POSTGRES_URI },
        tables: { time_log: 'time_log' }
    });
    await storage.connect();

    if (ARGS[0] === 'migrate') {
        await storage.migrate();
        process.exit();
        return;
    }
    if (ARGS[0] === 'clear') {
        await storage.delete();
        process.exit();
        return;
    }

    const api = new API({
        stores: storage.stores
    });

    const server = new Server({
        port: PORT,
        router: api.router
    });

    server.start()
})()
    .catch(console.error)