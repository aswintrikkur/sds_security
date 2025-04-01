import React from "react";

export const SectionTitle = ({ title, description,className }) => {
    return (
        <div className={`text-center mx-auto   md:w-9/12 mb-12 ${className}`}>
            <h2 className="inline-block lg:max-w-9/12 mb-3">{title} </h2>
            <p className="opacity-60">{description} </p>
        </div>
    );
};
