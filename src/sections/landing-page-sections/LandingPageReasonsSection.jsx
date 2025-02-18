import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { reasons } from "../../utils/constants.js";
import ReasonsDisplay from "../../componenets/ReasonsDisplay.jsx";

const LandingPageReasonsSection = ({ reasonsRef, scrollToServices,scrollToFaqs }) => {
    const ref = useRef(null);
    const scrollRef = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const data = reasons.map(({ title, description, details }) => ({
        title,
        content: (
            <div className="flex flex-col h-full space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6">
                <p className="pl-5 md:px-0 text-textLight opacity-80 text-sm leading-6 md:text-xl lg:text-2xl font-medium">
                    {description}
                </p>
                <div className="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-2">
                    {["Details", "Impact"].map((label, index) => (
                        <div
                            key={index}
                            className="p-5 bg-containerBG/30 backdrop-blur-3xl lg:w-1/2 h-full rounded-lg flex flex-col justify-start items-start space-y-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                        >
                            <h3 className="text-textLight opacity-80 font-bold text-sm md:text-xl">{label}</h3>
                            <p className="text-textHeading font-normal opacity-70 text-sm md:text-lg">
                                {label === "Details" ? details.explanation : details.impact}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    }));


    return (
        <section ref={reasonsRef} className="h-screen backdrop-blur-3xl">
            <section
                ref={ref}

                className="relative z-20 w-full h-full py-16 flex flex-col items-center justify-start overflow-hidden bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl space-y-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="z-40 w-full max-w-[90%] flex flex-col md:flex-row md:justify-between md:items-center space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white text-left">
                        Why Choose Us?
                    </h2>
                    <p className="text-sm md:text-xl font-light text-white text-left">
                        &#34; Choosing us means choosing excellence. We don’t just meet expectations—we exceed them. &#34;
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    className="w-[90%]   md:overflow-hidden p-5 pb-10 flex border border-white/10 backdrop-blur-2xl rounded-xl scrollbar-hide"
                >
                    <ReasonsDisplay data={data} scrollToServices={scrollToServices} scrollToFaqs={scrollToFaqs} />
                </motion.div>
            </section>
        </section>
    );
};

export default LandingPageReasonsSection;
