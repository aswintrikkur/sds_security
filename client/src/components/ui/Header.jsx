import React from "react";

export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50  flex justify-between items-center p-6 px-24 bg-white shadow-md">
            <div className="text-2xl font-bold">
                <img src="/logo/SDS_Logo.png" alt="SDS Logo" />
            </div>

            {/* hamburger menu for mob-view  */}
            <div className=" md:hidden w-6">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    alt=""
                />
            </div>

            {/* nav-bar for Desktop view */}
            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-accent-foreground hover:text-black">
                    Product
                </a>
                <a href="#" className="text-accent-foreground hover:text-black">
                    Solutions
                </a>
                <a href="#" className="text-accent-foreground hover:text-black">
                    Blog
                </a>
                <a href="#" className="text-accent-foreground hover:text-black">
                    About
                </a>
                <a href="#" className="text-accent-foreground hover:text-black">
                    Contact
                </a>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black">
                    <img src="/icons/Facebook.png" alt="fb" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                    <img src="/icons/insta.png" alt="insta" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                    <img src="/icons/twitter.png" alt="twitter" />
                </a>
            </div>
        </nav>
    );
};
