import React from "react";
import { ServiceCard } from "../ui/Cards";
import { servicesList } from "../../data/servicesList";

export const ServicesSection = () => {
    return (
        <section className=" flex flex-col ">
            <div className="text-center mx-auto  md:w-7/12">
                <h2 className="inline-block   lg:max-w-9/12 mb-3">Providing Security Services That Work for You</h2>
                <p className="opacity-60">
                    Explore smart security solutions designed to protect your home and business with advanced technology, ensuring safety
                    and peace of mind.
                </p>
            </div>

            {/* Stacked Service Cards */}
            <div className="relative w-full  flex justify-center mt-16 h-[700px]">
                {servicesList?.map((value, index) => (
                    <ServiceCard
                        data={value}
                        key={index}
                        className="absolute shadow-lg "
                        style={{ top: `${-index * 15}px`, zIndex: servicesList.length - index }}
                    />
                ))}
            </div>
        </section>
    );
};
