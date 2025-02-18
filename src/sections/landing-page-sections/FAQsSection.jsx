import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../../utils/constants.js";

const FAQsSection = ({ faqsRef }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const toggleAnswer = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const [visibleSet, setVisibleSet] = useState("clients");

    // Find the selected category
    const filteredFAQs = faqs.find(faq =>
        (visibleSet === "clients" && faq.category === "Clients") ||
        (visibleSet === "job-seekers" && faq.category === "Job Seekers & Interns")
    )?.questions || [];

    return (
        <section ref={faqsRef} className=" md:h-screen md:py-20 flex justify-center">
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-20 w-full h-full py-16 bg-secondary/5 backdrop-blur-3xl flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-2xl space-y-5 md:space-y-10"
            >
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 100}}
                    transition={{ delay:0.2,duration: 0.5, ease: "easeOut" }}
                    className="z-40 w-full max-w-[90%] flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 "
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white text-left">
                        Frequently Asked Questions
                    </h2>
                    <div className="md:w-1/5 ">
                        <div className="relative h-[3rem] md:h-[4rem] bg-secondary/10 backdrop-blur-3xl border border-white/10 flex flex-row justify-between items-center rounded-xl shadow-lg">
                            {/* Animated Cursor */}
                            <motion.div
                                className="absolute bottom-0 h-full w-1/2 rounded-xl bg-gradient-to-r from-textPrimary/50 to-textAccent/50 shadow-lg"
                                initial={{ left: "0%" }}
                                animate={{ left: visibleSet === "clients" ? "0%" : "50%" }}
                                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            />

                            {/* Buttons */}
                            <button
                                className={`relative z-10 w-1/2 flex justify-center items-center text-lg font-semibold transition-all duration-300 h-full ${
                                    visibleSet === "clients" ? "text-white" : "text-gray-300 hover:text-white"
                                }`}
                                onClick={() => setVisibleSet("clients")}
                            >
                                Clients
                            </button>
                            <button
                                className={`relative z-10 w-1/2 flex justify-center items-center text-lg font-semibold transition-all duration-300  h-full ${
                                    visibleSet === "job-seekers" ? "text-white" : "text-gray-300 hover:text-white"
                                }`}
                                onClick={() => setVisibleSet("job-seekers")}
                            >
                                Job Seekers
                            </button>
                        </div>
                    </div>
                </motion.div>


                {/* FAQs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ delay:0.5,duration: 0.5, ease: "easeOut" }}

                    className="w-full h-full max-w-[90%] space-y-6 sm:space-y-8">
                    {filteredFAQs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-textAccent/50 to-textPrimary/25 rounded-xl p-3 md:p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out"
                                onClick={() => toggleAnswer(index)}
                            >
                                <div className="w-full flex justify-between items-start md:items-center">
                                    <h3 className="text-lg sm:text-2xl font-semibold text-white flex-1">
                                        Q. {faq.question}
                                    </h3>
                                    <div
                                        className={`h-full py-1 transition-transform duration-700 ease-in-out ${
                                            isOpen ? "-rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        <FaChevronDown className="text-white text-xl" />
                                    </div>
                                </div>

                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                                        isOpen ? "max-h-[500px]" : "max-h-0"
                                    }`}
                                >
                                    <hr className="w-full border-t-2 border-white opacity-20 my-3" />
                                    <p className="text-sm sm:text-lg md:text-xl text-white opacity-90">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.section>
        </section>
    );
};

export default FAQsSection;
