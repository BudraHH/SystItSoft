import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "../utils/SplitText.jsx";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { faqs } from "../utils/constants.js";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className={`relative z-20 w-screen min-h-screen py-28 flex flex-col items-center justify-center bg-gradient-to-r from-primary to-dark`}
            ref={ref}
        >
            <div className="relative z-10 w-full h-full px-8 md:px-16 flex flex-col justify-start items-center space-y-8 md:space-y-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                    <SplitText
                        text="Frequently Asked Questions"
                        className={`font-semibold text-center md:text-6xl text-textLight`}
                        textSize="text-xl sm:text-3xl md:text-5xl font-bold"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
                        animationTo={{ opacity: 1, transform: "translateY(0)" }}
                        easing="easeOutCubic"
                    />
                </motion.div>

                {/* FAQs Section */}
                <div className="w-full mt-10 text-center sm:mt-16">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 1+ 0.5 * index,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                                className={`border border-tertiary text-textLight rounded-xl p-6 cursor-pointer`}
                                onClick={() => toggleAnswer(index)}
                            >
                                <div className="flex flex-col justify-start items-start space-y-4">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <h3 className="text-lg font-bold">{faq.question}</h3>
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    {openIndex === index && (
                                        <>
                                            <hr className="w-full border-gray-400" />
                                            <p className="text-sm mt-2">{faq.answer}</p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
