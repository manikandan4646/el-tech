import Project1 from "../assets/product-img-1.png"
import Project2 from "../assets/product-img-2.png"
import Project3 from "../assets/product-img-3.png"
import Project4 from "../assets/product-img-4.png"
import Project5 from "../assets/product-img-5.png"

const Projects = () => {
    return (
        <div className="mt-16 py-5 mx-8 sm:mx-10 md:mx-[70px]">
            <div className="text-[42px] font-semibold leading-[50px] text-center">Explore Our Recent Works</div>
            <div className="mt-8">
                <div>
                    <img src={Project1} className="h-[575px] object-cover" alt="" />
                </div>
                <div>
                    <img src={Project2} alt="" className="h-[280px] object-cover" />
                </div>
                <div>
                    <img src={Project3} alt="" className="h-[280px] object-cover" />
                </div>
                <div>
                    <img src={Project4} alt="" className="h-[270px] object-cover" />
                </div>
                <div>
                    <img src={Project5} alt="" className="h-[270px] object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Projects