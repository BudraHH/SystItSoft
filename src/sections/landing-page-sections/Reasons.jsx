import { reasons } from "../../utils/constants.js";
import { motion, useInView } from "framer-motion";
import ReasonsDisplay from "../../componenets/ReasonsDisplay.jsx";
import { useRef } from "react";

const Reasons = () => {
    const data = reasons.map((reason) => ({
        title: reason.title,
        content: (
            <div className="flex flex-col space-y-6">
                <p className="text-textLight opacity-80 text-xl font-medium">
                    {reason.description}
                </p>
                <div className="flex flex-row w-full space-x-2">
                    <div
                        className="p-5 bg-containerBG w-1/2 rounded-lg flex flex-col justify-start items-start space-y-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                    >
                        <h3 className="text-textLight opacity-80 font-bold text-base">
                            Details
                        </h3>
                        <p className="text-textHeading font-semibold opacity-70 text-sm">
                            {reason.details.explanation}
                        </p>
                    </div>
                    <div
                        className="p-5 bg-containerBG w-1/2 rounded-lg flex flex-col justify-start items-start space-y-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                    >
                        <h3 className="text-textLight font-bold opacity-80 text-sm md:text-base">
                            Impact
                        </h3>
                        <p className="text-textHeading font-semibold opacity-70 text-sm">
                            {reason.details.impact}
                        </p>
                    </div>
                </div>
            </div>
        ),
    }));

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <div ref={ref} className="w-full py-16 px-4 md:px-8 space-y-10">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center text-textHeading"
                initial={{ opacity: 0, y: 100 }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 100 }
                }
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
            >
                Why Choose Us?
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 100 }
                }
                transition={{
                    duration: 0.5,
                    delay: 0.75
                }}
            >
                <ReasonsDisplay data={data} />
            </motion.div>
        </div>
    );
};

export default Reasons;
