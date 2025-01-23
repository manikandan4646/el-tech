
const KeyPoints = () => {
    const keyPoints = [
        "Maximum Utilization of Indoor Spaces",
        "Waterproof Structure",
        "Contemporary Designs"
    ]
    return (
        <div className="mb-20 mt-12 sm:mt-20">
            <div
                className="text-[32px] sm:text-[42px] font-semibold leading-[40px] sm:leading-[50px] text-center"
                data-aos="fade-up"
            >
                Our Key Points
            </div>
            <div className="grid grid-cols-12 px-8 sm:px-10 md:px-[70px] gap-y-12 md:gap-x-10 mt-8 sm:mt-12">
                {keyPoints.map((x, index) => (
                    <div
                        className="border border-[#A59F9F] col-span-12 md:col-span-4 rounded-3xl p-5 h-[210px] text-center"
                        key={index + "0"}
                        data-aos="fade-up"
                        data-aos-delay={index * 200} // Staggered delay for each point
                    >
                        <div className="text-[45px] font-bold leading-[63px] mt-5">
                            0{index + 1}
                        </div>
                        <div className="flex justify-center">
                            <div className="text-[16px] lg:text-[21px] lg:leading-[30px] mt-2 max-w-[250px]">
                                {x}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KeyPoints