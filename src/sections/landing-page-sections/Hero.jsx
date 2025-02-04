import SplitText from "../../utils/SplitText.jsx";
import StarBorder from "../../utils/StarBorder.jsx";
import { motion, useInView } from "framer-motion";
import {useRef} from "react";
import {LampDemo} from "../../componenets/Lamp.jsx";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    return (
        <section
            className="relative z-20 w-screen h-auto pt-20 pb-5  flex flex-col items-center justify-center "
            ref={ref}
        >
            <div
                className={`relative z-10 w-full h-full py-16 md:px-20 md:pt-28  flex justify-start items-center `}
            >
                <div
                    className={`w-10/12 max-w-4xl h-auto flex flex-col justify-center p-8 rounded-xl text-white`}
                >
                    {/* Animated Heading */}
                    <div className="flex flex-col justify-start items-start md:flex-row md:items-center md:justify-start md:space-x-2 mb-4">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.45, delay: 0.25 }}
                            className={`text-lg font-normal text-textMuted`}
                        >
                            A Hub to
                        </motion.p>

                        {isInView && (
                            <div className={`flex flex-col justify-center items-center`}>
                                <LampDemo/>
                                <SplitText
                                    text="Organize. Systemize. Succeed!"
                                    className={`font-semibold text-xl sm:text-2xl text-textLight`}
                                    textSize="text-lg"
                                    delay={150}
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
                            </div>
                        )}
                    </div>

                    {/* Animated Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold text-textHeading mb-6`}
                    >
                        Seamless Solutions for Modern Businesses
                    </motion.h1>

                    {/* Animated Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className={`text-lg sm:text-xl text-textMuted opacity-90 mb-8`}
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
                    >
                        <StarBorder as="button" className="text-white text-sm" color="cyan" speed="5s">
                            Get Started
                        </StarBorder>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
