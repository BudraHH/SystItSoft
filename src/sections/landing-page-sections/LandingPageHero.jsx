import SplitText from "../../utils/SplitText.jsx";
import StarBorder from "../../utils/StarBorder.jsx";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BackgroundBeams } from "../../componenets/BackgroundBeams.jsx";

const LandingPageHero = ({ heroRef, scrollToServices }) => {
    const sectionRef = heroRef || useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 });
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            size: Math.random() * 10 + 3 + "px",
            delay: Math.random() * 4 + "s",
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section
        className={`h-screen`}>
            <motion.section
                ref={sectionRef}
                initial={{ opacity: 0,y:100 }}
                animate={isInView ? { opacity: 1, y:0} : {opacity: 0, y:100 }}
                transition={{ duration: 0.5, delay: 0.2}}
                className="relative z-20 w-full h-[80vh] my-24 flex flex-col items-center justify-center overflow-hidden bg-slate-500/5  backdrop-blur-3xl rounded-2xl shadow-2xl"
            >
                {/* Background Grid & Noise */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10  opacity-50 pointer-events-none" />

                {/* Floating Particles */}
                {particles.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: parseFloat(p.delay) }}
                        className="absolute bg-slate-400 rounded-full opacity-30 blur-md animate-pulse"
                        style={{ width: p.size, height: p.size, top: p.y, left: p.x }}
                    />
                ))}

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1} : {opacity: 0 }}
                    transition={{ duration: 0.75, delay: 0.75}}
                    className="relative z-10 w-full h-full px-5  lg:px-20 xl:px-28 flex justify-start items-center ">
                    <div className="w-full md:w-11/12 lg:w-11/12 h-auto flex flex-col justify-center items-center md:items-start p-6 sm:p-2 md:p-5 lg:p-10 rounded-xl text-white">
                        {/* Animated Heading */}
                        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center md:space-x-2  ">
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.45, delay: 0.25 }}
                                className="text-sm leading-4 md:text-lg lg:text-xl xl:text-xl font-normal text-textMuted"
                            >
                                A Hub to
                            </motion.p>

                            <div className={`flex flex-row justify-center items-center space-x-1`}>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0,y:50 }}
                                    transition={{ duration: 0.45, delay: 0.6 }}
                                    className="text-lg leading-4 md:text-lg lg:text-xl xl:text-xl font-bold text-textMuted"
                                >
                                    Organize,
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.45, delay: 0.75 }}
                                    className="text-lg leading-4 md:text-lg lg:text-xl xl:text-xl font-bold text-textMuted"
                                >
                                    Systemize,
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.45, delay: 0.95 }}
                                    className="text-lg leading-4 md:text-lg lg:text-xl xl:text-xl font-bold text-textMuted"
                                >
                                    Succeed!
                                </motion.p>
                            </div>
                        </div>

                        {/* Animated Main Heading */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-textHeading mt-1 mb-2 text-center md:text-start"
                            >
                                Seamless Solutions for Modern Businesses
                            </motion.h1>

                        </div>
                        {/* Animated Subheading */}
                        <div className={``}>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{ duration: 1, delay: 0.75 }}
                                className="text-lg leading-4 sm:text-lg md:text-lg xl:text-xl  text-textDisabled opacity-90 mb-1 md:mb-4 text-center md:text-start"
                            >
                                Unlock the full potential of your business with our powerful and scalable
                                software solutions. Designed to streamline processes, boost productivity, and
                                elevate customer experience, we make growth effortless and sustainable.
                            </motion.p>
                        </div>

                        {/* Animated Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            onClick={scrollToServices}
                        >

                            <StarBorder as="button" className="text-white" componentClassName={`text-xs px-4 py-3 sm:text-sm md:px-6 md:py-3  md:text-sm  bg-gradiant-r from-primary to-tertiary`} color="cyan" speed="5s">
                                Get Started
                            </StarBorder>

                        </motion.div>
                    </div>
                </motion.div>

                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                    <BackgroundBeams />
                </div>



            </motion.section>
        </section>
    );
};

export default LandingPageHero;
