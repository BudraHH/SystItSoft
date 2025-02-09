import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { careerReasons } from "../../utils/constants.js";

// ReasonCard Component
const ReasonCard = ({ title, why, how, index }) => {

    const isEven = index % 2 === 0;

    return (
        <div
            className={`w-full flex flex-col md:flex-row items-center gap-10 p-6 rounded-xl shadow-lg bg-secondary/20 backdrop-blur-3xl
                ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Image Animation */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                className="w-full md:w-1/2 h-64 md:h-96 lg:h-64 flex items-center justify-center bg-gray-800 rounded-lg"
            >
                <span className="text-gray-500 text-lg">Image Placeholder</span>
            </motion.div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start space-y-4 md:space-y-2 lg:space-y-4">
                <motion.h6
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 } }
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
                    className="text-white text-xl font-semibold"
                >
                    {title}
                </motion.h6>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 } }
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
                    className="text-gray-400 text-sm md:text-base"
                >
                    {why}
                </motion.p>

                {/* List Animation */}
                <ul className="list-disc pl-5 text-gray-400 text-sm md:text-base">
                    {how.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 } }
                            transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                        >
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// CareersReasonSection Component
const CareersReasonSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <section
            className="relative z-20 w-full py-20 flex flex-col items-center justify-start"
        >
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 } }
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
                className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
            >
                Why join SystItSoft?
            </motion.h3>

            <motion.div
                initial={{ opacity: 0 , y:100}}
                animate={{ opacity: 1, y: 0 } }
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
                className="w-full flex flex-col space-y-16"
            >
                {careerReasons.map((reason, index) => (
                    <ReasonCard key={index} title={reason.title} why={reason.why} how={reason.how} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default CareersReasonSection;
