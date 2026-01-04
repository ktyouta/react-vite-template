import '../../../../App.css';

type Props = {
    message: string,
}

export const Footer = (props: Props) => {

    return (
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more {props.message}
        </p>
    )
};