import React, { useState } from "react";
import PopupContext from "./PopupContext";

const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen((prev) => !prev);
    };

    const value = React.useMemo(() => ({ isPopupOpen, togglePopup }), [isPopupOpen]);

    return (
        <PopupContext.Provider value={value}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupProvider;
