import {ReactNode, useState} from "react";

import jcn from "../../../../utils/join_class_names";

import Header, {HeaderProps} from "../header";

import style from './style.module.scss';

interface Props {
    className?: string
    contentClassName?: string
    header?: HeaderProps
    children?: ReactNode
}

const Field = (props: Props) => {
    const [active, setActive] = useState(false);

    return <div
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        className={jcn([style.container, props.className])}
    >
        <Header
            { ...props.header }
            active={active}
            className={jcn([style.header, props.header?.className])}
        />
        <div className={jcn([style.content, props.contentClassName])} >
            { props.children }
        </div>
    </div>
}

export default Field;