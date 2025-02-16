import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {MdMail} from "react-icons/md";
import {IoCall} from "react-icons/io5";

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
    const inView = useInView(sectionRef, { once: false, amount: 0.1});

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
        <section className="">
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            className=" w-full h-full py-10 md:py-16 flex flex-col justify-center items-start rounded-xl px-6 md:px-10 xl:px-16 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-3xl space-y-4 "
        >
            <div className=" ">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-extrabold text-white text-left"
                >
                    We’d love to hear from you!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-sm md:text-lg text-gray-300 max-w-2xl"
                >
                    Drop us a message with any questions, inquiries, or business proposals.
                </motion.p>
            </div>
            <hr className="block md:hidden my-4 w-full opacity-50" />
            <div className={`w-full h-full flex flex-col md:flex-row md:justify-between  gap-5`}>
                <motion.div

                    className="w-full   md:py-8 space-y-6 text-white"
                >

                        <p className="text-sm md:text-xl font-light text-white text-left">
                        Email, call, or complete the form to learn how SysItSoft can solve your messaging problems.
                    </p>

                    {/* Contact Details */}
                    <div className="flex flex-col space-y-2 md:space-y-4">
                        {/* Email */}
                        <div className="flex items-center space-x-4  text-textMuted">
                            <MdMail />
                            <a href="mailto:riyasx07@gmail.com" className="hover:text-white hover:underline">
                                sysitsoft@riyasx07@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <IoCall />
                            <a href="tel:+919080002069" className="text-textMuted hover:underline">
                                +91 908 000 2069
                            </a>
                        </div>
                    </div>



                    <hr className="block md:hidden my-4 w-full opacity-50" />
                </motion.div>

                <motion.form
                    className="w-full   h-full md:bg-gray-800 bg-opacity-30 backdrop-blur-md md:p-8 rounded-xl shadow-lg  space-y-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="firstName" className="text-gray-300 text-sm md:text-base font-medium">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="bg-textLight text-textAccent border border-textPrimary focus:border-textPrimary/50  focus:text-textPrimary rounded-lg px-4 py-2 outline-none transition"
                                placeholder="John"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="lastName" className="text-gray-300 text-sm md:text-base font-medium">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="bg-textLight text-textAccent border border-textPrimary focus:border-textPrimary/50  focus:text-textPrimary rounded-lg px-4 py-2 outline-none transition"
                                placeholder="Doe"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-gray-300 text-sm md:text-base font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-textLight text-textAccent border border-textPrimary focus:border-textPrimary/50  focus:text-textPrimary rounded-lg px-4 py-2 outline-none transition"
                                placeholder="example@mail.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phoneNumber" className="text-gray-300 text-sm md:text-base font-medium">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                className="bg-textLight text-textAccent border border-textPrimary focus:border-textPrimary/50  focus:text-textPrimary rounded-lg px-4 py-2 outline-none transition"
                                placeholder="+1 234 567 890"
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col space-y-2 md:col-span-2">
                            <label htmlFor="message" className="text-gray-300 text-sm md:text-base font-medium">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                className="bg-textLight text-textAccent border border-textPrimary focus:border-textPrimary/50 custom-scrollbar focus:text-textPrimary rounded-lg px-4 py-2 outline-none transition"
                                placeholder="Type your message here..."
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full text-white bg-textPrimary  font-semibold p-3 md:p-4 rounded-lg transition transform hover:scale-105 active:scale-95 shadow-md"
                        aria-label="Submit the form"
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
            </motion.div>
        </section>
    );
};

export default ContactFormSection;
