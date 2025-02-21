import { cn } from "../../lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, forwardRef } from "react";
import PropTypes from 'prop-types';

// Skeleton Placeholder
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

// Items Data
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
    },
    {
        title: "The Power of Communication",
        description: "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
    },
];

// BentoGrid Component
const BentoGrid = ({ className, children }) => (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
        {children}
    </div>
);

// **Fix: Use forwardRef for BentoGridItem**
const BentoGridItem = forwardRef(({ className, title, description, header, isInView, index }, ref) => {
    return (
        <motion.div
            ref={ref}  // 🔥 Attach the ref here
            initial={{ opacity: 0, y: 50 }}
            animate={isInView && { opacity: 1, y: 0 } }
            transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.2 + 0.2 }} // 🔥 Delay animation
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </motion.div>
    );
});

// **Fix: Move useRef() outside map()**
const ImageGridSection = ({imageGridRef}) => {
    const sectionRef = useRef(null); // ✅ Conditional ref assignment
    const isInView = useInView(sectionRef, { triggerOnce: true, amount: 0.1 });

    return (
        <section
            ref={imageGridRef}
            className="relative z-20 w-full flex justify-center items-center"
        >
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ duration:0.5, ease:"easeIn",delay: 0.25 }}
                className={`relative p-4 md:p-5 lg:p-5 border border-white/10  rounded-2xl bg-primary/10 backdrop-blur-
            `}>
                <BentoGrid className="w-full lg:max-w-4xl mx-auto md:auto-rows-[20rem] xl:auto-rows-[25rem]">
                    {items.map((item, i) => {
                        const cardRef = useRef(null); // ✅ Ref is created here
                        const cardInView = useInView(cardRef, { triggerOnce: true, amount: 0.2 });

                        return (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                ref={cardRef} // ✅ Pass ref correctly
                                isInView={cardInView}
                                index={i}
                            />
                        );
                    })}
                </BentoGrid>

            </motion.div>
            {/*<div className={`absolute -z-2 bg-white w-full h-1`}></div>*/}
        </section>
    );
};

export default ImageGridSection;

ImageGridSection.propTypes = {
    imageGridRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};