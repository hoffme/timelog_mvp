import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

import jcn from "../../../../utils/join_class_names";

import {HeaderProps} from "../header";

import Field from "../field";

import style from './style.module.scss';

interface Props {
    className?: string
    header?: HeaderProps
    input?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
}

const FieldText = (props: Props) => {
    return <Field
        header={props.header}
        className={jcn([style.container, props.className])}
        contentClassName={style.content}
    >
        <textarea
            {...props.input}
            className={jcn([style.input, props.input?.className])}
        />
    </Field>
}

export default FieldText;