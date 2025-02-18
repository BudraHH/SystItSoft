"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ReasonsDisplay = ({ data, scrollToServices, scrollToFaqs }) => {
    const ref = useRef(null);
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollProgress(progress);
        };

        const handleWheel = (event) => {
            if (!scrollRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

            if (scrollTop === 0 && event.deltaY < 0) {
                setScrollProgress(0);
                scrollToServices();
                return;
            }

            if (scrollTop >= scrollHeight - clientHeight && event.deltaY > 0) {
                setTimeout(() => scrollToFaqs(), 550);
                return;
            }

            event.preventDefault();
            scrollRef.current.scrollTop += event.deltaY;

            // Ensure progress updates after scroll position changes
            requestAnimationFrame(handleScroll);
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel, { passive: false });
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [scrollToServices, scrollToFaqs]);


    return (
        <div ref={scrollRef} className="relative w-full  h-screen overflow-x-auto hide-scrollbar font-sans  lg:px-10 ">
            <div ref={ref} className="absolute  xl:w-11/12  pb-10">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-start gap-0 md:gap-5 pt-10 md:pt-16 xl:py-12">
                        <div className="px-2 md:px-0 md:sticky md:top-16 lg:top-12 flex flex-row items-center md:justify-between md:items-start z-40 md:self-start w-full md:w-2/5 space-x-2 md:space-x-5">
                            <div
                                style={{
                                    boxShadow: isInView ? "0 0 10px 4px #013651" : "",
                                    transition: "box-shadow 0.3s ease-in-out",
                                }}
                                className="relative h-6 w-6 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center border-neutral-700"
                            >
                                <div className="h-3 w-3 md:h-6 md:w-6 rounded-full bg-textLight opacity-50" />
                            </div>
                            <h3 className="md:font-extrabold text-textLight text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-none opacity-90 w-full text-start md:w-5/6">
                                {item.title}
                            </h3>
                        </div>

                        <div className="ml-10 md:ml-0 md:relative md:w-2/3">
                            <div className="p-4 xl:h-96 rounded-xl shadow-xl bg-primary/5 border border-textPrimary/25 backdrop-blur-3xl">
                                <div className="absolute inset-0 rounded-xl w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                                <div className="absolute inset-0 rounded-xl bg-primary10 opacity-50 pointer-events-none" />
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    className={`absolute left-5 top-0 w-[0.5px] md:w-[2px] bg-primary h-full`}>
                    <div
                        className={`absolute inset-x-0 top-0 md:w-1 bg-gradient-to-b from-primary to-textPrimary rounded-full`}
                        style={{
                            height: `${scrollProgress}%`,
                            boxShadow: `0px 0px 10px teal, 0px 0px 20px cyan`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReasonsDisplay;
