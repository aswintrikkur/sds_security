import React from "react";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";

export const RootLayout = ({ children }) => {
    return (
        <div className="flex flex-col ">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
