interface ButtonProps {
    onTrigger: () => void;
}

export function Button({ onTrigger }: ButtonProps) {
    return (
        <button onClick={onTrigger}>
            Generate
        </button>
    );
}