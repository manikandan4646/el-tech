import usePopupContext from "../hooks/usePopupContext";
import InputField from "./InputField"
import PopUp from "./Popup"
import MobileIcon from "../assets/mobile-icon.svg"
import EmailIcon from "../assets/email-icon.svg"
import PopupDesignImg from "../assets/popup-design.svg"
import LocationIcon from "../assets/location-icon.svg"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const options = [
    "Construction",
    "Supervision",
    "2D/3D Designs",
    "Bank Loan Facility",
    "Renovation & Remodeling",
    "Interior Design & Finishing",
    "Project Management",
    "Structural Analysis & Consulting"
];

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: ""
}

const ContactPopup = () => {
    const { isPopupOpen, togglePopup } = usePopupContext();
    const [showDropDown, setShowDropDown] = useState(false);
    const [formValues, setFormValues] = useState(initialState);
    const form = useRef<HTMLFormElement>(null);

    const handleInputChange = (key: string, value: string) => {
        setFormValues((values: any) => { return { ...values, [key]: value } })
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        const templateParams = {
            first_name: formValues.firstName,  // Match variable names to EmailJS template
            last_name: formValues.lastName,
            email: formValues.email,
            phone: formValues.phoneNumber,
            service: formValues.service,
            message: formValues.message,
            reply_to: "aksharesh133003@gmail.com"
        };

        emailjs
            .send(
                "service_myjyfyp",
                "template_0t8mk8s",
                templateParams,
                "B0HAEOJohoyvBU5cg"
            )
            .then(() => {
                toast.success("Email sent successfully!");
            })
            .catch((error) => {
                toast.error("Failed to send email. Please try again.");
                console.error("FAILED...", error);
            })
            .finally(() => {
                setFormValues(initialState);
                togglePopup();
            });
    };

    return (
        <PopUp show={isPopupOpen} onClose={() => togglePopup()}>
            <div className="grid grid-cols-12 gap-2">
                <div
                    className="relative semi-md:flex hidden col-span-5 bg-secondary rounded-lg p-4  flex-col items-center mid-lg:text-[16px] text-[15px]">
                    <div>
                        <div className="font-semibold lg:text-[27px] text-[24px] mt-7">Ready to Start Your Project?</div>
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
                <div className="semi-md:col-span-7 col-span-12 p-5 flex justify-center items-center">
                    <form className="grid grid-cols-12 mid-lg:gap-x-10 w-full mid-lg:my-20 semi-md:my-[20px]" ref={form}>
                        <div className="mid-lg:col-span-6 col-span-12 mb-3">
                            <InputField
                                name="firstName"
                                id="firstName"
                                type="text"
                                label="First Name"
                                value={formValues.firstName}
                                onChange={(e: any) => handleInputChange("firstName", e.target.value)}
                            />
                        </div>
                        <div className="mid-lg:col-span-6 col-span-12 mb-3">
                            <InputField
                                name="lastName"
                                id="lastName"
                                type="text"
                                label="Last Name"
                                value={formValues.lastName}
                                onChange={(e: any) => handleInputChange("lastName", e.target.value)}
                            />
                        </div>
                        <div className="mid-lg:col-span-6 col-span-12 mb-3">
                            <InputField
                                name="email"
                                id="email"
                                type="email"
                                label="Email"
                                value={formValues.email}
                                onChange={(e: any) => handleInputChange("email", e.target.value)}
                            />
                        </div>
                        <div className="mid-lg:col-span-6 col-span-12 mb-3">
                            <InputField
                                name="phone"
                                id="phone"
                                type="number"
                                label="Phone Number"
                                value={formValues.phoneNumber}
                                onChange={(e: any) => handleInputChange("phoneNumber", e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 mb-3 mid-lg:py-3 py-2">
                            <div className="input-container cursor-pointer" onClick={() => setShowDropDown((value: boolean) => !value)}>
                                <input
                                    className="form-input cursor-pointer pointer-events-none"
                                    name="service"
                                    placeholder=" "
                                    id="service"
                                    autoComplete="off"
                                    disabled={true}
                                    value={formValues.service}
                                />
                                <label className="input-label" htmlFor="service">{"Select your service"}</label>
                                {
                                    showDropDown ? (
                                        <div className="bg-white absolute max-h-[200px] overflow-y-scroll z-20 shadow-md w-full">
                                            {
                                                options.map((option) => (
                                                    <div
                                                        key={option}
                                                        className="px-2 py-1 hover:bg-secondary"
                                                        onClick={() => handleInputChange("service", option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-span-12 mb-3">
                            <InputField
                                name="writeYourMessage"
                                id="writeYourMessage"
                                type="text"
                                label="Write your message.."
                                value={formValues.message}
                                onChange={(e: any) => handleInputChange("message", e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 flex justify-end mt-5" data-aos="fade-up" data-aos-delay="800">
                            <button
                                onClick={(e) => sendEmail(e)}
                                className=" w-[145px] px-3 lg:py-2.5 py-2 bg-primary font-semibold text-black rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PopUp>
    );
};


export default ContactPopup