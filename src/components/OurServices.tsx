import constructionImg from "../assets/construction-service.png"
import supervisionImg from "../assets/supervision-service.png"
import designImg from "../assets/design-service.png"
import loanImg from "../assets/loan-service.png"
import chevronIcon from "../assets/chevron-icon.svg"

const OurServices = () => {
    const services = [
        {
            name: "Construction",
            img: constructionImg
        },
        {
            name: "Supervision",
            img: supervisionImg
        },
        {
            name: "2D/3D Designs",
            img: designImg
        },
        {
            name: "Bank Loan Facility",
            img: loanImg
        }
    ];
    return (
        <div className="mx-8 sm:mx-10 md:mx-12 mt-8 sm:mt-20 py-3">
            <div className="flex flex-col items-center font-sans">
                <div className="text-[32px] sm:text-[42px] font-semibold leading-[40px] sm:leading-[50px]">Our Services</div>
                <div className="text-center max-w-[700px] text-[14px] sm:text-[18px] leading-[25px] mt-2">We offer a comprehensive range of construction services designed to meet the unique needs of our clients. Our commitment to quality innovation and customer satisfaction drives us to deliver exceptional results on every project.</div>
            </div>
            <div className="grid grid-cols-12 place-items-center gap-y-8 sm:gap-y-14 my-10">
                {
                    services.map((service) => (
                        <div key={service.name} className="relative col-span-12 min-sm:col-span-6 lg:col-span-6 max-lg:col-span-3  w-[300px] h-[300px] sm:h-[402px] bg-black rounded-[30px] overflow-hidden grid place-items-center">
                            <img src={service.img} alt="" />
                            <div className="absolute bottom-10 font-sans text-white">
                                <div className="text-[24px] sm:text-[28px] font-semibold">{service.name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-14">
                <div
                    className="cursor-pointer flex items-center justify-center w-[220px] px-3 py-2.5 bg-primary font-semibold text-black rounded-[10px]"
                >
                    <div className="me-3">
                        View All Services
                    </div>
                    <img src={chevronIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurServices