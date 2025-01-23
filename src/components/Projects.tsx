import Project1 from "../assets/product-img-1.png"
import Project2 from "../assets/product-img-2.png"
import Project3 from "../assets/product-img-3.png"
import Project4 from "../assets/product-img-4.png"
import Project5 from "../assets/product-img-5.png"

const Projects = () => {
    return (
        <div className="mt-8 md:mt-16 py-5 mx-5 sm:mx-10 md:mx-[70px]">
            <div
                className="text-[32px] sm:text-[42px] font-semibold leading-[40px] sm:leading-[50px] text-center"
                data-aos="fade-up"
            >
                Explore Our Recent Works
            </div>
            <div className="mt-8 grid grid-cols-8 grid-rows-6 gap-4 md:gap-6">
                <div
                    className="col-span-8 row-span-3 md:col-span-3 md:row-span-6"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <img src={Project1} className="w-full h-full object-cover" alt="Project 1" />
                </div>
                <div
                    className="col-span-8 row-span-3 md:col-span-3 md:row-span-3 md:col-start-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <img src={Project2} className="w-full h-full object-cover" alt="Project 2" />
                </div>
                <div
                    className="col-span-8 row-span-3 md:col-span-2 md:row-span-3 md:col-start-7"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <img src={Project3} className="w-full h-full object-cover" alt="Project 3" />
                </div>
                <div
                    className="col-span-8 row-span-3 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <img src={Project4} className="w-full h-full object-cover" alt="Project 4" />
                </div>
                <div
                    className="col-span-8 row-span-3 md:col-span-3 md:row-span-3 md:col-start-6 md:row-start-4"
                    data-aos="fade-left"
                    data-aos-delay="500"
                >
                    <img src={Project5} className="w-full h-full object-cover" alt="Project 5" />
                </div>
            </div>
        </div>
    )
}

export default Projects