import React from "react";
import { RootLayout } from "../layout/RootLayout";
import { HeroSection } from "../components/Home/HeroSection";
import { clientImages } from "../data/clientImages";
import { Slider } from "../components/ui/Slider";
import { OurPromises } from "../components/Home/OurPromises";

export const HomePage = () => {
    return (
        <RootLayout>
            <HeroSection />

            <div className="flex flex-col w-full items-center ">
                <Slider images={clientImages} />
            </div>

            <OurPromises />
        </RootLayout>
    );
};
