
const InputField = ({
    name,
    id,
    type,
    label,
    value,
    onChange
}: any) => {

    const renderInput = () => {
        switch (type) {
            case "text": {
                return (
                    <div className="input-container">
                        <input
                            className="form-input"
                            onChange={onChange}
                            name={name}
                            placeholder=" "
                            id={id}
                            autoComplete="off"
                            value={value}
                        />
                        <label className="input-label" htmlFor={id}>{label}</label>
                    </div>

                );
            }
            case "select": {
                return (
                    <div className="container">
                        
                    </div>
                );
            }
            case "number": {
                return (
                    <div className="input-container">
                        <input
                            type="number"
                            className="form-input"
                            placeholder=""
                            onChange={onChange}
                            name={name}
                            id={id}
                            value={value}
                            min={0} // Optional: Restrict to non-negative numbers
                            onPaste={(e: any) => {
                                const pastedData = e.clipboardData.getData('Text');
                                if (!/^\d+$/.test(pastedData)) {
                                    e.preventDefault(); // Prevent pasting if it's not a number
                                }
                            }}
                        />
                        <label className="input-label" htmlFor={id}>{label}</label>
                    </div>
                );
            }
        }
    };

    return (
        <div
            className="w-full py-3"
        >
            {
                renderInput()
            }
        </div>
    )
}

export default InputField;