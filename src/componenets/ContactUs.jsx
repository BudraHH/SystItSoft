import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ContactUs = () => {
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
    <section className="w-full h-[100vh] overflow-hidden p-5 mt-10 md:mt-16 lg:mt-20 xl:mt-22 bg-gray-900 text-white flex flex-col justify-center items-center space-y-5 md:space-y-10">
      <div className="flex flex-col justify-center items-center space-y-2 md:space-y-5 text-center">
        <motion.h1
          variants={fadeIn("up", "easeIn", 0.75, 0.25)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          Contact SystItSoft
        </motion.h1>
        <motion.h6
          variants={fadeIn("up", "easeIn", 0.85, 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center"
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
            variants={fadeIn("up", "easeIn", 0.95, 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1"
          >
            <label htmlFor="firstName" className="text-sm md:text-base">
              <span>First name *</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter your first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "easeIn", 0.95, 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1"
          >
            <label htmlFor="lastName" className="text-sm md:text-base">
              <span>Last name *</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter your last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "easeIn", 1, 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1"
          >
            <label htmlFor="email" className="text-sm md:text-base">
              <span>E-mail *</span>
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter your email (e.g., example@mail.com)"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "easeIn", 1, 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1"
          >
            <label htmlFor="phoneNumber" className="text-sm md:text-base">
              <span>Phone number *</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
              placeholder="Enter your phone number (e.g., +1 123 456 7890)"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "easeIn", 1.25, 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1 md:col-span-2"
          >
            <label htmlFor="message" className="text-sm md:text-base">
              <span>Leave us a message...</span>
            </label>
            <textarea
              id="message"
              className="bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
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
          className="bg-primary text-sm md:text-base p-3 md:p-4 text-white w-full rounded-lg transition duration-300"
          aria-label="Submit the form"
          variants={fadeIn("up", "easeIn", 1.15, 0.75)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
};

export default ContactUs;
