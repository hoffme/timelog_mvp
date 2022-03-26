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

const pad = (number: number) => number < 10 ? `0${number}` : number;

const dateToString = (date: Date) => [date.getFullYear(), pad(date.getMonth()), pad(date.getDate())].join('-');

const stringToDate = (value: string) => {
    const [year, month, day] = value.split('-').map(n => parseFloat(n))
    return new Date(year, month, day);
}

const FieldDate = (props: Props) => {
    return <FieldInput
        header={props.header}
        input={{
            type: 'date',
            min: props.min ? dateToString(props.min) : undefined,
            max: props.max ? dateToString(props.max) : undefined,
            value: dateToString(props.value),
            onChange: (e) => {
                props.onChange(stringToDate(e.currentTarget.value))
            }
        }}
        className={props.className}
    />
}

export default FieldDate;