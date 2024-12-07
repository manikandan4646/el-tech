import { useState } from "react";
import mainLogo from '../assets/el-group-logo.svg'

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about_us",
        label: "About Us"
    },
    {
        id: "services",
        label: "Services"
    },
    {
        id: "projects",
        label: "Projects"
    }
]

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleScrollTo = (id: string) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="mx-4 px-4 sm:px-8 lg:px-[58px]">
                <div className="flex justify-between items-center py-[10px] sm:py-[16px]">
                    <div className="">
                        <img
                            src={mainLogo}
                            alt="Logo"
                            className="w-[150px] h-[32px] object-contain sm:w-[174px] sm:h-[38px]"
                        />
                        <div className="text-[11px] font-sans text-center font-semibold mt-[5px] sm:text-[13px] leading-[16px]">
                            EL-TECH CONSTRUCTIONS
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-11">
                        {navItems.map((nav: NavItem) => (
                            <div key={nav.id} className="">
                                <button
                                    onClick={() => handleScrollTo(nav.id)}
                                    className={`cursor-pointer text-[17px] font-medium hover:text-primary ${activeSection === nav.id ? "text-primary" : ""}`}
                                >
                                    {nav.label}
                                </button>
                                <div
                                    className={`h-[1px] w-[3px] ${activeSection === nav.id ? "bg-primary" : "bg-black"}`}
                                />
                            </div>
                        ))}
                    </nav>

                    {/* Contact Us Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => handleScrollTo("Contact Us")}
                            className=" w-[145px] px-3 py-2 bg-primary font-semibold text-black rounded-[10px]"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-black focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-16 right-0 px-3 py-5 w-full h-full bg-white transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} z-50`}
            >
                <nav className="">
                    {[...navItems, { id: "contact", label: "Contact Us" }].map((nav: NavItem) => (
                        <div key={nav.id} className="relative">
                            <button
                                onClick={() => handleScrollTo(nav.id)}
                                className={`hover:text-primary py-3 px-5 w-full text-left font-medium ${activeSection === nav.id ? "text-primary" : ""}`}
                            >
                                {nav.label}
                            </button>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
