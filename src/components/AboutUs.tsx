import aboutUsImg from "../assets/about-us.png"


const AboutUs = () => {
    return (
        <div className="mt-10 sm:mt-20">
            <div className="bg-secondary grid grid-cols-12 about-us">
                <div
                    className="col-span-12 lg:col-span-6"
                    data-aos="fade-right" // Image animation
                >
                    <div className="h-full grid place-items-center">
                        <img src={aboutUsImg} className="w-full" alt="" />
                    </div>
                </div>
                <div
                    className="col-span-12 lg:col-span-6 font-sans flex flex-col justify-center mx-8 sm:mx-14 my-8 sm:my-14 lg:my-4"
                    data-aos="fade-left" // Text section animation
                >
                    <div
                        className="text-[30px] sm:text-[38px] font-semibold leading-[53px]"
                        data-aos="fade-up"
                    >
                        About Us
                    </div>
                    <div
                        className="text-[22px] sm:text-[30px] font-semibold leading-[42px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Efficiency, Building, Budget & Time
                    </div>
                    <div
                        className="text-[14px] sm:text-[16px] leading-[25px] mt-2 max-lg:me-16"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We are ‘A’ Grade Registered Civil Engineers of EL-Tech building construction. Our journey in this field started about sweet 37 years back, and the rest of this is history. We are passionate about construction with a strong commitment to quality and client satisfaction.
                    </div>
                    <div
                        className="mt-6 sm:mt-8 lg:mt-4 max-lg:mt-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <ul className="grid grid-cols-12">
                            <li
                                className="col-span-12 sm:col-span-6 my-2 sm:my-5 lg:my-3 max-lg:my-5 relative md:w-[80%] lg:w-full max-lg:w-[80%] text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                Free Sump and Chamber cleaning in 5 years
                            </li>
                            <li
                                className="col-span-12 sm:col-span-6 my-2 sm:my-5 lg:my-3 max-lg:my-5 relative md:w-[80%] lg:w-full max-lg:w-[80%] text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                Inside/Outside painting by partial payment in 2 years
                            </li>
                            <li
                                className="col-span-12 sm:col-span-6 my-2 sm:my-5 lg:my-3 max-lg:my-5 relative md:w-[80%] lg:w-full max-lg:w-[80%] text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                Renovations and addings by partial payment in 5 years
                            </li>
                            <li
                                className="col-span-12 sm:col-span-6 my-2 sm:my-5 lg:my-3 max-lg:my-5 relative md:w-[80%] lg:w-full max-lg:w-[80%] text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="700"
                            >
                                Free Gardening
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs