import { ScrollControls, Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

const AllData = () => {
  return (
    <div className="border ">
      <motion.h1
        className="mt-[5vh] mr-[5vw] bg-red-300 shadow-md p-3 text-2xl font-bold"
        style={{ borderRadius: "0px 10px 10px 0px" }}
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Experance
      </motion.h1>
      <ul className="list-disc max-w-[90%]">
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 1 }}
        >
          1+ years of experience as a professional trainer for beginners in IT.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 1.3 }}
        >
          2+ years of experience as a MERN stack Developer.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 1.6 }}
        >
          2+ years of experience as a Freelancer.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 1.9 }}
        >
          As a freelancer, I have created multiple Full-stack web applications.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 2.1 }}
        >
          Worked with technologies such as PHP and ASP.NET on several projects.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 1, damping: 2, delay: 2.4 }}
        >
          Currently expanding my knowledge and skill set in technologies such as
          Spring Boot and Angular.
        </motion.li>
      </ul>
    </div>
  );
};

const Experance = () => {
  return <AllData />;
};

export default Experance;
