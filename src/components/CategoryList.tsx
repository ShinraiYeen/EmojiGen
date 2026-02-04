import { useState } from 'react';

interface Props {
    options: string[];
    onChange: (selected: string[]) => void;
}

export const CategoryList = ({ options, onChange }: Props) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        let updatedSelection;

        if (selectedItems.includes(option)) {
            updatedSelection = selectedItems.filter((item) => item !== option);
        } else {
            updatedSelection = [...selectedItems, option];
        }

        setSelectedItems(updatedSelection);
        onChange(updatedSelection);
    };

    return (
        <div className="category-items">
            {options.map((option) => {
                const isSelected = selectedItems.includes(option);

                return (
                    <button
                        key={option}
                        onClick={() => toggleOption(option)}
                        className={isSelected ? "category-item-selected" : "category-item"}
                    >
                        {option}
                    </button>
                );
            })}
        </div >
    );
};