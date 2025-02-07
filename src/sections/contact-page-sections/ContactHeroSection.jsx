import StarBorder from "../../utils/StarBorder.jsx";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactHeroSection = ({ scrollToForm }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return (
        <section
            ref={ref}
            className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16">
            {/* Hero Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-3xl md:text-6xl font-bold text-center text-white"
            >
                Let’s Connect! 🚀
            </motion.h2>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg md:text-2xl mt-2 max-w-xl text-center text-white/90"
            >
                Have a project in mind? Need assistance? Let&#39;s create something amazing together.
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.75 }}
                onClick={scrollToForm}
                className={`mt-4`}
            >

                <StarBorder as="button" className="text-white" componentClassName={`text-xs px-3 py-2 sm:text-sm md:px-5 md:py-2 md:text-sm lg:text-lg bg-gradiant-r from-primary to-tertiary`} color="cyan" speed="5s">
                    Get Started
                </StarBorder>

            </motion.div>


        </section>
    );
};

export default ContactHeroSection;
