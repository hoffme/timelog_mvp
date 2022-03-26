import jcn from "../../../utils/join_class_names";
import {Page} from "../type";

import Link from "./link";

import style from './style.module.scss';

interface Props {
    pages: Page[]
    className?: string
}

const Nav = (props: Props) => {
    return <div className={jcn([style.container, props.className])}>
        {
            props.pages.map((page, key) => {
                return <Link
                    key={key}
                    page={page}
                    className={style.link}
                />
            })
        }
    </div>
}

export default Nav;