import WeProvideImg from "../assets/we-provide.png"

const WeProvide = () => {
    return (
        <div className="bg-secondary overflow-hidden grid grid-cols-12">
            <div
                className="col-span-12 lg:col-span-6 my-12 lg:my-0 font-sans flex flex-col justify-center mx-6 sm:mx-12"
                data-aos="fade-right" // Animation for the text content
            >
                <div
                    className="text-[24px] sm:text-[30px] max-lg:text-[38px] font-semibold max-lg:leading-[53px]"
                    data-aos="fade-up"
                >
                    We Provide Internship for Civil Engineering / Diploma Students
                </div>
                <div className="grid grid-cols-12">
                    <div
                        className="col-span-12 sm:col-span-8 lg:col-span-12 max-lg:col-span-8 we-provide mt-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="text-[17px] sm:text-[20px] max-lg:text-[24px] font-semibold">
                            Practical Session
                        </div>
                        <ul className="mt-4 sm:max-w-[90%]">
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                Practical Aspects of Construction Management
                            </li>
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                Site Execution and Design
                            </li>
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                Estimate Preparation
                            </li>
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                Site Supervising Techniques and Rules
                            </li>
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                Quality Survey
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-span-12 sm:col-span-4 lg:col-span-12 max-lg:col-span-4 mt-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="text-[17px] sm:text-[20px] max-lg:text-[24px] font-semibold">
                            Assessments
                        </div>
                        <ul className="mt-4 sm:max-w-[90%]">
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                Autocad Drawings
                            </li>
                            <li
                                className="relative my-1.5 text-[14px] sm:text-[16px]"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                Livesite Executions
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="text-[16px] sm:text-[20px] max-lg:text-[28px] font-semibold sm:leading-[33px] text-center mt-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Paid Internship with Experience Certificates
                </div>
            </div>
            <div
                className="col-span-12 lg:col-span-6"
                data-aos="fade-left" // Animation for the image
            >
                <div className="h-full grid place-items-center">
                    <img src={WeProvideImg} className="w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WeProvide