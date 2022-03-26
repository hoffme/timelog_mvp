import {ReactNode} from "react";

import {TimeLogProvider} from "./time_log";

interface Props {
    children?: ReactNode
}

const Contexts = (props: Props) => {
    return <TimeLogProvider>
        { props.children }
    </TimeLogProvider>
}

export default Contexts;