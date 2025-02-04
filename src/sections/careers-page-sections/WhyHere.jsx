import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {benefits} from "../../utils/constants.js";
import SpotlightCard from "../../utils/SpotlightCard.jsx";

const WhyHere = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section
            className="relative z-20 w-screen h-auto pt-20  flex flex-col items-center justify-center"
            ref={ref}
        >
            <div className="relative z-10 w-full h-full px-8 md:px-16 flex flex-col justify-start items-center space-y-12 ">
                {/* Section Heading */}
                <div className={`flex flex-col space-y-5`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ delay: 0.2,duration:1}}
                        className={`font-extrabold text-center text-3xl md:text-5xl lg:text-6xl text-textLight`}
                    >
                        Why Choose Systitsoft?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ delay: 0.5, duration:1}}
                        className={`text-center text-lg text-textMuted`}
                    >
                        Elevate your career with <span className="font-bold text-lg ">Systitsoft</span>.
                        We empower talents through <strong>innovation, collaboration, and continuous learning</strong>.
                    </motion.p>
                </div>

                {/* Benefits Grid Section */}
                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-5 xl:mt-24">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{
                                duration: 1,
                                delay: 0.5 * index,
                                type: "spring",
                                stiffness: 80,
                            }}
                            className={`border border-tertiary  
                            rounded-xl cursor-pointer`}
                        >
                            <SpotlightCard
                                className="h-full"
                                spotlightColor="rgba(0, 229, 255, 0.2)"
                            >
                                <div className="flex flex-col h-full space-y-4 p-6">
                                    <div className="flex-1">
                                        <h3
                                            className={`text-lg font-bold text-textHeading`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`text-sm mt-2 text-textMuted`}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 50}}
                    transition={{delay: 2.75, type: "spring", stiffness: 80}}
                    className={`px-8 py-4 text-white font-semibold rounded-lg shadow-md bg-tertiary hover:bg-secondary hover:shadow-xl transition-all`}
                >
                    Explore Careers
                </motion.button>
            </div>
        </section>
    );
};

export default WhyHere;
