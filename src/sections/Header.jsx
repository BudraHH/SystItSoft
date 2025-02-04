import {Link, useLocation} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { navLinks } from "../utils/constants.js";
import { motion } from "framer-motion";
import { CgClose, CgMenu } from "react-icons/cg";
import { fadeIn } from "../utils/motion.js";
import { FaAngleRight } from "react-icons/fa";
import logo from "../assets/logo.png"


const Navbar = ({
                    className,
                    activeTab,
                    hoveredTab,
                    handleTabClick,
                    handleTabHover,
                    isMobile,
                }) => {
    return (
        <div className={`flex ${className}`} id="navbar">
            {navLinks && navLinks.map(({ id, ref, label }) => (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 * id }}
                    key={id}
                    id={`navbar-item-${id}`}
                    className="relative z-10 flex flex-col items-center space-y-2"
                    onClick={() => handleTabClick(id)}
                    onMouseEnter={() => handleTabHover(id)}
                    onMouseLeave={() => handleTabHover(null)}
                >
                    <Link to={ref} className={` `} id={`link-${id}`}>
                        <span
                            id={`text-${id}`}
                            className={`${
                                id === activeTab
                                    ? "text-white"
                                    : "text-textLight hover:text-textHeading"
                            }`}
                        >
                            {label.toString().toUpperCase()}
                        </span>
                        {isMobile && (
                            <FaAngleRight
                                id={`icon-${id}`}
                                className={`${
                                    id === activeTab
                                        ? "text-white"
                                        : "text-textLight hover:text-textHeading"
                                }`}
                            />
                        )}
                    </Link>

                    {!isMobile && id === activeTab && (
                        <motion.div
                            id={`active-tab-indicator-${id}`}
                            className={`absolute -bottom-1 w-full h-0.5 rounded-full  bg-white`}
                            variants={fadeIn("up", "tween", 0.1, 0.5)}
                            initial="hidden"
                            animate="show"
                        ></motion.div>
                    )}

                    {!isMobile && id === hoveredTab && id !== activeTab && (
                        <motion.div
                            id={`hovered-tab-indicator-${id}`}
                            className={`absolute -bottom-1.5 w-full h-0.5 rounded-full bg--textLight `}
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

    useEffect(() => {
        setIsMobile(screenWidth < 768);
    }, [screenWidth]);

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
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeTabName = useLocation().pathname.toString();
    console.log(activeTabName.slice(1))

    useEffect(() => {
        const findActiveTabId = (key) => {
            if (!navLinks) return null;

            for (let i = 0; i < navLinks.length; i++) {
                if (navLinks[i].ref === key) {
                    return navLinks[i].id;
                }
            }
            return null;
        };

        if (activeTabName) {
            const activeTabIdFound = findActiveTabId(activeTabName);
            if (activeTabIdFound !== null) {
                setActiveTab(activeTabIdFound);
            }
        }
    }, [activeTabName]);

    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);


    const handleRemoveCursor = () => {
        setActiveTab(null);
    };

    return (
        <header
            id="header"
            className={`fixed top-0 z-30 w-screen h-20 px-6 md:px-12 py-4 flex flex-row justify-between items-center ${isScrolled ? "backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 shadow-md" : "bg-transparent"} text-sm md:text-lg lg:text-xl`}
        >
            {/* Company Logo */}
            <div
                id="company-logo"
                className={`w-1/4 max-w-[120px] h-full flex justify-center items-center `}
            >
                <Link to="/" id="logo-link" onClick={handleRemoveCursor}><img src={logo} alt="Company Logo" /></Link>
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
                <>
                    {/* Mobile Menu Toggle */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="lg:hidden"
                    >
                        <button
                            onClick={handleMenuClick}
                            className="text-white"
                            aria-label="Toggle mobile menu"
                        >
                            {showMenu ? <CgClose size={30} /> : <CgMenu size={30} />}
                        </button>
                    </motion.div>

                    {/* Mobile Menu */}
                    {showMenu && (
                        <div
                            id="mobile-menu"
                            className="absolute top-0 right-0 bg-primary h-full w-3/4 p-6 space-y-6 flex flex-col"
                        >
                            <Navbar
                                className="flex-col justify-start items-start"
                                activeTab={activeTab}
                                hoveredTab={hoveredTab}
                                handleTabClick={handleTabClick}
                                handleTabHover={handleTabHover}
                                isMobile
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2.75 }}
                            >
                                <Link
                                    id="contact-us-link"
                                    to="/contact"
                                    onClick={handleRemoveCursor}
                                    className="text-white font-bold text-xl"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>

                        </div>
                    )}
                </>
            )}
        </header>
    );
};

export default Header;
