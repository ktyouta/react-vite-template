import React from 'react';
import '../../../../App.css';

type Props = {
    count: number,
    click: () => void,
}

export const Body = (props: Props) => {

    return (
        <React.Fragment>
            <h1>Sample Vite + React</h1>
            <div className="card">
                <button onClick={props.click}>
                    count is {props.count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </React.Fragment>
    )
};