import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "../../utils/SplitText.jsx";
import {fadeIn} from "../../utils/motion.js";

const ContactFormSection = ({ formRef }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    // Use ref inside the component if useInView is needed
    const sectionRef = formRef || useRef(null);
    const inView = useInView(sectionRef, { once: false, amount: 0.5 });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        if (!isValidEmail) {
            alert("Please enter a valid email.");
            return;
        }
        console.log("Form submitted", formData);
    };

    return (
        <section
            ref={sectionRef}
            className={`w-screen h-screen pt-44 pb-22 xl:px-10 text-white flex flex-col xl:flex-row justify-center items-center xl:items-start space-y-5 md:space-y-10 xl:space-y-0 
            xl:space-x-12`}>
            <div className="xl:w-2/5  flex flex-col justify-center  items-center space-y-2  text-center ">
                <motion.h2
                    initial={{opacity: 0, y:50}}
                    animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                    transition={{duration: 1, delay: 0.25}}
                    className={`flex flex-col justify-center items-center text-2xl font-bold w-3/5
                        md:w-full md:text-4xl lg:text-5xl
                    `}
                >
                    We&#39;d love to hear from you!
                </motion.h2>
                <motion.h6
                    initial={{opacity: 0, y:50}}
                    animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                    transition={{duration: 1, delay: 0.35}}
                    className={`text-xs sm:text-sm md:text-lg w-4/5 md:w-full`}
                >
                    Drop us a line with any questions, inquiries, or business proposals
                </motion.h6>
            </div>
            <form
                className="w-10/12 md:w-4/5 xl:w-3/5 space-y-5 md:space-y-6 lg:space-y-8  rounded-lg"
                onSubmit={handleSubmit}
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                    <motion.div
                        initial={{opacity: 0, y:50}}
                        animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                        transition={{duration: 0.5, delay: 0.5}}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="firstName" className="text-sm md:text-base">
                            <span>First name *</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="bg-textLight focus:bg-white border-2 border-textMuted focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full text-tertiary"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y:50}}
                        animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                        transition={{duration: 0.5, delay: 0.65}}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="lastName" className="text-sm md:text-base">
                            <span>Last name *</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="bg-textLight focus:bg-white border-2 border-textMuted focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full text-tertiary"placeholder="Enter your last name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y:50}}
                        animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                        transition={{duration: 0.5, delay: 0.85}}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="email" className="text-sm md:text-base">
                            <span>E-mail *</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-textLight focus:bg-white border-2 border-textMuted focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full text-tertiary"
                            placeholder="Enter your email (e.g., example@mail.com)"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y:50}}
                        animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                        transition={{duration: 0.5, delay: 0.95}}
                        className="flex flex-col space-y-1"
                    >
                        <label htmlFor="phoneNumber" className="text-sm md:text-base">
                            <span>Phone number *</span>
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="bg-textLight focus:bg-white border-2 border-textMuted focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full text-tertiary"
                            placeholder="Enter your phone number (e.g., +1 123 456 7890)"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y:50}}
                        animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                        transition={{duration: 0.5, delay: 1.05}}
                        className="flex flex-col space-y-1 md:col-span-2"
                    >
                        <label htmlFor="message" className="text-sm md:text-base">
                            <span>Leave us a message...</span>
                        </label>
                        <textarea
                            id="message"
                            className="bg-textLight focus:bg-white border-2 border-textMuted focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full text-tertiary"
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
                    className={`text-textHeading bg-tertiary hover:bg-secondary text-sm md:text-base p-3 md:p-4  w-full rounded-lg  `}
                    aria-label="Submit the form"
                    initial={{opacity: 0, y:50}}
                    animate={inView ? {opacity: 1, y:0}:{opacity: 0, y:50}}
                    transition={{duration: 0.5, delay: 1.15}}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Submit
                </motion.button>
            </form>
        </section>
    );
};

export default ContactFormSection;
