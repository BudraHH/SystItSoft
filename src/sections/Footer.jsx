import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {additionalNavLinks, navLinks} from "../utils/constants.js";
import logo from "../assets/logo.png";

const socialLinks = [
  { id: 1, icon: <IoCall />, href: "tel:+919080002069", label: "Call" },
  {
    id: 2,
    icon: <MdMail />,
    href: "mailto:riyasx07@gmail.com",
    label: "Email",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    href: "https://wa.me/919080002069",
    label: "WhatsApp",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
  {
    id: 5,
    icon: <BsInstagram />,
    href: "https://www.instagram.com/riyasx.07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
  {
    id: 6,
    icon: <FaFacebook />,
    href: "https://www.facebook.com/yourprofile",
    label: "Facebook",
  },
  {
    id: 7,
    icon: <FaXTwitter />,
    href: "https://twitter.com/yourprofile",
    label: "Twitter",
  },
];




const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <footer className={`w-full px-5 pt-20 pb-10 bg-dark text-myColors-300`}>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <motion.hr
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            variants={{
              direction: "right",
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25 },
              },
              exit: { opacity: 0, y: 20 },
            }}
            className={`mb-14 border-t-2 border-tertiary`}

        />
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-4 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <motion.img
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                  },
                  exit: { opacity: 0, y: 20 },
                }}
                className="w-auto max-w-[120px] cursor-pointer "
                src={logo}
                alt="SystItSoft"
              />

              <motion.p
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                  },
                  exit: { opacity: 0, y: 20 },
                }}
                className={`text-base leading-relaxed text-textMuted mt-7`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </motion.p>

              <ul ref={ref} className="flex items-center space-x-2 mt-5">
                {socialLinks.map(({ id, icon, href, label }) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.25 * id },
                      },
                      exit: { opacity: 0, y: 20 },
                    }}
                    key={id}
                  >
                    <a
                      href={href}
                      title={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center text-xl text-textMuted hover:text-textLight hover:scale-125 transition-all duration-200 rounded-full w-10 h-10 hover:bg-dark`}
                    >
                      {icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.p
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                  },
                  exit: { opacity: 0, y: 20 },
                }}
                className={`text-sm tracking-widest text-textDisabled font-bold uppercase`}
              >
                Company
              </motion.p>

              <ul className="mt-6 space-y-4">
                {navLinks.map(({ id, label, ref,key }) => (
                  <motion.li
                    whileHover={{ scale: 1.02 }}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.25 * (id + 0.5) },
                      },
                      exit: { opacity: 0, y: 20 },
                    }}
                    key={key}
                  >
                    <a
                      href={ref}
                      className={`flex text-base text-textMuted transition-all duration-200 hover:text-white focus:text-white`}
                    >
                      {label.toString().charAt(0).toUpperCase() + label.toString().slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.p
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                  },
                  exit: { opacity: 0, y: 20 },
                }}
                className={`text-sm tracking-widest text-textDisabled font-bold uppercase`}
              >
                Help
              </motion.p>

              <ul className="mt-6 space-y-4">
                {additionalNavLinks.map(({ id,key,label, ref }) => (
                  <motion.li
                    whileHover={{ scale: 1.02 }}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    exit="exit"
                    variants={{
                      direction: "down",
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.25 * (id + 0.5) },
                      },
                      exit: { opacity: 0, y: 20 },
                    }}
                    key={key}
                  >
                    <a
                      href={ref}
                      className={`flex text-base text-textMuted transition-all duration-200 hover:text-white focus:text-white`}
                    >
                        {label.toString().charAt(0).toUpperCase() + label.toString().slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.hr
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            variants={{
              direction: "right",
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25 },
              },
              exit: { opacity: 0, y: 20 },
            }}
            className={`mt-14 border-t-2 border-tertiary`}

          />
        </div>

      <section className="text-center pt-10 ">
        <motion.p
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            variants={{
                direction: "up",
                hidden: { opacity: 0, y: 20 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.25 },
                },
                exit: { opacity: 0, y: 20 },
            }}
            className={`text-xs text-textLight`}>
          &copy; 2025 SystItSoft. All rights reserved.
        </motion.p>
      </section>
    </footer>
  );
};

export default Footer;
