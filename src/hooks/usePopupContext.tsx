import { useContext } from "react";
import PopupContext from "../context/PopupContext";

const usePopupContext = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopupContext must be used within a PopupProvider");
    }
    return context;
};

export default usePopupContext;
