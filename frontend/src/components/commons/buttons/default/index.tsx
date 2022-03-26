import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import style from './style.module.scss';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button = (props: Props) => {
    const styles = [style.container];
    if (props.className) styles.push(props.className);

    return <button
        { ...props }
        className={styles.join(' ')}
    />
}

export default Button;