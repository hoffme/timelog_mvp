import Requests from "../requests";

import {TimeLog, TimeLogCreateFields, TimeLogFindFilter, TimeLogSearchFilter, TimeLogUpdateFields} from "./types";

class TimeLogStore {

    private constructor() {}

    public static async Find(filter: TimeLogFindFilter): Promise<TimeLog> {
        return await Requests.fetch<void, TimeLog>({
            uri: `/time_logs/${filter.id}`,
            method: 'GET'
        })
    }

    public static async Search(filter: TimeLogSearchFilter): Promise<TimeLog[]> {
        return await Requests.fetch<TimeLogSearchFilter, TimeLog[]>({
            uri: `/time_logs/search`,
            method: 'POST',
            body: filter
        })
    }

    public static async Create(fields: TimeLogCreateFields): Promise<TimeLog> {
        return await Requests.fetch<TimeLogCreateFields, TimeLog>({
            uri: `/time_logs`,
            method: 'POST',
            body: fields
        })
    }

    public static async Update(filter: TimeLogFindFilter, fields: TimeLogUpdateFields): Promise<TimeLog> {
        return await Requests.fetch<TimeLogUpdateFields, TimeLog>({
            uri: `/time_logs/${filter.id}`,
            method: 'PUT',
            body: fields
        })
    }

    public static async Delete(filter: TimeLogFindFilter): Promise<TimeLog> {
        return await Requests.fetch<void, TimeLog>({
            uri: `/time_logs/${filter.id}`,
            method: 'DELETE'
        })
    }

}

export default TimeLogStore;