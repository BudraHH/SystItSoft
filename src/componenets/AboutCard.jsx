import { motion } from "framer-motion";

const AboutCard = ({  title, description, image, direction, isInView }) => {
    const imageSection = (
        <motion.div
            initial={{ opacity: 0, x: direction === "right" ? -100 : 100, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden"
        >
            <div className="relative group">
                <img
                    src={image}
                    alt={title}
                    className="w-full max-w-xl h-auto rounded-2xl shadow-lg object-cover border border-white/20
                           transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-2xl opacity-0
                            group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent
                            group-hover:border-white/40 transition-all duration-500 shadow-xl" />
            </div>
        </motion.div>
    );

    const textSection = (
        <motion.div
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
            <h2 className={`text-3xl lg:text-4xl font-extrabold text-textHeading drop-shadow-md`}>
                {title}
            </h2>
            {description.map((desc, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 * index }}
                    className={`text-lg lg:text-xl text-textLight leading-relaxed`}
                >
                    {desc}
                </motion.p>
            ))}
        </motion.div>
    );

    return (
        <div
            className={`w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-xl transition-shadow
                       py-20 px-10 rounded-lg duration-500 bg-transparent`}
        >
            {direction === "right" ? (
                <>
                    {imageSection}
                    {textSection}
                </>
            ) : (
                <>
                    {textSection}
                    {imageSection}
                </>
            )}
        </div>
    );
};

export default AboutCard;
