import React from "react";

export const Badge = ({ children }) => {
    return <div className="border border-accent-foreground text-accent-foreground rounded-4xl px-4 py-2 inline-block text-nowrap ">{children}</div>;
};
