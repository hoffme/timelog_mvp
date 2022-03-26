import {Knex} from "knex";

import {TimeLog, TimeLogSearchFilter, TimeLogStore} from "../../../models/time_log";

class KnexTimeLogStore implements TimeLogStore {

    private readonly knex: Knex;
    private readonly table: string;

    constructor(knex: Knex, table: string) {
        this.knex = knex;
        this.table = table;
    }

    public async setup(): Promise<void> {
        await this.knex.schema.createTable(this.table, table => {
            table.string('id').primary().unique();
            table.datetime('start');
            table.datetime('end');
            table.string('description', 10000);
        })
    }

    public async drop(): Promise<void> {
        return this.knex.schema.dropTable(this.table);
    }

    public async find(id: string): Promise<TimeLog | null> {
        const rows = await this.knex
            .from(this.table)
            .select("*")
            .where('id', id)
            .limit(1);

        if (rows.length === 0) return null;

        return rows[0];
    }

    public async search(filter: TimeLogSearchFilter): Promise<TimeLog[]> {
        const query = this.knex
            .from(this.table)
            .select("*");

        if (filter.start_min) query.where('start', '>', new Date(filter.start_min));
        if (filter.start_max) query.where('start', '<', new Date(filter.start_max));
        if (filter.end_min) query.where('end', '>', new Date(filter.end_min));
        if (filter.end_max) query.where('end', '<', new Date(filter.end_max));
        if (filter.order_by) query.orderBy(filter.order_by, filter.order_asc ? 'asc' : 'desc');
        if (filter.limit) query.limit(filter.limit);
        if (filter.offset) query.offset(filter.offset);

        return query;
    }

    public async create(time_log: TimeLog): Promise<boolean> {
        await this.knex
            .from(this.table)
            .insert(time_log);

        return true;
    }

    public async delete(id: string): Promise<boolean> {
        await this.knex
            .from(this.table)
            .where('id', id)
            .delete();

        return true;
    }

}

export default KnexTimeLogStore;