import jcn from "../../../utils/join_class_names";
import {TimeLog} from "../../../api/time_log/types";

import Loading from "../../commons/loading";

import style from './style.module.scss';

interface Props {
    values: TimeLog[]
    loading?: boolean
    className?: string
}

const TimeLogResults = (props: Props) => {
    return <div className={jcn([style.container, props.className])}>
        <div className={style.header}>
            <label className={style.id}>ID</label>
            <label className={style.start}>Start</label>
            <label className={style.end}>End</label>
            <label className={style.description}>Description</label>
        </div>
        <div className={style.rows}>
            { props.loading && <Loading /> }
            {
                !props.loading && props.values.length === 0 &&
                <label className={style.notFound}>Not Results</label>
            }
            {
                !props.loading && props.values.map((log, key) => {
                    const start = new Date(log.start);
                    const end = new Date(log.end);

                    return <div
                        key={key}
                        className={style.row}
                    >
                        <label className={style.id}>{log.id.slice(0, 8)}</label>
                        <label className={style.start}>
                            {`${start.toLocaleDateString()} ${start.toLocaleTimeString()}`}
                        </label>
                        <label className={style.end}>
                            {`${end.toLocaleDateString()} ${end.toLocaleTimeString()}`}
                        </label>
                        <label className={style.description}>{log.description}</label>
                    </div>
                })
            }
        </div>
    </div>
}

export default TimeLogResults;