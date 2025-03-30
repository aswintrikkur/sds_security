import React from "react";

export const PromisesCard = ({ data }) => {
    return (
        <div className="text-start max-w-sm bg-accent-background p-5 pb-8 rounded-lg hover:cursor-pointer ">
            <img src={data?.icon} alt="" className="w-12" />
            <h4 className="text-accent-foreground mt-16 mb-10">{data?.title} </h4>
            <p>{data?.desc}</p>
        </div>
    );
};
