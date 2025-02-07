import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {benefits } from "../../utils/constants.js";
import SpotlightCard from "../../utils/SpotlightCard.jsx";
import StarBorder from "../../utils/StarBorder.jsx";



const ReasonSection = ({reasonsRef, scrollToJobListing}) => {

    const sectionRef = reasonsRef || useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

    return (
        <section
            className=" w-full pt-24  flex flex-col justify-center items-center space-y-4  lg:space-y-6 xl:space-y-10  "
            ref={reasonsRef}
        >
            {/* Section Heading */}
            <div className={`flex flex-col justify-center items-center space-y-2`}>
                <motion.h2
                    initial={{opacity: 0, y: 100}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 100}}
                    transition={{delay: 0.2, duration: 0.25}}
                    className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold text-textHeading text-center"
                >
                    Why Choose Systitsoft?
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 50}}
                    transition={{delay: 0.35, duration: 1}}
                    className={`w-10/12  text-center text-sm md:text-lg xl:text-2xl text-textMuted`}
                >
                    Elevate your career with <strong className="font-extrabold ">Systitsoft</strong>.
                    We empower talents through <strong className={`font-bold`}>innovation, collaboration, and continuous
                    learning</strong>.
                </motion.p>
            </div>

            {/* Benefits Grid Section */}
            <div
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 text-center px-6  xl:px-16">
                {benefits.map((item, index) => {
                const cardRef = useRef(null);
                const cardInView = useInView(cardRef, {triggerOnce: true, amount: 0.2});

                return (
                    <motion.div
                        ref={cardRef}
                        key={index}
                        initial={{opacity: 0, y: 100}}
                        animate={cardInView ? {opacity: 1, y: 0} : {opacity: 0, y: 100}}
                        transition={{
                            duration: 0.5,
                            delay: 0.2 * index + 0.3,
                            type: "spring",
                            stiffness: 80,
                        }}
                        whileHover={{scale: 1.025}}
                        className="border border-tertiary bg-primary rounded-xl cursor-pointer shadow-md"
                    >
                        <SpotlightCard
                            className="h-full"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <div className="flex flex-col justify-center items-center h-full space-y-2 xl:p-4">
                                <h3 className="text-lg lg:text-2xl  font-bold text-textHeading">
                                    {item.title}
                                </h3>
                                <p className="text-sm lg:text-lg text-textDisabled">
                                    {item.desc}
                                </p>

                            </div>
                        </SpotlightCard>
                    </motion.div>
                )
                })}
            </div>


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
                onClick={scrollToJobListing}
            >

                <StarBorder as="button" className="text-white"
                            componentClassName={`text-xs px-3 py-2 sm:text-sm md:px-5 md:py-2 md:text-sm lg:text-lg bg-gradiant-r from-primary to-tertiary`}
                            color="cyan" speed="5s">
                    Explore Jobs
                </StarBorder>

            </motion.div>

        </section>
    );
};

export default ReasonSection;
