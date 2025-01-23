import Blocks from "../assets/aac-blocks.svg"
import Bricks from "../assets/standard-bricks.svg"
import Concrete from "../assets/concrete-blocks.svg"
import TmtSteels from "../assets/tmt-steels.svg"
import Cement from "../assets/cements.svg"
import Woods from "../assets/woods.svg"
import usePopupContext from "../hooks/usePopupContext"


const OurApproach = () => {
    const { togglePopup } = usePopupContext();

    const approachData = [
        {
            title: 'AAC Blocks',
            description: 'AAC (Autoclaved Aerated Concrete) blocks are modern building materials designed for Strength and Sustainability which is Lightweight, Durable, and Eco-Friendly',
            Icon: Blocks
        },
        {
            title: 'Standard Bricks',
            description: 'Standard bricks are strong, eco-friendly, and versatile, ideal for load-bearing and perfect for traditional and modern construction.',
            Icon: Bricks
        },
        {
            title: 'Concrete Blocks',
            description: 'Concrete blocks offer strength, insulation, and weather resistance, making them ideal for structural and decorative construction.',
            Icon: Concrete
        },
        {
            title: 'TMT Steels',
            description: 'TMT steel bars provide superior strength, flexibility, and corrosion resistance, ensuring safety and durability for projects.',
            Icon: TmtSteels
        },
        {
            title: '53 grade Cements',
            description: '53 Grade Cement offers excellent early strength, durability, and crack resistance, ideal for high-rise buildings, bridges, and industrial projects.',
            Icon: Cement
        },
        {
            title: 'Good Woods',
            description: 'Good Woods: Durable and Elegant, Offer lasting strength, versatility, and natural beauty, perfect for furniture, flooring, and décor.',
            Icon: Woods
        }
    ];
    return (
        <div className="mt-10 sm:mt-20 md:mt-24">
            <div
                className="text-[32px] sm:text-[42px] font-semibold leading-[40px] sm:leading-[50px] text-center"
                data-aos="fade-up"
            >
                Our Approach
            </div>
            <div className="grid grid-cols-12 mt-4 md:mt-10 mx-8 sm:mx-16 semi-md:mx-28 py-5">
                {approachData.map((x, index) => (
                    <div
                        key={index}
                        className={`col-span-12 sm:col-span-6 md:col-span-4 place-items-center text-center p-5 lg:p-10 border border-gray-300 
                                ${index < 3 ? "md:border-t-0" : "" /*Remove top border for the first row on small screens*/}
                                ${index % 3 === 0 ? "md:border-l-0" : "" /*Remove left border for first column on medium screens*/} 
                                ${(index + 1) % 3 === 0 ? "md:border-r-0" : "" /*Remove right border for last column on medium screens*/} 
                                ${index >= 3 ? "md:border-b-0" : "" /*Remove bottom border for the last row on medium screens*/}`}

                         // Adds staggered animation delay
                    >
                        <div data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="w-full flex justify-center">
                                <img src={x.Icon} alt={x.title} />
                            </div>
                            <div className="text-[18px] semi-md:text-[20px] leading-6 font-semibold mt-5">
                                {x.title}
                            </div>
                            <div className="text-[14px] semi-md:text-[16px] max-w-[303px] mt-2 leading-[19px]">
                                {x.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="text-center my-6 mx-3"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Get connected with us to work on your project
            </div>
            <div className="w-full flex justify-center">
                <button
                    className="w-[145px] px-3 py-2.5 bg-primary font-semibold text-black rounded-[10px]"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    onClick={() => togglePopup()}
                >
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default OurApproach