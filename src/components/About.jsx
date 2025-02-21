import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../contstants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center flex-col items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overivew</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] max-w-3xl leading-[22px] xs:text-[17px] xs:leading-[25px] sm:text-[17px] sm:leading-[30px]"
      >
        I'm a skilled software developer with expertise in HTML, CSS,
        JavaScript, TypeScript, and modern frameworks like React, Next.js,
        Node.js, and Express.js. I specialize in building dynamic and scalable
        web applications using MongoDB, Firebase, GSAP, and Tailwind CSS. A
        quick learner and problem-solver, I collaborate closely with clients to
        deliver efficient, user-friendly solutions tailored to real-world
        challenges. Let's work together to bring your vision to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
