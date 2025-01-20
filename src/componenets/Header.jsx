import React, { useEffect, useState } from "react";
import { HiMenu, HiOutlineChevronRight } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const popupData = [
  'Web Development',
  'App Development',
  'SEO Services',
  'Cloud Solutions',
  'Cybersecurity Services',
  'Digital Marketing',
  'UI/UX Design',
  'Consulting',
];

const navs = [
  { id: 0, ref:"/", label:"LANDINGPAGE"},
  { id: 1, ref: "/about-us", label: "ABOUT US" },
  { id: 2, ref: "/solutions", label: "SOLUTIONS" },
  { id: 3, ref: "/capabilities", label: "CAPABILITIES" },
  { id: 4, ref: "/insights", label: "INSIGHTS" },
  { id: 5, ref: "/faqs", label: "FAQs" },
  { id: 6, ref: "/contact-us", label: "CONTACT US" },
];

const NavBar = ({ className, itemClassName, isMobile, activeTab, setActiveTab, hoveredTab, setHoveredTab }) => {
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const handleMouseEnter = (id) => {
    setHoveredTab(id);
  }

  const handleMouseLeave = () => {
    setHoveredTab(null); // Ensure hover state is cleared correctly
  }

  return (
    <nav className={`flex ${className}  `}>
      {navs.map(({ id, ref, label }) => {
        if (!isMobile && (id == 0 || id == 6)) return null;  // Skip certain items
        if (isMobile && (id === 0)) return null;
        const isActive = id === activeTab;
        const isHovered = id === hoveredTab;
        return (
          <div key={id} className="w-full sm:w-auto sm:px-2 sm:text-[1rem] sm:mt-2 md:w-auto md:px-2 lg:w-auto lg:px-2 md:mt-2 lg:mt-2 ">
            <div
              className={`${itemClassName}  ${
                isActive ? "text-white" : "text-myColors-400"
              }`}
              onClick={() => handleTabClick(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}  // Fix the hover logic
            >
              <Link to={ref}>
                <span>{label}</span>
              </Link>
              {isMobile && label !== "CONTACT US" && <HiOutlineChevronRight />}
            </div>
            {isMobile && (
              <hr className="border-b-0 mt-1 border-myColors-800"/>
            )}
            {!isMobile && isActive ? (
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn("up", "easeIn", 0.05, 0.75)}
                className="h-0.5 mt-1 bg-white rounded-full"
              />
            ) : (
              <div className="h-0.5 mt-1 bg-transparent rounded-full"></div>
            )}
            {!isMobile && !isActive && isHovered ? (
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn("up", "easeIn", 0.05, 0.25)}
                className="h-0.5 mt-1 bg-myColors-600 rounded-full"
              />
            ) : (
              <div className="h-0.5 mt-1 bg-transparent rounded-full"></div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  // Set isMobile state based on window size
  useEffect(() => {
    const handleResize = () => { 
      const width = window.innerWidth;
      if (width <= 640) {
        console.log("resolution : xs");
        setIsMobile(true);
      } else {
        if (width < 768) {
          console.log("resolution : sm");
        } else if (width < 1024) {
          console.log("resolution : md");
        } else if (width <= 1280) {
          console.log("resolution : lg");
        } else if (width <= 1536) {
          console.log("resolution : xl");
        } else {
          console.log("resolution : larger than xl");
        }
        setIsMobile(false);
      }
    };

    handleResize(); // Check initial size on mount
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  return (
    <header className="w-full max-w-screen p-4 h-12 md:h-16 lg:h-20  flex flex-row justify-between items-center bg-myColors-900 fixed top-0 left-0 z-50 shadow-b  lg:shadow-sm shadow-myColors-300">
      <div className="sm:w-24 md:w-40 lg:w-56 lg:h-9 cursor-pointer">
        <Link to="/">
          <h6 className="text-white">SysItSoft</h6>
        </Link>
      </div>

      {/* Desktop */}
      {!isMobile && (
        <div className=" w-full justify-center flex items-center ">
          <NavBar
            className="flex-row justify-center  items-center w-full "
            itemClassName={`sm:text-xs md:text-lg  cursor-pointer `}
            isMobile={isMobile}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            hoveredTab={hoveredTab}
            setHoveredTab={setHoveredTab}  // Pass down setHoveredTab to handle hover logic
          />
        </div>
      )}

      {/* Mobile */}
      {isMobile && (
  <div>
    <div
      className="hover:bg-myColors-800  w-8 rounded-full flex justify-center items-center cursor-pointer"
      onClick={handleMenuClick}
      aria-label="Toggle Menu"
    >
      {showMenu ? (
        <RiCloseLine/>
      ) : (
        <HiMenu/>
      )}
    </div>
    {showMenu && (
      <div className="absolute top-12 left-0 p-4 w-full flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
        <NavBar
          className="flex-col justify-center items-center w-full "
          itemClassName={` w-full flex flex-row justify-between items-center cursor-pointer `}
          isMobile={true} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          hoveredTab={hoveredTab}
          setHoveredTab={setHoveredTab}
        />
      </div>
    )}
  </div>
)}


      {!isMobile && (
        <div className="sm:w-24 md:w-40 lg:w-56 lg:h-9 flex justify-end items-center cursor-pointer">
        <Link to="/contact-us">
          <button className="border border-myColors-300 text-myColors-500 rounded-lg sm:py-0.5 sm:px-2  md:py-1 md:px-2 lg:py-2 lg:px-4 flex  justify-center items-center text-dark hover:bg-myColors-900 hover:text-white" type="button">
            <span className="">Contact</span> <span className="sm:hidden md:block lg:block xl:block">{" "}Us</span>
          </button>
        </Link>
      </div>
      )}
    </header>
  );
};

export default Header;
