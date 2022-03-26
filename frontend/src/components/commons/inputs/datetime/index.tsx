import {HeaderProps} from "../header";

import Field from "../field";
import FieldDate from "../date";
import FieldTime from "../time";
import Button from "../../buttons/default";

import style from './style.module.scss';

interface Props {
    header?: HeaderProps
    className?: string
    min?: Date
    max?: Date
    value: Date
    onChange: (value: Date) => void
}

const FieldDateTime = (props: Props) => {
    return <Field header={props.header} contentClassName={style.container}>
        <FieldDate
            max={props.max}
            min={props.min}
            value={props.value}
            onChange={value => {
                props.onChange(new Date(
                    value.getFullYear(),
                    value.getMonth(),
                    value.getDate(),
                    props.value.getHours(),
                    props.value.getMinutes(),
                    props.value.getSeconds()
                ));
            }}
        />
        <FieldTime
            max={props.max}
            min={props.min}
            value={props.value}
            onChange={value => {
                props.onChange(new Date(
                    props.value.getFullYear(),
                    props.value.getMonth(),
                    props.value.getDate(),
                    value.getHours(),
                    value.getMinutes(),
                    value.getSeconds()
                ));
            }}
        />
        <Button
            className={style.button}
            onClick={()=> props.onChange(new Date())}
            children={'Now'}
        />
    </Field>
}

export default FieldDateTime;