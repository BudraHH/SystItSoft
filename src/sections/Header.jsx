import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { navLinks } from "../utils/constants.js";
import { motion } from "framer-motion";
import { CgClose, CgMenu } from "react-icons/cg";
import { fadeIn } from "../utils/motion.js";
import { FaAngleRight } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({
                    className,
                    itemClassName,
                    activeTab,
                    hoveredTab,
                    handleTabClick,
                    handleTabHover,
                    isMobile,
                    handleMenuClick
                }) => {
    return (
        <div className={`flex ${className}`} id="navbar">
            {navLinks.map(({ id, ref, label,key }) => (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 * id }}
                    key={id}
                    id={`navbar-item-${id}`}
                    className="relative z-10 flex flex-col items-center space-y-2"
                    onClick={() => {
                        handleTabClick(id);
                        if (isMobile) {
                            handleMenuClick()
                        }
                    }}
                    onMouseEnter={() => handleTabHover(id)}
                    onMouseLeave={() => handleTabHover(null)}
                >
                    <Link to={ref} className={`${itemClassName} `} id={`link-${id}`}>
                        <span
                            id={`text-${id}`}
                            className={`${
                                id === activeTab ? "text-white" : "text-textLight hover:text-textHeading"
                            }`}
                        >
                            {label.toString().toUpperCase()}
                        </span>
                        {isMobile && key !== "contact-us" && <FaAngleRight className="text-white ml-2" />}
                    </Link>
                    {isMobile && key !== "contact-us" && <hr className={`w-full bg-textDisabled opacity-25`}/>}

                    {!isMobile && id === activeTab && (
                        <motion.div
                            id={`active-tab-indicator-${id}`}
                            className="absolute -bottom-1 w-full h-0.5 rounded-full bg-white"
                            variants={fadeIn("up", "tween", 0.1, 0.5)}
                            initial="hidden"
                            animate="show"
                        ></motion.div>
                    )}

                    {!isMobile && id !== activeTab && id === hoveredTab && (
                        <motion.div
                            id={`active-tab-indicator-${id}`}
                            className="absolute -bottom-1 w-full h-0.5 rounded-full bg-textDisabled"
                            variants={fadeIn("up", "tween", 0.1, 0.5)}
                            initial="hidden"
                            animate="show"
                        ></motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // Handle screen resize
    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    const [resolution, setResolution] = useState("xs");

    useEffect(() => {
        const checkResolution = () => {
            const screenWidth = window.innerWidth;

            // Update isMobile state for screen width smaller than 768px
            setIsMobile(screenWidth < 768);

            // Determine the resolution size dynamically
            let newResolution = "xs";
            if (screenWidth >= 1280) {
                newResolution = "xl";
            } else if (screenWidth >= 1024) {
                newResolution = "lg";
            } else if (screenWidth >= 768) {
                newResolution = "md";
            } else if (screenWidth >= 475) {
                newResolution = "sm";
            }

            setResolution(newResolution);
            console.log(`Screen resolution: ${newResolution} ${screenWidth}`);
        };

        // Initial resolution check
        checkResolution();

        // Listen for window resize
        window.addEventListener("resize", checkResolution);

        return () => window.removeEventListener("resize", checkResolution);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setShowMenu(false);
        }
    }, [isMobile]);

    const handleMenuClick = () => {
        setShowMenu((prev) => !prev);
    };

    const [activeTab, setActiveTab] = useState(null);
    const [hoveredTab, setHoveredTab] = useState(null);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    const handleTabHover = (id) => {
        setHoveredTab(id);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeTabName = useLocation().pathname.toString();

    useEffect(() => {
        const findActiveTabId = (key) => {
            return navLinks.find((link) => link.ref === key)?.id || null;
        };

        if (activeTabName) {
            setActiveTab(findActiveTabId(activeTabName));
        }
    }, [activeTabName]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <header
            id="header"
            className={`fixed top-0 z-30 w-full h-20  px-6 md:px-12 py-4 flex flex-row justify-between items-center 
            ${isScrolled ? "backdrop-blur-sm shadow-md" : "bg-transparent"} text-sm md:text-lg lg:text-xl`}
        >
            {/* Company Logo */}
            <div id="company-logo" className="w-1/4 max-w-[120px] h-full flex justify-center items-center">
                <Link to="/" id="logo-link">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            {!isMobile ? (
                <div id="desktop-navbar" className="flex flex-row space-x-4">
                    <Navbar
                        className="flex-row justify-center items-center space-x-4"
                        activeTab={activeTab}
                        hoveredTab={hoveredTab}
                        handleTabClick={handleTabClick}
                        handleTabHover={handleTabHover}
                    />
                </div>
            ) : (
                <div className="relative z-60">
                    {/* Menu Button - Positioned Right */}
                    <button
                        onClick={handleMenuClick}
                        className="fixed top-4 right-4 z-50 p-3 flex flex-col justify-center items-center w-12 h-12 bg-transparent border-none outline-none "
                        aria-label="Toggle sidebar"
                    >
    <span
        className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${showMenu ? "rotate-45 translate-y-[6px] bg-gray-300" : ""}`}
    ></span>
                        <span
                            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-200 ease-in-out my-1 ${showMenu ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${showMenu ? "-rotate-45 -translate-y-[6px] bg-gray-300" : ""}`}
                        ></span>
                    </button>


                    {/* Sidebar - Animates from Right */}
                    <motion.div
                        initial={{x: "100%"}}
                        animate={{x: showMenu ? "0%" : "100%"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="fixed top-20 right-0  h-full w-full bg-primary md:w-1/2 shadow-lg p-6 space-y-6 flex flex-col z-50"
                    >
                        {/* Navigation Menu */}
                        <Navbar
                            className="flex flex-col space-y-4"
                            itemClassName="w-full flex flex-row justify-between items-center text-lg font-semibold pb-2 "
                            activeTab={activeTab}
                            hoveredTab={hoveredTab}
                            handleTabClick={handleTabClick}
                            handleTabHover={handleTabHover}
                            isMobile
                            handleMenuClick={handleMenuClick}
                        />


                    </motion.div>
                </div>
            )}
        </header>
    );
};

export default Header;



