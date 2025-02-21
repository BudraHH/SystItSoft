import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const CareersHeroSection = ({heroRef, scrollToImageGrid, scrollToCurrentOpenings}) => {
    const sectionRef = heroRef || useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 });



    return (
        <section ref={sectionRef} className="relative pt-20 lg:h-screen flex justify-center items-center">
            <motion.section
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative z-20 w-full h-[70vh] lg:h-[80vh]  flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary-10 backdrop-blur-3xl rounded-3xl shadow-2xl"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary opacity-50 pointer-events-none" />


                <div className="relative z-10 container mx-auto text-center p-5">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white">
                        Innovate. Systemize. Thrive.
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl mb-8 opacity-80 text-textLight">
                        Be part of a dynamic, R&D-driven team solving complex industrial challenges through cutting-edge technology. Shape the future with us.
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">

                        <button
                            onClick={scrollToImageGrid}
                            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm md:text-lg py-3 md:px-8 rounded-full transition-colors duration-300">
                            Explore More
                        </button>
                        <button
                            onClick={scrollToCurrentOpenings}
                            className="bg-white text-indigo-800 font-semibold  text-sm md:text-lg py-3 md:px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                            View Open Positions
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-t from-transparent via-textAccent to-textPrimary"></div>
            </motion.section>
        </section>
    );
};

export default CareersHeroSection;
