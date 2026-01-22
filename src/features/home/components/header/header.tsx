import React from 'react';
import '../../../../App.css';
import reactLogo from '../../../../assets/react.svg';
import viteLogo from '/vite.svg';

type Props = {
    message: string,
}

export const Header = (props: Props) => {

    return (
        <React.Fragment>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React {props.message}</h1>
        </React.Fragment>
    )
};