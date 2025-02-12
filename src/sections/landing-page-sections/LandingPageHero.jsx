import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import SplitText from "../../utils/SplitText.jsx";
import StarBorder from "../../utils/StarBorder.jsx";
import { BackgroundBeams } from "../../componenets/BackgroundBeams.jsx";

const LandingPageHero = ({ heroRef, scrollToServices }) => {
    const sectionRef = heroRef || useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

    // Memoizing particles to avoid unnecessary recalculations on re-renders
    const particles = useMemo(() => {
        return Array.from({ length: 20 }).map(() => ({
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: `${Math.random() * 10 + 3}px`,
            delay: `${Math.random() * 4}s`,
        }));
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen flex justify-center items-center">
            <motion.section
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className="relative z-20 w-full h-[80vh] my-24 flex flex-col items-center justify-center overflow-hidden bg-slate-500/5 backdrop-blur-3xl rounded-3xl shadow-2xl"
            >
                {/* Background Grid & Noise */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                {/* Floating Particles */}
                {particles.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: parseFloat(p.delay),
                        }}
                        className="absolute bg-slate-400 rounded-full opacity-30 blur-md animate-pulse"
                        style={{ width: p.size, height: p.size, top: p.y, left: p.x }}
                    />
                ))}

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.75, delay: 0.75 }}
                    className="relative z-10 w-full h-full px-  lg:px-20 xl:px-28 flex justify-start items-center ">
                    <div className="w-full md:w-11/12 lg:w-11/12 h-auto flex flex-col justify-center items-start md:items-start p-6 sm:p-2 md:p-5 lg:p-10 rounded-xl text-white">
                        {/* Animated Heading */}
                        <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center gap-2">
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.45, delay: 0.25 }}
                                className="text-sm leading-4 md:text-lg lg:text-xl xl:text-xl font-normal text-textMuted"
                            >
                                A Hub to
                            </motion.p>

                            <div className="flex flex-row justify-center items-center space-x-1">
                                {["Organize", "Systemize", "Succeed"].map((word, idx) => (
                                    <motion.p
                                        key={idx}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
                                        className="text-lg leading-4 md:text-lg lg:text-xl xl:text-xl font-bold text-textMuted"
                                    >
                                        {word}
                                    </motion.p>
                                ))}
                            </div>
                        </div>

                        {/* Animated Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 1.05 }}
                            className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-textHeading mt-3 mb-4 text-start"
                        >
                            Seamless Solutions for Modern Businesses
                        </motion.h1>

                        {/* Animated Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 1, delay: 1.15 }}
                            className="text-lg xl:text-xl text-textDisabled opacity-90 mb-1 md:mb-4 text-start md:text-justify"
                        >
                            Unlock the full potential of your business with our powerful and scalable software solutions. Designed to streamline processes, boost productivity, and elevate customer experience, we make growth effortless and sustainable.
                        </motion.p>

                        {/* Animated Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.35 }}
                            onClick={scrollToServices}
                            className={`px-4 py-3 lg:px-5  lg:text-lg border border-textPrimary/50 bg-textPrimary/20 backdrop-blur-3xl  rounded-xl hover:bg-textSubtle/20 cursor-pointer`}
                        >
                            Get Started
                        </motion.div>
                    </div>
                </motion.div>

                {/* Background Beams */}
                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                    <BackgroundBeams />
                </div>
            </motion.section>

            {/* Large Heading in the background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute z-0 text-white/50 w-full h-full text-center flex items-center justify-center"
            >
                <h1 className="font-extrabold text-[4rem] leading-none md:text-[8rem] lg:text-[12rem] xl:text-[15rem] backdrop-blur-2xl">
                    Syst It Soft
                </h1>
            </motion.div>
        </section>
    );
};

export default LandingPageHero;
