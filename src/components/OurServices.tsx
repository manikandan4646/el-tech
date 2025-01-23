import { useState } from "react";
import "aos/dist/aos.css";
import constructionImg from "../assets/construction-service.png";
import supervisionImg from "../assets/supervision-service.png";
import designImg from "../assets/design-service.png";
import loanImg from "../assets/loan-service.png";
import interior from "../assets/interior.jpeg";
import projectManagement from "../assets/project-management.jpg";
import renovation from "../assets/renovation.jpeg";
import structural from "../assets/structural-analysis-and-consulting.jpg";
import chevronIcon from "../assets/chevron-icon.svg";
import useIsMobile from "../hooks/useMobile";

const OurServices = () => {
    const [flippedCard, setFlippedCard] = useState<any>(null);
    const [viewMore, setViewMore] = useState(false);
    const mobile = useIsMobile();

    const handleCardClick = (serviceName: any) => {
        setFlippedCard((prev: any) => (prev === serviceName ? null : serviceName)); // Toggle the card
    };

    const services = [
        {
            name: "Construction",
            img: constructionImg,
            description: "We provide end-to-end construction services, building quality structures that stand the test of time. From planning to execution, we ensure each project is delivered to perfection, within budget and deadlines."
        },
        {
            name: "Supervision",
            img: supervisionImg,
            description: "Our expert supervision ensures your construction project is executed flawlessly. We monitor every detail to maintain quality, safety, and adherence to your vision."
        },
        {
            name: "2D/3D Designs",
            img: designImg,
            description: "Visualize your dream project with our professional 2D and 3D designs. Our realistic renderings help you plan layouts, designs, and aesthetics with precision."
        },
        {
            name: "Bank Loan Facility",
            img: loanImg,
            description: "Ease your financial planning with our assistance in securing construction-related bank loans. We simplify the process to help you start your project without delays."
        },
        {
            name: "Renovation & Remodeling",
            img: renovation,
            description: "Transform and modernize your existing spaces with our renovation and remodeling services. We specialize in turning outdated structures into stunning, functional environments."
        },
        {
            name: "Interior Design & Finishing",
            img: interior,
            description: "Elevate your interiors with our design and finishing services. We focus on functionality and beauty, creating spaces that are both stylish and practical."
        },
        {
            name: "Project Management",
            img: projectManagement,
            description: "Our project management services provide complete oversight of your construction journey. We handle planning, budgeting, resource allocation, and timeline management to deliver seamless results."
        },
        {
            name: "Structural Analysis & Consulting",
            img: structural,
            description: "Ensure the safety and durability of your projects with our structural analysis and consulting. We provide expert evaluations to ensure compliance with engineering standards and long-term reliability."
        },
    ];

    return (
        <div className="mx-8 sm:mx-10 md:mx-12 mt-8 sm:mt-20 py-3">
            {/* Title Section */}
            <div
                className="flex flex-col items-center font-sans"
                data-aos="fade-up"
            >
                <div className="text-[32px] sm:text-[42px] font-semibold leading-[40px] sm:leading-[50px]">
                    Our Services
                </div>
                <div className="text-center max-w-[700px] text-[14px] sm:text-[18px] leading-[25px] mt-2">
                    We offer a comprehensive range of construction services
                    designed to meet the unique needs of our clients. Our
                    commitment to quality innovation and customer satisfaction
                    drives us to deliver exceptional results on every project.
                </div>
            </div>

            {/* Cards Section */}
            <div
                className="grid grid-cols-12 place-items-center gap-y-8 sm:gap-y-14 my-10"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {(viewMore ? services : services.slice(0, 4)).map((service, index) => (
                    <div
                        className={`${mobile ? "" : "group"
                            } relative [perspective:1000px] col-span-12 min-sm:col-span-6 lg:col-span-6 max-lg:col-span-3`}
                        key={service.name}
                        onClick={() => handleCardClick(service.name)}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100} // Delay for staggered animation
                    >
                        <div
                            className={`relative w-[300px] h-[300px] sm:h-[402px] bg-black rounded-[32px] grid place-items-center transition-all duration-500 [transform-style:preserve-3d] ${flippedCard === service.name
                                ? "[transform:rotateY(180deg)]"
                                : ""
                                } group-hover:[transform:rotateY(180deg)]`} // Add hover for desktop
                        >
                            {/* Front Face */}
                            <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[30px] items-center justify-center [backface-visibility:hidden]">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-10 font-sans text-white">
                                    <div className="text-[24px] sm:text-[28px] font-semibold text-center mx-3">
                                        {service.name}
                                    </div>
                                </div>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 h-full w-full rounded-[30px] bg-secondary text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h2 className="text-xl font-bold mb-4 mx-3">
                                        {service.description}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                viewMore ? null : (
                    <div className="flex justify-center mt-14">
                        <button
                            className="cursor-pointer flex items-center justify-center w-[220px] px-3 py-2.5 bg-primary font-semibold text-black rounded-[10px]"
                            onClick={() => setViewMore(true)}
                        >
                            <div className="me-3">View All Services</div>
                            <img src={chevronIcon} alt="" />
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default OurServices;
