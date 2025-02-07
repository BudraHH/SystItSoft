import SplitText from "../../utils/SplitText.jsx";
import StarBorder from "../../utils/StarBorder.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeams } from "../../componenets/BackgroundBeams.jsx";

const Hero = ({scrollToFeatures}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });



    return (
        <section
            className="relative z-20 w-full h-[100vh] flex flex-col items-center justify-center "
            ref={ref}
        >
            <div className="relative z-10 w-full h-full px-5  lg:px-20 xl:px-28 flex justify-start items-center ">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 h-auto flex flex-col justify-center p-6 sm:p-2 md:p-5 lg:p-10 md: rounded-xl text-white">
                    {/* Animated Heading */}
                    <div className="flex flex-col justify-center items-start  md:flex-row md:justify-start md:items-center md:space-x-2  ">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.45, delay: 0.25 }}
                            className="text-sm leading-4 md:text-lg lg:text-xl xl:text-xl font-normal text-textMuted"
                        >
                            A Hub to
                        </motion.p>

                        {isInView && (
                            <SplitText
                                text="Organize. Systemize. Succeed!"
                                className="font-semibold  text-textLight"
                                textSize="text-sm leading-4 md:text-xl xl:text-2xl "
                                delay={50}
                                animationFrom={{
                                    opacity: 0,
                                    transform: "translate3d(0,50px,0)",
                                }}
                                animationTo={{
                                    opacity: 1,
                                    transform: "translate3d(0,0,0)",
                                }}
                                easing="easeOutCubic"
                            />
                        )}
                    </div>

                    {/* Animated Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-extrabold text-textHeading mt-1 mb-2"
                    >
                        Seamless Solutions for Modern Businesses
                    </motion.h1>

                    {/* Animated Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className="text-sm leading-4 sm:text-lg md:text-lg xl:text-xl  text-textDisabled opacity-90 mb-1 md:mb-4"
                    >
                        Unlock the full potential of your business with our powerful and scalable
                        software solutions. Designed to streamline processes, boost productivity, and
                        elevate customer experience, we make growth effortless and sustainable.
                    </motion.p>

                    {/* Animated Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                        onClick={scrollToFeatures}
                    >

                            <StarBorder as="button" className="text-white" componentClassName={`text-xs px-3 py-2 sm:text-sm md:px-5 md:py-2 md:text-sm  bg-gradiant-r from-primary to-tertiary`} color="cyan" speed="5s">
                                Get Started
                            </StarBorder>

                    </motion.div>
                </div>
            </div>
             <BackgroundBeams className={`opacity-30 backdrop-blur-lg`}/>
        </section>
    );
};

export default Hero;
