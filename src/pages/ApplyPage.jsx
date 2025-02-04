import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { jobListings } from "../utils/constants.js";
import { MdDelete } from "react-icons/md";
import {skillOptions} from "../utils/constants.js";

const ApplyPage = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [qualification, setQualification] = useState("");
    const [gradStartDate, setGradStartDate] = useState("");
    const [gradEndDate, setGradEndDate] = useState("");
    const [degree, setDegree] = useState("");
    const [specialization, setSpecialization] = useState("");

    useEffect(() => {
        if (jobId) {
            const job = jobListings?.find((job) => job.id === Number(jobId));
            setJobDetails(job);
        }
    }, [jobId]);


    if (!jobDetails) return <div className="text-center py-8">Job not found</div>; // Handle case where job doesn't exist

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFileName(uploadedFile.name);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const uploadedFile = e.dataTransfer.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFileName(uploadedFile.name);
        }
    };

    const handleDeleteFile = () => {
        setFile(null);
        setFileName("");
        const fileInput = document.getElementById("resume-upload");
        if (fileInput) fileInput.value = "";
    };


    const handleSkillsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSkills([...new Set([...skills, ...selectedOptions])]); // Avoid duplicates
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        alert("Application Submitted Successfully");

        setQualification("");
        setGradStartDate("");
        setGradEndDate("");
        setDegree("");
        setSpecialization("");
        setSkills([]);
        setFile(null);
        setFileName("");

        navigate("/careers");
    };


    return (
        <div className="w-screen bg-white shadow-lg rounded-lg  text-left space-y-10 flex flex-col pl-10 pr-14 py-10 ">

                <div className={`w-full flex flex-row justify-between items-center`}>
                    <div className={`flex flex-col `}>
                        <h2 className="text-xl font-semibold text-gray-800">{`Apply for ${jobDetails.title}`}</h2>
                        <p className="text-sm text-gray-600">{`${jobDetails.location} • ${jobDetails.type}`}</p>
                    </div>
                    <p className="text-sm text-gray-600">Note: Fields marked with {" "}<span className={`text-red-500`}>*</span>{" "} are mandatory</p>
                </div>
            <form className="rounded-lg space-y-6">
                {/* Full Name */}
                <div className="mb-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium">First Name{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Last Name{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Email Address */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium">Email Address{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium">Phone Number{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    />
                </div>

                {/* Maximum Qualification */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium">Maximum Qualification{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    >
                        <option value="">-- Select your maximum qualification --</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor&#39;s Degree</option>
                    </select>
                </div>

                {/* Degree and Specialization (Conditionally Rendered) */}
                {(qualification === "bachelor" || qualification === "master" || qualification === "doctorate") && (
                    <>
                        {/* Degree */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium">Degree{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                placeholder="Enter your degree (e.g., B.Tech, M.Sc)"
                                className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>

                        {/* Specialization */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium">Specialization{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                placeholder="Enter your specialization (e.g., Computer Science)"
                                className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                        {/* Graduation Start and End Date */}
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium">Graduation Start Date{" "}<span
                                        className={`text-red-500`}>*</span>{" "}</label>
                                    <input
                                        type="date"
                                        value={gradStartDate}
                                        onChange={(e) => setGradStartDate(e.target.value)}
                                        className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Graduation End Date{" "}<span
                                        className={`text-red-500`}>*</span>{" "}</label>
                                    <input
                                        type="date"
                                        value={gradEndDate}
                                        onChange={(e) => setGradEndDate(e.target.value)}
                                        className="w-full p-4 mt-2 border border-gray-300 bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Select Your Skills <span className="text-red-500">*</span>
                    </label>
                    <select
                        multiple
                        value={skills}
                        onChange={handleSkillsChange}
                        className="w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    >
                        {skillOptions.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                    <p className="text-gray-500 text-sm mt-2">
                        Hold Ctrl (Windows) / Command (Mac) to select multiple skills.
                    </p>

                    {/* Display Selected Skills */}
                    {skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center text-sm"
                                >
                                    {skill}
                                    <button
                                        onClick={() => removeSkill(skill)}
                                        className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                {/* Upload Your Resume - Drag and Drop */}
                <div className="mb-6">
                    <div className={`flex flex-row justify-between items-center w-full`}>
                        <label className="block text-gray-700 font-medium mb-2">Upload Your Resume{" "}<span
                            className={`text-red-500`}>*</span>{" "}</label>
                        {fileName && (
                            <MdDelete
                                onClick={handleDeleteFile}
                                className="hover:text-red-500 cursor-pointer"
                                title="Delete file"
                            />
                        )}
                    </div>
                    <div
                        className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 bg-gray-50 text-center cursor-pointer hover:bg-gray-100 transition-all"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            id="resume-upload"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            required
                        />

                        <p className="text-textLight text-sm mr-2">
                            {fileName ? fileName : "Drag and drop your resume here or click to select"}
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
                        onClick={handleApplicationSubmit}
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>

    );
};

export default ApplyPage;
