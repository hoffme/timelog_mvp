import {Route, Routes, Navigate} from 'react-router-dom';

import jcn from "../../../utils/join_class_names";
import {Page} from "../type";

import style from './style.module.scss';

interface Props {
    pages: Page[]
    className?: string
}

const allPages = (pages: Page[]): Page[] => {
    const result: Page[] = [...pages];

    for (const page of pages) {
        if (!page.pages) continue;
        result.push(...allPages(page.pages));
    }

    return result;
}

const Pages = (props: Props) => {
    const pages = allPages(props.pages);

    return <div className={jcn([style.container, props.className])}>
        <Routes>
            {
                pages.length > 0 &&
                    <Route path="/" element={<Navigate to={pages[0].route} />} />
            }
            {
                pages.map((page, key) => {
                    return <Route
                        key={key}
                        path={page.route}
                        element={page.content}
                    />
                })
            }
        </Routes>
    </div>
}

export default Pages;