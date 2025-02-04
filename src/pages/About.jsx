import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutUsDescription } from "./../utils/constants.js";
import SplitText from "../utils/SplitText.jsx";

const AboutCard = ({ title, description, image, direction }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

    // Define Image & Text Sections
    const imageSection = (
        <motion.div
            initial={{ opacity: 0, x: direction === "right" ? -100 : 100, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden">
        <img
                    src={image}
                    alt={title}
                    className="w-full max-w-xl h-auto rounded-2xl shadow-lg object-cover border border-white/20
                           transform transition-transform duration-500 group-hover:scale-105"
                />



        </motion.div>
    );


    const textSection = (
        <motion.div
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
            <h2 className={`text-3xl lg:text-4xl font-extrabold text-textHeading drop-shadow-md`}>
                {title}
            </h2>
            {description.map((desc, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 * index }}
                    className={`text-lg lg:text-xl text-textLight leading-relaxed`}
                >
                    {desc}
                </motion.p>
            ))}
        </motion.div>
    );

    return (
        <div
            ref={ref}
            className={`w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-xl transition-shadow
                       py-20 px-10 rounded-lg duration-500
                       bg-transparent`}
        >
            {direction === "right" ? (
                <>
                    {imageSection}
                    {textSection}
                </>
            ) : (
                <>
                    {textSection}
                    {imageSection}
                </>
            )}
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

    return (
        <div
            className={`w-screen h-auto min-h-screen px-8 py-32 flex flex-col items-center gap-16 bg-gradient-to-r from-dark via-primary to-dark`}
        >
            {/* Section Title */}
            <div className="w-full text-center space-y-4">
                <SplitText
                    text="We drive the R&D, You drive the growth"
                    className={`font-extrabold text-textLight`}
                    textSize="text-5xl"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    easing="easeOutCubic"
                />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-sm lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    Discover our mission, story, and purpose as we pave the way for innovation. Together, let's inspire change and build the future.
                </motion.p>
            </div>

            {/* Animated Sections */}
            <div className="flex flex-col gap-24 w-full">
                {aboutUsDescription.map((item, index) => {
                    const direction = index % 2 === 0 ? "right" : "left"; // Define direction properly

                    return (
                        <AboutCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            direction={direction}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default About;
