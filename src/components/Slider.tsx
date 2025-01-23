import React, { useEffect, useRef, useState } from "react";
import Banner1 from "../assets/banner-1.png"
import Banner2 from "../assets/banner-2.png"
import Banner3 from "../assets/banner-3.png"

const slides = [
    {
        id: 1,
        image: Banner1,
        heading: "Constructing The Future With Innovation",
        description: "Dedicated to delivering exceptional construction services. To create sustainable and innovative construction solutions that exceed our clients expectations.",
    },
    {
        id: 2,
        image: Banner2,
        heading: "Constructing Excellence, Delivering Dreams",
        description: "From concept to completion, we bring your vision to life with unmatched craftsmanship, innovative solutions, and a commitment to quality. Let's build something extraordinary together.",
    },
    {
        id: 3,
        image: Banner3,
        heading: "Re-imagining Spaces, Redefining Comfort",
        description: "Upgrade your home or office with our expert renovation services. We bring new life to old spaces while maintaining your unique style and needs.",
    },
];

const HomeBannerSlider: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const slider = event.currentTarget;
        const currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
        setActiveSlide(currentIndex);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length; // Ensure circular scrolling
            slider.scrollTo({
                left: slider.offsetWidth * currentIndex,
                behavior: "smooth",
            });
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full h-full">
            <div
                ref={sliderRef}
                className="flex w-full h-full snap-x overflow-x-scroll snap-mandatory slider-scrollbar"
                onScroll={handleScroll}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="relative w-full h-full flex-shrink-0 snap-start"
                    >
                        <img
                            src={slide.image}
                            alt={"banner"}
                            className="w-full h-full object-cover"
                        />
                        {/* Content Overlay */}

                        <div className="absolute inset-0 top-[-60px] bg-black bg-opacity-20 flex flex-col justify-center items-center font-sans text-white px-2 sm:px-4">
                            <div
                                data-aos="fade-up"
                                className="opacity-0 text-[32px] sm:text-[50px] md:text-[64px] font-semibold mb-4 max-w-[800px] text-center leading-[45px] sm:leading-[55px] md:leading-[75px]"
                            >
                                {slide.heading}
                            </div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="opacity-0 font-normal max-w-[615px] text-center leading-[19px] text-[14px] sm:text-[16px]"
                            >
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-[81px] h-[7px] rounded-[2px] cursor-pointer 
                            ${activeSlide === index ? "bg-primary" : "bg-secondary"}`
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeBannerSlider;
