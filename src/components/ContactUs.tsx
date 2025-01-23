import ContactUsImg from "../assets/contact-us.png"
import usePopupContext from "../hooks/usePopupContext";

const ContactUs = () => {
    const { togglePopup } = usePopupContext();

    return (
        <div className="my-10">
            <div className="relative">
                <img
                    src={ContactUsImg}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                    alt="Contact Us Background"
                />
                <div className="absolute inset-0 flex flex-col justify-center bg-custom-gradient bg-opacity-40 md:w-[50%]">
                    <div className="ml-5 md:ml-20" data-aos="fade-right">
                        <div
                            className="text-[20px] md:text-[25px] lg:text-[38px] text-white font-sans font-semibold lg:leading-[55px]"
                            data-aos="fade-up"
                        >
                            Have a Question?
                        </div>
                        <div
                            className="text-[20px] md:text-[25px] lg:text-[38px] text-white font-sans font-semibold lg:leading-[55px]"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Connect With Us
                        </div>
                        <div
                            className="me-4 max-w-[500px] text-white text-[14px] md:text-[16px] lg:text-[18px] mt-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Contact us today to discuss your next project or to request a quote. We look forward to working with you!
                        </div>
                        <button
                            className="mt-4 md:mt-8 text-[14px] lg:text-[16px] w-[145px] px-3 py-2 bg-primary font-semibold text-black rounded-[10px]"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            onClick={togglePopup}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;