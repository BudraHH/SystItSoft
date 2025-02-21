"use client";
import { useRef, forwardRef, useState, useEffect,memo } from "react";
import { motion, useInView } from "framer-motion";
import {descriptionCards} from "../../utils/constants.js";


const Card = forwardRef(({ data }, ref) => {
    return (
        <motion.div
            ref={ref}
            className="w-full h-[30rem] p-8 md:p-12 lg:p-16 rounded-xl shadow-lg text-white text-left md:text-left flex flex-col gap-4 border  border-white/10 bg-gradient-to-l from-textPrimary/5 to-textDisabled/5 backdrop-blur-2xl  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-extrabold text-white text-left"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {data.title}
            </motion.h2>
            <motion.div
                className="h-1 w-full bg-textPrimary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />
            {data.quote && (
                <motion.p
                    className="text-sm md:text-lg lg:text-xl italic font-semibold text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    &quot; {data.quote} &quot;
                </motion.p>
            )}
            <div className="w-full h-[90%] lg:h-[60rem] bg-gray-700 rounded-xl"></div>
            <motion.p
                className="text-sm md:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                {data.description}
            </motion.p>
        </motion.div>
    );
});

const DescriptionSection = memo(({ descriptionRef, scrollToHero, scrollToValues}) => {
    const ref = useRef(null);
    const scrollRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const visionRef = useRef(null);
    const missionRef = useRef(null);

    const [scrollProgress, setScrollProgress] = useState(0);

        useEffect(() => {
            const handleScroll = (event) => {
                if (scrollRef.current) {
                    event.preventDefault();

                    if (scrollProgress === 0 && event.deltaY < 0) {
                        setScrollProgress(0)
                        scrollToHero();
                        return;
                    }
                    if (scrollProgress === 100 && event.deltaY > 0) {
                        setTimeout(() => scrollToValues(), 450);
                        return;
                    }

                    scrollRef.current.scrollTop += event.deltaY;
                    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
                    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
                    setScrollProgress(progress);
                }
            };

            const container = scrollRef.current;
            if (container) {
                container.addEventListener("wheel", handleScroll, { passive: false });
            }

            return () => {
                if (container) {
                    container.removeEventListener("wheel", handleScroll);
                }
            };
        }, [scrollProgress, scrollToHero]);




    return (
        <section ref={descriptionRef} className="lg:h-screen lg:py-20 ">
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full md:py-16 lg:px-10 gap-10 flex flex-col lg:flex-row  items-center justify-start lg:justify-between overflow-hidden bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl "
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />



                <div className={`relative h-full flex flex-col gap-2.5 lg:flex-row lg:gap-10 `}>
                    <motion.div
                        initial={{ opacity: 0, y:0 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        className="w-full lg:w-1/2 h-full  p-8 md:p-12 lg:p-14  border border-white/10 bg-gradient-to-r from-textPrimary/5 to-textDisabled/5 backdrop-blur-xl rounded-2xl shadow-xl text-left"
                    >
                        <motion.h2
                            className=" text-3xl md:text-4xl font-extrabold text-white text-left tracking-tight md:text-left mb-4 "
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Who We Are
                        </motion.h2>

                        {/* Animated Divider */}
                        <motion.div
                            className="h-1 w-full  bg-textPrimary rounded-full mb-6"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />


                        {/* Description Text */}
                        <motion.p
                            className="text-sm md:text-xl text-textDisabled/90 leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <span className="text-s mmd:text-xl text-textLight  font-semibold">SYST IT SOFT</span> is an <span className="text-sm md:text-xl text-textLight  font-semibold">R&D-driven company</span> specializing in solving industrial challenges through
                            cutting-edge technology and innovation. We provide <span className="text-sm md:text-xl text-textLight  font-semibold">scalable cloud infrastructure</span>,
                            <span className="text-sm md:text-xl text-textLight  font-semibold"> artificial intelligence solutions</span>, <span className="text-sm md:text-xl text-textLight  font-semibold">custom software development</span>,
                            advanced hardware systems, <span className="text-sm md:text-xl text-textLight  font-semibold">Industrial Internet of Things (IIoT) solutions</span>, and
                            <span className="text-sm md:text-xl text-textLight  font-semibold"> robotics & automation</span>.
                        </motion.p>

                        {/* Mission Statement */}
                        <motion.p
                            className="text-sm md:text-xl text-textDisabled/90 leading-relaxed mt-3 md:mt-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            Our mission is to tackle inefficiencies in industries by leveraging
                            <span className="text-sm md:text-xl text-textLight  font-semibold"> innovative technologies</span>, ensuring businesses optimize their resources and scale effortlessly.
                        </motion.p>
                    </motion.div>
                    <div  className="relative w-1/2 h-full "></div>
                    <div
                        ref={scrollRef}
                        className={`lg:absolute lg:w-full lg:h-full lg:flex lg:flex-row lg:overflow-y-auto hide-scrollbar`}>
                        <div className={`hidden lg:block w-1/2 h-full`}></div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.25 }}
                            className="lg:w-1/2 h-full  "

                        >
                            {/* Cards */}
                            <div className={` w-full h-full flex flex-col gap-5`}>{descriptionCards.map((data, index) => {
                                const ref = index === 0 ? visionRef : missionRef;
                                return (
                                    <Card data={data} key={index} ref={ref} />
                                );
                            })}
                            </div>
                        </motion.div>




                    </div>
                </div>

                {/* Scroll Controls */}

            </motion.section>
        </section>
    );

}
);
export default DescriptionSection;
