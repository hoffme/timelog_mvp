import knexConnect, { Knex } from 'knex';

import {Stores} from "../../models/stores";

import KnexTimeLogStore from "./stores/time_log";

import {KnexConfig} from "./config";

interface KnexStores extends Stores {
    time_log: KnexTimeLogStore
}

class KnexStorage {

    private readonly config: KnexConfig;
    private knex?: Knex
    private _stores?: KnexStores

    constructor(config: KnexConfig) {
        this.config = config;
    }

    public async connect() {
        const config = this.getConnectionConfig();
        this.knex = knexConnect(config);

        this._stores = {
            time_log: new KnexTimeLogStore(this.knex, this.config.tables.time_log)
        }
    }

    public async migrate() {
        await this._stores?.time_log.setup();
    }

    public async delete() {
        await this._stores?.time_log.drop();
    }

    public get stores(): Stores {
        if (!this._stores) throw new Error('storage not connected');
        return this._stores;
    }

    private getConnectionConfig() {
        switch (this.config.connection.type) {
            case "sqlite":
                return {
                    client: 'sqlite3',
                    connection: { filename: this.config.connection.path }
                }
            case "mysql":
                return {
                    client: 'mysql',
                    connection: {
                        host: this.config.connection.host,
                        user: this.config.connection.user,
                        password: this.config.connection.password,
                        database: this.config.connection.database,
                    },
                }
            case "pg":
                return {
                    client: 'pg',
                    connection: this.config.connection.uri
                }
        }

        throw new Error('invalid database config');
    }
}

export default KnexStorage;