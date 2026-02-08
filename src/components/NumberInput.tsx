import { type ChangeEvent } from "react";

interface Props {
    value: string;
    maximum: number;
    placeholder: string;
    onValueChange: (val: string) => void;
}

export const NumberInput = (props: Props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Ensure only positive integers are allowed
        let newValue: number = Number(event.target.value.replace(/\D/g, ""));

        if (Number.isNaN(newValue)) newValue = 0;                       // Handle parsing errors
        else if (newValue > props.maximum) newValue = props.maximum;    // Clamp to maximum

        props.onValueChange(String(newValue));
    }

    return (
        <input
            type="text"
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder}
            inputMode="numeric"
            className="number-input"
        />
    );
}