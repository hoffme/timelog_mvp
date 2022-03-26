interface SqliteConnectionConfig {
    type: 'sqlite'
    path: string
}

interface PostgresConnectionConfig {
    type: 'pg'
    uri: string
}

interface MysqlConnectionConfig {
    type: 'mysql'
    host: string
    user: string
    password: string
    database: string
}

interface KnexConfig {
    connection: SqliteConnectionConfig | PostgresConnectionConfig | MysqlConnectionConfig
    tables: {
        time_log: string
    }
}

export type {
    KnexConfig
}