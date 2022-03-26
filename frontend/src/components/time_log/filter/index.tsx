import {FormEvent, useState} from "react";

import {TimeLogSearchFilter} from "../../../api/time_log/types";
import jcn from "../../../utils/join_class_names";

import Button from "../../commons/buttons/default";
import FieldRangeDate from "../../commons/inputs/range/date";
import InputSelect from "../../commons/inputs/select";

import style from './style.module.scss';

interface Props {
    className?: string
    value: TimeLogSearchFilter
    setValue: (filter: TimeLogSearchFilter) => void
}

const TimeLogFilter = (props: Props) => {
    const ini = new Date();
    ini.setDate(ini.getDate() - 7);

    const [rangeStart, setRangeStart] = useState({
        ini: props.value.start_min || ini,
        end: props.value.start_max || new Date(),
    })
    const [rangeEnd, setRangeEnd] = useState({
        ini: props.value.end_min || ini,
        end: props.value.end_max || new Date(),
    })
    const [order, setOrder] = useState<string>(props.value.order_by || 'start_asc');

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const orderData = order.split('_');

        const filter: TimeLogSearchFilter = {
            start_min: rangeStart.ini,
            start_max: rangeStart.end,
            end_min: rangeEnd.ini,
            end_max: rangeEnd.end,
            order_by: orderData[0],
            order_asc: orderData.length > 1 && orderData[1] === 'asc'
        }

        props.setValue(filter);
    }

    return <form onSubmit={submit} className={jcn([style.container, props.className])}>
        <FieldRangeDate
            header={{ title: 'Range Start' }}
            value={rangeStart}
            onChange={setRangeStart}
        />
        <FieldRangeDate
            header={{ title: 'Range End' }}
            value={rangeEnd}
            onChange={setRangeEnd}
        />
        <InputSelect
            header={{ title: 'Order By' }}
            select={{
                value: order,
                onChange: (e) => setOrder(e.currentTarget.value)
            }}
        >
            <option value={'start_asc'} children={'Start Ascendant'} />
            <option value={'start_des'} children={'Start Descendent'} />
            <option value={'end_asc'} children={'End Ascendant'} />
            <option value={'end_des'} children={'End Descendent'} />
        </InputSelect>
        <Button children={'Search'} className={style.searchButton} />
    </form>
}

export default TimeLogFilter;