import usePopupContext from "../hooks/usePopupContext";
import InputField from "./InputField"
import PopUp from "./Popup"
import MobileIcon from "../assets/mobile-icon.svg"
import EmailIcon from "../assets/email-icon.svg"
import PopupDesignImg from "../assets/popup-design.svg"
import LocationIcon from "../assets/location-icon.svg"

// const options = ["Option 1", "Option 2", "Option 3"];
const ContactPopup = () => {
    const { isPopupOpen, togglePopup } = usePopupContext();

    return (
        <PopUp show={isPopupOpen} onClose={() => togglePopup()}>
            <div className="grid grid-cols-12 gap-2">
                <div
                    className="relative col-span-5 bg-secondary rounded-lg p-4 flex flex-col items-center">
                    <div>
                        <div className="font-semibold text-[27px] mt-7">Ready to Start Your Project?</div>
                        <div className="mt-2">Write to us now!</div>
                        <div className="mt-16">
                            <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                                <img src={MobileIcon} alt="" />
                                <a className="ms-3" href="tel:+919656777920">+919656777920, +917012619746</a>
                            </div>
                            <div className="flex items-center my-10" data-aos="fade-up" data-aos-delay="400">
                                <img src={EmailIcon} alt="" />
                                <a className="ms-3" href="mailto:someone@example.com">kiranthusharam@gmail.com</a>
                            </div>
                            <div className="flex items-start" data-aos="fade-up" data-aos-delay="600">
                                <img src={LocationIcon} alt="" />
                                <div className="ms-3 max-w-[300px]">EL TECH BUILDING CONSTRUCTION, Pirayiri Post Palakkad - 678004</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <img src={PopupDesignImg} alt="" />
                    </div>
                </div>
                <div className="col-span-7 p-5 flex justify-center items-center">
                    <div className="grid grid-cols-12 gap-x-10 w-full my-20">
                        <div className="col-span-6 mb-3">
                            <InputField
                                name="firstName"
                                id="firstName"
                                type="text"
                                label="First Name"
                            />
                        </div>
                        <div className="col-span-6 mb-3">
                            <InputField
                                name="lastName"
                                id="lastName"
                                type="text"
                                label="Last Name"
                            />
                        </div>
                        <div className="col-span-6 mb-3">
                            <InputField
                                name="email"
                                id="email"
                                type="text"
                                label="Email"
                            />
                        </div>
                        <div className="col-span-6 mb-3">
                            <InputField
                                name="phone"
                                id="phone"
                                type="number"
                                label="Phone Number"
                            />
                        </div>
                        <div className="col-span-12 mb-3">
                            <InputField
                                name="phone"
                                id="phone"
                                type="number"
                                label="Phone Number"
                            />
                        </div>
                        <div className="col-span-12 mb-3">
                            <InputField
                                name="writeYourMessage"
                                id="writeYourMessage"
                                type="text"
                                label="Write your message.."
                            />
                        </div>
                        <div className="col-span-12 flex justify-end mt-5" data-aos="fade-up" data-aos-delay="800">
                            <button
                                onClick={() => { }}
                                className=" w-[145px] px-3 py-2 bg-primary font-semibold text-black rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PopUp>
    );
};


export default ContactPopup