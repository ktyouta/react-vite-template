import { ReactNode } from 'react';
import '../../../../App.css';

type Props = {
    children: ReactNode
}

export const Sample = (props: Props) => {

    return (
        <div>
            {props.children}
        </div>
    )
};