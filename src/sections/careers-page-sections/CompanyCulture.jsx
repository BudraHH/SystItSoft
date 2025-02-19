import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {culturalValues} from "../../utils/constants.js";

const CompanyCulture = ({cultureRef, founderName = "[CEO/Founder Name]" }) => {
    const sectionRef = cultureRef || useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: true, amount: 0.1 });
    return (
        <section ref={sectionRef} className="relative  lg:min-h-screen flex justify-center items-center">
            <div
                className="relative z-20 w-full lg:h-[80vh] mt-24 mb-10 flex flex-col items-center justify-center overflow-hidden bg-white/5 backdrop-blur-3xl rounded-3xl shadow-2xl"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                <div className="container mx-auto z-10 p-5 lg:p-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-left">
                        Our Culture: Innovation Meets Impact.
                    </h2>
                    <p className="text-sm md:text-lg text-textLight text-left">
                        At SYST IT SOFT, we&#39;re more than just a technology company; we&#39;re a hub of innovation and problem-solving. We believe in organizing, systemizing, and succeeding together.
                    </p>
                </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-8">
                        {culturalValues.map((value, index) => (
                            <motion.div
                                initial={{ y:30, opacity: 0 }}
                                animate={isInView&&{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 * index + 0.2, ease: "easeOut" }}
                                key={index}
                                className="p-6 bg-white/95 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{value.title}</h3>
                                <p className={value.textColor}>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>

                <div className="mt-12 text-center">
                    <blockquote className="text-xs md:text-sm lg:text-lg italic text-textSubtle">
                        "At SYST IT SOFT, you&#39;re not just building a career; you&#39;re building the future" - {founderName}
                    </blockquote>
                </div>
            </div>
            </div>
            </section>
    );
};

export default CompanyCulture;