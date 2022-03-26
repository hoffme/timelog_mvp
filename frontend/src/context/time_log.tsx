import {createContext, ReactNode, useCallback, useState} from "react";

import {TimeLog, TimeLogSearchFilter} from "../api/time_log/types";
import TimeLogStore from "../api/time_log/store";

interface TimeLogContextValue {
    loading: boolean
    filter: TimeLogSearchFilter
    results: TimeLog[]
    search: (filter: TimeLogSearchFilter) => Promise<void>
}

const TimeLogContext = createContext<TimeLogContextValue>({
    loading: false,
    filter: {},
    results: [],
    search: async () => { throw new Error('') }
})

interface Props {
    children?: ReactNode
}

const TimeLogProvider = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<TimeLogSearchFilter>({});
    const [results, setResults] = useState<TimeLog[]>([]);

    const search = useCallback(async (filter: TimeLogSearchFilter) => {
        setLoading(true);
        setFilter(filter);

        TimeLogStore.Search(filter)
            .then(setResults)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    return <TimeLogContext.Provider value={{
        loading,
        filter,
        results,
        search
    }}>
        { props.children }
    </TimeLogContext.Provider>
}

export default TimeLogContext;
export {
    TimeLogProvider
}