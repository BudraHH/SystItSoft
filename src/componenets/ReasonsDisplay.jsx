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
        <div ref={containerRef} className={`relative w-full h-screen overflow-y-auto hide-scrollbar font-sans px-10 `} >


            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start gap-10 pt-10 md:pt-32">
                        {/* ReasonsDisplay Indicator */}
                        <div
                            className="sticky top-40 flex flex-row justify-between items-start z-40 self-start w-1/3  space-x-5">
                            <div
                                style={{
                                    boxShadow: `${isInView ? "0 0 10px 4px #013651" : ""}`,
                                    transition: `${isInView ? "box-shadow 0.3s ease-in-out" : ""}`,
                                }}
                                className={`relative h-10 w-10 rounded-full bg-primary flex items-center justify-center dark:border-neutral-700`}
                            >
                                <div className={`h-6 w-6 rounded-full bg-textLight opacity-50`}/>
                            </div>

                            <h3 className={`hidden md:block text-2xl font-bold text-textLight opacity-90 w-5/6`}>
                                {item.title}
                            </h3>
                        </div>

                        {/* ReasonsDisplay Content */}
                        <div className="relative w-2/3">

                            <div className={`p-6 rounded-lg shadow-md bg-gradient-to-r from-primary to-dark`}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

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