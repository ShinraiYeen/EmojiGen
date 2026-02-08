interface Props {
    onTrigger: () => void;
    className: string;
}

export function Button(props: Props) {
    return (
        <button onClick={props.onTrigger} className={props.className}>
            Generate
        </button>
    );
}