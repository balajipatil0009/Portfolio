import {
  Circle,
  OrbitControls,
  RandomizedLight,
  Scroll,
  ScrollControls,
  SoftShadows,
  Text,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import RoboCanvas from "./Robo/RoboCanvas";
import Experance from "./Experance/Experance";

const texts = ["Balaji Patil", "Full Stack Web Dev.", "bbbb"];

function CardSection(props) {
  const scroll = useScroll();
  const [divBG, setDivBG] = useState(true);
  const [val, setVal] = useState(true);

  const txt = useRef();
  const div1 = useRef();

  useEffect(() => {}, [val]);
  useFrame(({ clock }) => {
    const scrollY = scroll.offset * 2;
    if (scrollY > 1) {
      setDivBG(false);
    } else if (scrollY > 0.6) {
      setDivBG(true);
      if (txt.current) txt.current.innerText = "Java Full Stack Dev.";
    } else if (scrollY > 0.1) {
      setDivBG(true);
      if (txt.current) txt.current.innerText = "MERN Stack Web Dev.";
    } else {
      setDivBG(true);
      if (txt.current) txt.current.innerText = "Balaji Patil";
    }
    const min = 1;
    const max = 70;
    const waveRange = (max - min) / 2;
    const waveCenter = (max + min) / 2;
    const waveRange2 = (max - min) / 2;
    const waveCenter2 = (max + min) / 2;
    const Radius = Math.sin(scrollY * 2 * Math.PI) * waveRange + waveCenter;
    const Radius2 =
      Math.sin(scrollY * Math.sin(2 * scrollY) * Math.PI) * waveRange2 +
      waveCenter2;
    const Radius3 =
      Math.sin(scrollY * Math.sin(4 * scrollY) * Math.PI) * waveRange2 +
      waveCenter2;
    const Radius4 =
      Math.sin(scrollY * Math.sin(6 * scrollY) * Math.PI) * waveRange2 +
      waveCenter2;
    if (txt.current && div1.current) {
      div1.current.style.borderTopLeftRadius = Radius + "%";
      div1.current.style.borderBottomLeftRadius = Radius2 + "%";
      div1.current.style.borderTopRightRadius = Radius3 + "%";
      div1.current.style.borderBottomRightRadius = Radius4 + "%";

      // fade effect
      txt.current.style.opacity = 1 - Math.sin(scrollY * 12);
    }
    setVal(scrollY);
  });
  return (
    <Scroll
      html
      style={{ pointerEvents: "none", position: "relative", zIndex: 0 }}
    >
      {divBG ? (
        <>
          <div className="w-[100vw] h-[100vh] flex justify-center items-center absolute z-0">
            <motion.div
              ref={div1}
              className="bg-red-300 w-[400px] h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div className="w-[98vw] h-[98vh] flex justify-center items-center absolute top-0">
            <h1 className="text-[9vw] text-gray-300 drop-shadow-xl" ref={txt}>
              Balaji Patil
            </h1>
          </div>
        </>
      ) : (
        <>
          <motion.div
            className="w-[100vw] md:w-[60vw]  h-[100vh] flex justify-center
          items-center"
          >
            <motion.div
              className=" bg-red-200 h-[80vh] w-[80%] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              style={{ borderRadius: "0px 15px 0px 0px" }}
            >
              <Experance />
            </motion.div>
          </motion.div>
        </>
      )}
    </Scroll>
  );
}

const Home = () => {
  return (
    <div className=" relative">
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          border: "1px solid red",
        }}
      >
        <ambientLight intensity={2} />
        <ScrollControls horizontal distance={6} pages={1}>
          {/* <CardSection /> */}
          <RoboCanvas />
          <CardSection />
        </ScrollControls>
        {/* <OrbitControls enableZoom={false} /> */}
        <RandomizedLight
          amount={8}
          radius={6}
          ambient={0.5}
          intensity={1}
          position={[-1.5, 2.5, -2.5]}
          bias={0.001}
        />
        <SoftShadows />
      </Canvas>
    </div>
  );
};

export default Home;
