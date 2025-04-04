import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="bg-card-background px-4 md:px-24 font-inter font-normal ">
            {/*------------------footer-top-part--------------------- */}

            {/*-----------------footer-botton-part------------ */}
            <div className="     w-full">
                {/* Top Section */}
                <div className="flex flex-col gap-8 md:flex-row md:gap-80 py-12 border-t border-b  border-accent-foreground/20">
                    {/* Logo */}
                    <div className="">
                        <img className="min-w-36" src="/logo/Brand logo.png" alt="SDS Logo" />
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 flex flex-wrap gap-y-10 gap-8 md:gap-12 ">
                        {/* Categories */}
                        <div className=" w-full md:w-full max-w-[182px] md:max-w-[230px] text-start  pr-2 ">
                            <h6 className="md:text-2xl text-accent-foreground font-medium">Categories</h6>
                            <ul className="mt-6 opacity-60">
                                <li className="">Indoor</li>
                                <li className="mt-4">Outdoor</li>
                                <li className="mt-4">Front Door</li>
                                <li className="mt-4">Office</li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div className=" w-full max-w-[182px] text-start md:max-w-[230px]  ">
                            <h6 className="md:text-2xl text-accent-foreground font-medium">Company</h6>
                            <ul className="mt-6 opacity-60">
                                <li className="">About us</li>
                                <li className="mt-4">Products</li>
                                <li className="mt-4">Solutions</li>
                                <li className="mt-4">Blog</li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div className=" w-full max-w-[182px] text-start md:max-w-[230px]  ">
                            <h6 className="md:text-2xl text-accent-foreground font-medium">Contact</h6>
                            <ul className="mt-6 opacity-60">
                                <li className="">Contact us</li>
                                <li className="mt-4">lorem@gmail.com</li>
                                <li className="mt-4">Register a complaint</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center pt-8 flex flex-col gap-4 pb-5 ">
                    {/* Social Media Icons */}
                    <div className="flex flex-row gap-8 items-center justify-center">
                        <FaXTwitter className="text-accent-foreground " size={"24px"} />
                        <FaFacebookF className="text-accent-foreground " size={"24px"} />
                        <FaInstagram className="text-accent-foreground" size={"24px"} />
                        <FaYoutube className="text-accent-foreground" size={"24px"} />
                    </div>

                    {/* Copyright & Terms */}
                    <p className="opacity-60">© 2025 SDS All rights reserved</p>
                    <p className="opacity-60">
                        <span>Terms & Condition</span> • <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
