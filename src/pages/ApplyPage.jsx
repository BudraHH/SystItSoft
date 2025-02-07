import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { jobListings,skillOptions } from "../utils/constants.js";
import { MdDelete} from "react-icons/md";

const ApplyPage = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        fileName: "",
        file: null,
        skills: [],
        qualification: "",
        degree: "",
        specialization: "",
    });

    const [skillList] = useState(skillOptions);
    const [skill, setSkill] = useState(""); // Track user input for filtering
    const filteredSkills = skillList.filter((s) => skill && s.toLowerCase().startsWith(skill.toLowerCase()));

    useEffect(() => {
        if (jobId) {
            const job = jobListings?.find((job) => job.id === Number(jobId));
            setJobDetails(job);
        }
    }, [jobId, jobListings]);

    if (!jobDetails) return <div className="text-center py-8">Job not found</div>; // Handle case where job doesn't exist

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFormData((prev) => ({
                ...prev,
                file: uploadedFile,
                fileName: uploadedFile.name,
            }));
        }
    };

    const handleDeleteFile = () => {
        setFormData((prev) => ({
            ...prev,
            file: null,
            fileName: "",
        }));
        const fileInput = document.getElementById("resume-upload");
        if (fileInput) fileInput.value = "";
    };

    const addSkill = (selectedSkill) => {
        if (selectedSkill && !formData.skills.includes(selectedSkill)) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, selectedSkill],
            }));
            setSkill(""); // Clear search input after selection
        }
    };

    const removeSkill = (skillToRemove) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skillToRemove),
        }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const uploadedFile = e.dataTransfer.files[0];
        if (uploadedFile) {
            setFormData((prev) => ({
                ...prev,
                file: uploadedFile,
                fileName: uploadedFile.name,
            }));
        }
    };

    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Application Submitted Successfully");

        setFormData({
            firstName: "",
            lastName: "",
            fileName: "",
            file: null,
            skills: [],
            qualification: "",
            degree: "",
            specialization: "",
        });

        navigate("/careers");
    };



    return (
        <div className="w-screen bg-white shadow-lg rounded-lg  text-left space-y-4 md:space-y-6 lg:space-y-10 flex flex-col px-8 md:px-10 lg:px-14 py-10 ">

                <div className={`w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center`}>
                    <div className={`flex flex-col `}>
                        <h2 className="text-xl font-semibold text-textPrimary">{`Apply for ${jobDetails.title}`}</h2>
                        <p className="text-sm text-textMuted">{`${jobDetails.location} • ${jobDetails.type}`}</p>
                    </div>
                    <p className="text-sm text-gray-600">Note: Fields marked with {" "}<span
                        className={`text-red-500`}>*</span>{" "} are mandatory</p>
                </div>

            <hr className=" border-textPrimary w-full my-2 md:my-5"/>
            <form className="rounded-lg space-y-6">
            {/* Full Name */}
                <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className={`flex flex-col space-y-1`}>
                            <label className="block text-textPrimary text-sm md:text-lg font-medium">First Name{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-3 md:p-4  border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                        <div className={`flex flex-col space-y-1`}>
                            <label className="block text-textPrimary text-sm md:text-lg font-medium">Last Name{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full p-3 md:p-4  border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Email Address */}
                <div className={`flex flex-col space-y-1`}>
                    <label className="block text-textPrimary text-sm md:text-lg font-medium">Email Address{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full p-3 md:p-4  border border-textDisabled bg-textLight text-tertiarybg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className={`flex flex-col space-y-1`}>
                    <label className="block text-textPrimary text-sm md:text-lg font-medium">Phone Number{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <input
                        type="tel"
                        name="phonenumber"
                        value={formData.phonenumber}
                        placeholder="Enter your phone number"
                        className="w-full p-3 md:p-4  border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    />
                </div>

                {/* Maximum Qualification */}
                <div className={`flex flex-col space-y-1`}>
                    <label className="block text-textPrimary text-sm md:text-lg font-medium">Maximum Qualification{" "}<span
                        className={`text-red-500`}>*</span>{" "}</label>
                    <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                        required
                    >
                        <option value="">-- Select your maximum qualification --</option>
                        <option value="highschool" >High School</option>
                        <option value="bachelor">Bachelor&#39;s Degree</option>
                    </select>
                </div>

                {/* Degree and Specialization (Conditionally Rendered) */}
                {(formData.qualification === "bachelor" || formData.qualification === "master" ) && (
                    <>
                        {/* Degree */}
                        <div className={`flex flex-col space-y-1`}>
                            <label className="block text-textPrimary text-sm md:text-lg font-medium">Degree{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                                placeholder="Enter your degree (e.g., B.Tech, M.Sc)"
                                className="w-full p-3 md:p-4  border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>

                        {/* Specialization */}
                        <div className={`flex flex-col space-y-1`}>
                            <label className="block text-textPrimary text-sm md:text-lg font-medium">Specialization{" "}<span
                                className={`text-red-500`}>*</span>{" "}</label>
                            <input
                                type="text"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                placeholder="Enter your specialization (e.g., Computer Science)"
                                className="w-full p-3 md:p-4 border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"
                                required
                            />
                        </div>

                    </>
                )}


                <div className="flex flex-col space-y-2">
                        <label className="block text-textPrimary text-sm md:text-lg font-medium">
                            Skills <span className="text-red-500">*</span>
                        </label>

                        {/* Skill Input Field */}
                        <input
                            type="text"
                            value={skill}
                            name="skill"
                            onChange={(e) => setSkill(e.target.value)}
                            placeholder="Search or add a skill..."
                            className="w-full p-3 md:p-4 border border-textDisabled text-tertiary bg-textLight rounded-md shadow-sm focus:outline-none focus:bg-white"

                        />

                        {/* Skills Dropdown */}
                        {filteredSkills.length > 0 && (
                            <div className="mt-2 bg-white border rounded-md shadow-md max-h-40 overflow-auto">
                                {filteredSkills.map((s, index) => (
                                    <button
                                        key={index}
                                        onClick={() => addSkill(s)}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Selected Skills */}
                        <div className="flex flex-wrap mt-3 space-x-2">
                            {formData.skills.map((s, index) => (
                                <div key={index} className="flex items-center space-x-2 bg-textAccent text-white      p-2 rounded-md">
                                    <span>{s}</span>
                                    <button onClick={() => removeSkill(s)}>
                                        <MdDelete className="text-red-300 hover:text-red-500 cursor-pointer" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>


                {/* Upload Your Resume - Drag and Drop */}
                <div className={`flex flex-col space-y-1`}>
                    <div className={`flex flex-row justify-between items-center w-full`}>
                        <label className="block text-textPrimary text-sm md:text-lg font-medium mb-2">Upload Your Resume{" "}<span
                            className={`text-red-500`}>*</span>{" "}</label>
                        {formData.fileName && (
                            <MdDelete
                                onClick={handleDeleteFile}
                                className="text-red-500 cursor-pointer"
                                title="Delete file"
                            />
                        )}
                    </div>
                    <div
                        className="relative flex items-center justify-center border-2 border-dashed border-textDisabled text-tertiary rounded-md p-6 bg-gray-50 text-center cursor-pointer hover:bg-gray-100 transition-all"
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

                        <p className="text-textPrimary text-sm mr-2">
                            {formData.fileName ? formData.fileName : "Drag and drop your resume here or click to select"}
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-5 bg-textAccent text-white font-semibold rounded-md hover:bg-textLinktransition-all"
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
