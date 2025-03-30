import React, { useEffect, useState } from "react";

const images = [
    "/Hero_bg.png",
    // "https://www.shutterstock.com/image-vector/cyber-security-technology-on-circuit-260nw-2420987375.jpg",
    "https://media.istockphoto.com/id/1312912134/photo/house-living-smart-home.jpg?s=612x612&w=0&k=20&c=wyaw8_oRoyOxOAxCdm2wC6SGkzyvuvfruFy7Z6K1jSk=",
    "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-ai-generated-cyber-security-and-data-privacy-lock-symbol-and-protection-image_15692197.jpg",
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleIndicator = (index) => {
        if (currentIndex > 3) {
            return setCurrentIndex((index % 3) - 1);
        }
        setCurrentIndex(index);
    };

    return (
        <div className="relative  h-screen overflow-hidden w-full">
            {/* images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full bg-cover   transition-opacity duration-1000 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}

            {/* indicator */}
            <div className="absolute  bottom-5 left-1/2 transform -translate-x-1/2 w-full px-12 md:px-24  flex justify-center   space-x-5">
                {images.map((_, index) => {
                    return index > 2 ? null : (
                        <div
                            onClick={() => handleIndicator(index)}
                            key={index}
                            className={` relative w-full  h-1    rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-white scale-y-110" : "bg-gray-400"
                            } hover:cursor-pointer before:absolute before:h-10 before:w-full before:trasform before:-translate-y-5  before:content-[''] `}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};
