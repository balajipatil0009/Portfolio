import { domAnimation, LazyMotion, useAnimate, motion } from "framer-motion";
import React from "react";

const openOne = {
  drop: {
    backgroundColor: "red",
    height: "10px",
    width: "10px",
    borderRadius: "100%",
    opacity: 0,
  },
  opened: {
    backgroundColor: "blue",
    opacity: 1,
    borderRadius: "2px",
    height: "100px",
    width: "100px",
  },
};

const Home = () => {
  return (
    <>
      <div style={{ height: "120vh" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          width: "200px",
        }}
      >
        <motion.div
          variants={openOne}
          initial="drop"
          whileInView="opened"
          transition={{ duration: 2 }}
        ></motion.div>
      </div>
    </>
  );
};

export default Home;
