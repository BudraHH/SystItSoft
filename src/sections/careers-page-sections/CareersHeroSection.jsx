import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const CareersHeroSection = ({scrollToReasons}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });



    return (
        <section
            className="relative z-20 w-full h-[100vh] py-22 md:py-28 flex  items-center justify-start "
            ref={ref}
        >

        <div className={` h-full w-full md:w-5/6 lg:w-full flex flex-col justify-center items-start `}>
            <div className={`w-full lg:w-4/5 h-auto`}>
                <motion.h1
                    initial={{opacity: 0, y:50, }}
                    animate={isInView ? {opacity: 1, y:0} : {opacity: 0, y:50}}
                    transition={{duration: 0.5, ease: "easeIn",delay: 0.5}}
                    className={`text-textHeading text-4xl md:text-4xl lg:text-5xl xl:text-7xl  font-semibold `}>
                    Explore Exciting Opportunities at <strong className={`font-extrabold`}>SysItSoft</strong>
                </motion.h1>
            </div>
            <div className={`w-11/12 mt-4 mb-2 md:mt-6 md:mb-3 lg:mt-8 lg:mb-4 xl:mt-12 xl:mb-6`}>
                <motion.h6
                    initial={{opacity: 0, y:100,}}
                    animate={isInView ? {opacity: 1, y:0} : {opacity: 0, y:50}}
                    transition={{duration: 0.5, ease: "easeIn",delay: 0.75}}
                    className={`text-textLight text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal `}>
                    We believe in fostering a dynamic and collaborative work environment that empowers our team to create digital excellence.
                </motion.h6>
            </div>
            <motion.p
                initial={{opacity: 0, y:50}}
                animate={isInView ? {opacity: 1, y:0} : {opacity: 0, y:50}}
                transition={{duration: 0.5, ease: "easeIn",delay: 1}}
                className={`text-textMuted text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-light`}>
                Join us on this journey of creativity, growth, and meaningful impact.
            </motion.p>
        </div>
        </section>
    );
};

export default CareersHeroSection;
