import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import SplitText from "../../utils/SplitText.jsx";
import SpotlightCard from "../../utils/SpotlightCard.jsx";
import { services } from "../../utils/constants.js";

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });


    return (
        <section
            className="relative z-20 w-screen min-h-screen flex flex-col items-center justify-center"
            ref={ref}
        >
            <div className="relative z-10 w-full h-full px-16 flex flex-col justify-start items-center space-y-8 md:space-y-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                    <SplitText
                        text="What we do?"
                        className={`font-semibold text-center md:text-6xl text-textLight`}
                        textSize="text-xl sm:text-3xl md:text-5xl font-bold"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                        easing="easeOutCubic"
                    />
                </motion.div>

                {/* Spotlight Cards Section */}
                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-5 xl:mt-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 1,
                                delay: 0.5 * index,
                                type: "spring",
                                stiffness: 80,
                            }}
                            whileHover={{ scale: 1.025 }}
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
                                            {service.title}
                                        </h3>
                                        <p
                                            className={`text-sm mt-2 text-textMuted`}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
