// Library imports
import { useRef } from "react";
import CloseModalIcon from "../assets/close-modal.svg"

const PopUp = ({
    show,
    onClose,
    children
}: any) => {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!show) {
        return null;
    }

    return (
        <>
            {/* Backdrop  */}
            <div
                onClick={ onClose }
                className="fixed inset-0 z-50 bg-black bg-opacity-50"
            />

            <div className="fixed inset-0  z-50 flex items-center justify-center max-w-[90%] sm:max-w-[70%] mx-auto">
                <div
                    className={`relative bg-white w-full border rounded-lg p-2 shadow-lg `}
                    ref={modalRef}
                >
                    {children}
                    <button
                        className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <img
                            src={CloseModalIcon}
                            alt="close"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default PopUp;
