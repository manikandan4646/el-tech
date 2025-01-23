import React from "react";

// Define the context type
type PopupContextType = {
    isPopupOpen: boolean;
    togglePopup: () => void;
};

// Create the context with a default value
const PopupContext = React.createContext<PopupContextType | undefined>(
    undefined
);

export default PopupContext;
