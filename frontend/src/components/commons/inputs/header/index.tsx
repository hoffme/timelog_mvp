import jcn from "../../../../utils/join_class_names";

import style from './style.module.scss';

interface State {
    loading: boolean
}

interface HeaderProps {
    className?: string
    title?: string
    active?: boolean
    checked?: boolean
    option?: string
    options?: string[]
    onSelectOption?: (value: string) => void
    onCheck?: (value: boolean) => void
}

const InputHeader = (props: HeaderProps) => {
    return <div className={jcn([style.container, props.className, props.active ? style.active : undefined])}>
        {
            props.title !== undefined &&
                <label className={style.title} children={props.title} />
        }
        {
            props.checked !== undefined &&
                <input
                    className={style.check}
                    type={'checkbox'}
                    checked={props.checked}
                    onChange={e => props.onCheck && props.onCheck(e.currentTarget.checked)}
                />
        }
        {
            props.options !== undefined &&
                <select
                    className={style.select}
                    value={props.option || undefined}
                    onChange={e => props.onSelectOption && props.onSelectOption(e.currentTarget.value)}
                >
                    <option value={undefined}>No Seleccionado</option>
                    {
                        props.options.map((option, key) => {
                            return <option key={key} children={option} value={option} />
                        })
                    }
                </select>
        }
    </div>
}

export default InputHeader;
export type {
    HeaderProps
}