import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50   bg-white shadow-md">
            <div className="flex justify-between items-center p-6 md:px-24">
                <div className="text-2xl font-bold">
                    <img src="/logo/SDS_Logo.png" alt="SDS Logo" />
                </div>

                {/* hamburger menu for mob-view  */}
                <div className=" md:hidden w-6" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                            alt=""
                        />
                    )}
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
                    <a href="#" className="text-accent-foreground hover:text-black">
                        <img src="/icons/Facebook.png" alt="fb" />
                    </a>
                    <a href="#" className="text-accent-foreground hover:text-black">
                        <img src="/icons/insta.png" alt="insta" />
                    </a>
                    <a href="#" className="text-accent-foreground hover:text-black">
                        <img src="/icons/twitter.png" alt="twitter" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="md:hidden flex flex-col items-center bg-background border-t border-border py-4"
                    onClick={() => setIsOpen(false)}
                >
                    {/* nav-bar for mob view */}
                    <div className="md:hidden flex flex-col items-center   py-4">
                        <a href="#" className="text-accent-foreground hover:text-black mb-2">
                            Product
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black mb-2">
                            Solutions
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black mb-2">
                            Blog
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black mb-2">
                            About
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black ">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden flex space-x-8">
                        <a href="#" className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/Facebook.png" alt="fb" />
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/insta.png" alt="insta" />
                        </a>
                        <a href="#" className="text-accent-foreground hover:text-black w-7">
                            <img src="/icons/twitter.png" alt="twitter" />
                        </a>
                    </div>
                    {/* 
                    <Link to={"/"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to={"/about"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to={"/contact"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <Link to={"/courses"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Courses
                    </Link> */}

                    {/* <div className="mt-4 flex flex-col gap-3">
                        <Button variant="outline" size="lg" onClick={() => setIsOpen(false)}>
                            Log-in
                        </Button>
                        <CallToActionButton value="Join us" onClick={() => setIsOpen(false)} />
                    </div> */}
                </nav>
            )}
        </header>
    );
};
