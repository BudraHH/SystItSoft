import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { services } from "../../utils/constants.js";

const LandingPageServicesSection = ({ servicesRef, scrollToReasons, scrollToHero }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Check if screen width is below 768px (mobile)
        const isMobile = window.innerWidth < 768;
        if (!isMobile) return;

        const updateActiveIndex = () => {
            const { scrollLeft, clientWidth } = container;
            const cardWidth = clientWidth; // Assuming each card takes full width
            const index = Math.round(scrollLeft / cardWidth); // Find nearest card index
            setActiveIndex(index);
        };

        container.addEventListener("scroll", updateActiveIndex);

        let scrollInterval;
        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    container.scrollLeft = 0; // Reset scroll to start
                } else {
                    container.scrollLeft += 2; // Adjust speed as needed
                }
            }, 40);
        };

        startAutoScroll();

        // Stop scrolling on hover
        container.addEventListener("mouseenter", () => clearInterval(scrollInterval));
        container.addEventListener("mouseleave", startAutoScroll);

        return () => {
            clearInterval(scrollInterval);
            container.removeEventListener("mouseenter", () => clearInterval(scrollInterval));
            container.removeEventListener("mouseleave", startAutoScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = (event) => {
            if (scrollRef.current) {
                event.preventDefault();

                if (scrollProgress === 0 && event.deltaY < 0) {
                    scrollToHero();
                    return;
                }
                if (scrollProgress === 100 && event.deltaY > 0) {
                    setTimeout(() => scrollToReasons(), 550);
                    return;
                }

                scrollRef.current.scrollLeft += event.deltaY;
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
        <section  className="md:py-20">
            <motion.section
                ref={sectionRef}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full md:py-16 bg-secondary/5 backdrop-blur-3xl flex flex-col items-center justify-center overflow-hidden  rounded-2xl shadow-2xl  "
            >

                <div className="w-full max-w-[90%] flex flex-col justify-center items-start space-y-4">
                    <div className={`w-full flex flex-col md:flex-row md:justify-between md:items-center`}><motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ delay: 0.2, duration: 0.25 }}
                        className="text-3xl md:text-4xl font-extrabold text-white text-left"
                    >
                        Capabilities
                    </motion.h2>
                        <motion.p  initial={{ opacity: 0, y: 100 }}
                                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                   transition={{ delay: 0.2, duration: 0.25 }}
                                   className="text-sm md:text-xl font-light text-white text-left">
                            &#34; We don’t just provide services, we create experiences. &#34;
                        </motion.p></div>
                    <motion.div
                        className="hidden md:block h-1 bg-gradient-to-r from-primary to-textPrimary shadow-2xl shadow-textLink rounded-full w-full"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>

                <div ref={scrollRef} className="w-full max-w-[90%] overflow-x-auto flex flex-row flex-nowrap gap-8 py-5 hide-scrollbar">
                    {services.map((service, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full md:w-[28rem] p-2 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-2xl shrink-0 "
                            >
                                <div className="relative w-full h-[24rem]  rounded-lg flex items-center justify-center overflow-hidden group transition-all duration-1000 " >
                                    <img src="" alt="Service Image" className="w-full h-full object-cover rounded-lg" />

                                    {/* Centered Text */}
                                    <div className="absolute inset-0 flex flex-col items-start justify-center text-start p-4 rounded-lg group-hover:translate-y-20 ">
                                        <h6 className="text-white text-lg md:text-2xl font-bold ">
                                            {service.title}
                                        </h6>
                                        <p className="text-gray-300 text-sm md:text-lg ">
                                            {service.description}
                                        </p>
                                    </div>

                                </div>


                            </motion.div>
                        );
                    })}

                </div>

                <div className="block md:hidden flex flex-row justify-end items-end w-full  gap-1">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={` w-1/6 rounded-full transition-all duration-300 ${
                                index === activeIndex ? "h-1 bg-textPrimary" : "h-0.5 bg-textAccent opacity-50"
                            }`}
                        ></div>
                    ))}
                </div>



            </motion.section>
        </section>
    );
};

export default LandingPageServicesSection;
