import React from "react";
import { RootLayout } from "../layout/RootLayout";
import { HeroSection } from "../components/Home/HeroSection";
import { clientImages } from "../data/clientImages";
import { Slider } from "../components/ui/Slider";
import { OurPromises } from "../components/Home/OurPromises";
import { AboutSection } from "../components/Home/AboutSection";
import { ProductSection } from "../components/Home/ProductSection";

export const HomePage = () => {
    return (
        <RootLayout>
            <HeroSection />

            <Slider images={clientImages} />

            <OurPromises />
            <AboutSection />
            <ProductSection />
        </RootLayout>
    );
};
