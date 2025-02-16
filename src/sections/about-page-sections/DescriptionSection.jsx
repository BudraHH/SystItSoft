import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {descriptionCards} from "../../utils/constants.js";


const Card = ({ data, ref }) => {
    return (
        <motion.div
            ref={ref}
            className="w-full h-full p-8 md:p-12 lg:p-16 rounded-xl shadow-lg text-white text-left md:text-left  flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Title */}
            <div>
                <motion.h2
                    className="text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tight text-textLight mb-1 md:mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {data.title}
                </motion.h2>
                <motion.div
                    className="h-1 w-[7.75rem] md:w-44 lg:w-56 xl:w-[11.5rem] bg-textPrimary rounded-full "
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />
            </div>
            {/* Quote */}
            {data.quote && (
                <motion.p
                    className="text-sm md:text-lg lg:text-xl italic font-semibold text-gray-300 "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    &quot; {data.quote} &quot;
                </motion.p>
            )}

            {/* Placeholder for Image or Additional Content */}
            <div className="w-full h-[90%] lg:h-[60%] bg-gray-700  rounded-xl"></div>

            {/* Description */}
            <motion.p
                className="text-sm md:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                {data.description}
            </motion.p>
        </motion.div>
    );
};


const DescriptionSection = ({ descriptionRef, scrollToHero}) => {
    const ref = useRef(null);
    const scrollRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const visionRef = useRef(null);
    const missionRef = useRef(null);

    const [show, setShow] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setShow(scrollTop + clientHeight < scrollHeight);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", handleScroll);
            handleScroll();
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
        }
    };




    return (
        <section ref={descriptionRef} className="lg:h-screen md:py-20 ">
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full md:py-16 flex flex-col lg:flex-row items-center justify-start overflow-hidden bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl space-y-5 md:spacey-0 md:space-x-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />



                <motion.div
                    initial={{ opacity: 0, y:0 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    className="w-[90%] max-w-5xl h-full  p-8 md:p-12 lg:p-16 border border-white/10 bg-gradient-to-r from-textPrimary/5 to-textDisabled/5 backdrop-blur-xl rounded-2xl shadow-xl text-left"
                >
                    {/* Section Title */}
                    <div className="w-full flex flex-col items-start ">
                        {/* Section Title */}
                        <motion.h2
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-left md:text-left mb-4 text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Who We Are
                        </motion.h2>

                        {/* Animated Divider */}
                        <motion.div
                            className="h-1 w-36 md:w-44 lg:w-56 xl:w-72 bg-textPrimary rounded-full mb-6"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                    </div>

                    {/* Description Text */}
                    <motion.p
                        className="text-sm md:text-xl text-textDisabled/90 leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <span className="text-s mmd:text-xl text-textLight  font-semibold">SYST IT SOFT</span> is an <span className="text-sm md:text-xl text-textLight  font-semibold">R&D-driven company</span> specializing in solving industrial challenges through
                        cutting-edge technology and innovation. We provide <span className="text-sm md:text-xl text-textLight  font-semibold">scalable cloud infrastructure</span>,
                        <span className="text-sm md:text-xl text-textLight  font-semibold"> artificial intelligence solutions</span>, <span className="text-sm md:text-xl text-textLight  font-semibold">custom software development</span>,
                        advanced hardware systems, <span className="text-sm md:text-xl text-textLight  font-semibold">Industrial Internet of Things (IIoT) solutions</span>, and
                        <span className="text-sm md:text-xl text-textLight  font-semibold"> robotics & automation</span>.
                    </motion.p>

                    {/* Mission Statement */}
                    <motion.p
                        className="text-sm md:text-xl text-textDisabled/90 leading-relaxed mt-3 md:mt-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        Our mission is to tackle inefficiencies in industries by leveraging
                        <span className="text-sm md:text-xl text-textLight  font-semibold"> innovative technologies</span>, ensuring businesses optimize their resources and scale effortlessly.
                    </motion.p>
                </motion.div>
                <div className={`relative w-[90%] h-full`}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.25 }}
                        className="w-full h-full flex flex-col border overflow-y-auto hide-scrollbar border-white/10 bg-gradient-to-l from-textPrimary/5 to-textDisabled/5 backdrop-blur-2xl rounded-xl  "
                        ref={scrollRef}
                    >
                        {/* Cards */}
                        <div className={`h-full `}>{descriptionCards.map((data, index) => {
                            const ref = index === 0 ? visionRef : missionRef;
                            return (
                                <Card data={data} key={index} ref={ref} />
                            );
                        })}
                        </div>
                    </motion.div>


                    <div
                        // Adding a transition for smoother animation
                        onClick={show ? scrollDown : scrollUp}
                        className="hidden lg:block absolute bottom-5 right-2 p-3 text-textLight bg-white/5 hover:bg-white/10 border border-white/10 rounded-full cursor-pointer"
                    >
                        <motion.div initial={{ rotate: 0 }}
                                    animate={{ rotate: show ? 0 : -180 }}
                                    transition={{ duration: 0.2 }}><FaChevronDown /></motion.div>

                    </div>

                </div>

                {/* Scroll Controls */}

            </motion.section>
        </section>
    );
};

export default DescriptionSection;
