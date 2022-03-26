interface TimeLog {
    id: string
    start: Date
    end: Date
    description: string
}

interface TimeLogSearchFilter {
    start_min?: Date
    start_max?: Date
    end_min?: Date
    end_max?: Date
    order_by?: 'start' | 'end'
    order_asc?: boolean
    limit?: number
    offset?: number
}

interface TimeLogStore {
    find(id: string): Promise<TimeLog | null>
    search(filter: TimeLogSearchFilter): Promise<TimeLog[]>
    create(time_log: TimeLog): Promise<boolean>
    delete(id: string): Promise<boolean>
}

export type {
    TimeLog,
    TimeLogSearchFilter,
    TimeLogStore
}