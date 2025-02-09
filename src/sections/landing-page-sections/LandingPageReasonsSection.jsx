import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {reasons} from "../../utils/constants.js";
import ReasonsDisplay from "../../componenets/ReasonsDisplay.jsx";

const LandingPageReasonsSection = ({reasonsRef}) => {
    const data = reasons.map((reason) => ({
        title: reason.title,
        content: (
            <div className="flex flex-col h-full space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6 ">
                <motion.p className="pl-5 md:px-0 text-textLight opacity-80 text-sm leading-6 md:text-xl lg::text-2xl font-medium">
                    {reason.description}
                </motion.p>
                <div className="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-2">
                    <motion.div
                        className="p-5 bg-containerBG/30 backdrop-blur-3xl lg:w-1/2 h-full rounded-lg flex flex-col justify-start items-start space-y-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                    >
                        <motion.h3 className="text-textLight opacity-80 font-bold text-sm md:text-xl  ">
                            Details
                        </motion.h3>
                        <motion.p className="text-textHeading font-normal opacity-70 text-sm md:text-lg ">
                            {reason.details.explanation}
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="p-5 bg-containerBG/30 backdrop-blur-3xl lg:w-1/2 h-full rounded-lg flex flex-col justify-start items-start space-y-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                    >
                        <motion.h3 className="text-textLight font-bold opacity-80 text-sm md:text-xl">
                            Impact
                        </motion.h3>
                        <motion.p className="text-textHeading font-normal opacity-70 text-sm md:text-lg ">
                            {reason.details.impact}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        ),
    }));

    const ref = useRef(null);
    const isInView = useInView(reasonsRef, { once: false, amount: 0.5 });

    return (
        <section
            ref={reasonsRef}
            className="h-screen  backdrop-blur-3xl">

            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full py-16 md:my-10 flex flex-col items-center justify-start overflow-hidden bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl  space-y-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10  opacity-50 pointer-events-none" />


                <motion.h2
                    className="z-20 text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold text-textHeading text-center"
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
                            : {}
                    }
                    transition={{
                        duration: 0.5,
                        delay: 0.75
                    }}
                    className="w-[90%] h-full md:max-h-[90%] md:overflow-hidden p-5 flex  border border-white/10 backdrop-blur-2xl rounded-xl scrollbar-hide"
                >
                    <ReasonsDisplay data={data} />
                </motion.div>
            </motion.section>
        </section>
    )
}

export default LandingPageReasonsSection;