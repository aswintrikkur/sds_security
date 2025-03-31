import React from "react";

export const PrimaryButton = ({ children }) => {
    return <button className="w-36 h-12 bg-accent-foreground text-secondary-foreground rounded-sm ">{children}</button>;
};
