import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
    options: string[];
    label: string;
    name: string;
    id: string;
    onChange?: (event: { target: { name: string; value: string } }) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, name, id, onChange }) => {
    const [selected, setSelected] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        onChange?.({ target: { name, value: option } });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={selectRef}>
            <div
                className="form-input cursor-pointer p-2 border-b border-gray-400 bg-transparent relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected ? (
                    <span>{selected}</span>
                ) : (
                    <span className="">{label}</span>
                )}
            </div>

            {/* {isOpen && (
                <ul className="absolute left-0 top-full w-full bg-white shadow-lg border border-gray-300 rounded-md mt-1 z-10">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default CustomSelect;
