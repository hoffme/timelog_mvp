import {useState} from "react";

import jcn from "../../../utils/join_class_names";

import {TimeLogCreateFields} from "../../../api/time_log/types";
import TimeLogStore from "../../../api/time_log/store";

import Datetime from "../../commons/inputs/datetime";
import FieldText from "../../commons/inputs/text";
import Button from "../../commons/buttons/default";
import Loading from "../../commons/loading";

import style from './style.module.scss';

interface Props {
    className?: string
}

const TimeLogCreate = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [description, setDescription] = useState('');

    const submit = () => {
        setLoading(true);

        const fields: TimeLogCreateFields = {
            start,
            end,
            description
        }

        TimeLogStore.Create(fields)
            .finally(() => setLoading(false));
    }

    return <div className={jcn([style.container, props.className])} >
        <h3 className={style.title}>Create Time Log</h3>
        <Datetime
            header={{ title: 'Start' }}
            value={start}
            onChange={setStart}
        />
        <Datetime
            header={{ title: 'End' }}
            value={end}
            onChange={setEnd}
        />
        <FieldText
            header={{ title: 'Description' }}
            input={{
                value: description,
                onChange: e => setDescription(e.currentTarget.value)
            }}
        />
        <Button onClick={submit}>
            { loading ? <Loading /> : 'Save' }
        </Button>
    </div>
}

export default TimeLogCreate;