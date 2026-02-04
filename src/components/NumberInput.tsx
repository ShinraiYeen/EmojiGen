import { type ChangeEvent } from "react";

interface Props {
    value: string;
    placeholder: string;
    onValueChange: (val: string) => void;
}

export const NumberInput = (props: Props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Ensure only positive integers are allowed
        const newValue = event.target.value.replace(/\D/g, "");
        props.onValueChange(newValue);
    }

    return (
        <input
            type="text"
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder}
            inputMode="numeric"
        />
    );
}