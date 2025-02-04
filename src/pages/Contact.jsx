import {useState} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import SplitText from "../utils/SplitText.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic email validation
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        if (!isValidEmail) {
            alert("Please enter a valid email.");
            return;
        }

        // Log the data for now
        console.log("Form submitted", formData);
    };

    return (
        <div className={`w-screen h-screen p-5 pt-10 md:pt-16 lg:pt-20 xl:pt-22  text-white flex flex-col justify-center items-center space-y-5 md:space-y-10
         bg-gradient-to-r from-dark via-primary to-dark`}>
            <div className="flex flex-col justify-center items-center space-y-2 md:space-y-5 text-center">
                <SplitText
                    text="Get in touch"
                    className={`font-semibold text-center md:text-6xl text-textLight`}
                    textSize="text-xl sm:text-3xl md:text-5xl font-bold"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    easing="easeOutCubic"
                />
                <motion.h6
                    variants={fadeIn("up", "easeIn", 0.85, 0.5)}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`flex flex-col md:flex-row justify-center items-center text-lg`}
                >
                    Drop us a line with any questions, inquiries, or{" "}
                    <br className="hidden md:block" /> business proposals
                </motion.h6>
            </div>
            <form
                className="w-9/12 md:w-2/3 lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-8"
                onSubmit={handleSubmit}
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                    <motion.div
                        variants={fadeIn("up", "easeIn", 1, 0.5)}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="firstName" className="text-sm md:text-base">
                            <span>First name *</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="bg-slate-100 focus:bg-white border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "easeIn", 1.25, 0.5)}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="lastName" className="text-sm md:text-base">
                            <span>Last name *</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="bg-slate-100 focus:bg-white border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                            placeholder="Enter your last name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "easeIn", 1.5, 0.5)}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1, delay: 0.95 }}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="email" className="text-sm md:text-base">
                            <span>E-mail *</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-slate-100 focus:bg-white border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                            placeholder="Enter your email (e.g., example@mail.com)"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "easeIn", 1.75, 0.5)}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1, delay: 1.05 }}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="phoneNumber" className="text-sm md:text-base">
                            <span>Phone number *</span>
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="bg-slate-100 focus:bg-white border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                            placeholder="Enter your phone number (e.g., +1 123 456 7890)"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "easeIn", 2, 0.5)}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1, delay: 1.15 }}
                        className="flex flex-col space-y-1 md:col-span-2"
                    >
                        <label htmlFor="message" className="text-sm md:text-base">
                            <span>Leave us a message...</span>
                        </label>
                        <textarea
                            id="message"
                            className="bg-slate-100 focus:bg-white border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                            rows={5}
                            placeholder="Type your message here..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </motion.div>
                </div>

                <motion.button
                    type="submit"
                    className={`text-textHeading bg-tertiary hover:bg-secondary text-sm md:text-base p-3 md:p-4  w-full rounded-lg transition duration-300`}
                    aria-label="Submit the form"
                    variants={fadeIn("up", "easeIn", 2.25, 0.75)}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1, delay: 1.25 }}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Submit
                </motion.button>
            </form>
        </div>
    );
};

export default Contact;
