"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const AboutPageHeroSection = ({ heroRef, scrollToDescriptions }) => {
    const sectionRef = heroRef || useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 });


    return (
        <section ref={sectionRef} className="relative  lg:h-screen flex justify-center items-center">
            <motion.section
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative z-20 w-full lg:h-[80vh] mt-24 mb-10 flex flex-col items-center justify-center overflow-hidden bg-slate-500/5 backdrop-blur-3xl rounded-3xl shadow-2xl"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                <div className="relative z-10 w-full  h-full p-5 lg:p-20 lg:gap-10 xl:p-28 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-center lg:items-center justify-start items-center">
                    {/* Left Side Content */}
                    <div className="relative w-full h-full   flex flex-col justify-start items-start space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-0"
                        >
                            About{" "}
                            <span className="text-white/50 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                                Us
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-sm md:text-lg lg:text-xl opacity-80 leading-relaxed text-textLight"
                        >
                            -- Empowering businesses with cutting-edge technology, creating innovative solutions that
                            transform ideas into reality.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            className="text-sm md:text-lg lg:text-xl  opacity-80 leading-relaxed text-textLight"
                        >
                            -- We drive the Research and Development, you drive the growth.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="text-xs md:text-sm lg:text-lg text-textDisabled md:text-justify"
                        >
                            Discover our vision, mission with which we pave the way for{" "}
                            <span className="text-sm md:text-lg font-bold">innovation</span>. Together, let&#39;s
                            inspire, change, and build the future.
                        </motion.p>

                        {/* CTA & Social Media Links */}
                        <div className="flex flex-row items-center gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.9, delay: 1 }}
                                onClick={scrollToDescriptions}
                                className="px-3 md:px-4 py-3 lg:px-5 text-white text-xs md:text-sm lg:text-lg border border-textPrimary/50 bg-textPrimary/20 backdrop-blur-3xl rounded-xl hover:bg-textSubtle/20 cursor-pointer"
                            >
                                Know more
                            </motion.div>

                            {/* Social Media Links */}
                            <div className="flex space-x-4 text-white/60">
                                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.3 + 1.2, ease: "easeOut" }}
                                        href="#"
                                        className="hover:text-white transition  text-sm md:text-lg lg:text-xl  "
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Image / Illustration) */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className=" w-full  h-full flex justify-center items-center"
                    >
                        <div className="relative w-full  h-[300px] md:h-[400px] lg:h-full bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-textPrimary to-textAccent opacity-50"></div>
                            <motion.img
                                src="https://source.unsplash.com/600x400/?technology,team"
                                alt="About Us"
                                className="w-full h-full object-cover mix-blend-overlay"
                                initial={{ opacity: 0, scale: 1.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
};

export default AboutPageHeroSection;
