import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {benefitsAndPerks} from "../../utils/constants.js";

// ReasonCard Component
const ReasonCard = ({ title, description, image }) => {


    return (
        <div className="w-[14rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem]  p-2 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-2xl shrink-0">
            <div className="relative  h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] rounded-lg flex items-center justify-center overflow-hidden group transition-all duration-1000">
                <img src={image} alt="Service Image" className="w-full h-full object-cover rounded-lg" />

                {/* Centered Text */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-start p-4 rounded-lg group-hover:translate-y-10 lg:group-hover:translate-y-32">
                    <h6 className="text-white text-lg md:text-2xl font-bold">{title}</h6>
                    <p className="text-gray-300 text-sm md:text-lg">{description}</p>
                </div>
            </div>
        </div>

    );
};

// PerksAndBenefits Component
const PerksAndBenefits = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

    return (
        <section ref={sectionRef} className="lg:min-h-screen ">
            <section
                ref={sectionRef}

                className="relative z-20 w-full h-full lg:py-16 flex flex-col items-center justify-start overflow-hidden hide-scrollbar bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl space-y-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_100%)] backdrop-blur-2xl opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10 opacity-50 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.75, y: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="z-40 w-full max-w-[90%] flex flex-col "
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-left">
                        Why You'll Love Working Here.
                    </h2>
                    <p  className="text-sm md:text-xl font-light text-white text-left ">
                        We understand that our success depends on our team's well-being and satisfaction. That's why we offer:
                    </p>
                </motion.div>

                <div
                    id="reasons-container"
                    className=" w-full lg:w-auto lg:overflow-x-hidden overflow-x-auto  md:p-5 flex flex-row lg:grid lg:grid-cols-3 gap-6 lg:border lg:border-white/10 backdrop-blur-2xl rounded-xl scrollbar-hide"
                >
                    {benefitsAndPerks.map((data, index) => (
                        <motion.div key={index}
                                    initial={{ opacity: 0, y:50 }}
                                    animate={ { opacity: 1,y :0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                        >
                            <ReasonCard key={index} title={data.title} description={data.description} image={data.icon} index={index} />
                        </motion.div>

                    ))}
                </div>
        </section>
        </section>
    );
};

export default PerksAndBenefits;
