interface TimeLog {
    id: string
    start: string
    end: string
    description: string
}

interface TimeLogFindFilter {
    id: string
}

interface TimeLogSearchFilter {
    start_min?: Date
    start_max?: Date
    end_min?: Date
    end_max?: Date
    order_by?: string // start | end
    order_asc?: boolean
    limit?: number
    offset?: number
}

interface TimeLogCreateFields {
    start: Date
    end: Date
    description: string
}

interface TimeLogUpdateFields {
    start: Date
    end: Date
    description: string
}

export type {
    TimeLog,
    TimeLogFindFilter,
    TimeLogSearchFilter,
    TimeLogCreateFields,
    TimeLogUpdateFields
}