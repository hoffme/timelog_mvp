import {DetailedHTMLProps, ReactNode, SelectHTMLAttributes} from "react";

import jcn from "../../../../utils/join_class_names";

import InputHeader, {HeaderProps} from "../header";

import style from './style.module.scss';

interface Props {
    className?: string
    header?: HeaderProps
    select?: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    children?: ReactNode
}

const InputSelect = (props: Props) => {
    return <div className={jcn([style.container, props.className])}>
        <InputHeader
            { ...props.header}
            className={jcn([style.header, props.header?.className])}
        />
        <select
            { ...props.select }
            className={jcn([style.select, props.select?.className])}
            children={props.children}
        />
    </div>
}

export default InputSelect;