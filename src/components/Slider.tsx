import React, { useEffect, useRef, useState } from "react";
import Banner1 from "../assets/banner-1.png"

const slides = [
    {
        id: 1,
        image: Banner1,
        heading: "Constructing The Future With Innovation",
        description: "Dedicated to delivering exceptional construction services. To create sustainable and innovative construction solutions that exceed our clients expectations.",
    },
    {
        id: 2,
        image: Banner1,
        heading: "Innovative Solutions",
        description: "We bring innovative solutions to your doorstep.",
    },
    {
        id: 3,
        image: Banner1,
        heading: "Join Us Today",
        description: "Be part of a community that values excellence.",
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
                left:  slider.offsetWidth * currentIndex,
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
                            <div className="text-[32px] sm:text-[50px] md:text-[64px] font-semibold mb-4 max-w-[770px] text-center leading-[45px] sm:leading-[55px] md:leading-[75px]">{slide.heading}</div>
                            <p className="font-normal max-w-[615px] text-center leading-[19px] text-[14px] sm:text-[16px]">{slide.description}</p>
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
