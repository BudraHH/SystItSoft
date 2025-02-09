import { motion, useInView } from "framer-motion";
import {useRef, useEffect, useState} from "react";
import {services} from "../../utils/constants.js"
import SpotlightCard from "../../utils/SpotlightCard.jsx";


const LandingPageServicesSection = ({ servicesRef, scrollToReasons,scrollToHero }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            if (scrollRef.current) {
                event.preventDefault(); // Prevent default scrolling

                if (scrollProgress === 0 && event.deltaY < 0) {
                    // Allow scrolling up to the previous section when scroll progress is 0
                    scrollToHero();
                    return;
                }

                if (scrollProgress === 100 && event.deltaY > 0) {
                    // Allow scrolling down to the next section when scroll progress is 100
                    setTimeout(() => {
                        scrollToReasons();
                    }, 550);
                    return;
                }

                // Prevent scrolling past the section if progress is between 1 and 99
                if (scrollProgress > 0 && scrollProgress < 100) {

                }

                scrollRef.current.scrollLeft += event.deltaY; // Convert vertical scroll to horizontal
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
                setScrollProgress(progress);
            }
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener("wheel", handleScroll, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleScroll);
            }
        };
    }, [scrollProgress, scrollToReasons, scrollToHero]);

    return (
        <section
            ref={servicesRef}
            className="h-screen py-20  backdrop-blur-3xl">

            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full py-16 md:my-10 flex flex-col items-center justify-center overflow-hidden bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl  space-y-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10  opacity-50 pointer-events-none" />
                {/* Section Heading */}
                <div className="w-full max-w-[90%] flex flex-col justify-center items-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ delay: 0.2, duration: 0.25 }}
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-textHeading text-center"
                    >
                        What we do?
                    </motion.h2>
                    <div className="h-1 md:h-1.5 bg-textLink drop-shadow-xl brightness-125 rounded-full w-full" style={{width:`${scrollProgress}%`}}></div>
                </div>

                {/* Horizontally Scrolling Content */}
                <div
                    ref={scrollRef}
                    className="w-full max-w-[90%] overflow-x-auto hide-scrollbar h-full p-5 flex  flex-row flex-nowrap gap-5 border border-white/10 backdrop-blur-2xl rounded-xl scrollbar-hide"
                >
                    {services.map((service, index) => {
                        const cardRef = useRef(null);
                        const cardInView = useInView(cardRef,{once: true, amount: 0.5});
                        return (
                            <div
                                key={index}
                                className="w-full h-full flex flex-col md:flex-row justify-between items-center  rounded-lg shrink-0 shadow-lg overflow-hidden md:space-x-5"
                            >

                            {/* Image Section */}
                                <div
                                     className="w-full h-[40%] md:w-[40%] md:h-full bg-gray-700 text-center flex items-center justify-center rounded-lg shadow-lg">
                                    <span className="text-white text-lg font-semibold">Image Placeholder</span>
                                </div>

                                {/* Text Section */}

                                <SpotlightCard
                                    className="w-full h-[60%] md:w-[60%] md:h-full rounded-lg shadow-md p-6  border border-textAccent/20 bg-textAccent/10 backdrop-blur-3xl  flex justify-center items-center"

                                spotlightColor="rgba(0, 229, 255, 0.2)"
                                ><div
                                    ref={cardRef}
                                    className={` text-left flex flex-col items-start justify-center space-y-2 md:space-y-4`}
                                >    <motion.h6
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                        transition={{ delay: 0.25, duration: 0.25 }}
                                        className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-start">
                                        {service.title}
                                    </motion.h6>
                                    <motion.p
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                        transition={{ delay: 0.5, duration: 0.25 }}
                                        className="text-xs md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                                        {service.description}
                                    </motion.p>
                                </div>
                                </SpotlightCard>
                            </div>

                        )

                    })}

                </div>
            </motion.section>
        </section>
    );
};

export default LandingPageServicesSection;
