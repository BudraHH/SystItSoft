import React from "react";
import { twMerge } from "tailwind-merge";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-blue-200 flex flex-col justify-center items-center space-y-10 md:space-y-12 lg:space-y-20 ">
      Hero
    </section>
  );
};

const LandingPage = ({ isDarkMode }) => {
  const landingPageClass = twMerge(
    "w-full overflow-hidden p-5 mt-14 md:mt-16 lg:mt-20 xl:mt-22 flex flex-col justify-center items-center space-y-10 md:space-y-12 lg:space-y-20 text-black",
    isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50"
  );

  return (
    <section className={landingPageClass}>
      <Hero />
      Landing page
    </section>
  );
};

export default LandingPage;
