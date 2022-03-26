import jcn from "../../../../../utils/join_class_names";
import {HeaderProps} from "../../header";

import Field from "../../field";

import style from './style.module.scss';

interface RangeDate {
    ini: Date
    end: Date
}

interface Props {
    header?: HeaderProps
    className?: string
    type?: 'date' | 'time' | 'datetime'
    value: RangeDate
    onChange: (value: RangeDate) => void
}

const pad = (number: number) => number < 10 ? `0${number}` : number;

const dateToString = (date: Date) => [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join('-');

const stringToDate = (value: string) => {
    const [year, month, day] = value.split('-').map(n => parseFloat(n))
    return new Date(year, month - 1, day);
}

const FieldRangeDate = (props: Props) => {
    return <Field
        header={props.header}
        className={jcn([style.container, props.className])}
        contentClassName={style.content}
    >
        <input
            type={'date'}
            value={dateToString(props.value.ini)}
            max={dateToString(props.value.end)}
            onChange={(e) => props.onChange({
                ...props.value,
                ini: stringToDate(e.currentTarget.value)
            })}
        />
        <input
            type={'date'}
            value={dateToString(props.value.end)}
            min={dateToString(props.value.ini)}
            onChange={(e) => props.onChange({
                ...props.value,
                end: stringToDate(e.currentTarget.value)
            })}
        />
    </Field>
}

export default FieldRangeDate;