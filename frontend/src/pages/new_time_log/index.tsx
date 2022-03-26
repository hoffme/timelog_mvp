import TimeLogCreate from "../../components/time_log/create";

import style from './style.module.scss';

const NewTimeLogPage = () => {
    return <div className={style.container}>
        <TimeLogCreate className={style.form} />
    </div>
}

export default NewTimeLogPage;