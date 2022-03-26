import {HeaderProps} from "../header";

import FieldInput from "../input";

interface Props {
    header?: HeaderProps
    className?: string
    min?: Date
    max?: Date
    value: Date
    onChange: (value: Date) => void
}

const pad = (v: number): string => `${v < 10 ? '0' : ''}${v}`;

const dateToString = (d: Date) => [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');

const stringToDate = (value: string, date: Date) => {
    const [hours, minutes, seconds] = value.split(':').map(n => parseFloat(n));
    date.setHours(hours, minutes, seconds);
    return date;
}

const FieldTime = (props: Props) => {
    return <FieldInput
        header={props.header}
        input={{
            type: 'time',
            step: 1,
            min: props.min ? dateToString(props.min) : undefined,
            max: props.max ? dateToString(props.max) : undefined,
            value: dateToString(props.value),
            onChange: (e) => {
                props.onChange(stringToDate(e.currentTarget.value, new Date()))
            }
        }}
        className={props.className}
    />
}

export default FieldTime;