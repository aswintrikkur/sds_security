import React from "react";
import { ourPromises } from "../../data/ourPromises";
import { PromisesCard } from "../ui/Cards";

export const OurPromises = () => {
    return (
        <section className="text-center w-full   ">
            <div className=" mb-12">
                <h2 className="mb-3 md:max-w-2xl mx-auto">Your Protection, Our Promise Always There for You</h2>
                <p className="opacity-60 md:max-w-3xl mx-auto ">
                    We’re committed to keeping you safe with reliable, tailored security solutions. Trust us to protect what matters most,
                    anytime, anywhere
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourPromises?.map((data, index) => (
                    <PromisesCard data={data} key={index} />
                ))}
            </div>
        </section>
    );
};
