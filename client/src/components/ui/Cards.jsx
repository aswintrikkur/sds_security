import React, { useEffect, useState } from "react";
import { Badge } from "./Badge";
import { PrimaryButton } from "./Button";

export const PromisesCard = ({ data }) => {
    return (
        <div className="w-full text-start sm:w-[clamp(250px, 40vw, 400px)] bg-accent-background p-4 sm:p-6 md:p-8 rounded-lg hover:cursor-pointer transition-all">
            <img src={data?.icon} alt="" className="w-10 sm:w-12 md:w-16" />
            <h4 className="text-accent-foreground mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl">
                {data?.title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg">{data?.desc}</p>
        </div>
    );
};

export const ProductCard = ({ data }) => {
    return (
        <div className={`bg-primary-background shadow-lg flex-col  min-w-52 md:min-w-xs rounded-lg pb-2 `}>
            <img className="" src={data?.image} alt="product-img" />
            <div className="mx-3">
                <div className="flex justify-between">
                    <h6 className="mb-1 font-semibold">{data?.name} </h6>
                    <h6 className="text-accent-foreground ">₹{data?.price} </h6>
                </div>
                <p className="text-md md:text-lg leading-tight opacity-50">{data?.desc}</p>
            </div>
        </div>
    );
};

export const ServiceCard = ({ data, style, className }) => {
    return (
        <div
            style={style}
            className={` ${className}  flex  flex-col-reverse md:flex-row  border-2 border-accent-background   bg-card-background  left-1/2 transform -translate-x-1/2  rounded-2xl p-5 md:pl-10 my-5 w-[90%] max-w-7xl `}
        >
            {/* left  */}
            <div className=" flex flex-col items-start justify-between gap-5  md:mt-20 md:mb-10">
                <Badge>Electronic Security</Badge>
                <h4 className=" md:max-w-sm text-accent-foreground ">Secure Your Business With Advanced Electronic Security</h4>
                <p className="opacity-50 md:max-w-9/12">
                    Ensure your business’s safety with advanced security systems, real-time alerts, and HD surveillance. Our solutions
                    provide peace of mind with remote access and professional monitoring.
                </p>
                <PrimaryButton>Learn More</PrimaryButton>
            </div>

            {/* right */}
            <div className="w-full mb-5 md:mb-0  ">
                <img src={data?.image} className="ml-auto w-full aspect-auto " alt="" />
            </div>
        </div>
    );
};
