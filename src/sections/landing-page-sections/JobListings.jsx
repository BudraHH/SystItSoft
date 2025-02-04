import SplitText from "../../utils/SplitText.jsx";
import {jobDescriptionContent, jobListings} from "../../utils/constants.js";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useRef, useState} from "react";
import {useInView} from "framer-motion";

const JobListings = () => {
    const [showJobBrief, setShowJobBrief] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false, amount: 0.5})

    return (
        <section ref={ref}
            className="relative z-20 w-screen h-auto py-40  px-16 flex flex-col items-center justify-center space-y-10">
            <div>
                <SplitText
                    text="Join Our Team as"
                    className={`font-semibold text-center md:text-6xl text-textLight`}
                    textSize="text-xl sm:text-3xl md:text-5xl font-bold"
                    delay={150}
                    animationFrom={{opacity: 0, transform: "translate3d(0,50px,0)"}}
                    animationTo={{opacity: 1, transform: "translate3d(0,0,0)"}}
                    easing="easeOutCubic"
                />
            </div>

            <div className="w-full flex flex-col space-y-4">
                {jobListings.map((job) => (
                    <div
                        key={job.id}
                         className={`relative border border-gray-300 rounded-xl cursor-pointer p-6 flex flex-col justify-between transition hover:shadow-lg text-textHeading`}
                         onClick={() => setShowJobBrief(job.id === showJobBrief ? null : job.id)} // Toggle job brief visibility
                    >
                        <div className="text-left flex flex-row justify-between items-center w-full">
                            <div>
                                <h3 className="text-2xl font-bold">{job.title}</h3>
                                <p className="text-sm mt-2 text-textMuted">{job.location} • {job.type}</p>
                            </div>

                            <div>
                                {showJobBrief === job.id ? <FaChevronUp/> : <FaChevronDown/>}
                            </div>
                        </div>

                        {showJobBrief === job.id && (
                            <>
                                <hr className="border-gray-300 w-full my-5"/>

                                <div className="w-full text-left space-y-5">
                                    <p className="text-lg">{jobDescriptionContent[job.title]?.description}</p>

                                    <div>
                                        <p className="text-lg font-semibold">What You'll Do</p>
                                        <ul className="ml-5 list-disc list-inside text-md space-y-2">
                                            {jobDescriptionContent[job.title]?.tasks?.map((task, index) => (
                                                <li key={index}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="text-lg font-semibold">Requirements</p>
                                        <ul className="ml-5 list-disc list-inside text-md space-y-2">
                                            {jobDescriptionContent[job.title]?.requirements?.map((requirement, index) => (
                                                <li key={index}>{requirement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <hr className="border-gray-300 w-full my-5"/>
                                <p className="text-sm text-left">
                                    {/* Replace with the appropriate link */}Click {" "}
                                    <a href={`/careers/apply/${job.id}`} className="text-blue-600 font-bold hover:underline">here</a> to apply.
                                    {/* For an external link, you could use: */}
                                    {/* <a href="https://external-url.com/apply" className="text-blue-600 font-bold hover:underline">here</a> */}
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default JobListings;
