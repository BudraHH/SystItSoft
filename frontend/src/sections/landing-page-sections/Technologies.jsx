import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const Technologies = () => {
    const technologies = [
        'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Python', 'Flask',
        'Git', 'Docker', 'Kubernetes', 'GraphQL', 'AWS', 'Azure', 'Jenkins', 'MySQL'
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className={`text-textMuted
            h-56 flex justify-center items-center border-t border-b px-52 bg-indigo-400`}
        >
            <div style={{ width: '75%', overflow: 'hidden' }}>
                <motion.div
                    style={{ display: 'flex', whiteSpace: 'nowrap' }}
                    animate={{ x: ['50%', '-50%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 10,
                            ease: 'linear'
                        }
                    }}
                    className={`w-full max-w-full`}
                >
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="mr-10 text-xl font-bold text-gray-800 whitespace-nowrap"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Technologies;
