import { NavLink } from "react-router-dom";

import jcn from "../../../../utils/join_class_names";
import {Page} from "../../type";

import style from './style.module.scss';

interface Props {
    page: Page
    className?: string
}

const Link = (props: Props) => {
    if (props.page.link_disabled) return <></>

    return <div className={jcn([style.container, props.className])}>
        <NavLink
            className={state => jcn([style.link, state.isActive ? style.active : null])}
            to={props.page.route}
        >
            <label className={style.title}>{ props.page.title }</label>
        </NavLink>
        <div className={style.links}>
            {
                props.page.pages?.map((page, key) => {
                    return <Link
                        page={page}
                        key={key}
                        className={style.sub_link}
                    />
                })
            }
        </div>
    </div>
}

export default Link;