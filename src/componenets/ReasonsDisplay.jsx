"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ReasonsDisplay = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                setHeight(ref.current.scrollHeight);
            }
        };
        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);




    return (
        <div ref={containerRef} className={`relative w-full h-screen overflow-y-auto hide-scrollbar font-sans sm:px-5 lg:px-10  `} >


            <div ref={ref} className="relative  xl:w-11/12 mx-auto pb-10 ">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-start gap-0 md:gap-5  pt-10 md:pt-16 xl:py-12 ">
                        {/* ReasonsDisplay Indicator */}
                        <div
                            className="px-2 md:px-0 md:sticky md:top-16 lg:top-12 flex flex-row  items-center md:justify-between md:items-start z-40 md:self-start w-full md:w-2/5 space-x-2 md:space-x-5 ">
                            <div
                                style={{
                                    boxShadow: `${isInView ? "0 0 10px 4px #013651" : ""}`,
                                    transition: `${isInView ? "box-shadow 0.3s ease-in-out" : ""}`,
                                }}
                                className={`relative h-10 w-10 rounded-full bg-primary flex items-center justify-center border-neutral-700 `}
                            >
                                <div className={`h-6 w-6 rounded-full bg-textLight opacity-50`}/>
                            </div>

                            <h3 className={`  md:font-extrabold text-textLight text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-none opacity-90 w-full  text-start md:w-5/6 `}>
                                {item.title}
                            </h3>
                        </div>

                        {/* ReasonsDisplay Content */}
                        <div className="ml-10 md:ml-0 md:relative md:w-2/3 ">
                            <div className={`p-4 xl:h-96 rounded-xl shadow-xl bg-primary/5 border border-textPrimary/25 backdrop-blur-3xl`}>
                                <div className="absolute inset-0 rounded-xl w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                                <div className="absolute inset-0 rounded-xl bg-primary10  opacity-50 pointer-events-none" />
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div className={`h-64`}></div>
                {/* Vertical Line Animation */}
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -100}}
                    transition={{ delay: 0.5, duration: 0.5}}
                    className={`absolute left-5 top-0 w-[2px] bg-primary h-full`}>
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className={`absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-transparent  via-cyan-500 to-transparent rounded-full`}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ReasonsDisplay;