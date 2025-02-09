import {useRef, useState} from "react";
import {motion,useInView} from "framer-motion";
import {jobDescriptionContent, jobListings} from "../../utils/constants.js";
import {Link} from "react-router-dom";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";

const CareerPageCurrentOpeningSection = () => {
    const [showJobBrief, setShowJobBrief] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const [searchText, setSearchText] = useState("");
    const [selectType, setSelectType] = useState("");
    const [selectLocation, setSelectLocation] = useState("");

    const lowerSearchText = searchText.toLowerCase();
    const lowerSelectType = selectType.toLowerCase();
    const lowerSelectLocation = selectLocation.toLowerCase();

    const filteredJobs = (jobListings || []).filter((job) => {
        return (
            (lowerSearchText === "" || (job.title && job.title.toLowerCase().includes(lowerSearchText))) &&
            (lowerSelectType === "" || (job.type && job.type.toLowerCase() === lowerSelectType)) &&
            (lowerSelectLocation === "" || (job.location && job.location.toLowerCase() === lowerSelectLocation))
        );
    });

    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, amount: 0.5 });

    return (
        <section
            // ref={ref}
            className="min-h-screen ">

            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-20 w-full h-full px-5 md:px-10 py-16 flex flex-col items-center justify-start bg-secondary/10 backdrop-blur-3xl rounded-2xl shadow-2xl  space-y-10"
            >
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,18,90,0.2)_0%,rgba(0,13,30,0.9)_90%)] backdrop-blur-2xl opacity-10 pointer-events-none" />
                <div className="absolute inset-0 bg-primary10  opacity-50 pointer-events-none" />

                <div className={`z-20 flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-between space-y-2 lg:space-y-0 w-full`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-start lg:w-2/3 "
                    >
                        Current Openings
                    </motion.h2>
                    <motion.h6
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-start lg:w-1/3">

                        If you think you might be a good fit for our team, we’d love to hear from you!
                    </motion.h6>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0 }
                            : {}
                    }
                    transition={{
                        duration: 0.5,
                        delay: 0.75
                    }}
                    className="w-full lg:p-4 gap-4 flex flex-col lg:flex-row justify-between items-center border border-white/10 backdrop-blur-lg rounded-xl "
                >
                    <div className={`w-full lg:w-[50%] bg-white rounded-lg flex justify-between items-center`}>
                        <input type={`text`} value={searchText}
                               onChange={(e) => setSearchText(e.target.value || "")} placeholder={`Enter key words..`}
                               className={`w-full px-3 py-1 md:py-2 bg-transparent  focus:outline-none text-textPrimary`}/>
                        <div className={`h-full  text-textPrimary py-1 md:py-2 px-3 md:px-5 text-2xl border-l hover:bg-textSubtle hover:text-white cursor-pointer rounded-r-lg`}>
                            <CiSearch size={25} />
                        </div>
                    </div>

                        <div className={`flex flex-row items-center justify-center gap-1 md:gap-5`}>
                            {/* Job Type Select */}
                            <select value={selectType}
                                    onChange={(e) => setSelectType(e.target.value)}
                                    className="w-[50%] md:w-auto h-full md:px-4 py-2 md:py-3 bg-white text-textPrimary rounded-lg shadow-lg focus:outline-none cursor-pointer">
                                <option value={""}>--select type--</option>
                                <option value="intern" >Intern</option>
                                <option value="full-time">Full Time</option>
                            </select>

                            {/* Location Select */}
                            <select
                                value={selectLocation}
                                onChange={(e) => setSelectLocation(e.target.value)}
                                className="w-[50%] md:w-auto md:px-4 py-2 md:py-3 bg-white text-textPrimary rounded-lg shadow-lg focus:outline-none cursor-pointer">
                                <option value={""}>--select location--</option>
                                <option value="remote">Remote</option>
                                <option value="on-site">On-Site</option>
                            </select>
                        </div>



                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0 }
                            : {}
                    }
                    transition={{
                        duration: 0.5,
                        delay: 0.75
                    }}
                    className="w-full lg:p-4 flex-col space-y-4 r  border border-white/10 backdrop-blur-lg rounded-xl "
                >
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => {

                                return (
                                    <div
                                        key={job.id}
                                        className={`relative border border-white/20 bg-primary/30 backdrop-blur-2xl rounded-xl cursor-pointer p-3 md:p-6 flex flex-col justify-between  `}
                                        onClick={() => setShowJobBrief(job.id === showJobBrief ? null : job.id)} // Toggle job brief visibility
                                    >
                                        <div className="text-left flex flex-row justify-between items-center w-full">
                                            <div className={`flex flex-col justify-center items-start space-y-2`}>
                                                <h3 className="md:text-2xl font-bold text-textHeading">{job.title}</h3>
                                                <p className="text-sm md:text-lg mt-2 text-textDisabled">{job.location} • {job.type}</p>
                                            </div>

                                            <div className={`flex flex-row justify-center items-center space-x-10`}>
                                                {showJobBrief === job.id && (
                                                    <Link to={`/careers/apply/${job.id}`} className="hidden lg:block px-6 py-2 text-white font-bold bg-textLink rounded-lg ">Apply</Link>

                                                )}
                                                {showJobBrief === job.id ? <FaChevronUp className={`text-textLight`}/> : <FaChevronDown className={`text-textLight`}/>}
                                            </div>
                                        </div>

                                        {showJobBrief === job.id && (
                                            <>
                                                <hr className="border-textDisabled brightness-75 w-full my-5"/>

                                                <div className="w-full text-left space-y-5">
                                                    <p className="text-sm md:text-lg text-textLight">{jobDescriptionContent[job.title]?.description}</p>
                                                    <hr className="border-gray-300 w-full my-10 opacity-30"/>
                                                    <div className={`flex flex-col justify-center items-start space-y-2`}>
                                                        <p className="md:text-2xl font-semibold text-textHeading">What You&#39;ll Do</p>
                                                        <ul className="text-sm md:text-lg ml-5 list-disc list-inside  space-y-2 text-textMuted">
                                                            {jobDescriptionContent[job.title]?.tasks?.map((task, index) => (
                                                                <li key={index}>{task}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <hr className="border-textDisabled brightness-75 my-10 opacity-30"/>
                                                    <div className={`flex flex-col justify-center items-start space-y-2`}>
                                                        <p className="md:text-2xl font-semibold text-textHeading">Requirements</p>
                                                        <ul className="text-sm md:text-lg ml-5 list-disc list-inside text-md space-y-2 text-textMuted">
                                                            {jobDescriptionContent[job.title]?.requirements?.map((requirement, index) => (
                                                                <li key={index}>{requirement}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <hr className="block lg:hidden border-textDisabled brightness-75 w-full my-5"/>
                                                <p className="block lg:hidden md:text-lg text-left mb-2">
                                                    {/* Replace with the appropriate link */}Click {" "}
                                                    <Link to={`/careers/apply/${job.id}`} className="text-textLink font-bold hover:underline">Apply</Link> to apply.
                                                </p>
                                            </>
                                        )}

                                    </div>
                                )
                            })
                    ) : (
                        <div className={`w-full h-100 flex justify-center items-center text-red-500 bg-`}>
                            No jobs found.
                        </div>
                    )}
                </motion.div>
            </motion.section>
        </section>
    )
}
export default CareerPageCurrentOpeningSection;