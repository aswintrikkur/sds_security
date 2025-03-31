import React, { useEffect, useState } from "react";

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
