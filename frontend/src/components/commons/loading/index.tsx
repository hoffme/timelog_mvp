import { ReactComponent as Icon } from "../../../assests/icons/loading.svg";

import style from './style.module.scss';

interface LoadingProps {
    light?: boolean
}

const Loading = (props: LoadingProps) => {
    return <div 
        className={`${style.container} ${props.light ? style.light : style.default}`}>
        <Icon />
    </div>
}

export default Loading;
