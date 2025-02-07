import {jobDescriptionContent, jobListings} from "../../utils/constants.js";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import {Link} from "react-router-dom";

const JobListSection = ({jobListRef}) => {
    const [showJobBrief, setShowJobBrief] = useState(null);
    const sectionRef = jobListRef || useRef(null);
    const isInView = useInView(sectionRef, {once: false, amount: 0.5})


    return (

        <section ref={sectionRef}
                 className="relative z-20 w-full min-h-screen py-20 md:py-24 lg:py-28 px-6 md:px-10 lg:px-12 xl:px-20  flex flex-col items-center justify-center space-y-5  lg:space-y-10 bg-gradient-to-r from-primary to-dark"
        ><motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-textHeading text-center"
            >
                Join our team as
            </motion.h2>

            <div className="w-full flex flex-col space-y-4">
                {jobListings.map((job) => {
                    const cardRef = useRef(null);
                    const cardInView = useInView(cardRef, { once: true, amount: 0.5 });
                    return (
                        <motion.div
                            ref={cardRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 50 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            key={job.id}
                            className={`relative border border-gray-300  rounded-xl cursor-pointer p-3 md:p-6 flex flex-col justify-between hover:shadow-lg text-textHeading`}
                            onClick={() => setShowJobBrief(job.id === showJobBrief ? null : job.id)} // Toggle job brief visibility
                        >
                            <div className="text-left flex flex-row justify-between items-center w-full">
                                <div className={`flex flex-col justify-center items-start space-y-2`}>
                                    <h3 className="md:text-2xl font-bold">{job.title}</h3>
                                    <p className="text-sm md:text-lg mt-2 text-textDisabled">{job.location} • {job.type}</p>
                                </div>

                                <div className={`flex flex-row justify-center items-center space-x-10`}>
                                    {showJobBrief === job.id && (
                                            <Link to={`/careers/apply/${job.id}`} className="hidden lg:block px-6 py-2 text-white font-bold bg-textLink rounded-lg ">Apply</Link>

                                    )}
                                    {showJobBrief === job.id ? <FaChevronUp/> : <FaChevronDown/>}
                                </div>
                            </div>

                            {showJobBrief === job.id && (
                                <>
                                    <hr className="border-gray-300 w-full my-5"/>

                                    <div className="w-full text-left space-y-5">
                                        <p className="text-sm md:text-lg">{jobDescriptionContent[job.title]?.description}</p>
                                        <hr className="border-gray-300 w-full my-10 opacity-30"/>
                                        <div className={`flex flex-col justify-center items-start space-y-2`}>
                                            <p className="md:text-2xl font-semibold">What You&#39;ll Do</p>
                                            <ul className="text-sm md:text-lg ml-5 list-disc list-inside  space-y-2">
                                                {jobDescriptionContent[job.title]?.tasks?.map((task, index) => (
                                                    <li key={index}>{task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <hr className="border-gray-300 w-full my-10 opacity-30"/>
                                        <div className={`flex flex-col justify-center items-start space-y-2`}>
                                            <p className="md:text-2xl font-semibold">Requirements</p>
                                            <ul className="text-sm md:text-lg ml-5 list-disc list-inside text-md space-y-2">
                                                {jobDescriptionContent[job.title]?.requirements?.map((requirement, index) => (
                                                    <li key={index}>{requirement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className="block lg:hidden border-gray-300 w-full my-5"/>
                                    <p className="block lg:hidden md:text-lg text-left mb-2">
                                        {/* Replace with the appropriate link */}Click {" "}
                                        <Link to={`/careers/apply/${job.id}`} className="text-textLink font-bold hover:underline">Apply</Link> to apply.
                                    </p>
                                </>
                            )}
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}

export default JobListSection;
