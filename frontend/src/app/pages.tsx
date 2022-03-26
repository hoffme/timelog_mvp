import {Page} from "../components/layout/type";

import TimeLogsPage from "../pages/time_logs";
import NewTimeLogPage from "../pages/new_time_log";

const pages: Page[] = [
    {
        title: 'Time Logs',
        route: '/time_logs',
        content: <></>,
        pages: [
            { title: 'Search', route: '/time_logs/search', content: <TimeLogsPage /> },
            { title: 'Create', route: '/time_logs/create', content: <NewTimeLogPage /> }
        ]
    }
];

export default pages;