"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from 'prop-types';
import { CheckCircle } from "lucide-react";
import SpotlightCard from "../../utils/SpotlightCard.jsx";
import {ourValues} from "../../utils/constants.js";





const OurValues = ({ valuesRef}) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <div ref={valuesRef} className="lg:pt-20 flex items-center  justify-center ">
            <motion.section
                ref={sectionRef}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full md:py-16 lg:px-10 gap-10 flex flex-col lg:flex-row items-center justify-start lg:justify-between overflow-hidden bg-primary/5 backdrop-blur-3xl rounded-2xl shadow-2xl p-6"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                <div className={`z-30 flex flex-col gap-5`}>
                    <h1 className={`text-3xl md:text-4xl font-extrabold text-white text-left tracking-tight`}>Our Values</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
                        {ourValues.map((value, index) => (
                            <motion.div
                                key={index}
                                className="backdrop-blur-lg bg-white/5 border border-white/5 shadow-lg cursor-pointer rounded-2xl flex flex-col items-center text-left md:text-center transition-transform transform hover:scale-105"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                aria-label={`${value.title} - ${value.description}`}
                            >
                                <SpotlightCard className="w-full h-full custom-spotlight-card flex flex-col gap-4" spotlightColor="rgba(0, 229, 255, 0.2)">

                                    <h3 className="lg:text-2xl font-semibold text-textLight">{value.title}</h3>
                                    <p className="text-lg text-textDisabled">{value.description}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

OurValues.propTypes = {
    valuesRef: PropTypes.object.isRequired,

};

export default OurValues;