import React from "react";
import { ourPromises } from "../../data/ourPromises";
import { PromisesCard } from "../ui/cards";

export const OurPromises = () => {
    return (
        <section className="text-center py-16 md:py-24 mt-12  ">
            <div className=" md:mb-12">
                <h2 className="mb-3 max-w-2xl mx-auto">Your Protection, Our Promise Always There for You</h2>
                <p className="opacity-60 max-w-3xl mx-auto ">
                    We’re committed to keeping you safe with reliable, tailored security solutions. Trust us to protect what matters most,
                    anytime, anywhere
                </p>
            </div>
            <div className="flex flex-row w-full  gap-10">
                {ourPromises?.map((data, index) => (
                    <PromisesCard data={data} key={index} />
                ))}
            </div>
        </section>
    );
};
