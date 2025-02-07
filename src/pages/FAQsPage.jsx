import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "../utils/SplitText.jsx";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { faqs } from "../utils/constants.js";

const FAQsPage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="relative z-20 w-full min-h-screen py-20 md:py-24 lg:py-28 px-6 md:px-10 lg:px-12 xl:px-20  flex flex-col items-center justify-center space-y-5  lg:space-y-10 bg-gradient-to-r from-primary to-dark"
            ref={ref}
        >
            {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                    <SplitText
                        text="Frequently Asked Questions"
                        className="font-semibold text-center text-xl sm:text-2xl md:text-4xl xl:text-5xl text-textLight"
                        textSize="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-textHeading text-center"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
                        animationTo={{ opacity: 1, transform: "translateY(0)" }}
                        easing="easeOutCubic"
                    />
                </motion.div>

                {/* FAQsPage Section */}
                <div className="w-full">
                    <div className="space-y-4 sm:space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 1 + 0.2 * index,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                                className="border border-tertiary text-textLight rounded-lg p-4 sm:p-6 cursor-pointer space-y-3 md:space-y-5"
                                onClick={() => toggleAnswer(index)}
                            >
                                <div className="w-full flex flex-wrap justify-between items-start sm:items-center">
                                    <h3 className="w-11/12 text-base sm:text-lg md:text-xl font-bold">
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-lg sm:text-xl" />
                                    ) : (
                                        <FaChevronDown className="text-lg sm:text-xl" />
                                    )}
                                </div>
                                {openIndex === index && (
                                    <>
                                        <hr className="w-full border-gray-500 mt-2" />
                                        <p className="text-sm sm:text-base mt-2 text-left">
                                            {faq.answer}
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

    );
};

export default FAQsPage;
