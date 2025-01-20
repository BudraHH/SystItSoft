import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import missionImage from "../assets/mission.png";
import storyImage from "../assets/story.png";
import purposeImage from "../assets/purpose.png";

// Reusable FadeIn Animation Variants
const fadeIn = (
  direction = "up",
  easing = "easeOut",
  delay = 0,
  duration = 0.75,
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: easing, duration, delay },
  },
  exit: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    transition: { ease: easing, duration },
  },
});

const AnimatedSection = ({ title, description, image, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-auto flex flex-col justify-center items-start p-0 sm:p-6 md:p-8 lg:p-16 bg-gray-100"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="exit"
    >
      {/* Section Content */}
      <div className=" h-[30rem] w-[85rem] rounded-lg flex flex-row justify-between items-center gap-8 ">
        <motion.div
          variants={fadeIn(direction, "easeIn", 0.5, 0.5)}
          className="absolute z-0 left-0 h-[30rem] w-[10rem] sm:h-[30rem] sm:w-[15rem] lg:h-[40rem] lg:w-[25rem] bg-dark rounded-r-3xl flex items-center justify-center"
        ></motion.div>
        {/* Image Section */}
        <div className="relative z-10 flex flex-row w-[32rem] lg:w-full md:w-[43rem] sm:w-[36rem] justify-between items-center ">
          <motion.div
            variants={fadeIn(direction, "easeIn", 0.75, 0.5)}
            className="h-[25rem] w-[12rem]  sm:h-[25rem] sm:w-[18rem] lg:h-[30rem] lg:w-[30rem]  rounded-3xl flex items-center justify-center"
          >
            <img
              src={image}
              alt={`${title} image`}
              className="h-full w-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Text Section */}
          <div className="absolute -right-6 md:relative lg:relative z-20 h-full w-2/3 sm:w-6/12 md:w-1/2 lg:w-1/2 flex flex-col justify-center items-start space-y-2 sm:space-y-5 md:space-y-7 lg:space-y-10 ">
            <motion.h2
              variants={fadeIn(direction, "easeIn", 0.85, 0.6)}
              className="text-lg sm:text-lg md:text-2xl lg:text-4xl font-bold text-gray-800"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "easeIn", 0.85, 0.75)}
              className=" lg:w-full  md:text-sm text-xs  lg:text-lg text-gray-600  leading-relaxed"
            >
              {description[0]}
            </motion.p>
            <motion.p
              variants={fadeIn("up", "easeIn", 1, 0.75)}
              className="  lg:w-full md:text-sm text-xs  lg:text-lg text-gray-600 leading-relaxed"
            >
              {description[1]}
            </motion.p>
            <motion.p
              variants={fadeIn("up", "easeIn", 1.15, 0.75)}
              className=" lg:w-full md:text-sm text-xs  lg:text-lg text-gray-600  leading-relaxed"
            >
              {description[2]}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const descriptions = {
  mission: [
    "Our mission is to empower individuals and organizations by fostering clarity, enhancing efficiency, and driving success. We aim to bring structure to workflows, ensuring every task aligns with a greater purpose.",
    "By emphasizing organization, we help build strong foundations where goals are clear and processes streamlined. Our focus is on creating systems that simplify operations and boost productivity.",
    "Through innovation, we enable seamless adaptation to evolving needs. Success, for us, is not just about milestones but about nurturing the journey, fostering collaboration, and celebrating progress.",
  ],
  purpose: [
    "Our purpose is rooted in the belief that technology should be accessible to everyone and used as a tool to create a positive impact. We strive to develop solutions that bridge gaps, create opportunities, and improve lives through innovation.",
    "We aim to serve individuals and organizations by providing scalable, efficient, and user-friendly systems that can empower them to achieve their full potential. By focusing on simplicity and usability, we ensure our solutions are practical and impactful.",
    "At the heart of our purpose is the commitment to sustainability and social responsibility. We are driven by the desire to create long-term value for communities, support ethical practices, and inspire others to make a meaningful difference in the world.",
  ],
  story: [
    "It all began with a spark of curiosity and a dream to make a difference. In a small garage, a group of friends came together, fueled by their passion for innovation and a shared belief that technology could transform lives. They spent endless nights brainstorming, experimenting, and building.",
    "Over time, their efforts bore fruit. The first product they launched was met with overwhelming support, validating their belief in the power of perseverance and teamwork. What began as a simple idea grew into a thriving enterprise, impacting lives and communities in ways they had only dreamed of.",
    "Today, that spirit of innovation and resilience continues to drive everything we do. Our story is a testament to the power of dreams, hard work, and the belief that together, we can achieve the extraordinary. As we look to the future, we remain committed to making a positive impact and inspiring others to write their own stories of success.",
  ],
};

const AboutUs = () => {
  return (
    <section className=" w-full overflow-hidden p-5 mt-14 md:mt-16 lg:mt-20 xl:mt-22 bg-blue-50 flex flex-col justify-center items-center space-y-10 md:space-y-12 lg:space-y-20 ">
      <div className="w-1/2 flex flex-row justify-center items-center space-x-2 md:space-x-5 lg:space-x-8">
        <motion.h1
          variants={fadeIn("right", "easeIn", 0.85, 0.4)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl"
        >
          Organize.
        </motion.h1>
        <motion.h1
          variants={fadeIn("up", "easeIn", 0.75, 0.25)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl"
        >
          Sytemize.
        </motion.h1>
        <motion.h1
          variants={fadeIn("left", "easeIn", 0.95, 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl"
        >
          Succeed.
        </motion.h1>
      </div>
      <>
        <AnimatedSection
          title="Our Mission"
          description={descriptions.mission}
          image={missionImage}
          direction="right"
        />
        <AnimatedSection
          title="Our Story"
          description={descriptions.story}
          image={storyImage}
          direction="left"
        />
        <AnimatedSection
          title="Our Purpose"
          description={descriptions.purpose}
          image={purposeImage}
          direction="right"
        />
      </>
    </section>
  );
};

export default AboutUs;
