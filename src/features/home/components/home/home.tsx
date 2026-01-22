import { ReactNode } from 'react';
import '../../../../App.css';

type Props = {
    children: ReactNode
}

export const Home = (props: Props) => {

    return (
        <div>
            {props.children}
        </div>
    )
};