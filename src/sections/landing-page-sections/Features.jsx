import { motion, useInView } from "framer-motion";
import SpotlightCard from "../../utils/SpotlightCard.jsx";
import { services } from "../../utils/constants.js";
import { useRef } from "react";

const Features = ({featuresRef}) => {
    const isInView = useInView(featuresRef, { once: true, amount: 0.5 });

    return (
        <section
            className=" w-full pt-24  flex flex-col justify-center items-center space-y-4  lg:space-y-6 xl:space-y-10  "
            ref={featuresRef}
        >
            {/* Section Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={ isInView ? { opacity: 1 , y: 0 } : { opacity: 0, y: 100 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold text-textHeading text-center"
            >
                What we do?
            </motion.h2>

            {/* Spotlight Cards Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 text-center px-6  xl:px-16">
                {services.map((service, index) => {
                        const cardRef = useRef(null);
                        const cardInView = useInView(cardRef, { once: true, amount: 0.2 });

                        return (
                            <motion.div
                                ref={cardRef}
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 * index + 0.3,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                                whileHover={{ scale: 1.025 }}
                                className="border border-tertiary bg-primary rounded-xl cursor-pointer shadow-md"
                            >
                                <SpotlightCard
                                    className="h-full"
                                    spotlightColor="rgba(0, 229, 255, 0.2)"
                                >
                                    <div className="flex flex-col justify-center items-center h-full space-y-2 xl:p-4">
                                        <h3 className="text-lg lg:text-2xl  font-bold text-textHeading">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm lg:text-lg text-textDisabled">
                                            {service.description}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Features;
