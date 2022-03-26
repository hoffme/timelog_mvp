import {useContext, useEffect} from "react";

import TimeLogContext from "../../context/time_log";

import TimeLogFilter from "../../components/time_log/filter";
import TimeLogResults from "../../components/time_log/results";

import style from './style.module.scss';

const TimeLogsPage = () => {
    const { loading, search, filter, results } = useContext(TimeLogContext);

    useEffect(() => { search({}).catch(console.error) }, [search])

    return <div className={style.container}>
        <TimeLogFilter
            className={style.filter}
            value={filter}
            setValue={filter => search(filter)}
        />
        <TimeLogResults
            className={style.results}
            values={results}
            loading={loading}
        />
    </div>
}

export default TimeLogsPage;